# Book Tracking Web Application

A mobile-optimized static web application for tracking books you've read and discovering new recommendations.

## Overview

Single-file HTML/CSS/JavaScript application that runs entirely in the browser with no backend required. Data is stored locally using browser LocalStorage.

**Live Version**: v1.3.2

## Features

### 1. Book Search
- Search books by author using Open Library API
- Series grouping - books in the same series are grouped together
- Books already in your library are filtered out from search results
- Results sorted by publication date (newest first)
- Cover images displayed for visual browsing
- Click any book to see details and purchase links

### 2. Personal Library
- Track all books you've read
- **Author grouping** - books organized by author with collapsible sections
- Click on author header to expand/collapse their books
- Shows book count per author
- Books sorted by publication date within each author group (newest first)
- Click any book to view full details including description
- Remove books from library
- Persistent storage across browser sessions

### 3. Smart Recommendations
Enhanced three-strategy recommendation engine with quality filters:
- **Favorite authors (Priority 1)**: More books from authors you love (up to 40 books, 8 per author, 5 authors)
- **Genre-based (Priority 2)**: Popular books in your top genres (up to 40 books, 10 per genre, 4 genres)
- **Author discovery (Priority 3)**: Books from new authors in your favorite genres (up to 24 books, 8 per author, 3 genres)

**Quality Filters:**
- English-only books
- Books with descriptions/summaries
- Cover images required
- Duplicate filtering across strategies

Maximum 18 recommendations displayed after validation. **Refresh button** available to regenerate recommendations on demand.

### 4. Book Details Modal
- Full book information with **guaranteed description/synopsis**
- Descriptions pre-fetched for recommendations (instant display)
- Cover image
- Publication year and publisher
- Genres and topics
- Direct purchase links to:
  - Amazon search
  - Bookshop.org (supports independent bookstores)
  - Google Books

## Technical Implementation

### Architecture
**Single-file application**: `index.html` contains all HTML, CSS, and JavaScript

**No build process required**: Open the file in any modern web browser

### Data Storage
- **LocalStorage**: All data stored as JSON in browser's localStorage
- **Key**: `myBooks`
- **Format**: Array of book objects with properties:
  - `title`: Book title
  - `author`: Author name
  - `year`: Publication year
  - `cover`: Cover image URL
  - `isbn`: ISBN numbers array
  - `key`: Open Library key

### External APIs

#### Open Library API
Base URL: `https://openlibrary.org`

**Author Search**:
```
GET /search/authors.json?q={author_name}
```

**Books by Author**:
```
GET /authors/{author_key}/works.json?limit=50
```

**Cover Images**:
```
https://covers.openlibrary.org/b/id/{cover_id}-M.jpg
```

### Key Algorithms

#### 1. Series Grouping
Detects book series using multiple strategies:
- Title pattern matching: Looks for "Series", "Cycle", "Trilogy", "Saga" in titles
- Subject field checking: Searches subject array for series-related terms
- Series field: Uses dedicated series field from API
- Groups books with same series name under expandable sections

#### 2. Genre Filtering (Critical for Recommendations)
Prevents irrelevant recommendations by filtering out generic subjects:

**Blacklisted generic terms** (20+ terms):
- fiction, literature, books, reading
- accessible book, large type books
- translations, classic, classics
- bestseller, award winners
- english/american/british literature
- contemporary, modern, popular
- collections, anthologies

**Process**:
1. Extract all subjects from user's library
2. Filter out generic terms
3. Count frequency of specific genres
4. Use top 3 specific genres for recommendations
5. Double-validate: recommended books must contain the specific genre in their subjects

#### 3. Recommendation Scoring
Books scored by:
- **Edition count**: Primary popularity signal (more editions = more popular)
- **Ratings count**: Secondary signal (more ratings = more read)
- **Year filter**: Books from 1980 onwards (excludes very old books unless classics)
- **Availability**: Must have cover image and valid metadata

**Genre-based**: Top-ranked books in user's top 3 genres (3 per genre, max 9)
**New authors**: Highly-rated books from authors not in library (2 per author, max 6)
**Favorite authors**: Additional books from authors already in library (2 per author, max 6)

#### 4. Book Filtering
Search results filtered to remove:
- Books already in user's library (matched by title + author)
- Books with insufficient metadata
- Books without cover images

### Mobile Optimization

