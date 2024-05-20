// public/counter.js
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      let currentValue = Math.floor(progress * (end - start) + start);
      
      // Format number with K suffix if it's 1000 or more
      if (currentValue >= 1000) {
        currentValue = (currentValue / 1000).toFixed(1) + 'K';
      }
      
      element.textContent = `+${currentValue}`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const endValue = parseInt(counter.getAttribute('data-end'), 10);
          animateCounter(counter, 0, endValue, 2000);
          observer.unobserve(counter);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    counters.forEach((counter) => observer.observe(counter));
  });
  