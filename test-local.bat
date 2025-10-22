@echo off
echo 🧪 Testing John Williams Law Firm Website
echo ==========================================

echo 📦 Installing dependencies...
call npm install

echo 🔨 Building the application...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo.
    echo 🚀 To test locally, run:
    echo    npm start
    echo.
    echo 📁 Build files are ready in the 'build' directory
    echo 🌐 You can serve them with:
    echo    npx serve -s build
    echo.
    echo 📋 Next steps for AWS deployment:
    echo    1. Configure AWS CLI
    echo    2. Run: deploy.bat
    echo    3. Update CloudFront distribution ID in deploy.bat
) else (
    echo ❌ Build failed. Please check the errors above.
    exit /b 1
)
