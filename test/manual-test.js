// Simple console-based testing for Teawind
import { JSDOM } from 'jsdom';
import { applyStyles } from '../src/index.js';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const document = dom.window.document;

console.log('🧪 Starting Teawind Manual Tests...\n');

let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        console.log(`✅ ${name}`);
        passed++;
    } catch (error) {
        console.log(`❌ ${name}: ${error.message}`);
        failed++;
    }
}

// Color Tests
test('Red background', () => {
    const div = document.createElement('div');
    div.className = 'chai-bg-red';
    applyStyles(div);
    if (div.style.backgroundColor !== 'rgb(239, 68, 68)') throw new Error('Wrong color');
});

test('Blue text', () => {
    const div = document.createElement('div');
    div.className = 'chai-text-blue';
    applyStyles(div);
    if (div.style.color !== 'rgb(59, 130, 246)') throw new Error('Wrong color');
});

// Spacing Tests
test('Padding p-10 (40px)', () => {
    const div = document.createElement('div');
    div.className = 'chai-p-10';
    applyStyles(div);
    if (div.style.padding !== '40px') throw new Error('Wrong padding');
});

test('Margin m-20 (80px)', () => {
    const div = document.createElement('div');
    div.className = 'chai-m-20';
    applyStyles(div);
    if (div.style.margin !== '80px') throw new Error('Wrong margin');
});

// Typography Tests
test('Font size text-24', () => {
    const div = document.createElement('div');
    div.className = 'chai-text-24';
    applyStyles(div);
    if (div.style.fontSize !== '24px') throw new Error('Wrong font size');
});

test('Font bold', () => {
    const div = document.createElement('div');
    div.className = 'chai-font-bold';
    applyStyles(div);
    if (div.style.fontWeight !== 'bold') throw new Error('Wrong font weight');
});

test('Text center', () => {
    const div = document.createElement('div');
    div.className = 'chai-text-center';
    applyStyles(div);
    if (div.style.textAlign !== 'center') throw new Error('Wrong text align');
});

// Layout Tests
test('Flex display', () => {
    const div = document.createElement('div');
    div.className = 'chai-flex';
    applyStyles(div);
    if (div.style.display !== 'flex') throw new Error('Wrong display');
});

// Border Tests
test('Border width', () => {
    const div = document.createElement('div');
    div.className = 'chai-border-2';
    applyStyles(div);
    if (div.style.borderWidth !== '2px') throw new Error('Wrong border width');
});

test('Border radius', () => {
    const div = document.createElement('div');
    div.className = 'chai-rounded-10';
    applyStyles(div);
    if (div.style.borderRadius !== '10px') throw new Error('Wrong border radius');
});

// Transform Tests
test('Scale transform', () => {
    const div = document.createElement('div');
    div.className = 'chai-scale-2';
    applyStyles(div);
    if (div.style.transform !== 'scale(2)') throw new Error('Wrong transform');
});

test('Rotate transform', () => {
    const div = document.createElement('div');
    div.className = 'chai-rotate-45';
    applyStyles(div);
    if (div.style.transform !== 'rotate(45deg)') throw new Error('Wrong transform');
});

// Multiple Classes Test
test('Multiple classes combined', () => {
    const div = document.createElement('div');
    div.className = 'chai-bg-red chai-text-white chai-p-20 chai-rounded-10';
    applyStyles(div);
    if (div.style.backgroundColor !== 'rgb(239, 68, 68)') throw new Error('BG failed');
    if (div.style.color !== 'rgb(255, 255, 255)') throw new Error('Text failed');
    if (div.style.padding !== '80px') throw new Error('Padding failed');
    if (div.style.borderRadius !== '10px') throw new Error('Radius failed');
});

// Summary
console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
if (failed === 0) {
    console.log('🎉 All tests passed! Teawind is ready for production!');
} else {
    console.log('⚠️ Some tests failed. Please check the implementation.');
}