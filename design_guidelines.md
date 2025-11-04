# Design Guidelines: Kit de Festas Lucrativas Landing Page

## Design Approach

**Reference-Based Approach**: Drawing inspiration from successful Brazilian e-commerce platforms (Hotmart, Eduzz) and celebration-focused products. The design should feel festive, trustworthy, and conversion-optimized with vibrant energy appropriate for party planning products.

## Core Design Principles

1. **Festive Professionalism**: Balance celebratory aesthetics with credible business presentation
2. **Conversion Clarity**: Clear visual hierarchy guiding users toward purchase decisions
3. **Social Proof Emphasis**: Prominent display of ratings, testimonials, and purchase counts
4. **Urgency Without Anxiety**: Dynamic date and scarcity elements that motivate without overwhelming

## Typography

**Font Families** (Google Fonts):
- **Headings**: Poppins (Bold 700, SemiBold 600) - modern, friendly, highly legible
- **Body**: Inter (Regular 400, Medium 500) - excellent readability for long-form content
- **Accents**: Poppins (Medium 500) for CTAs and emphasized text

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl (bold)
- Section Headers: text-3xl md:text-4xl lg:text-5xl (semibold)
- Subsections: text-xl md:text-2xl (semibold)
- Body: text-base md:text-lg (regular)
- Small Print: text-sm (regular)

## Layout System

**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Component gaps: gap-6 md:gap-8 lg:gap-12
- Card padding: p-6 md:p-8
- Container max-width: max-w-7xl with px-4 md:px-6 lg:px-8

**Grid System**:
- Hero: Single column centered layout
- Features/Benefits: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Pricing Tiers: grid-cols-1 md:grid-cols-2 (side-by-side on desktop)
- Process Steps: grid-cols-2 md:grid-cols-4
- FAQ: Single column with accordion
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

### Hero Section
- Full-width background with festive party imagery (balloons, confetti, celebration themes)
- Centered content with max-w-4xl
- Prominent headline with gradient or bold treatment
- Star rating display with 4.9/5 and user count badge
- Primary CTA button with blur backdrop when over image
- Trust indicators immediately visible

### Pricing Cards (Two Tiers)
- Side-by-side cards on desktop (R$10 anchor, R$20 premium)
- Premium tier visually elevated: border-4, scale-105, shadow-2xl
- "Best-seller" badge on premium tier
- Value breakdown showing original total (R$171,90) crossed out
- Large, prominent price display
- Social proof counter ("743 pessoas nos últimos dias")
- CTA buttons with href="#" placeholders for checkout links
- Clear feature comparison lists

### Bonus Section
- 4 bonus cards in responsive grid
- Each card shows: icon, title, original price (crossed), "GRÁTIS!" badge
- Checkmark lists for included items
- Visual progression showing value stacking

### Process/How It Works
- 4-step visual timeline with numbered badges (1️⃣ 2️⃣ 3️⃣ 4️⃣)
- Icons for each step (shopping cart, download, edit, money)
- Brief text under each step

### Guarantee Section
- Prominent visual badge (shield or seal icon)
- "7 DIAS" in large text
- Reassuring copy with emphasis on "100% reembolso"
- Trust-building layout with centered content

### FAQ Accordion
- 6 questions from provided copy
- Smooth expand/collapse animations
- Plus/minus icon indicators
- Generous padding for readability

### Dynamic Date Badge
- Prominent placement near hero and pricing sections
- Format: "🔥 OFERTA VÁLIDA ATÉ HOJE, [DD de MMMM]"
- JavaScript updates date daily at midnight Brazil time
- Animated pulse or subtle glow effect

### Footer
- WhatsApp contact with icon and formatted number
- Legal links in columns
- Copyright notice
- Subtle background differentiation from main content

## Images

**Hero Section**: Large celebratory image featuring colorful party decorations, balloons, confetti, and party planning materials. Should convey joy, celebration, and creativity. Vibrant and energetic composition.

**Section Backgrounds**: Subtle patterns or gradients evoking celebration (dots, confetti patterns) at low opacity for visual interest without distraction.

**Bonus/Feature Icons**: Use Heroicons or Font Awesome for consistent iconography - gift boxes, charts, messages, templates, calendar icons.

## Animations

**Minimal, Strategic Use**:
- Smooth scroll-triggered fade-in for sections (once per visit)
- Hover scale on pricing cards (scale-105)
- CTA button hover states with subtle lift
- FAQ accordion smooth expand/collapse
- Dynamic date badge subtle pulse animation

**No**: Parallax effects, continuous animations, or distracting motion

## Accessibility & Quality

- Maintain WCAG AA contrast ratios minimum
- All interactive elements keyboard accessible
- Semantic HTML5 structure throughout
- Focus states clearly visible on all interactive elements
- Mobile-first responsive implementation
- Touch targets minimum 44px on mobile

## Mobile Optimization

- Single column stacking below md: breakpoint
- Pricing cards stack vertically on mobile with full width
- Larger tap targets for buttons (min-h-14)
- Readable font sizes (never below 16px for body)
- Optimized image loading for mobile bandwidth