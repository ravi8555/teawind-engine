/**
 * Teawind Observer Module
 * Handles DOM mutation observation and style application
 */

import { applyStyles } from '../index.js';

/**
 * Applies Teawind styles to all elements with class attributes
 * @param {HTMLElement} container - The container element to scan (default: document.body)
 */
export function applyToExistingElements(container = document.body) {
  const elements = container.querySelectorAll('[class]');
  elements.forEach(element => {
    applyStyles(element);
  });
  return elements.length;
}

/**
 * Creates and configures a MutationObserver to watch for new elements
 * @param {HTMLElement} container - The container to observe
 * @param {Object} options - Observer options
 * @returns {MutationObserver} The configured observer instance
 */
export function createObserver(container = document.body, options = {}) {
  const defaultOptions = {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  };

  const observerOptions = { ...defaultOptions, ...options };

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // Handle added nodes
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          // Check if it's an element node
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Apply styles to the new element itself
            if (node.hasAttribute && node.hasAttribute('class')) {
              applyStyles(node);
            }
            
            // Also apply styles to any child elements with classes
            const childElements = node.querySelectorAll('[class]');
            childElements.forEach(child => {
              applyStyles(child);
            });
          }
        });
      }
      
      // Handle attribute changes (optional)
      if (observerOptions.attributes && mutation.type === 'attributes') {
        if (mutation.attributeName === 'class') {
          applyStyles(mutation.target);
        }
      }
    });
  });

  observer.observe(container, observerOptions);
  return observer;
}

/**
 * Initializes the observer and applies styles to existing elements
 * @param {HTMLElement} container - Container to observe
 * @param {Object} options - Observer options
 * @returns {Object} Observer instance and cleanup function
 */
export function initObserver(container = document.body, options = {}) {
  // Apply to existing elements
  const elementCount = applyToExistingElements(container);
  console.log(`🍵 Teawind: Applied styles to ${elementCount} existing elements`);
  
  // Create observer for new elements
  const observer = createObserver(container, options);
  
  // Return cleanup function
  return {
    observer,
    disconnect: () => {
      observer.disconnect();
      console.log('🍵 Teawind: Observer disconnected');
    }
  };
}

/**
 * Watches for class changes on specific elements
 * @param {HTMLElement} element - Element to watch
 * @returns {MutationObserver} Observer for class changes
 */
export function watchClassChanges(element) {
  if (!element) return null;
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        applyStyles(element);
      }
    });
  });
  
  observer.observe(element, { attributes: true, attributeFilter: ['class'] });
  return observer;
}

/**
 * Debounced observer for performance optimization
 * @param {HTMLElement} container - Container to observe
 * @param {number} delay - Debounce delay in ms
 * @returns {Object} Observer with debounced updates
 */
export function createDebouncedObserver(container = document.body, delay = 100) {
  let timeoutId = null;
  let pendingElements = new Set();
  
  const processElements = () => {
    pendingElements.forEach(element => {
      applyStyles(element);
    });
    pendingElements.clear();
  };
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          pendingElements.add(node);
          
          // Add child elements
          node.querySelectorAll('[class]').forEach(child => {
            pendingElements.add(child);
          });
        }
      });
    });
    
    // Clear previous timeout and set new one
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(processElements, delay);
  });
  
  observer.observe(container, { childList: true, subtree: true });
  
  return {
    observer,
    disconnect: () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    }
  };
}

// Export default object with all methods
export default {
  init: initObserver,
  createObserver,
  applyToExistingElements,
  watchClassChanges,
  createDebouncedObserver
};