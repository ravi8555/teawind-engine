// src/index.js
import { styleMap, parseDynamicClass } from './core/parser.js';
import { injectStyles, keyframes } from './core/styles.js';
import { initObserver } from './core/observer.js';

// =========================
// APPLY STYLES FUNCTION
// =========================
export function applyStyles(element) {
  if (!element || !element.className) return;

  const classNames = element.className.split(/\s+/);
  const styleToApply = {};
  const remainingClasses = [];

  classNames.forEach((className) => {
    if (className.startsWith("chai-")) {
      const cleanClass = className.replace("chai-", "");
      const style = styleMap[cleanClass];
      
      if (style) {
        Object.assign(styleToApply, style);
      }
      
      parseDynamicClass(cleanClass, styleToApply);
    } else {
      remainingClasses.push(className);
    }
  });

  Object.assign(element.style, styleToApply);
  element.className = remainingClasses.join(" ");
  
  // Apply hover effects
  applyHoverEffects(element);
}

// =========================
// HOVER EFFECTS
// =========================
function applyHoverEffects(element) {
  const classNames = element.className.split(/\s+/);
  
  classNames.forEach(className => {
    if (className === "chai-hover-scale") {
      element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.05)";
        element.style.transition = "transform 0.2s";
      });
      element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1)";
      });
    }
    
    if (className === "chai-hover-bg-red") {
      const originalBg = element.style.backgroundColor;
      element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "#ef4444";
      });
      element.addEventListener("mouseleave", () => {
        element.style.backgroundColor = originalBg || "";
      });
    }
    
    if (className === "chai-hover-text-white") {
      const originalColor = element.style.color;
      element.addEventListener("mouseenter", () => {
        element.style.color = "#ffffff";
      });
      element.addEventListener("mouseleave", () => {
        element.style.color = originalColor || "";
      });
    }
    
    if (className === "chai-hover-shadow") {
      element.addEventListener("mouseenter", () => {
        element.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      });
      element.addEventListener("mouseleave", () => {
        element.style.boxShadow = "";
      });
    }
    
    if (className === "chai-hover-border") {
      element.addEventListener("mouseenter", () => {
        element.style.borderColor = "#ef4444";
        element.style.borderWidth = "2px";
      });
      element.addEventListener("mouseleave", () => {
        element.style.borderColor = "";
        element.style.borderWidth = "";
      });
    }
  });
}

// =========================
// INITIALIZATION
// =========================
// Inject base styles when the engine loads
if (typeof document !== 'undefined') {
  injectStyles();
}

// Main initialization function
export function initTeawind(container = document.body, options = {}) {
  // First apply styles to all existing elements
  document.querySelectorAll('[class]').forEach(ele => {
    applyStyles(ele);
  });
  
  // Then initialize observer for dynamic elements
  return initObserver(container, options);
}

// Export everything
export { styleMap, parseDynamicClass };
export { initObserver };
export { injectStyles, keyframes };

// Default export
export default {
  init: initTeawind,
  applyStyles,
  injectStyles,
  keyframes,
  version: '1.0.0'
};