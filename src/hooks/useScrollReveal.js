import { useEffect } from 'react';

/**
 * Custom Hook to automatically monitor all elements with the 'reveal' class
 * and apply the 'active' class when they enter the viewport.
 */
export default function useScrollReveal(triggerDeps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -60px 0px', // Trigger slightly before coming fully into view
      }
    );

    // Observe all current reveal elements
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // MutationObserver to watch for elements added dynamically (like routing or filtering)
    const mutationObserver = new MutationObserver(() => {
      const currentElements = document.querySelectorAll('.reveal:not(.active)');
      currentElements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, triggerDeps);
}
