# Planning Guide

A Wikipedia-style encyclopedia page clone for Additive synthesis with interactive hover previews for linked articles.

**Experience Qualities**:
1. **Scholarly** - Clean, information-focused design that prioritizes readability and knowledge sharing
2. **Interactive** - Engaging hover previews that provide contextual information without navigation
3. **Familiar** - Wikipedia-like interface that users immediately recognize and trust

**Complexity Level**: Content Showcase (information-focused)
  - Primary focus is presenting structured educational content with enhanced interactivity through hover previews

## Essential Features

**Article Content Display**
- Functionality: Render the complete Additive synthesis Wikipedia article with proper formatting
- Purpose: Provide comprehensive information about additive synthesis in an accessible format
- Trigger: Page load
- Progression: Load article → Display formatted content → Enable interactive elements
- Success criteria: All text, links, and formatting render correctly matching Wikipedia's style

**Interactive Link Previews**
- Functionality: Show contextual preview cards when hovering over article links, specifically the Fast Fourier transform link
- Purpose: Allow users to get additional context without leaving the current article
- Trigger: Mouse hover over linked text
- Progression: Hover link → Delay 300ms → Show preview card → Display related content → Hide on mouse leave
- Success criteria: Preview appears smoothly, contains relevant information, and doesn't interfere with reading

**Wikipedia-style Navigation**
- Functionality: Sidebar navigation, article tabs, and search interface
- Purpose: Provide familiar Wikipedia interface patterns
- Trigger: User interaction with navigation elements
- Progression: Click navigation → Highlight active state → Visual feedback
- Success criteria: Navigation elements respond appropriately and maintain visual consistency

## Edge Case Handling

- **Mobile hover**: Touch devices show preview on tap instead of hover
- **Slow connections**: Preview content loads gracefully with skeleton states
- **Long content**: Preview cards have maximum height with scrollable content
- **Multiple rapid hovers**: Debounced preview loading prevents performance issues
- **Keyboard navigation**: Tab focus shows preview cards for accessibility

## Design Direction

The design should feel authoritative, clean, and scholarly like Wikipedia - prioritizing content readability with subtle interactive enhancements that feel native to the encyclopedia experience.

## Color Selection

Complementary (opposite colors) - Using Wikipedia's traditional blue links against neutral backgrounds to maintain familiarity while adding subtle interactive elements.

- **Primary Color**: Wikipedia Blue (oklch(0.45 0.15 240)) - Links and interactive elements that communicate trustworthy information access
- **Secondary Colors**: Neutral grays (oklch(0.95 0 0)) for backgrounds and borders that don't compete with content
- **Accent Color**: Hover Blue (oklch(0.35 0.18 240)) - Slightly darker blue for hover states and active elements
- **Foreground/Background Pairings**: 
  - Background (White oklch(1 0 0)): Dark text (oklch(0.15 0 0)) - Ratio 13.1:1 ✓
  - Primary (Wikipedia Blue oklch(0.45 0.15 240)): White text (oklch(1 0 0)) - Ratio 4.8:1 ✓
  - Card backgrounds (Light Gray oklch(0.98 0 0)): Dark text (oklch(0.15 0 0)) - Ratio 12.8:1 ✓

## Font Selection

Typography should convey scholarly authority and excellent readability, using familiar web fonts that match Wikipedia's approach.

- **Typographic Hierarchy**:
  - H1 (Article Title): Georgia Bold/32px/tight letter spacing
  - H2 (Section Headers): Georgia Bold/24px/normal letter spacing  
  - H3 (Subsections): Georgia Bold/20px/normal letter spacing
  - Body Text: Georgia Regular/16px/1.6 line height
  - Links: Georgia Regular/16px/underlined/blue color
  - Preview Text: Georgia Regular/14px/1.5 line height

## Animations

Subtle, purposeful animations that enhance the scholarly reading experience without distraction - hover previews should feel like natural extensions of the text.

- **Purposeful Meaning**: Gentle fade-ins for previews communicate the revelation of additional knowledge, while smooth transitions maintain reading flow
- **Hierarchy of Movement**: Preview cards have the highest animation priority, with subtle link underline animations as secondary focus

## Component Selection

- **Components**: Card for preview overlays, HoverCard from shadcn for positioning logic, custom WikipediaLink component for enhanced link behavior
- **Customizations**: Custom preview cards with Wikipedia-style formatting, bordered layouts matching encyclopedia design patterns
- **States**: Links have distinct default/hover/focus states with underline animations, preview cards have enter/exit animations
- **Icon Selection**: Minimal icons - external link indicators and navigation arrows from Phosphor icons
- **Spacing**: Consistent 16px base spacing following Wikipedia's generous whitespace patterns
- **Mobile**: Preview cards transform to bottom sheets on mobile, touch-friendly navigation with larger hit areas