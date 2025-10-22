#!/bin/bash

# John Williams Law Firm - AWS Deployment Script
# Make sure AWS CLI is configured and you have appropriate permissions

echo "🏗️  Building React application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "📦 Uploading to S3..."
aws s3 sync build/ s3://john-williams-law-firm-website --delete

if [ $? -ne 0 ]; then
    echo "❌ S3 upload failed. Please check your AWS configuration."
    exit 1
fi

echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "✅ Deployment complete!"
echo "🌐 Website URL: http://john-williams-law-firm-website.s3-website-us-east-1.amazonaws.com"
