"use client";
import { FC, useEffect } from "react";
import "aos/dist/aos.css";

export const Aoscompo: FC = () => {
  useEffect(() => {
    import("aos").then(AOS => {
      AOS.init({ once: true });
    });
  }, []);
  return null;
}
