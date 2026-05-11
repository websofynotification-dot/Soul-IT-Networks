import { footer } from '@/app/api/data'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { LuTwitter } from 'react-icons/lu';

export const SocialMedialCta = () => {
    const icons = [<FiYoutube />, <FaFacebook />, <FaInstagram />, <FaLinkedin />, <LuTwitter />];

    return (
        <section className='bg-gray-50'>
            <div className='container'>
                <div className="bg-primary rounded-2xl text-white py-10">
                    <div className="flex flex-col items-center gap-6">
                        <h3 className="text-lg font-medium">
                            Follow our journey. Spread awareness.
                        </h3>
                        <div className="flex gap-5">
                            {(Array.isArray(footer?.socialMedia) ? footer.socialMedia : []).map((item, index) => (
                                <Link key={index}
                                    title={item.title}
                                    href={item.url}
                                    target="_blank"
                                    className="w-12 h-12 text-MidnightNavyText flex items-center justify-center bg-white hover:text-white rounded-full shadow hover:bg-secondary  hover:border transition">
                                    {icons[index % icons.length]}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
