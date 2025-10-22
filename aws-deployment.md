# AWS Deployment Guide for John Williams Law Firm Website

## Prerequisites
- AWS CLI configured with appropriate credentials
- Node.js and npm installed
- AWS account with S3 and CloudFront access

## Deployment Steps

### 1. Build the React Application
```bash
npm install
npm run build
```

### 2. Create S3 Bucket
```bash
# Create a unique bucket name (replace with your preferred name)
aws s3 mb s3://john-williams-law-firm-website

# Enable static website hosting
aws s3 website s3://john-williams-law-firm-website --index-document index.html --error-document index.html
```

### 3. Upload Files to S3
```bash
# Upload the build files
aws s3 sync build/ s3://john-williams-law-firm-website --delete

# Set proper permissions for public read
aws s3api put-bucket-policy --bucket john-williams-law-firm-website --policy '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::john-williams-law-firm-website/*"
    }
  ]
}'
```

### 4. Create CloudFront Distribution (Optional but Recommended)
1. Go to CloudFront in AWS Console
2. Create a new distribution
3. Set origin to your S3 bucket
4. Configure caching behaviors
5. Set up custom domain (optional)

### 5. Custom Domain Setup (Optional)
1. Purchase domain through Route 53 or external registrar
2. Create hosted zone in Route 53
3. Create SSL certificate in AWS Certificate Manager
4. Configure CloudFront with custom domain and SSL

## Environment Variables
Create a `.env` file for any environment-specific configurations:
```
REACT_APP_SITE_URL=https://your-domain.com
```

## Automated Deployment Script
Create `deploy.sh` for easy deployment:
```bash
#!/bin/bash
npm run build
aws s3 sync build/ s3://john-williams-law-firm-website --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
echo "Deployment complete!"
```

## Cost Optimization
- Use S3 Standard-IA for infrequently accessed files
- Configure CloudFront caching for better performance
- Set up CloudWatch monitoring for usage tracking

## Security Considerations
- Enable S3 bucket versioning
- Configure CloudFront with security headers
- Use HTTPS only
- Set up proper CORS policies if needed
