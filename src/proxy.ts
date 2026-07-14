import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export const proxy = async (req: NextRequest) => {
    const token = req.cookies.get("token")?.value;
    const secret = process.env.JWT_SECRET;
    if (!token || !secret) {
        return NextResponse.redirect(new URL("/admin/signin", req.url));
    }
    try {
        await jwtVerify(token, new TextEncoder().encode(secret));
        return NextResponse.next();
    } catch (err) {
        console.error("JWT verification failed:", err);
        return NextResponse.redirect(new URL("/admin/signin", req.url));
    }
}

export const config = {
    matcher: [
        "/admin/dashboard/:path*",
        "/admin/topbar/:path*",
        "/admin/Menubar/:path*",
        "/admin/home-page/:path*",
        "/admin/about-us/:path*",
        "/admin/teams/:path*",
        "/admin/customer/:path*",
        "/admin/suport/:path*",
        "/admin/careers/:path*",
        "/admin/services/:path*",
        "/admin/solutions/:path*",
        "/admin/category/:path*",
        "/admin/contact-us/:path*",
        "/admin/profile/:path*",
        "/admin/footer/:path*",
    ],
};