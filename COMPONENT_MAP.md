# Being IITian - Component Hierarchy & Data Flow Map

## Visual Component Tree

```
RootLayout (src/app/layout.tsx)
│
├── <html>
│   └── <body>
│       ├── Navbar (src/components/Navbar.tsx) [Client Component]
│       │   ├── Logo Section
│       │   │   └── Link to "/" with icon + brand text
│       │   ├── Desktop Navigation Links
│       │   │   ├── Link: "/about" (About)
│       │   │   ├── Link: "/courses" (Courses)
│       │   │   ├── Link: "/blogs" (Resources)
│       │   │   └── Link: "/products" (Products)
│       │   ├── Action Buttons
│       │   │   ├── Search Button
│       │   │   ├── Theme Toggle (Dark/Light)
│       │   │   ├── Get Started CTA
│       │   │   └── Mobile Menu Toggle
│       │   └── Mobile Menu Drawer [Conditional]
│       │       └── Mobile Navigation Links
│       │
│       ├── <main> {children}
│       │   │
│       │   └── [Active Page Component]
│       │       │
│       │       ├── Home Page (src/app/page.tsx) [Client Component]
│       │       │   ├── Hero Section
│       │       │   │   ├── Animated Background (SVG + gradients)
│       │       │   │   ├── Main Heading
│       │       │   │   ├── Subheading
│       │       │   │   └── Login Buttons
│       │       │   │       ├── Student Login Button
│       │       │   │       └── Mentor Login Button
│       │       │   │
│       │       │   ├── What We Offer Section
│       │       │   │   ├── Section Title
│       │       │   │   ├── Feature Cards Grid (4 cards)
│       │       │   │   │   ├── Card: Personalised Tracking
│       │       │   │   │   ├── Card: Prep Curated Content
│       │       │   │   │   ├── Card: Strategy Builder
│       │       │   │   │   └── Card: Your Safe Space
│       │       │   │   └── 1-on-1 Session CTA Banner
│       │       │   │       └── Book Now Button
│       │       │   │
│       │       │   ├── Premium Courses Section
│       │       │   │   ├── Section Title
│       │       │   │   ├── Course Carousel Container
│       │       │   │   │   ├── Left Arrow Button
│       │       │   │   │   ├── Scrollable Course List (ref: coursesScrollRef)
│       │       │   │   │   │   ├── CourseCard: "Graphs Simplified"
│       │       │   │   │   │   ├── CourseCard: "All Important Reaction Mechanisms"
│       │       │   │   │   │   ├── CourseCard: "Advanced Calculus Mastery"
│       │       │   │   │   │   ├── CourseCard: "Physics Problem Solving"
│       │       │   │   │   │   ├── CourseCard: "Inorganic Chemistry Complete"
│       │       │   │   │   │   ├── CourseCard: "Trigonometry & Vectors"
│       │       │   │   │   │   ├── CourseCard: "Modern Physics & Relativity"
│       │       │   │   │   │   └── CourseCard: "Electrochemistry & Thermodynamics"
│       │       │   │   │   └── Right Arrow Button
│       │       │   │   └── Pagination Dots (4 dots)
│       │       │   │
│       │       │   ├── Core Circle Section
│       │       │   │   ├── Section Title
│       │       │   │   ├── Team Member Card (floating card design)
│       │       │   │   │   ├── Member Portrait Image
│       │       │   │   │   ├── Member Info
│       │       │   │   │   │   ├── Name (state: currentMember)
│       │       │   │   │   │   ├── Role Badge
│       │       │   │   │   │   ├── Bio Text
│       │       │   │   │   │   └── Social Links (LinkedIn, Facebook)
│       │       │   │   │   └── Navigation Bar
│       │       │   │   │       ├── Previous Button
│       │       │   │   │       ├── Member Avatars (6 total)
│       │       │   │   │       │   └── [Click to switch currentMember]
│       │       │   │   │       ├── Next Button
│       │       │   │   │       └── Progress Dots (6 dots)
│       │       │   │   └── Data: coreMembers[] (6 members)
│       │       │   │
│       │       │   ├── India's Brightest Minds Section
│       │       │   │   ├── Section Title
│       │       │   │   ├── Two-Column Layout
│       │       │   │   │   ├── Left Column: Mentor List
│       │       │   │   │   │   ├── Selected City Display (state: selectedCity)
│       │       │   │   │   │   ├── Mentor Cards List
│       │       │   │   │   │   │   └── [Mentors for selectedCity from mentorsByCity]
│       │       │   │   │   │   │       └── [Click to set selectedMentorIndex]
│       │       │   │   │   │   └── Selected Mentor Detail Card
│       │       │   │   │   │       ├── Mentor Avatar
│       │       │   │   │   │       ├── Mentor Info
│       │       │   │   │   │       └── LinkedIn Connect Button
│       │       │   │   │   └── Right Column: India Map
│       │       │   │   │       ├── Map SVG (India outline)
│       │       │   │   │       └── City Markers (10 cities)
│       │       │   │   │           ├── Chandigarh Button
│       │       │   │   │           ├── Delhi Button
│       │       │   │   │           ├── Jaipur Button
│       │       │   │   │           ├── Lucknow Button
│       │       │   │   │           ├── Kolkata Button
│       │       │   │   │           ├── Mumbai Button
│       │       │   │   │           ├── Pune Button
│       │       │   │   │           ├── Hyderabad Button
│       │       │   │   │           ├── Bengaluru Button
│       │       │   │   │           └── Chennai Button
│       │       │   │   └── Data: mentorsByCity{} (10 cities)
│       │       │   │
│       │       │   ├── Watch Recorded Lectures Section
│       │       │   │   ├── Section Title
│       │       │   │   └── Video Carousel
│       │       │   │       ├── Left Arrow Button [disabled]
│       │       │   │       ├── Video Cards Container (7 videos)
│       │       │   │       │   ├── Video: "Ace the JEE with Mock Tests!"
│       │       │   │       │   ├── Video: "3 Overlooked Blunders"
│       │       │   │       │   ├── Video: "Thoughts While Solving"
│       │       │   │       │   ├── Video: "Find the Right Questions"
│       │       │   │       │   ├── Video: "Be Part of the 1%"
│       │       │   │       │   ├── Video: "Make the Most of Your Time"
│       │       │   │       │   └── Video: "How to Stay Consistent"
│       │       │   │       └── Right Arrow Button [enabled]
│       │       │   │
│       │       │   └── Mobile App CTA Section
│       │       │       ├── Phone Mockup Images
│       │       │       ├── App Title & Description
│       │       │       └── Download Buttons
│       │       │           ├── App Store Button
│       │       │           └── Google Play Button
│       │       │
│       │       ├── About Page (src/app/about/page.tsx)
│       │       │   └── [Placeholder content]
│       │       │
│       │       ├── Courses Page (src/app/courses/page.tsx)
│       │       │   └── [Placeholder content]
│       │       │
│       │       └── Contact Page (src/app/contact/page.tsx)
│       │           └── [Placeholder content]
│       │
│       └── Footer (src/components/Footer.tsx) [Server Component]
│           ├── About Section (2 columns)
│           │   ├── Brand Name
│           │   └── Description Text
│           ├── Quick Links Section
│           │   ├── Link: "/" (Home)
│           │   ├── Link: "/courses" (Courses)
│           │   ├── Link: "/about" (About Us)
│           │   └── Link: "/contact" (Contact)
│           ├── Contact Info Section
│           │   ├── Email
│           │   ├── Phone
│           │   └── Location
│           └── Copyright Section
│               └── Copyright Text
```

