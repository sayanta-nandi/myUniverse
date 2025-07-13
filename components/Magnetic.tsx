import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const magneticRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const xTo = gsap.quickTo(magneticRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(magneticRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, top, left } =
        magneticRef.current?.getBoundingClientRect() || {
          width: 0,
          height: 0,
          top: 0,
          left: 0,
        };
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magneticRef.current?.addEventListener("mousemove", mouseMove);
    magneticRef.current?.addEventListener("mouseleave", mouseLeave);

    return () => {
      magneticRef.current?.removeEventListener("mousemove", mouseMove);
      magneticRef.current?.removeEventListener("mouseleave", mouseLeave);
    };
  });
  return <div ref={magneticRef}>{children}</div>;
};

export default Magnetic;
