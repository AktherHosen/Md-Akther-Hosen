import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function SplitText({ text, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const triggerAnimation = () => {
      document.fonts.ready.then(() => {
        if (!containerRef.current) return;

        // Ensure container is visible before animation
        containerRef.current.style.visibility = "visible";

        const { words } = splitText(containerRef.current.querySelector("h1"));

        animate(
          words,
          { opacity: [0, 1], y: [10, 0] },
          {
            type: "spring",
            duration: 2,
            bounce: 0,
            delay: stagger(0.05),
          }
        );
      });
    };

    // IntersectionObserver logic
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimation();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    observer.observe(containerRef.current);

    // Check if the element is already visible at mount
    if (containerRef.current.getBoundingClientRect().top < window.innerHeight) {
      triggerAnimation();
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="split-text-container" ref={containerRef}>
      <h1 className={`split-text ${className}`}>{text}</h1>
      <style>{`
        .split-text-container {
          visibility: hidden;
        }

        .split-word {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}