---

## Component Dependencies

### Navbar Component
**File:** `src/components/Navbar.tsx`  
**Type:** Client Component  
**Dependencies:**
- `react` - useState, useEffect
- `next/link` - Navigation
- Browser APIs: localStorage, window.scrollY, matchMedia

**Internal State:**
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [hidden, setHidden] = useState(false);
const [lastScrollY, setLastScrollY] = useState(0);
const [isDarkMode, setIsDarkMode] = useState(false);
```

**Key Functions:**
- `toggleTheme()` - Switches between dark/light mode
- `handleScroll()` - Manages navbar visibility and styling

**Side Effects:**
- Scroll event listener (cleanup on unmount)
- Theme persistence to localStorage
- CSS class toggling on document root

---

### Footer Component
**File:** `src/components/Footer.tsx`  
**Type:** Server Component  
**Dependencies:**
- `next/link` - Navigation

**Props:** None (static component)

---

### CourseCard Component
**File:** `src/components/CourseCard.tsx`  
**Type:** Server Component  
**Dependencies:** None

**Props:**
```typescript
interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  instructorInitials: string;
  lectures: number;
  rating: number;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  hoverColor: string;
}
```

**Features:**
- Dynamic gradient styling via props
- Hover animations with inline style manipulation
- Discount badge (static "SAVE 30%")
- Rating display (static star)
- Lecture count

---

## Data Flow Diagram

```
User Interactions → Component State → UI Updates

