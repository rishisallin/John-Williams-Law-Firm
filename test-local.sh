#!/bin/bash

# Test script for John Williams Law Firm website
echo "🧪 Testing John Williams Law Firm Website"
echo "=========================================="

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building the application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 To test locally, run:"
    echo "   npm start"
    echo ""
    echo "📁 Build files are ready in the 'build' directory"
    echo "🌐 You can serve them with:"
    echo "   npx serve -s build"
    echo ""
    echo "📋 Next steps for AWS deployment:"
    echo "   1. Configure AWS CLI"
    echo "   2. Run: ./deploy.sh"
    echo "   3. Update CloudFront distribution ID in deploy.sh"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
