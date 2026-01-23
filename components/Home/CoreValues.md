# CoreValues Component

A reusable React component that displays core values or features in a grid layout with animated icons and decorative leaf elements.

## Props

### Required Props

- **`values`** (`ValueItem[]`): Array of value items to display
  - `icon` (string): Path to the icon image
  - `title` (string): Title text for the value
  - `desc` (string): Description text for the value

### Optional Props

- **`backgroundColor`** (string): Background color for the section
  - Default: `"transparent"`
  
- **`leftLeafImage`** (string): Path to the left decorative leaf image
  - Default: `"/Home/left-leaf.png"`
  
- **`rightLeafImage`** (string): Path to the right decorative leaf image
  - Default: `"/Home/right-leaf.png"`
  
- **`iconBgColor`** (string): Background color for the icon circles
  - Default: `"#ECDCC5"`

## Usage Examples

### Basic Usage

```tsx
import CoreValues from '@/components/Home/CoreValues';

const values = [
  {
    icon: "/icons/icon1.png",
    title: "VALUE ONE",
    desc: "Description of the first value"
  },
  {
    icon: "/icons/icon2.png",
    title: "VALUE TWO",
    desc: "Description of the second value"
  },
  {
    icon: "/icons/icon3.png",
    title: "VALUE THREE",
    desc: "Description of the third value"
  }
];

export default function Page() {
  return <CoreValues values={values} />;
}
```

### With Custom Styling

```tsx
<CoreValues 
  values={values}
  backgroundColor="#F5F5F5"
  iconBgColor="#E0D5C7"
  leftLeafImage="/custom/left-leaf.png"
  rightLeafImage="/custom/right-leaf.png"
/>
```

## Features

- ✨ GSAP animations for icons and text on scroll
- 🍃 Decorative leaf elements with fade-in animation
- 📱 Responsive grid layout (1 column on mobile, 3 columns on desktop)
- 🎨 Customizable colors and images
- ♿ Accessible with proper alt text and semantic HTML

## Animation Details

The component uses GSAP ScrollTrigger to animate:
1. Leaf decorations slide in from left and right
2. Icon wrappers scale up with a bounce effect (staggered)
3. Text content fades in from below (staggered)

All animations trigger when the section reaches 70% of the viewport.
