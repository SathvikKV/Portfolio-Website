# Image Directory

This directory contains all the images used in the portfolio website.

## Structure

- `/logos/` - Contains logos for companies, universities, and technologies
- `/projects/` - Contains images for project showcases
- `/profile/` - Contains profile and personal images
- `/icons/` - Contains custom icons used throughout the site
- `/backgrounds/` - Contains background images and patterns

## Usage

When referencing these images in your code, use the path relative to the public directory:

```jsx
// Example usage in a component
<Image 
  src="/img/profile/headshot.jpg" 
  alt="Profile picture" 
  width={300} 
  height={300} 
/>

