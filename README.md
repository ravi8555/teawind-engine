# 🍵 Teawind CSS

A lightweight utility-first CSS engine. Build UIs using `chai-*` classes without writing CSS!

## Installation

```bash
npm install teawind

Or via CDN:

<script type="module">
  import { initTeawind } from 'https://cdn.jsdelivr.net/npm/teawind@1.0.0/src/index.js';
  initTeawind();
</script>

Usage

Basic Setup

<!DOCTYPE html>
<html>
<head>
  <title>Teawind Demo</title>
  <script type="module">
    import { initTeawind } from 'teawind';
    
    // Initialize the engine
    initTeawind();
  </script>
</head>
<body>
  <div class="chai-bg-red chai-text-white chai-p-20 chai-rounded-10">
    Hello Teawind!
  </div>
</body>
</html>

Available Classes
Colors
chai-bg-red, chai-bg-blue, chai-bg-green, chai-bg-yellow, chai-bg-gray, chai-bg-black, chai-bg-white

chai-text-red, chai-text-blue, chai-text-green, chai-text-yellow, chai-text-gray, chai-text-black, chai-text-white

Spacing (1 unit = 4px)
chai-p-10 → padding: 40px

chai-m-20 → margin: 80px

chai-px-30 → padding-left/right: 120px

chai-py-15 → padding-top/bottom: 60px

Typography
chai-text-16, chai-text-24 → font size

chai-font-bold → bold text

chai-text-center, chai-text-left, chai-text-right → text alignment

Layout
chai-flex, chai-flex-col, chai-flex-center

chai-justify-between

chai-gap-10

Borders
chai-border-2, chai-border-4

chai-rounded-10, chai-rounded-20

chai-border-red

Transforms
chai-scale-2, chai-scale-3, chai-scale-1

chai-rotate-45, chai-rotate-90

Hover Effects
chai-hover-scale → zoom effect

chai-hover-bg-red → background change

chai-hover-text-white → text color change

chai-hover-shadow → shadow effect

chai-hover-border → border effect

API
initTeawind(container)
Initializes Teawind on the specified container (defaults to document.body).

javascript
import { initTeawind } from 'teawind';
initTeawind();
applyStyles(element)
Manually apply Teawind styles to an element.

javascript
import { applyStyles } from 'teawind';
const element = document.querySelector('.my-element');
applyStyles(element);
License
MIT

text

### 3. **Create `.npmignore`**
node_modules/
test/
*.log
.DS_Store
.git/
.github/
.vscode/