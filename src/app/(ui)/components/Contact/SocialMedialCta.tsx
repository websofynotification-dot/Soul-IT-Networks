import { socialMediaIcon } from '@/app/api/data'
import { topbarProps } from '@/types/topbarContext';
import Link from 'next/link'
import React from 'react';
import { PreLoader } from '../Common/PreLoader';

export const SocialMedialCta: React.FC<topbarProps> = ({ topbarData }) => {

    return (
        <section className='bg-gray-50'>
            <div className='container'>
                <div className="bg-primary rounded-2xl text-white py-10">
                    <div className="flex flex-col items-center gap-6">
                        <h3 className="text-lg font-medium">
                            Follow our journey. Spread awareness.
                        </h3>
                        {
                            topbarData.length === 0 ? <PreLoader /> :
                                <div className="flex gap-5">
                                    {(Array.isArray(topbarData[0]?.socialMedia) ? topbarData[0]?.socialMedia : []).map((item, index) => (
                                        <Link key={index}
                                            href={item.socialMediaUrl}
                                            target="_blank"
                                            className="w-12 h-12 text-MidnightNavyText flex items-center justify-center bg-white hover:text-white rounded-full shadow hover:bg-secondary  hover:border transition">
                                            {socialMediaIcon[index % socialMediaIcon.length]}
                                        </Link>
                                    ))}
                                </div>
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