┌─────────────────────────────────────────────────────────────┐
│                        User Actions                          │
└──────────┬──────────────────────────────────────────────────┘
           │
           ├─► Scroll Page
           │   └─► Navbar: handleScroll()
           │       └─► Update: scrolled, hidden states
           │           └─► Re-render Navbar with new styles
           │
           ├─► Click Theme Toggle
           │   └─► Navbar: toggleTheme()
           │       ├─► Update: isDarkMode state
           │       ├─► localStorage.setItem('theme')
           │       └─► document.documentElement.classList
           │           └─► CSS changes applied globally
           │
           ├─► Click Course Arrow
           │   └─► HomePage: scrollCourses(direction)
           │       ├─► coursesScrollRef.current.scrollTo()
           │       └─► setTimeout: updateScrollButtons()
           │           └─► Update: canScrollLeft, canScrollRight
           │               └─► Re-render with new button states
           │
           ├─► Click Team Member Avatar
           │   └─► HomePage: setCurrentMember(index)
           │       └─► Update: currentMember state
           │           └─► Re-render with new member data
           │
           ├─► Click City on Map
           │   └─► HomePage: setSelectedCity(city)
           │       ├─► Update: selectedCity state
           │       └─► setSelectedMentorIndex(0)
           │           └─► Re-render mentor list & details
           │
           └─► Click Mentor in List
               └─► HomePage: setSelectedMentorIndex(index)
                   └─► Update: selectedMentorIndex state
                       └─► Re-render selected mentor details
```

---

## State Management Overview

### HomePage State Tree
```typescript
HomePage State {
  // Course Carousel
  coursesScrollRef: RefObject<HTMLDivElement>
  canScrollLeft: boolean (default: false)
  canScrollRight: boolean (default: true)
  
  // Team Members
  currentMember: number (default: 0)
  coreMembers: Array<TeamMember> (6 items, immutable)
  
  // Mentors Map
  selectedCity: string (default: 'Chandigarh')
  selectedMentorIndex: number | null (default: 0)
  mentorsByCity: Record<string, Mentor[]> (10 cities, immutable)
}
```

### Navbar State Tree
```typescript
Navbar State {
  isMenuOpen: boolean (default: false)
  scrolled: boolean (default: false)
  hidden: boolean (default: false)
  lastScrollY: number (default: 0)
  isDarkMode: boolean (from localStorage or system preference)
}
```

---

## Event Handlers Map

### Navbar Events
| Event | Handler | State Change | Side Effect |
|-------|---------|--------------|-------------|
| `window.scroll` | `handleScroll()` | scrolled, hidden, lastScrollY | Style changes |
| `onClick` (theme toggle) | `toggleTheme()` | isDarkMode | localStorage + CSS classes |
| `onClick` (menu toggle) | `() => setIsMenuOpen(!isMenuOpen)` | isMenuOpen | Mobile menu visibility |
| `onClick` (menu link) | `() => setIsMenuOpen(false)` | isMenuOpen | Close menu on navigate |

### HomePage Events
| Event | Handler | State Change | Side Effect |
|-------|---------|--------------|-------------|
| `onClick` (course arrow) | `scrollCourses(direction)` | canScrollLeft, canScrollRight | Scroll animation |
| `onScroll` (course container) | `updateScrollButtons()` | canScrollLeft, canScrollRight | Button enable/disable |
| `onClick` (team arrow) | `nextMember() / prevMember()` | currentMember | Member transition |
| `onClick` (team avatar) | `() => setCurrentMember(index)` | currentMember | Member switch |
| `onClick` (city marker) | `() => { setSelectedCity(city); setSelectedMentorIndex(0); }` | selectedCity, selectedMentorIndex | List update |
| `onClick` (mentor card) | `() => setSelectedMentorIndex(index)` | selectedMentorIndex | Detail card update |

---

## Props Flow Diagram

```
HomePage
│
└─► CourseCard (x8 instances)
    ├─ title (string)
    ├─ description (string)
    ├─ instructor (string)
    ├─ instructorInitials (string)
    ├─ lectures (number)
    ├─ rating (number)
    ├─ gradientFrom (string)
    ├─ gradientTo (string)
    ├─ accentColor (string)
    └─ hoverColor (string)

