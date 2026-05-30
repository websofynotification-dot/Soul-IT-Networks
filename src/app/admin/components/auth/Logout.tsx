"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import Tooltip from '../common/Tooltip';
import { ThreeDots } from 'react-loader-spinner';
import Link from 'next/link';
import Image from 'next/image'

const Logout = () => {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(null);
    const router = useRouter();
    const showTooltip = (
        message: string,
        type: "success" | "error" | "info" = "info"
    ) => {
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
                }, 1000)
                showTooltip(data.message, "success");
            }
        }  // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (err: any) {
            showTooltip(err, "success");
        }
    };
    useEffect(() => {
        handleLogout()
    }, [])

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <Link href="/">
                <Image
                    src="/images/logo/soult-it-logo.png"
                    alt="logo"
                    width={160}
                    height={50}
                    quality={100}
                    className='sm:w-44 w-10'
                    loading="eager"
                />
            </Link>
            <ThreeDots
                visible={true}
                height="50"
                width="80"
                color="#891503"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
            />
            <p className="text-lg text-primary animate-pulse">Redirecting to sign in page....</p>
        </div>
    )
}

export default Logout