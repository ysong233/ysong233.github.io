/**
 * Cyberpunk Theme JavaScript Effects
 * Handles typewriter animation, performance optimization, and mobile experience
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    typewriterSpeed: 50, // ms per character
    typewriterDelay: 500, // ms before starting
    enableOnMobile: true,
    maxRetries: 3,
    batteryOptimization: true
  };

  // Performance detection
  const isLowEndDevice = () => {
    return (
      navigator.hardwareConcurrency <= 2 ||
      navigator.deviceMemory <= 2 ||
      navigator.connection?.effectiveType === '2g'
    );
  };

  const isMobile = () => {
    return window.innerWidth < 640;
  };

  const shouldEnableEffects = () => {
    // Respect user's reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }

    // Check if effects should be enabled on mobile
    if (isMobile() && !CONFIG.enableOnMobile) {
      return false;
    }

    // Reduce effects on low-end devices
    if (isLowEndDevice()) {
      return false;
    }

    // Check battery level if optimization is enabled
    if (CONFIG.batteryOptimization && 'getBattery' in navigator) {
      navigator.getBattery().then(battery => {
        if (battery.level < 0.3 && !battery.charging) {
          console.log('Cyberpunk: Effects disabled to preserve battery');
          return false;
        }
      });
    }

    return true;
  };

  // Typewriter Effect
  class TypewriterEffect {
    constructor(element, options = {}) {
      this.element = element;
      this.text = element.textContent;
      this.speed = options.speed || CONFIG.typewriterSpeed;
      this.delay = options.delay || CONFIG.typewriterDelay;
      this.cursorChar = options.cursor || '|';
      this.isComplete = false;
      this.originalContent = element.innerHTML;

      this.init();
    }

    init() {
      if (!shouldEnableEffects()) {
        return;
      }

      // Clear the element content
      this.element.textContent = '';
      this.element.setAttribute('data-typewriter', 'active');

      // Add cursor
      this.cursor = document.createElement('span');
      this.cursor.className = 'typewriter-cursor';
      this.cursor.textContent = this.cursorChar;
      this.cursor.style.animation = 'blink-caret 0.75s step-end infinite';
      this.element.appendChild(this.cursor);

      // Start typing after delay
      setTimeout(() => this.type(), this.delay);
    }

    type() {
      let charIndex = 0;

      const typeNextChar = () => {
        if (charIndex < this.text.length) {
          // Insert character before cursor
          const char = document.createTextNode(this.text.charAt(charIndex));
          this.element.insertBefore(char, this.cursor);
          charIndex++;

          // Schedule next character
          setTimeout(typeNextChar, this.speed);
        } else {
          this.isComplete = true;
          this.element.setAttribute('data-typewriter', 'complete');
          this.onComplete();
        }
      };

      typeNextChar();
    }

    onComplete() {
      // Keep cursor blinking
      console.log('Typewriter effect complete');
    }

    destroy() {
      if (this.element.hasAttribute('data-typewriter')) {
        this.element.innerHTML = this.originalContent;
      }
    }
  }

  // Initialize typewriter effects on specific elements
  function initTypewriterEffects() {
    const selectors = [
      '.feature-text h1',
      '.feature-text h2',
      '.page-title',
      'article h1',
      'article h2'
    ];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        // Skip if already initialized
        if (element.hasAttribute('data-typewriter')) {
          return;
        }

        new TypewriterEffect(element, {
          speed: isMobile() ? CONFIG.typewriterSpeed * 1.5 : CONFIG.typewriterSpeed
        });
      });
    });
  }

  // Matrix Rain Effect (Optional - disabled by default for performance)
  class MatrixRain {
    constructor(canvas, options = {}) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.fontSize = options.fontSize || 14;
      this.columns = options.columns || 50;
      this.drops = [];
      this.isRunning = false;
      this.animationId = null;

      this.init();
    }

    init() {
      if (!shouldEnableEffects()) {
        return;
      }

      this.resize();
      window.addEventListener('resize', () => this.resize());

      // Initialize drops
      this.drops = Array(Math.floor(this.canvas.width / this.fontSize)).fill(1);
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.columns = Math.floor(this.canvas.width / this.fontSize);
    }

    start() {
      if (this.isRunning) return;
      this.isRunning = true;
      this.animate();
    }

    stop() {
      this.isRunning = false;
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
    }

    animate() {
      if (!this.isRunning) return;

      // Semi-transparent black to create trail effect
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // Green text
      this.ctx.fillStyle = '#00ff9d';
      this.ctx.font = `${this.fontSize}px 'Share Tech Mono', monospace`;

      // Draw characters
      for (let i = 0; i < this.drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

        // Reset drop if it's off screen or randomly
        if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
          this.drops[i] = 0;
        }
        this.drops[i]++;
      }

      this.animationId = requestAnimationFrame(() => this.animate());
    }
  }

  // Scanline Effect
  function addScanlineEffect() {
    if (!shouldEnableEffects()) return;

    const scanlines = document.createElement('div');
    scanlines.className = 'cyber-scanlines';
    scanlines.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 9999;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
      );
      opacity: 0.3;
    `;

    document.body.appendChild(scanlines);
  }

  // Performance monitoring
  function monitorPerformance() {
    if (!window.performance || !window.PerformanceObserver) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 100) {
          console.warn(`Cyberpunk: Long task detected: ${entry.duration}ms`);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // PerformanceObserver might not support longtask
    }
  }

  // Page visibility API for battery optimization
  function handleVisibilityChange() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Pause animations when tab is not visible
        document.body.classList.add('cyber-paused');
      } else {
        // Resume animations
        document.body.classList.remove('cyber-paused');
      }
    });
  }

  // Smooth scroll for navigation
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Initialize everything when DOM is ready
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initTypewriterEffects();
        addScanlineEffect();
        monitorPerformance();
        handleVisibilityChange();
        initSmoothScroll();
      });
    } else {
      initTypewriterEffects();
      addScanlineEffect();
      monitorPerformance();
      handleVisibilityChange();
      initSmoothScroll();
    }
  }

  // Export public API
  window.Cyberpunk = {
    init,
    Typewriter: TypewriterEffect,
    MatrixRain,
    isLowEndDevice,
    isMobile,
    shouldEnableEffects,
    CONFIG
  };

  // Auto-initialize
  init();

})();
