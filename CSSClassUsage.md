# CSS Class Usage Guide

This file describes the shared CSS classes available in `src/styles.css` and their intended purpose.

| Class | Purpose |
| --- | --- |
| `heading` | Primary page heading style for large section titles. |
| `title` | Secondary heading style for cards and content sections. |
| `subtitle` | Smaller heading style for descriptive labels and section subtitles. |
| `text` | Default paragraph text style. |
| `subtext` | Supporting text for hints, notes, or low-priority content. |
| `boldtext` | Strong text with heavier weight for emphasis. |
| `strongtext` | Alternative bold emphasis with a darker color. |
| `main-card` | Primary content card style with padding, border, and shadow. |
| `subcard` | Secondary card style for nested or supporting content. |
| `note-card` | Highlighted note panel for important messages and alerts. |
| `notes` | Small info panel style used for descriptive notes. |
| `detailscard` | Detail panel for structured content or table wrappers. |
| `badge` | Small label-style UI element for status or tags. |
| `button-small` | Small button style for compact actions. |
| `button-medium` | Medium button style for general actions. |
| `button-large` | Large button style for primary actions. |
| `important` | Text color styling for important warnings or alerts. |
| `inportant` | Alternate alias for `important` if the class name is misspelled. |
| `vvip` | Special label or highlight text style. |
| `image-card` | Card container for image-related content. |
| `image-show` | Image styling inside an image card. |
| `image-title` | Title text used with image cards. |
| `image-details` | Description text under image titles. |
| `link` | Styled anchor link text with hover effect. |
| `feature` | Feature list item or badge block inside comparison cells. |
| `card` | Generic card wrapper for content sections. |
| `difference-card-show` | Highlighted cell card style for comparison table entries. |

## Example Usage

```tsx
<div className="main-card">
  <h2 className="title">Comparison example</h2>
  <p className="text">This is an example description.</p>
  <div className="note-card">
    <p className="strongtext">Important note</p>
    <p className="subtext">Use the comparison table for multiple frameworks.</p>
  </div>
</div>
```

Use the comparison component by passing column arrays with objects that have `title` and `detail` fields.
