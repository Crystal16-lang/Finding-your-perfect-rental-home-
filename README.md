# HouseHunt 🏡

A beautiful, modern web application for finding the perfect rental home. Built with React, TypeScript, and Tailwind CSS for a seamless house hunting experience.

## ✨ Features

- **Smart Property Search** - Advanced search with filters for price, location, bedrooms, amenities
- **Interactive Property Listings** - Beautiful property cards with high-quality images
- **Detailed Property Views** - Comprehensive property information with photo galleries
- **Location-Based Search** - Find properties by neighborhood, city, or proximity
- **Favorite Properties** - Save and manage your favorite listings
- **Advanced Filtering** - Filter by price range, property type, amenities, and more
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, intuitive interface with smooth animations

## 🚀 Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Code Quality**: ESLint, TypeScript strict mode

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/househunt.git
cd househunt
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components
│   ├── layout/          # Layout components
│   └── property/        # Property-specific components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── data/                # Mock data and constants
└── styles/              # Global styles
```

## 🎨 Design Philosophy

HouseHunt follows modern design principles:

- **Clean & Minimal** - Focused on content with purposeful white space
- **Accessibility First** - WCAG compliant with proper contrast ratios
- **Mobile-First** - Responsive design that works on all devices
- **Performance** - Optimized images and lazy loading
- **User-Centric** - Intuitive navigation and clear call-to-actions

## 🔧 Key Components

### PropertyCard
Displays property information in a beautiful, interactive card format with:
- High-quality property images
- Key details (price, bedrooms, bathrooms, size)
- Favorite functionality
- Hover animations

### SearchFilters
Advanced filtering system with:
- Price range slider
- Property type selection
- Amenity checkboxes
- Location search

### PropertyGallery
Interactive photo gallery with:
- Thumbnail navigation
- Full-screen view
- Smooth transitions

## 🌟 Features in Detail

### Search & Discovery
- Real-time search with debounced input
- Autocomplete suggestions
- Map integration for location-based search
- Saved searches

### Property Management
- Detailed property information
- Photo galleries with zoom functionality
- Virtual tour integration
- Contact property managers

### User Experience
- Smooth page transitions
- Loading states and skeletons
- Error handling with user-friendly messages
- Progressive web app features

## 🚧 Roadmap

- [ ] User authentication and profiles
- [ ] Advanced map integration
- [ ] Virtual tour embedding
- [ ] Property comparison tool
- [ ] Rental application system
- [ ] Real-time chat with property managers
- [ ] Push notifications for new listings
- [ ] Advanced analytics and insights

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern real estate platforms
- Icons provided by Lucide React
- Built with modern web technologies

---

**HouseHunt** - Find your perfect rental home with ease and style. 🏡✨