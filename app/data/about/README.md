# About Person Data Structure

This file contains the JSON data structure for dynamically rendering person profile pages.

## Data Structure

Each person object contains the following sections:

### 1. Basic Info
- `slug`: URL-friendly identifier (e.g., "samina-khan")
- `name`: Full name of the person

### 2. Hero Section (`hero`)
- `imageSrc`: Path to the hero image
- `text`: Introduction text displayed on the hero section

### 3. Bio Section (`bio`)
- `imageSrc`: Path to the bio image
- `bioText`: Array of paragraphs for the biography

### 4. Scrolling Text (`scrollingText`)
- `phrases`: Array of text phrases that animate on scroll

### 5. Work Includes (`workIncludes`)
- `title`: Section title
- `description`: Description text
- `steps`: Array of work process steps, each containing:
  - `title`: Step title
  - `image`: Step image path
  - `features`: Array of feature descriptions

## Current Persons

1. **Samina Khan** - `samina-khan`
   - Wellbeing coach with expertise in holistic practices

2. **John Anderson** - `john-anderson`
   - Life coach specializing in career transitions

3. **Maria Rodriguez** - `maria-rodriguez`
   - Nutrition and wellness expert

## Usage

### Accessing a Person's Page

Navigate to: `/about/[slug]`

Examples:
- `/about/samina-khan`
- `/about/john-anderson`
- `/about/maria-rodriguez`

### Adding a New Person

1. Open `/app/about/data/index.js`
2. Add a new object to `personsData` with the slug as the key
3. Fill in all required fields following the existing structure
4. Add corresponding images to `/public/about/[person-folder]/`

### Helper Functions

- `getPersonBySlug(slug)`: Returns person data for a given slug
- `getAllPersonSlugs()`: Returns array of all available person slugs

## Example

```javascript
import { getPersonBySlug } from './app/about/data';

const personData = getPersonBySlug('samina-khan');
// Returns complete person object with all sections
```
