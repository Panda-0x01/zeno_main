#!/bin/bash
set -e

echo "Starting build process..."

# Make sure node_modules/.bin is executable
chmod +x node_modules/.bin/* 2>/dev/null || true

# Run the build
npx vite build

echo "Build completed successfully!"