# Custom Accordion

A sleek, lightweight, and accessible React accordion component built with CSS Modules and Lucide icons. It features a smooth height transition using `scrollHeight`, ensuring the animation works even with dynamic content.

## Features

- **Smooth Animations:** Uses `max-height` transitions for a fluid open/close effect.
- **Accessibility:** Includes `aria-expanded`, `aria-controls`, and proper `role` attributes.
- **Highly Customizable:** Styled via CSS Modules for scoped, conflict-free styling.
- **Responsive:** Adapts to the size of its children automatically.

## Installation

1. Clone the repository (or copy the files into your project):

```bash
git clone https://github.com/avicious/custom-accordion.git
```

2. Install dependencies:

```bash
npm install
```

## Usage

Import the component and pass in a title prop. Any nested elements will be treated as the collapsible content.

```javascript
import CustomAccordion from "./components/CustomAccordion";

function App() {
  return (
    <div className="container">
      <CustomAccordion title="Click to reveal more information">
        <p>
          This is the hidden content. It can include text, images, or even other
          components!
        </p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
        </ul>
      </CustomAccordion>
    </div>
  );
}
```
