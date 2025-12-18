#!/usr/bin/env node

const { build } = require('vite');

async function buildApp() {
  try {
    await build({
      root: process.cwd(),
      build: {
        outDir: 'dist'
      }
    });
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildApp();