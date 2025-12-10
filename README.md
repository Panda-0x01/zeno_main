# Zeno Landing Page

A modern, responsive landing page for Zeno - Local AI Desktop Assistant built with React and Vite.

## 🚀 Features

- **Modern React 18** with hooks and functional components
- **Vite** for fast development and optimized builds
- **Responsive Design** that works on all devices
- **SEO Optimized** with meta tags and Open Graph support
- **Performance Optimized** with code splitting and lazy loading
- **Production Ready** with error boundaries and monitoring
- **CI/CD Pipeline** with GitHub Actions
- **Docker Support** for containerized deployment

## 📦 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS-in-JS with styled-jsx
- **Icons**: Lucide React
- **Linting**: ESLint
- **Deployment**: Netlify, Vercel, Docker

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd zeno-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run clean` - Clean build directory

## 🚀 Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy!

### Docker

```bash
# Build Docker image
docker build -t zeno-landing .

# Run container
docker run -p 80:80 zeno-landing
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
VITE_APP_TITLE=Zeno - Local AI Desktop Assistant
VITE_APP_DESCRIPTION=Your personal AI assistant running locally
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

### Build Configuration

The project uses Vite with optimized settings for production:

- **Code Splitting**: Vendor and icon chunks
- **Minification**: Terser for optimal compression
- **Source Maps**: Disabled in production
- **Asset Optimization**: Automatic optimization

## 📊 Performance

The application is optimized for Core Web Vitals:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 🔒 Security

- **CSP Headers**: Content Security Policy implemented
- **XSS Protection**: Cross-site scripting prevention
- **CSRF Protection**: Cross-site request forgery prevention
- **Secure Headers**: X-Frame-Options, X-Content-Type-Options

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build and test
npm run build
npm run preview
```

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For support and questions, please open an issue in the repository.