Example:
<CourseCard
  title="Graphs Simplified"
  description="Master every graph..."
  instructor="Riya Joshi & Guransh Kaur"
  instructorInitials="RJ"
  lectures={12}
  rating={4.6}
  gradientFrom="#1e3a8a"
  gradientTo="#1e40af"
  accentColor="#1E82E9"
  hoverColor="#C7E7F9"
/>
```

---

## Routing Structure

```
App Router File System Routes

/ (root)
├── layout.tsx         → RootLayout (wraps all pages)
│   └── Navbar + {children} + Footer
│
├── page.tsx           → HomePage at "/"
├── about/
│   └── page.tsx       → AboutPage at "/about"
├── courses/
│   └── page.tsx       → CoursesPage at "/courses"
└── contact/
    └── page.tsx       → ContactPage at "/contact"

Future Routes (suggested):
├── login/
│   └── page.tsx       → "/login"
├── mentor-login/
│   └── page.tsx       → "/mentor-login"
├── courses/[id]/
│   └── page.tsx       → "/courses/[id]" (dynamic)
├── blog/
│   └── page.tsx       → "/blog"
└── api/
    ├── courses/
    │   └── route.ts   → API endpoint
    └── mentors/
        └── route.ts   → API endpoint
```

---

## Component Lifecycle & Rendering

### Server Components (SSR)
```
1. Request received
2. Component rendered on server
3. HTML sent to client
4. Hydration (if interactive)
5. User interactions handled client-side

Components:
- Footer
- CourseCard (rendered 8 times)
- About/Courses/Contact pages
```

### Client Components (CSR)
```
1. Component JS sent to client
2. React hydrates component
3. State initialized
4. useEffect hooks run
5. Event listeners attached
6. User interactions trigger re-renders

Components:
- Navbar
- HomePage
```

### Rendering Strategy per Component

| Component | Type | Rendering | Interactivity | Hydration |
|-----------|------|-----------|---------------|-----------|
| RootLayout | Server | SSR | No | Partial (children) |
| Navbar | Client | CSR | Yes (scroll, menu, theme) | Yes |
| Footer | Server | SSR | No (static links only) | No |
| CourseCard | Server | SSR | No (static display) | No |
| HomePage | Client | CSR | Yes (carousels, forms) | Yes |
| About/Contact/Courses | Server | SSR | No | No |

---

## Performance Considerations

### Code Splitting
- Automatic route-based splitting
- Each page is a separate chunk
- Shared components bundled efficiently

### Client-Side State
- Minimal state in Navbar (scroll, theme)
- Moderate state in HomePage (carousels, selections)
- No global state management needed currently

### Re-render Triggers
**Navbar:**
- Every scroll event (throttled by browser)
- Theme toggle click
- Menu toggle click

**HomePage:**
- Course scroll (throttled)
- Team member navigation
- City/mentor selection

### Optimization Opportunities
1. Debounce scroll handlers
2. Memoize CourseCard components
3. Lazy load sections below fold
4. Use next/image for all images
5. Implement virtual scrolling for large lists

---

**Last Updated:** November 6, 2025  
**Document Version:** 1.0.0
