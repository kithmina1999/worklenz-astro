// public/counter.js

function animateCounter(element, start, end, duration) {
  console.log('Animating counter:', element);
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

function initCounters() {
  console.log('Initializing counters...');
  const counters = document.querySelectorAll('.counter');
  if (counters.length === 0) {
      console.log('No counters found');
      return;
  }

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
              console.log('Counter intersecting:', counter);
              animateCounter(counter, 0, endValue, 2000);
              observer.unobserve(counter);
          }
      });
  };

  // Clean up any existing observers
  if (window.counterObserver) {
      window.counterObserver.disconnect();
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  counters.forEach((counter) => observer.observe(counter));

  // Store observer globally to clean up later
  window.counterObserver = observer;
}

function resetCounters() {
  console.log('Resetting counters...');
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
      counter.textContent = '+0';
  });
}

function reinitializeCounters() {
  console.log('Reinitializing counters...');
  resetCounters();
  initCounters();
}

// Function to check if URL has changed
function checkUrlChange(callback) {
  let lastUrl = location.href;
  new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
          lastUrl = url;
          callback();
      }
  }).observe(document, { subtree: true, childList: true });
}

// Initialize counters on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event');
  reinitializeCounters();
});

// Reinitialize counters on pageshow
window.addEventListener('pageshow', (event) => {
  console.log('Pageshow event', event);
  reinitializeCounters();
});

// Reinitialize counters on visibilitychange
document.addEventListener('visibilitychange', () => {
  console.log('Visibility change event:', document.visibilityState);
  if (document.visibilityState === 'visible') {
      reinitializeCounters();
  }
});

// Reinitialize counters on popstate (browser navigation)
window.onpopstate = function(event) {
  console.log('Popstate event', event);
  reinitializeCounters();
};

// Reinitialize counters on URL change
checkUrlChange(() => {
  console.log('URL change detected');
  reinitializeCounters();
});
