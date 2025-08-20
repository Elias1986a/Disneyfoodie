# Disney Halloween Foodie Checklist 2025

A Progressive Web App (PWA) for tracking Disney's Halloween seasonal food offerings at Disneyland Resort.

## Features

- 🎃 **Interactive Checklist** - Check off items as you try them
- 🔍 **Search & Filter** - Find specific foods or browse by location
- 📱 **Mobile Optimized** - Responsive design works great on phones and tablets
- 🌐 **Offline Support** - Works without internet connection via Service Worker
- 💾 **Auto-Save Progress** - Your progress is automatically saved to device storage
- ↩️ **Undo Functionality** - Accidentally removed something? No problem!
- 🎯 **Location Breakdown** - Track progress by park and location
- ⏰ **Limited Time Alerts** - See when seasonal items end
- 🎨 **Halloween Theme** - Spooky animated interface with floating particles

## Installation

### As a Web App
1. Visit the website in your browser
2. Look for "Add to Home Screen" or "Install App" prompt
3. Follow your browser's installation instructions

### Local Development
1. Clone or download the files
2. Serve from a local web server (required for Service Worker)
3. Open in your browser

## File Structure

```
disney-foodie/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # Main JavaScript functionality
├── sw.js              # Service Worker for offline support
├── manifest.json      # Web App Manifest for PWA features
└── README.md          # This file
```

## Browser Support

- Chrome 67+ (recommended)
- Firefox 63+
- Safari 11.1+
- Edge 79+

## PWA Features

- **Installable**: Can be installed as a native app
- **Offline First**: Works without internet connection
- **Responsive**: Optimized for all screen sizes
- **Fast**: Cached resources for quick loading
- **Engaging**: Push notifications ready (if implemented)

## Data Storage

All data is stored locally on your device using:
- `localStorage` for checklist progress
- `localStorage` for user preferences
- Service Worker cache for offline functionality

No data is transmitted to external servers.

## Customization

### Adding New Items
Edit the `foodieData` object in `script.js` to add new locations or food items.

### Styling
Modify `styles.css` to change colors, animations, or layout.

### PWA Settings
Update `manifest.json` to change app name, colors, or icons.

## Halloween 2025 Locations

- **Disneyland Park** - Traditional park with seasonal treats
- **Disney California Adventure** - Modern park with unique offerings  
- **Hotels** - Resort hotel restaurants and bars
- **Downtown Disney** - Shopping and dining district
- **Halloween Candy** - Special seasonal candy offerings

## Credits

Built with modern web technologies:
- HTML5, CSS3, JavaScript ES6+
- Tailwind CSS for utility styles
- Web APIs (Service Worker, Web App Manifest)
- Custom Halloween-themed animations and effects

---

*Have a magical and spooky foodie adventure! 🎃✨*