/**
 * Teawind Styles Module
 * Contains all style definitions, animations, and utility classes in JavaScript
 */

// =========================
// BASE STYLES (Applied globally)
// =========================
export const baseStyles = {
  // Box sizing reset for all elements
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0
  },
  
  '*::before': {
    boxSizing: 'border-box'
  },
  
  '*::after': {
    boxSizing: 'border-box'
  },
  
  // Base transition for smooth hover effects
  '[class*="chai-"]': {
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

// =========================
// HOVER TRANSITIONS
// =========================
export const hoverStyles = {
  '.chai-hover-scale': {
    transition: 'transform 0.2s ease'
  },
  
  '.chai-hover-bg-red': {
    transition: 'all 0.25s ease'
  },
  
  '.chai-hover-text-white': {
    transition: 'all 0.25s ease'
  },
  
  '.chai-hover-shadow': {
    transition: 'all 0.25s ease'
  },
  
  '.chai-hover-border': {
    transition: 'all 0.25s ease'
  }
};

// =========================
// DISPLAY UTILITIES
// =========================
export const displayStyles = {
  'chai-flex': { display: 'flex' },
  'chai-inline-flex': { display: 'inline-flex' },
  'chai-block': { display: 'block' },
  'chai-inline-block': { display: 'inline-block' },
  'chai-inline': { display: 'inline' },
  'chai-hidden': { display: 'none' },
  'chai-grid': { display: 'grid' },
  'chai-inline-grid': { display: 'inline-grid' },
  'chai-table': { display: 'table' },
  'chai-table-cell': { display: 'table-cell' }
};

// =========================
// POSITION UTILITIES
// =========================
export const positionStyles = {
  'chai-relative': { position: 'relative' },
  'chai-absolute': { position: 'absolute' },
  'chai-fixed': { position: 'fixed' },
  'chai-sticky': { position: 'sticky' },
  'chai-static': { position: 'static' },
  
  // Position insets
  'chai-inset-0': { top: 0, right: 0, bottom: 0, left: 0 },
  'chai-top-0': { top: 0 },
  'chai-right-0': { right: 0 },
  'chai-bottom-0': { bottom: 0 },
  'chai-left-0': { left: 0 }
};

// =========================
// Z-INDEX UTILITIES
// =========================
export const zIndexStyles = {
  'chai-z-0': { zIndex: 0 },
  'chai-z-10': { zIndex: 10 },
  'chai-z-20': { zIndex: 20 },
  'chai-z-30': { zIndex: 30 },
  'chai-z-40': { zIndex: 40 },
  'chai-z-50': { zIndex: 50 },
  'chai-z-auto': { zIndex: 'auto' }
};

// =========================
// CURSOR UTILITIES
// =========================
export const cursorStyles = {
  'chai-cursor-pointer': { cursor: 'pointer' },
  'chai-cursor-default': { cursor: 'default' },
  'chai-cursor-not-allowed': { cursor: 'not-allowed' },
  'chai-cursor-wait': { cursor: 'wait' },
  'chai-cursor-move': { cursor: 'move' },
  'chai-cursor-grab': { cursor: 'grab' },
  'chai-cursor-grabbing': { cursor: 'grabbing' },
  'chai-cursor-text': { cursor: 'text' }
};

// =========================
// OPACITY UTILITIES
// =========================
export const opacityStyles = {
  'chai-opacity-0': { opacity: 0 },
  'chai-opacity-25': { opacity: 0.25 },
  'chai-opacity-50': { opacity: 0.5 },
  'chai-opacity-75': { opacity: 0.75 },
  'chai-opacity-100': { opacity: 1 }
};

// =========================
// OVERFLOW UTILITIES
// =========================
export const overflowStyles = {
  'chai-overflow-auto': { overflow: 'auto' },
  'chai-overflow-hidden': { overflow: 'hidden' },
  'chai-overflow-visible': { overflow: 'visible' },
  'chai-overflow-scroll': { overflow: 'scroll' },
  'chai-overflow-x-auto': { overflowX: 'auto' },
  'chai-overflow-y-auto': { overflowY: 'auto' },
  'chai-overflow-x-hidden': { overflowX: 'hidden' },
  'chai-overflow-y-hidden': { overflowY: 'hidden' }
};

// =========================
// TRANSFORM ORIGIN
// =========================
export const transformOriginStyles = {
  'chai-origin-center': { transformOrigin: 'center' },
  'chai-origin-top': { transformOrigin: 'top' },
  'chai-origin-bottom': { transformOrigin: 'bottom' },
  'chai-origin-left': { transformOrigin: 'left' },
  'chai-origin-right': { transformOrigin: 'right' },
  'chai-origin-top-left': { transformOrigin: 'top left' },
  'chai-origin-top-right': { transformOrigin: 'top right' },
  'chai-origin-bottom-left': { transformOrigin: 'bottom left' },
  'chai-origin-bottom-right': { transformOrigin: 'bottom right' }
};

// =========================
// BOX SIZING
// =========================
export const boxSizingStyles = {
  'chai-border-box': { boxSizing: 'border-box' },
  'chai-content-box': { boxSizing: 'content-box' }
};

// =========================
// USER SELECT
// =========================
export const userSelectStyles = {
  'chai-select-none': { userSelect: 'none' },
  'chai-select-text': { userSelect: 'text' },
  'chai-select-all': { userSelect: 'all' },
  'chai-select-auto': { userSelect: 'auto' }
};

// =========================
// POINTER EVENTS
// =========================
export const pointerEventsStyles = {
  'chai-pointer-events-none': { pointerEvents: 'none' },
  'chai-pointer-events-auto': { pointerEvents: 'auto' }
};

// =========================
// RESIZE UTILITIES
// =========================
export const resizeStyles = {
  'chai-resize': { resize: 'both' },
  'chai-resize-x': { resize: 'horizontal' },
  'chai-resize-y': { resize: 'vertical' },
  'chai-resize-none': { resize: 'none' }
};

// =========================
// SCROLL BEHAVIOR
// =========================
export const scrollStyles = {
  'chai-scroll-smooth': { scrollBehavior: 'smooth' },
  'chai-scroll-auto': { scrollBehavior: 'auto' }
};

// =========================
// BACKDROP FILTER
// =========================
export const backdropStyles = {
  'chai-backdrop-blur': { backdropFilter: 'blur(8px)' },
  'chai-backdrop-blur-sm': { backdropFilter: 'blur(4px)' },
  'chai-backdrop-blur-lg': { backdropFilter: 'blur(16px)' },
  'chai-backdrop-blur-none': { backdropFilter: 'none' }
};

// =========================
// ANIMATION KEYFRAMES
// =========================
export const keyframes = {
  'chai-pulse': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.5 }
  },
  
  'chai-spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },
  
  'chai-bounce': {
    '0%, 100%': {
      transform: 'translateY(-25%)',
      animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
    },
    '50%': {
      transform: 'translateY(0)',
      animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
    }
  },
  
  'chai-fade-in': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  
  'chai-slide-in': {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' }
  }
};

