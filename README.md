# Data Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, specifically designed to showcase data engineering skills, projects, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all device sizes (desktop, tablet, mobile)
- **Dark Mode**: Automatic dark/light mode support
- **Performance**: Built with Next.js 15 for optimal performance
- **TypeScript**: Fully typed for better development experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📋 Sections

- **Hero**: Eye-catching introduction with professional photo placeholder
- **About**: Personal background and core competencies with skill progress bars
- **Skills**: Comprehensive display of technical skills organized by category
- **Projects**: Showcase of data engineering projects with detailed descriptions
- **Experience**: Professional timeline with achievements and technologies
- **Contact**: Contact form and social media links

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS transitions and transforms

## 🚦 Getting Started

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd data-engineer-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📝 Customization

### Personal Information
Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Replace "Your Name" with your actual name
   - Update the professional description
   - Add your social media links

2. **About Section** (`src/components/About.tsx`):
   - Update the personal description
   - Modify skill levels and competencies
   - Update experience statistics

3. **Projects Section** (`src/components/Projects.tsx`):
   - Replace with your actual projects
   - Update project descriptions, technologies, and links
   - Add real project screenshots

4. **Experience Section** (`src/components/Experience.tsx`):
   - Add your work experience
   - Update education information
   - Modify achievements and responsibilities

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information (email, phone, location)
   - Add your social media profiles
   - Configure form submission (currently logs to console)

### Styling & Branding
- Modify colors in Tailwind CSS classes throughout components
- Update the gradient colors in the hero section
- Customize the navigation logo/branding

### SEO & Metadata
Update the metadata in `src/app/layout.tsx`:
- Title and description
- Keywords relevant to your specialization
- Open Graph and Twitter card information

## 📦 Build & Deployment

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

### Deployment Options

- **Vercel** (Recommended): Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Deploy directly from GitHub or upload the build folder
- **AWS S3 + CloudFront**: For custom cloud deployment
- **Docker**: Use the included Dockerfile for containerized deployment

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Data Engineering Focus

This portfolio is specifically designed for data engineers and includes:

- **Relevant Technologies**: Focus on big data, cloud platforms, and data pipeline tools
- **Project Examples**: Real-world data engineering scenarios and solutions
- **Skill Categories**: Organized by data engineering domains (storage, processing, cloud, etc.)
- **Professional Timeline**: Emphasis on data-related roles and achievements

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Font: [Geist](https://vercel.com/font) by Vercel

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
