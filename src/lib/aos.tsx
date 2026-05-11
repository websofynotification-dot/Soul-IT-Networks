"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Aoscompo() {
  useEffect(() => {
  import("aos").then(AOS => {
    AOS.init({ once: true });
  });
}, []);


  return null;
}
