"use client";
import { TooltipProps } from "@/types/tooltipContext";
import { useEffect, useState } from "react";

export default function Tooltip({ message, type = "info" }: TooltipProps) {
  
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const colors = {
    success: "bg-success",
    error: "bg-error",
    info: "bg-learning",
  };

  return (
    <div
      className={`fixed top-6 right-6 text-white px-4 py-2 rounded shadow-lg transition-all duration-300 ${colors[type]} z-50`}
    >
      {message}
    </div>
  );
}