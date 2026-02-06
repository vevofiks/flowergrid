**ACT AS:**
A world-class Creative Developer (Awwwards-level) specializing in Next.js, Framer Motion or gsap, and 3D web interactions.

**Task:**

Build a high-end yoga quote that shows as text in video while scrolling 
The core mechanic is a scroll-linked animation that plays an image sequence of lady hand "moving" (movements) as the user scrolls down.


**implemntation details:**

1.  **The "Sticky" Canvas:**
    - Create a component called `LadyScroll.tsx` on Home component.
    - It should have a container with `h-[400vh]` (4x viewport height) to allow for a long scroll duration.
    - Inside, place a `<canvas>` element that is `sticky`, `top-0`, `h-screen`, and `w-full`.
    - Centered perfectly.

2.  **The Scroll Logic:**
    - Load a sequence of 39 images from `ezgif-split`. Naming convention: `ezgif-frame-003.jpeg`.
    - Use `useScroll` from Framer Motion to map the user's scroll progress (003 to 0041) to the image frame indexes.
    - Draw the current frame to the canvas on every scroll tick.
    - Ensure smooth interpolation so it doesn't stutter.

3.  **Text Overly (The Quote)**
    - Overlay text sections that fade in/out as the hand moves.
    - it should comes as the same exact image reference as the hand movement.
    - comes from -y to y axis preferred 

4.  **Polish:**
    - Add a loading state (spinner) while the images pre-load to prevent flickering.
    - Ensure the canvas scales correctly on mobile (contain fit).

**Output:**
    - A smooth, scroll-linked animation of a lady hand moving while the quote appears over it.