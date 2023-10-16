"use client";

import { useEffect } from "react";

const TextScroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <div className="scroller">
      <ul className="tag-list scroller__inner">
        <li>General Roof Repairs</li>
        <li>New Roofs & Reroofs</li>
        <li>Emergency Roofing</li>
        <li>Lead Work & Flashing</li>
        <li>Cladding, Fascias & Soffits</li>
        <li>Guttering Systems</li>
        <li>Flat Roofing</li>
        <li>Pitched Roofing</li>
        <li>Felt Roofing</li>
        <li>Chimney Work</li>
        <li>Asbestos Removal</li>
        <li>Roof Cleaning</li>
      </ul>
    </div>
  );
};

export default TextScroller;