**iPhone-specific features**:
- Viewport meta tag: `width=device-width, initial-scale=1, maximum-scale=1`
- Touch-optimized tap targets (minimum 44px)
- No hover states (uses click/tap only)
- Responsive grid layout (1 column on mobile, 2-3 on desktop)

**Responsive breakpoint**: 600px
- Desktop: Multi-column grids, absolute positioned version badge
- Mobile: Single column, stacked layout, block version badge

### UI Components

#### Tab System
Three tabs with icon indicators:
- 🔍 Search: Book search interface
- 📚 Library: User's book collection
- ⭐ Recommendations: Personalized suggestions

#### Author Grouping (Library)
Collapsible author sections:
- Author name with book count
- Click to expand/collapse books for each author
- Visual toggle indicator (▼/▲)
- Gradient background styling
- Hover effects for better UX

#### Modal Dialog
Reusable modal for book details:
- Overlay with click-to-close
- Book cover and metadata
- **Async loading** - shows loading state while fetching description
- Book description/synopsis (when available)
- Genres and topics
- Purchase links section
- Responsive sizing with scrollable content

### Styling

**Color scheme**:
- Primary: `#2c3e50` (dark blue-gray)
- Accent: `#3498db` (bright blue)
- Success: `#27ae60` (green)
- Background gradients for visual interest

**Typography**:
- System fonts: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`
- Responsive sizing with em/rem units

**Grid layouts**:
- CSS Grid for book displays
- Auto-fit columns with minmax for responsiveness
- Gap spacing for visual separation

## Code Structure

### Global State
```javascript
let myBooks = [];           // User's library
let lastSearchResults = []; // Cache of last search for filtering
```

### Main Functions

**Data Management**:
- `loadBooks()`: Load from localStorage
- `saveBooks()`: Save to localStorage
- `addBook(book)`: Add to library and update UI
- `removeBook(index)`: Remove from library

**Search**:
- `searchBooks()`: Orchestrate author search
- `searchAuthor(query)`: Find author via API
- `fetchBooksByAuthor(authorKey)`: Get author's works
- `displaySearchResults(books)`: Render search results with series grouping

**Recommendations**:
- `generateRecommendations()`: Main recommendation engine
- `scoreBook(book, avgYear)`: Calculate book score
- Genre extraction and frequency analysis
- Multi-strategy selection (genre, new authors, favorites)

**UI**:
- `showTab(tabName)`: Tab switching
- `displayLibrary()`: Render library with sorting
- `showBookDetails(book, source)`: Display modal with book info

### Event Handlers
- Tab clicks: Switch between Search/Library/Recommendations
- Search form submit: Trigger book search
- Add/Remove buttons: Modify library
- Book clicks: Show details modal
- Modal close: Click overlay or X button
- Series expand/collapse: Toggle grouped books

## Deployment

### GitHub Pages Setup
1. Push `index.html` to repository
2. Go to repository Settings → Pages
3. Select branch to deploy from
4. Save and wait for build (1-2 minutes)

### Version Tracking
Version number displayed in header (desktop: top-right, mobile: below title)
- Increment version after significant changes
- Format: `vMAJOR.MINOR.PATCH` (e.g., v1.0.0)
- Located in `<span class="version">` inside h1

## Browser Compatibility

**Requires**:
- LocalStorage support
- Fetch API
- ES6 JavaScript (arrow functions, template literals, const/let)
- CSS Grid
- Modern CSS (flexbox, calc, vh units)

**Tested on**:
- Safari iOS 14+
- Chrome/Safari desktop
- Firefox desktop

## Limitations

- No offline mode (requires internet for API calls)
- No book ratings/notes (future enhancement)
- No data export/import (future enhancement)
- No multi-device sync (local storage only)
- Open Library API rate limits apply
- Search limited to 50 books per author

## Future Enhancements

Potential improvements:
- Reading progress tracking
- Book ratings and reviews
- Tags and custom categories
- Data export to JSON/CSV
- Cloud sync across devices
- Goodreads integration
- ISBN barcode scanner
- Reading statistics and charts

## Quick Start

1. Open `index.html` in a modern web browser
2. Search for an author (e.g., "John Sandford")
3. Click "Add to Library" on books you've read
4. Switch to Library tab to see your collection
5. Check Recommendations tab for personalized suggestions

## Files

- `index.html` - Complete application (HTML + CSS + JavaScript)
- `README.md` - This documentation

## License

Personal project - use freely
