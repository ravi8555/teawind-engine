# 🍵 Teawind CSS

A lightweight utility-first CSS engine. Build UIs using `chai-*` classes without writing CSS!

## ✨ Features

*   🚀 **Zero Configuration** - Just add classes and they work
    
*   📦 **Lightweight** - No CSS files to manage, pure JavaScript
    
*   🎨 **Utility-First** - Build complex UIs with simple classes
    
*   🔄 **Dynamic** - Works with dynamically added elements
    
*   🎯 **No Dependencies** - Pure vanilla JavaScript
    

## 📦 Installation

### NPM

```bash
npm install teawind-engine
```

### **CDN**

```plaintext
<script type="module">
  import { initTeawind } from 'https://cdn.jsdelivr.net/npm/teawind-engine@1.0.2/src/index.js';
  initTeawind();
</script>
```

### **GitHub**

```plaintext
git clone https://github.com/ravi8555/teawind-engine.git
```

### **🚀 Usage**

**Basic Setup**

```plaintext
<!DOCTYPE html>
<html>
<head>
  <title>Teawind Demo</title>
  <script type="module">
    import { initTeawind } from 'teawind-engine';
    
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
```

### **🎨 Available Classes**

**Colors**

| **Class** | **Effect** |
| --- | --- |
| `chai-bg-red` | Background: red |
| `chai-bg-blue` | Background: blue |
| `chai-bg-green` | Background: green |
| `chai-bg-yellow` | Background: yellow |
| `chai-bg-gray` | Background: gray |
| `chai-bg-black` | Background: black |
| `chai-bg-white` | Background: white |
| `chai-text-red` | Text: red |
| `chai-text-blue` | Text: blue |
| `chai-text-green` | Text: green |
| `chai-text-yellow` | Text: yellow |
| `chai-text-gray` | Text: gray |
| `chai-text-black` | Text: black |
| `chai-text-white` | Text: white |

### **Spacing (1 unit = 4px)**

| **Class** | **CSS Output** |
| --- | --- |
| `chai-p-10` | `padding: 40px` |
| `chai-p-20` | `padding: 80px` |
| `chai-p-50` | `padding: 200px` |
| `chai-m-10` | `margin: 40px` |
| `chai-m-20` | `margin: 80px` |
| `chai-px-30` | `padding-left/right: 120px` |
| `chai-py-15` | `padding-top/bottom: 60px` |
| `chai-mt-10` | `margin-top: 40px` |
| `chai-mb-20` | `margin-bottom: 80px` |
| `chai-ml-10` | `margin-left: 40px` |
| `chai-mr-20` | `margin-right: 80px` |

### **Typography**

| **Class** | **Effect** |
| --- | --- |
| `chai-text-16` | `font-size: 16px` |
| `chai-text-24` | `font-size: 24px` |
| `chai-font-bold` | `font-weight: bold` |
| `chai-text-center` | `text-align: center` |
| `chai-text-left` | `text-align: left` |
| `chai-text-right` | `text-align: right` |

### **Layout & Flexbox**

| **Class** | **Effect** |
| --- | --- |
| `chai-flex` | `display: flex` |
| `chai-flex-col` | `flex-direction: column` |
| `chai-flex-center` | Centered flex items |
| `chai-justify-between` | `justify-content: space-between` |
| `chai-gap-10` | `gap: 10px` |

### **Borders & Radius**

| **Class** | **Effect** |
| --- | --- |
| `chai-border-2` | `border-width: 2px` |
| `chai-border-4` | `border-width: 4px` |
| `chai-rounded-10` | `border-radius: 10px` |
| `chai-rounded-20` | `border-radius: 20px` |
| `chai-border-red` | `border-color: red` |

### **Transforms**

| **Class** | **Effect** |
| --- | --- |
| `chai-scale-2` | `transform: scale(2)` |
| `chai-scale-3` | `transform: scale(3)` |
| `chai-scale-1` | `transform: scale(1)` |
| `chai-rotate-45` | `transform: rotate(45deg)` |
| `chai-rotate-90` | `transform: rotate(90deg)` |

### **Hover Effects**

| **Class** | **Effect on Hover** |
| --- | --- |
| `chai-hover-scale` | Zoom effect (scale 1.05) |
| `chai-hover-bg-red` | Background changes to red |
| `chai-hover-text-white` | Text color changes to white |
| `chai-hover-shadow` | Box shadow appears |
| `chai-hover-border` | Border becomes red |

## **📖 API**

### `initTeawind(container)`

Initializes Teawind on the specified container (defaults to document.body).

```plaintext
import { initTeawind } from 'teawind-engine';

// Initialize on entire document
initTeawind();

// Initialize on specific container only
initTeawind(document.querySelector('#app'));
```

### `applyStyles(element)`

Manually apply Teawind styles to an element.

```plaintext
import { applyStyles } from 'teawind-engine';

const element = document.querySelector('.my-element');
applyStyles(element);
```

## **💡 Examples**

### **Interactive Card**

```plaintext
<div class="chai-bg-white chai-rounded-20 chai-p-20 chai-hover-shadow">
  <h2 class="chai-text-24 chai-font-bold">Interactive Card</h2>
  <p class="chai-text-16 chai-mt-10">Hover me for shadow effect!</p>
  <button class="chai-bg-blue chai-text-white chai-rounded-10 chai-p-10 chai-mt-10 chai-hover-scale">
    Click Me
  </button>
</div>
```

### **Flex Layout**

```plaintext
<div class="chai-flex chai-justify-between chai-gap-10">
  <div class="chai-bg-red chai-text-white chai-p-20">Item 1</div>
  <div class="chai-bg-green chai-text-white chai-p-20">Item 2</div>
  <div class="chai-bg-blue chai-text-white chai-p-20">Item 3</div>
</div>
```

## **🔧 Development**

### **Clone the repository**

git clone https://github.com/ravi8555/teawind-engine.git

### **Navigate to project**

cd teawind-engine

### **Install dependencies**

npm install

### **Run tests**

npm test

### **Run visual demo**

npx http-server -o demo.html

## 🤝 Contributing\*\*

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the repository
    
2.  Create your feature branch (`git checkout -b feature/amazing-feature`)
    
3.  Commit your changes (`git commit -m 'Add some amazing feature'`)
    
4.  Push to the branch (`git push origin feature/amazing-feature`)
    
5.  Open a Pull Request
    

## **📄 License**

MIT © [Ravindra Dhadave](https://github.com/ravi8555)

* * *

Made with ❤️ by [Ravindra Dhadave](https://github.com/ravi8555)

## Key Updates in This README

| Item | Correct Value |
| --- | --- |
| **npm package** | `teawind-engine` |
| **Install command** | `npm install teawind-engine` |
| **Import statement** | `import { initTeawind } from 'teawind-engine'` |
| **CDN URL** | `https://cdn.jsdelivr.net/npm/teawind-engine@1.0.0/src/index.js` |
| **GitHub repo** | `https://github.com/ravi8555/teawind-engine.git` |
| **Stars badge** | Points to your GitHub repo |
| **Clone command** | Uses your GitHub URL |

Save this as `README.md` in your project root. It's now consistent with both your npm package and GitHub repository! 🚀