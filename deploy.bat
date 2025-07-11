@echo off
echo 🏪 UrbanTrim Deployment Script
echo ==============================

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this script from the project root.
    pause
    exit /b 1
)

REM Build the project
echo 🔨 Building the project...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed! Please fix the errors and try again.
    pause
    exit /b 1
)

echo ✅ Build successful!
echo.

REM Show deployment options
echo 🚀 Choose deployment option:
echo 1. Deploy to GitHub Pages
echo 2. Show Netlify instructions
echo 3. Show Vercel instructions
echo 4. Exit

set /p choice=Enter your choice (1-4): 

if "%choice%"=="1" (
    echo 🚀 Deploying to GitHub Pages...
    call npm run deploy
    echo ✅ Deployment to GitHub Pages completed!
    echo 📍 Your site should be available at: https://yourusername.github.io/urbantrim-website
) else if "%choice%"=="2" (
    echo 🌐 Netlify Deployment Instructions:
    echo 1. Go to https://netlify.com
    echo 2. Sign up/in with GitHub
    echo 3. Click 'New site from Git'
    echo 4. Choose your repository
    echo 5. Set build command: npm run build
    echo 6. Set publish directory: dist
    echo 7. Click 'Deploy site'
) else if "%choice%"=="3" (
    echo ⚡ Vercel Deployment Instructions:
    echo 1. Go to https://vercel.com
    echo 2. Sign up/in with GitHub
    echo 3. Click 'New Project'
    echo 4. Import your repository
    echo 5. Settings are auto-detected
    echo 6. Click 'Deploy'
) else if "%choice%"=="4" (
    echo 👋 Goodbye!
    exit /b 0
) else (
    echo ❌ Invalid choice. Please run the script again.
    pause
    exit /b 1
)

pause