// =========================
// ANIMATION UTILITIES
// =========================
export const animationStyles = {
  'chai-animate-pulse': {
    animation: 'chai-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  },
  
  'chai-animate-spin': {
    animation: 'chai-spin 1s linear infinite'
  },
  
  'chai-animate-bounce': {
    animation: 'chai-bounce 1s infinite'
  },
  
  'chai-animate-fade-in': {
    animation: 'chai-fade-in 0.5s ease-in'
  },
  
  'chai-animate-slide-in': {
    animation: 'chai-slide-in 0.3s ease-out'
  },
  
  'chai-animate-none': {
    animation: 'none'
  }
};

// =========================
// MEDIA QUERY STYLES (Responsive)
// =========================
export const responsiveStyles = {
  // Small screens (max-width: 640px)
  '@media (max-width: 640px)': {
    '.chai-sm-hidden': { display: 'none' },
    '.chai-sm-block': { display: 'block' },
    '.chai-sm-flex': { display: 'flex' },
    '.chai-sm-text-center': { textAlign: 'center' },
    '.chai-sm-p-10': { padding: '40px' },
    '.chai-sm-m-10': { margin: '40px' }
  },
  
  // Medium screens (641px - 768px)
  '@media (min-width: 641px) and (max-width: 768px)': {
    '.chai-md-hidden': { display: 'none' },
    '.chai-md-block': { display: 'block' },
    '.chai-md-flex': { display: 'flex' }
  },
  
  // Large screens (min-width: 769px)
  '@media (min-width: 769px)': {
    '.chai-lg-hidden': { display: 'none' },
    '.chai-lg-block': { display: 'block' },
    '.chai-lg-flex': { display: 'flex' }
  }
};

// =========================
// PRINT STYLES
// =========================
export const printStyles = {
  '@media print': {
    '.chai-print-hidden': { display: 'none' },
    '.chai-print-block': { display: 'block' },
    '.chai-print-text-black': { color: '#000000' },
    '.chai-print-bg-white': { backgroundColor: '#ffffff' }
  }
};

// =========================
// ACCESSIBILITY UTILITIES
// =========================
export const accessibilityStyles = {
  'chai-sr-only': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0'
  },
  
  'chai-not-sr-only': {
    position: 'static',
    width: 'auto',
    height: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    clip: 'auto',
    whiteSpace: 'normal'
  },
  
  'chai-focus-ring:focus': {
    outline: '2px solid #3b82f6',
    outlineOffset: '2px'
  },
  
  'chai-focus-ring-offset:focus': {
    outline: '2px solid #3b82f6',
    outlineOffset: '4px'
  }
};

