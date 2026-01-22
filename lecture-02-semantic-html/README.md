# Lecture 02 – Semantic HTML & Structure

## 1. What I implemented this lecture

I created a semantic portfolio webpage using HTML5 semantic elements. The page includes a header with my personal information, a portfolio section with project images and an embedded video, an areas of interest section, an education section, and a footer with contact links. I focused on using proper semantic HTML elements and implementing accessibility features like skip links and alt text for images.

---

## 2. Semantic decisions I made (REQUIRED)

### Decision 1
- **Element(s) used:** `<main>` 
- **Where in the page:** Wrapping all primary content sections
- **Why this element is semantically correct:** The main element represents the dominant content of the page and helps assistive technologies identify the primary content area. It works together with the skip link to allow users to jump directly to the main content.

### Decision 2
- **Element(s) used:** `<figure>` and `<figcaption>`
- **Where in the page:** Portfolio section for project images and video
- **Why this element is semantically correct:** Figure elements group media content with their captions as self-contained units. This is more semantic than using separate img and p elements because it creates an explicit relationship between the image and its description.

### Decision 3
- **Element(s) used:** `<section>` with `aria-labelledby`
- **Where in the page:** Portfolio, Areas of Interest, and Education sections
- **Why this element is semantically correct:** Each section represents a thematic group of content with its own heading. Using aria-labelledby connects the section to its heading, which helps screen readers provide better navigation and context to users.

---

## 3. Accessibility considerations

### What accessibility features did I include?

I included a skip link at the top of the page, proper alt text for all images, semantic HTML elements instead of divs, correct heading hierarchy starting with one h1 followed by h2 and h3 elements, aria labels on sections, and proper attributes on the iframe element including title and allowfullscreen.

### How do they improve usability?

The skip link allows keyboard and screen reader users to bypass navigation and jump to main content. Alt text helps blind users understand images and provides fallback when images don't load. Semantic elements help assistive technologies understand page structure. Proper heading hierarchy allows users to navigate by headings and understand content organization. These features make the website usable for people with different abilities and needs.

---

## 4. What I learned

I learned how to use semantic HTML5 elements properly and understand the difference between semantic elements and generic divs. I learned about accessibility features like skip links and ARIA attributes. I also learned the importance of proper heading hierarchy and how to structure a webpage using header, main, section, and footer elements. I understand now that semantic HTML improves both accessibility and SEO.

---

## 5. What I still need to improve

I need to practice using more complex semantic elements and learn when to use article versus section in different scenarios. I want to improve my ability to write better alt text and understand more advanced ARIA attributes. I also need to learn about other semantic elements I haven't used yet and practice structuring more complex webpages.

---

## 6. Notes about AI usage (if any)

- **Tool used:** Claude AI Assistant
- **What I accepted as-is:** README structure, semantic element suggestions, accessibility recommendations
- **What I modified manually:** Personal information, project descriptions, areas of interest, GitHub links, and customized all content to reflect my actual work and learning