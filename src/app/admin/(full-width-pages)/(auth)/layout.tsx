import Image from "next/image";
import Link from "next/link";
import React from "react";
import GridShape from "../../components/common/GridShape";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 sm:p-0">
      <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col sm:p-0">
        {children}

        <div className="lg:w-[50%] w-full h-full bg-gray-50 lg:grid items-center hidden">
          <div className="relative items-center justify-center  flex z-1">
            <GridShape />

            <div className="flex flex-col gap-3 items-center">
              <Link href="/admin" className="block">
                <Image
                  width={150}
                  height={200}
                  src="/images/logo/soult-it-logo.png"
                  alt="Logo"
                />
              </Link>
              <p className="text-center uppercase font-semibold font-serif text-primary text-sm sm:text-xl">
                SoUl IT Networks 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
