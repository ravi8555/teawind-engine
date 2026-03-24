import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { applyStyles } from '../src/index.js';

describe('Teawind CSS Engine Tests', () => {
  let dom;
  let document;
  let element;

  beforeEach(() => {
    dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    document = dom.window.document;
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    dom.window.close();
  });

  describe('Color Tests', () => {
    it('should apply red background color', () => {
      element.className = 'chai-bg-red';
      applyStyles(element);
      expect(element.style.backgroundColor).toBe('rgb(239, 68, 68)');
    });

    it('should apply blue text color', () => {
      element.className = 'chai-text-blue';
      applyStyles(element);
      expect(element.style.color).toBe('rgb(59, 130, 246)');
    });

    it('should apply green background', () => {
      element.className = 'chai-bg-green';
      applyStyles(element);
      expect(element.style.backgroundColor).toBe('rgb(34, 197, 94)');
    });
  });

  describe('Spacing Tests', () => {
    it('should apply padding correctly (1 unit = 4px)', () => {
      element.className = 'chai-p-10';
      applyStyles(element);
      expect(element.style.padding).toBe('40px');
    });

    it('should apply margin correctly', () => {
      element.className = 'chai-m-20';
      applyStyles(element);
      expect(element.style.margin).toBe('80px');
    });

    it('should apply horizontal padding', () => {
      element.className = 'chai-px-15';
      applyStyles(element);
      expect(element.style.paddingLeft).toBe('60px');
      expect(element.style.paddingRight).toBe('60px');
    });
  });

  describe('Typography Tests', () => {
    it('should apply font size', () => {
      element.className = 'chai-text-24';
      applyStyles(element);
      expect(element.style.fontSize).toBe('24px');
    });

    it('should apply bold font weight', () => {
      element.className = 'chai-font-bold';
      applyStyles(element);
      expect(element.style.fontWeight).toBe('bold');
    });

    it('should apply text alignment', () => {
      element.className = 'chai-text-center';
      applyStyles(element);
      expect(element.style.textAlign).toBe('center');
    });
  });

  describe('Layout Tests', () => {
    it('should apply flex display', () => {
      element.className = 'chai-flex';
      applyStyles(element);
      expect(element.style.display).toBe('flex');
    });

    it('should apply flex column direction', () => {
      element.className = 'chai-flex-col';
      applyStyles(element);
      expect(element.style.flexDirection).toBe('column');
    });
  });

  describe('Border Tests', () => {
    it('should apply border width', () => {
      element.className = 'chai-border-2';
      applyStyles(element);
      expect(element.style.borderWidth).toBe('2px');
      expect(element.style.borderStyle).toBe('solid');
    });

    it('should apply border radius', () => {
      element.className = 'chai-rounded-10';
      applyStyles(element);
      expect(element.style.borderRadius).toBe('10px');
    });
  });

  describe('Transform Tests', () => {
    it('should apply scale transform', () => {
      element.className = 'chai-scale-2';
      applyStyles(element);
      expect(element.style.transform).toBe('scale(2)');
    });

    it('should apply rotate transform', () => {
      element.className = 'chai-rotate-45';
      applyStyles(element);
      expect(element.style.transform).toBe('rotate(45deg)');
    });
  });

  describe('Multiple Classes Test', () => {
    it('should apply multiple classes correctly', () => {
      element.className = 'chai-bg-red chai-text-white chai-p-20 chai-rounded-10';
      applyStyles(element);
      expect(element.style.backgroundColor).toBe('rgb(239, 68, 68)');
      expect(element.style.color).toBe('rgb(255, 255, 255)');
      expect(element.style.padding).toBe('80px');
      expect(element.style.borderRadius).toBe('10px');
    });
  });
});