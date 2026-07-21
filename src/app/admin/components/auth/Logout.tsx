"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Tooltip from "../common/Tooltip";
import { ColorRing } from "react-loader-spinner";
import Link from "next/link";
import Image from "next/image";
import { TooltipProps } from "@/types/tooltipContext";

const Logout = () => {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<TooltipProps | null>(null);

  const showTooltip = ({ message, type = "info" }: TooltipProps) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        setTimeout(() => {
          router.push("/admin/signin");
        }, 1000);
        showTooltip({ message: data.message, type: "success" });
      }
    } catch (err) {
      const error = err as Error;
      showTooltip({ message: error.message, type: "error" });
    }
  };
  
  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <Link href="/">
        <Image
          src="/images/logo/logo.png"
          alt="logo"
          width={160}
          height={50}
          quality={100}
          className="sm:w-80 w-60"
          loading="eager"
        />
      </Link>
      <ColorRing
        visible={true}
        height="130"
        width="130"
        ariaLabel="color-ring-loading"
        colors={["#891503", "#B88A2A", "#D9AE4A", "#891503", "#B88A2A"]}
      />
      <p className="text-3xl animate-pulse text-primary">
        Redirecting to sign in page....
      </p>
    </div>
  );
};

export default Logout;
