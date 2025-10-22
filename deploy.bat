@echo off
REM John Williams Law Firm - AWS Deployment Script for Windows
REM Make sure AWS CLI is configured and you have appropriate permissions

echo 🏗️  Building React application...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed. Please fix errors and try again.
    exit /b 1
)

echo 📦 Uploading to S3...
aws s3 sync build/ s3://john-williams-law-firm-website --delete

if %errorlevel% neq 0 (
    echo ❌ S3 upload failed. Please check your AWS configuration.
    exit /b 1
)

echo 🔄 Invalidating CloudFront cache...
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo ✅ Deployment complete!
echo 🌐 Website URL: http://john-williams-law-firm-website.s3-website-us-east-1.amazonaws.com
