#!/bin/bash

# UrbanTrim Deployment Script
# This script helps deploy the UrbanTrim website to various platforms

echo "🏪 UrbanTrim Deployment Script"
echo "=============================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi

# Show deployment options
echo ""
echo "🚀 Choose deployment option:"
echo "1. Deploy to GitHub Pages"
echo "2. Show Netlify instructions"
echo "3. Show Vercel instructions"
echo "4. Exit"

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "🚀 Deploying to GitHub Pages..."
        npm run deploy
        echo "✅ Deployment to GitHub Pages completed!"
        echo "📍 Your site should be available at: https://yourusername.github.io/urbantrim-website"
        ;;
    2)
        echo "🌐 Netlify Deployment Instructions:"
        echo "1. Go to https://netlify.com"
        echo "2. Sign up/in with GitHub"
        echo "3. Click 'New site from Git'"
        echo "4. Choose your repository"
        echo "5. Set build command: npm run build"
        echo "6. Set publish directory: dist"
        echo "7. Click 'Deploy site'"
        ;;
    3)
        echo "⚡ Vercel Deployment Instructions:"
        echo "1. Go to https://vercel.com"
        echo "2. Sign up/in with GitHub"
        echo "3. Click 'New Project'"
        echo "4. Import your repository"
        echo "5. Settings are auto-detected"
        echo "6. Click 'Deploy'"
        ;;
    4)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac
