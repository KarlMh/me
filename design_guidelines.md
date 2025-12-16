# Design Guidelines: Interactive Portfolio for Karl Mehanna

## Design Approach

**Selected Approach:** Reference-Based with Modern Tech Portfolio Inspiration
- Primary references: Linear (typography/spacing), Brittany Chiang's portfolio (structure), Bruno Simon (interactivity)
- Aesthetic: Clean, technical, interactive with purposeful animations
- Goal: Showcase engineering expertise while maintaining visual appeal and personality

## Typography System

**Font Families** (Google Fonts):
- Primary: 'Inter' - headings, UI elements, navigation
- Secondary: 'JetBrains Mono' - code snippets, technical details, certifications
- Accent: 'Space Grotesk' - hero headline, section titles for personality

**Hierarchy:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl, font-bold, Space Grotesk
- Section Headings: text-4xl md:text-5xl, font-bold, Inter
- Project Titles: text-2xl md:text-3xl, font-semibold, Inter
- Body Text: text-base md:text-lg, font-normal, Inter, leading-relaxed
- Certification/Tech Labels: text-sm, font-mono, JetBrains Mono, tracking-wide

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 24
- Component gaps: gap-4, gap-8
- Section padding: py-16 md:py-24 lg:py-32
- Container margins: px-4 md:px-8 lg:px-16
- Card padding: p-8

**Grid Structure:**
- Container: max-w-7xl mx-auto
- Project Grid: grid-cols-1 lg:grid-cols-2, gap-8
- Skills Grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4, gap-4
- Timeline: Single column with connecting line decoration

## Core Sections & Components

### 1. Hero Section (100vh)
**Layout:** Full viewport height with centered content
- Large heading with animated typewriter effect for name
- Subtitle: "Computer Engineering Student | AI & ML Enthusiast"
- Profile photo: Circular, 200px diameter, subtle border, positioned to side
- Scroll indicator: Animated down arrow at bottom
- CTA buttons: "View Projects" (primary), "Download CV" (secondary) with backdrop-blur

### 2. Featured Project Showcase - Aubay Sign Language Translation
**Layout:** Full-width section with asymmetric grid
- Left: Large demonstration image/video placeholder (60% width)
- Right: Project details (40% width)
  - Badge: "Featured Project" in mono font
  - Title: Large, bold heading
  - Description: 2-3 paragraphs explaining ML/CV approach
  - Tech stack: Pills layout with JetBrains Mono
  - Links: GitHub, Demo (if applicable)
- Interactive element: Hover reveals technical details overlay

### 3. Project Grid
**Layout:** 2-column grid on desktop, 1-column mobile
- Project cards with:
  - Thumbnail image (16:9 aspect ratio)
  - Title and brief description
  - Tech tags as pills
  - Hover effect: Lift with shadow increase
- Minimum 3-4 projects displayed

### 4. Skills & Certifications
**Layout:** Hybrid grid + timeline
- Skills Matrix: 4-column grid of skill cards
  - Icon (Heroicons via CDN)
  - Skill name
  - Proficiency indicator (visual bar or text)
- Certifications Timeline: Vertical list with:
  - Logo placeholder
  - Certification name in bold
  - Issuer and date in mono font
  - "Show Credential" link
  - Display: AWS, Machine Learning, CS50, CS50P, Java courses

### 5. Experience Timeline
**Layout:** Vertical timeline with alternating sides
- Connecting line down the center
- Timeline nodes for each position:
  - Company logo placeholder (circular)
  - Position title (bold)
  - Company name + duration (mono)
  - Location and description
- Positions: Aubay Paris (main focus), Gamma Computer, Volunteer work

### 6. Education Section
**Layout:** 2-card layout
- UTT card (current): Prominent with "Current" badge
- USEK card: Supporting
- Each card contains:
  - University logo placeholder
  - Degree and field
  - Years
  - Key skills learned (pills)

### 7. Contact Section
**Layout:** Split layout
- Left (60%): Contact form
  - Name, Email, Message fields
  - Clean, minimal inputs with floating labels
  - Submit button
- Right (40%): 
  - Contact info
  - LinkedIn, GitHub, Email links
  - Location: Troyes, France
  - Availability status: "Open to internships"

## Component Library

### Navigation (Sticky Header)
- Logo/Name on left
- Navigation links on right: About, Projects, Skills, Contact
- Hamburger menu on mobile
- Background: Translucent with backdrop-blur on scroll

### Cards
- Consistent border radius: rounded-xl
- Subtle borders: border with low opacity
- Padding: p-8
- Hover: transform scale(1.02) with shadow increase

### Buttons
- Primary: Solid background, rounded-lg, px-8 py-4
- Secondary: Border style, same sizing
- On images: backdrop-blur-md with semi-transparent background
- NO custom hover states (relies on native button behavior)

### Pills/Tags
- Tech stack tags: JetBrains Mono, text-xs, px-4 py-2, rounded-full
- Displayed in flex-wrap layout

### Icons
- Library: Heroicons via CDN
- Size: w-6 h-6 for standard icons, w-8 h-8 for feature highlights
- Usage: Skills, contact links, navigation

## Animation Strategy (Minimal & Purposeful)

**Used Sparingly:**
- Hero typewriter effect for name
- Scroll-triggered fade-in for section headings (one-time)
- Project card hover lift (transform)
- Timeline items fade-in on scroll
- Smooth scroll for navigation links

**Avoid:** Background animations, parallax effects, continuous motion

## Images

**Hero Section:**
- Large hero background: Abstract/geometric pattern or tech-themed gradient overlay (subtle)
- Profile photo: Professional headshot, circular crop

**Aubay Project:**
- Primary: Screenshot/mockup of sign language translation interface
- Secondary: Diagram showing ML pipeline or hand detection visualization

**Project Cards:**
- Thumbnail images for each project (16:9 ratio)
- Use placeholder images for projects without screenshots

**Education/Company Logos:**
- UTT, USEK, Gamma Computer, Aubay logos
- Certification badges: AWS, freeCodeCamp, CS50 logos

**Placement:**
- Hero has large background treatment
- Each project card includes featured image
- Experience timeline includes company logos
- Certification section displays official badges

## Accessibility

- All form inputs: Proper labels, focus states with visible outline
- Semantic HTML: nav, main, section, article tags
- Skip to content link for keyboard navigation
- Sufficient contrast maintained through design (verified in implementation)
- Alt text for all images (descriptive for projects)