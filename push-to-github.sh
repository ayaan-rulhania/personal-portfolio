#!/bin/bash

# Script to push personal portfolio website to GitHub
# Repository: ayaan-rulhania/personal-portfolio

cd /Users/arulhania/Coding/experiment

# Initialize git if not already initialized
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
fi

# Add all files
echo "Adding files..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Initial commit: Personal portfolio website with kinetic typography and glassmorphic design"

# Remove existing origin if present
git remote remove origin 2>/dev/null

# Add new remote
echo "Setting remote origin..."
git remote add origin https://github.com/ayaan-rulhania/personal-portfolio.git

# Set branch to main
git branch -M main

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "Done! Your code has been pushed to https://github.com/ayaan-rulhania/personal-portfolio"
