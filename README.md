# My Library

A responsive, accessible, and dark-themed web library application to manage books. Users can add, remove, and toggle the read status of books. The app separates **data** from **UI**, making it scalable and easy to maintain.

---

## Features

- **Add books:** Enter title, author, number of pages, and read status via a modal form.
- **Remove books:** Delete any book from the library.
- **Toggle read status:** Change a book's read status with a button.
- **Responsive design:** Works on mobile, tablet, laptop, and desktop.
- **Dark theme:** High-contrast, easy on the eyes.
- **Accessible:** ARIA labels, keyboard navigation, focus states, semantic HTML.
- **SEO-friendly:** Proper headings, meta description, semantic sections.
- **Performance-friendly:** Efficient DOM updates, memory-conscious rendering.

---

## Installation

1. Clone or download this repository.
2. Open `index.html` in a modern web browser (supports `<dialog>`).
3. No backend or server required; fully client-side.

---

## Usage

1. Click the **New Book** button to open the form.
2. Fill in book details and submit to add it to the library.
3. Use **Toggle Status** to mark a book as read or not read.
4. Click **Remove** to delete a book from the library.
5. Books automatically wrap into rows for all screen sizes.

---

## Technologies Used

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (ES6+ classes and modules)
- Browser API: `crypto.randomUUID()`, `<dialog>` tag

---

## Best Practices

- Separation of data (`books` array) and UI (DOM).
- Uses ES6 **class** for **Book** objects, with shared methods (`toggleReadStatus`) on the class prototype for efficiency.
- Responsive, accessible, SEO-friendly, and dark-themed design.
- Minimal DOM reflows for performance.

---

## Refactor Notes

- Replaced `Book` constructor function and prototype with ES6 `class`.
- Maintains all existing functionality: add, remove, toggle read status.
- Improves readability and keeps methods shared on the prototype automatically.

---

## License

This project is open-source and free to use.
