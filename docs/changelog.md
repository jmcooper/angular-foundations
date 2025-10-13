# Changelog

All notable changes to Joe's Robot Shop project will be documented in this file.

## [Unreleased] - 2025-10-13

### Added

- **New CatalogComponent**: Created a catalog component to display robot products
  - `src/app/catalog/catalog.component.ts` - Component logic with 'bot-catalog' selector
  - `src/app/catalog/catalog.component.html` - Template structure for product listing
  - `src/app/catalog/catalog.component.css` - Styling for catalog layout with margins and borders
  - `src/app/catalog/catalog.component.spec.ts` - Unit tests for catalog component

- **New ProductDetailsComponent**: Created a product details component for individual robot parts
  - `src/app/product-details/product-details.component.ts` - Component logic with 'bot-product-details' selector
  - `src/app/product-details/product-details.component.html` - Template for product information display
  - `src/app/product-details/product-details.component.css` - Comprehensive styling for product layout, pricing, and buttons
  - `src/app/product-details/product-details.component.spec.ts` - Unit tests for product details component

### Changed

- **App Configuration**: Updated Angular project configuration
  - `angular.json` - Changed component prefix from 'app' to 'bot' to match robot theme
  - `angular.json` - Added analytics configuration

- **Main App Component**: Integrated catalog functionality
  - `src/app/app.ts` - Added CatalogComponent import and integration
  - `src/app/app.html` - Replaced "Hello, world!" with `<bot-catalog />` component

- **Product Content**: Updated product information to match design specifications
  - Product name: "Friendly Robot" → "Friendly Bot"
  - Product description: Enhanced with detailed description "A friendly robot head with two eyes and a smile -- great for domestic use."
  - Added part type specification: "Part Type: Head"
  - Price updated: "$99.99" → "$945.00"
  - Button styling: Added "cta" CSS class for call-to-action styling

- **Package Dependencies**: Updated package-lock.json with peer dependencies and package metadata

### Technical Details

- **Component Architecture**: Implemented hierarchical component structure:
  - App Component → Catalog Component → Product Details Component
- **Styling**: Added responsive design with flexbox layout for product display
- **Images**: Integrated product image support with path `/images/robot-parts/head-friendly.png`
- **CSS Classes**: Implemented styling for product cards, pricing sections, and call-to-action buttons

### File Structure Changes

```text
New files added:
├── src/app/catalog/
│   ├── catalog.component.ts
│   ├── catalog.component.html
│   ├── catalog.component.css
│   └── catalog.component.spec.ts
└── src/app/product-details/
    ├── product-details.component.ts
    ├── product-details.component.html
    ├── product-details.component.css
    └── product-details.component.spec.ts

Modified files:
├── angular.json (prefix and analytics config)
├── package-lock.json (dependency updates)
├── src/app/app.ts (component integration)
└── src/app/app.html (template update)
```

### Notes

- All components follow Angular standalone component pattern
- Styling includes hover effects and responsive design considerations
- Component selectors use 'bot-' prefix to maintain consistent naming convention
- Unit tests are included for all new components