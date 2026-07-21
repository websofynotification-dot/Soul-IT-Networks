"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ColorRing } from "react-loader-spinner";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      setTimeout(() => {
        if (token) {
          router.push("/admin/signin");
        } else {
          router.push("/admin/signin");
        }
      }, 2000);
    }
    const timer = setTimeout(() => setLoading(true), 2000);
    return () => clearTimeout(timer);
  }, [router]);

  if (!loading) return null;

  return (
    <div className="flex flex-col h-screen items-center justify-center">
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
}
