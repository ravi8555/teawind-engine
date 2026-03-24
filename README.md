# 🍵 Teawind CSS

A lightweight utility-first CSS engine. Build UIs using `chai-*` classes without writing CSS!

* * *

## 📦🍵 Teawind CSS

A lightweight utility-first CSS engine. Build UIs using `chai-*` classes without writing CSS!

* * *

## 📦 Installation

### Via npm

```bash
npm install teawind
```

## Available Classes

### Colors

*   `chai-bg-red`, `chai-bg-blue`, `chai-bg-green`, `chai-bg-yellow`, `chai-bg-gray`, `chai-bg-black`, `chai-bg-white`
    
*   `chai-text-red`, `chai-text-blue`, `chai-text-green`, `chai-text-yellow`, `chai-text-gray`, `chai-text-black`, `chai-text-white`
    

### Spacing (1 unit = 4px)

*   `chai-p-10` → padding: 40px
    
*   `chai-m-20` → margin: 80px
    
*   `chai-px-30` → padding-left/right: 120px
    
*   `chai-py-15` → padding-top/bottom: 60px
    

### Typography

*   `chai-text-16`, `chai-text-24` → font size
    
*   `chai-font-bold` → bold text
    
*   `chai-text-center`, `chai-text-left`, `chai-text-right` → text alignment
    

### Layout

*   `chai-flex`, `chai-flex-col`, `chai-flex-center`
    
*   `chai-justify-between`
    
*   `chai-gap-10`
    

### Borders

*   `chai-border-2`, `chai-border-4`
    
*   `chai-rounded-10`, `chai-rounded-20`
    
*   `chai-border-red`
    

### Transforms

*   `chai-scale-1`, `chai-scale-2`, `chai-scale-3`
    
*   `chai-rotate-45`, `chai-rotate-90`
    

### Hover Effects

*   `chai-hover-scale` → zoom effect
    
*   `chai-hover-bg-red` → background change
    
*   `chai-hover-text-white` → text color change
    
*   `chai-hover-shadow` → shadow effect
    
*   `chai-hover-border` → border effect
    

## API

### `initTeawind(container)`

Initializes Teawind on the specified container (defaults to `document.body`).

javascript

```plaintext
import { initTeawind } from 'teawind';
initTeawind();
```

### `applyStyles(element)`

Manually apply Teawind styles to an element.

```plaintext
import { applyStyles } from 'teawind';
const element = document.querySelector('.my-element');
applyStyles(element);
```

License MIT

🗂️ .npmignore Code node\_modules/ test/ \*.log .DS\_Store .git/ .github/ .vscode/ Code

👉 The key fix is making sure every code block starts with triple backticks (\`\`\`), has the correct language hint (`bash`, `html`, `javascript`), and ends with triple backticks. Without those closing backticks, Markdown “leaks” and the rest of the file shows as plain text.

Do you want me to also add **badges** (npm version, GitHub stars, license) at the very top so it looks more professional on GitHub?