// =========================
// DARK MODE SUPPORT
// =========================
export const darkModeStyles = {
  '@media (prefers-color-scheme: dark)': {
    '.chai-dark-bg-gray-800': { backgroundColor: '#1f2937' },
    '.chai-dark-bg-gray-900': { backgroundColor: '#111827' },
    '.chai-dark-text-white': { color: '#ffffff' },
    '.chai-dark-text-gray-300': { color: '#d1d5db' },
    '.chai-dark-border-gray-700': { borderColor: '#374151' }
  }
};

// =========================
// CUSTOM SCROLLBAR STYLES
// =========================
export const scrollbarStyles = {
  '.chai-scrollbar-thin::-webkit-scrollbar': {
    width: '6px',
    height: '6px'
  },
  
  '.chai-scrollbar-thin::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '3px'
  },
  
  '.chai-scrollbar-thin::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '3px'
  },
  
  '.chai-scrollbar-thin::-webkit-scrollbar-thumb:hover': {
    background: '#555'
  },
  
  '.chai-scrollbar-hidden::-webkit-scrollbar': {
    display: 'none'
  }
};

// =========================
// GRID UTILITIES
// =========================
export const gridStyles = {
  'chai-grid-cols-1': { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
  'chai-grid-cols-2': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  'chai-grid-cols-3': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
  'chai-grid-cols-4': { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
  'chai-grid-cols-5': { gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' },
  'chai-gap-0': { gap: '0' },
  'chai-gap-4': { gap: '16px' },
  'chai-gap-8': { gap: '32px' }
};

// =========================
// BACKGROUND GRADIENTS
// =========================
export const gradientStyles = {
  'chai-bg-gradient-to-r': {
    backgroundImage: 'linear-gradient(to right, var(--tw-gradient-stops))'
  },
  'chai-bg-gradient-to-l': {
    backgroundImage: 'linear-gradient(to left, var(--tw-gradient-stops))'
  },
  'chai-from-red': { '--tw-gradient-from': '#ef4444' },
  'chai-to-blue': { '--tw-gradient-to': '#3b82f6' },
  'chai-from-green': { '--tw-gradient-from': '#22c55e' },
  'chai-to-purple': { '--tw-gradient-to': '#a855f7' }
};

// =========================
// COMBINE ALL STYLES
// =========================
export const allStyles = {
  ...baseStyles,
  ...hoverStyles,
  ...displayStyles,
  ...positionStyles,
  ...zIndexStyles,
  ...cursorStyles,
  ...opacityStyles,
  ...overflowStyles,
  ...transformOriginStyles,
  ...boxSizingStyles,
  ...userSelectStyles,
  ...pointerEventsStyles,
  ...resizeStyles,
  ...scrollStyles,
  ...backdropStyles,
  ...animationStyles,
  ...responsiveStyles,
  ...printStyles,
  ...accessibilityStyles,
  ...darkModeStyles,
  ...scrollbarStyles,
  ...gridStyles,
  ...gradientStyles
};

// =========================
// FUNCTION TO GENERATE CSS TEXT
// =========================
export function generateCSS() {
  let cssString = '';
  
  function processStyles(styles, selector = '') {
    Object.entries(styles).forEach(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        // Handle nested objects (media queries, pseudo-classes)
        if (key.startsWith('@') || key.includes(':')) {
          cssString += `${key} {\n`;
          processStyles(value);
          cssString += `}\n`;
        } else {
          // Handle regular CSS rules
          const formattedKey = selector ? `${selector} ${key}` : key;
          cssString += `${formattedKey} {\n`;
          Object.entries(value).forEach(([prop, val]) => {
            cssString += `  ${prop}: ${val};\n`;
          });
          cssString += `}\n`;
        }
      }
    });
  }
  
  processStyles(allStyles);
  return cssString;
}

// =========================
// FUNCTION TO INJECT STYLES INTO DOM
// =========================
export function injectStyles() {
  if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.id = 'teawind-styles';
    styleElement.textContent = generateCSS();
    document.head.appendChild(styleElement);
    console.log('🍵 Teawind styles injected successfully');
  }
}

// Export all style groups
export default {
  base: baseStyles,
  hover: hoverStyles,
  display: displayStyles,
  position: positionStyles,
  zIndex: zIndexStyles,
  cursor: cursorStyles,
  opacity: opacityStyles,
  overflow: overflowStyles,
  transformOrigin: transformOriginStyles,
  boxSizing: boxSizingStyles,
  userSelect: userSelectStyles,
  pointerEvents: pointerEventsStyles,
  resize: resizeStyles,
  scroll: scrollStyles,
  backdrop: backdropStyles,
  animations: animationStyles,
  responsive: responsiveStyles,
  print: printStyles,
  accessibility: accessibilityStyles,
  darkMode: darkModeStyles,
  scrollbar: scrollbarStyles,
  grid: gridStyles,
  gradients: gradientStyles,
  keyframes,
  generateCSS,
  injectStyles,
  all: allStyles
};