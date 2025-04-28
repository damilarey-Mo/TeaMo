# TeaMo IT Solutions Website

A modern, responsive website for TeaMo IT Solutions, showcasing their services and expertise in tech support and web development.

## Features

- 🎨 Modern, clean design with custom animations
- 📱 Fully responsive across all devices
- ⚡ Optimized for performance and SEO
- 🎯 Clear call-to-actions and user flow
- 🔍 SEO-optimized content and structure
- 🎭 Smooth animations and transitions
- 📝 Contact form and multiple contact options
- 🌐 Social media integration

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons
- React Intersection Observer

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/teamo.git
cd teamo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
teamo/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── lib/
├── public/
└── package.json
```

## Customization

### Colors

The color scheme can be modified in `src/app/globals.css`:

```css
:root {
  --primary: #003366;
  --secondary: #00C8B3;
  --accent: #FFFFFF;
}
```

### Fonts

Fonts are configured in `src/app/layout.tsx`:

```typescript
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});
```

## Deployment

The site can be deployed to Vercel with minimal configuration:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

TeaMo IT Solutions
- Website: [teamo.ng](https://teamo.ng)
- Email: info@teamo.ng
- Phone: +234 123 456 7890
