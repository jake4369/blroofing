"use client";

import { useEffect } from "react";

import Image from "next/image";

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
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
        <li>New Roofs & Reroofs</li>
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
        <li>Emergency Roofing</li>
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
        <li>Lead Work & Flashing</li>
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
        <li>Cladding, Fascias & Soffits</li>
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
        <li>Guttering Systems</li>
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
        <li>Flat Roofing</li>
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
        <li>Pitched Roofing</li>
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
        <li>Felt Roofing</li>
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
        <li>Chimney Work</li>
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
        <li>Asbestos Removal</li>
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
        <li>Roof Cleaning</li>
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
        />
      </ul>
    </div>
  );
};

export default TextScroller;
