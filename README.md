# John Williams Law Firm Website

A modern, responsive website for The Law Office of John Williams, P.A. built with React and deployable to AWS.

## Features

- **Modern Design**: Clean, professional layout with responsive design
- **Practice Areas**: Real Estate, Estate Planning, and Business Transactions
- **Attorney Profiles**: Detailed information about legal team
- **Contact Form**: Interactive contact form for client inquiries
- **Mobile Responsive**: Optimized for all device sizes
- **Fast Loading**: Optimized for performance and SEO

## Technology Stack

- **Frontend**: React 18 with React Router
- **Styling**: CSS3 with modern design principles
- **Deployment**: AWS S3 + CloudFront
- **Fonts**: Inter font family for professional typography

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- AWS CLI (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd john-williams-law-firm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment to AWS

### Quick Deployment

1. Configure AWS CLI with your credentials
2. Run the deployment script:
```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Deployment

See `aws-deployment.md` for detailed deployment instructions.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.js       # Navigation header
│   ├── Header.css      # Header styles
│   ├── Footer.js       # Site footer
│   └── Footer.css      # Footer styles
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── Home.css        # Homepage styles
│   ├── Attorneys.js    # Attorneys page
│   ├── Attorneys.css   # Attorneys styles
│   ├── Contact.js      # Contact page
│   └── Contact.css     # Contact styles
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## Customization

### Updating Content
- **Homepage**: Edit `src/pages/Home.js`
- **Attorney Info**: Edit `src/pages/Attorneys.js`
- **Contact Info**: Edit `src/pages/Contact.js`

### Styling
- Global styles: `src/index.css`
- Component styles: Individual CSS files in each component folder
- Color scheme: Update CSS custom properties in `src/index.css`

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.js`
3. Add navigation link in `src/components/Header.js`

## Performance Optimization

- **Code Splitting**: Implemented with React Router
- **Image Optimization**: Use WebP format for images
- **Caching**: Configured for CloudFront
- **Compression**: Gzip compression enabled

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags
- Structured data markup ready
- Mobile-friendly design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to The Law Office of John Williams, P.A.

## Support

For technical support or questions about the website, please contact the development team.
