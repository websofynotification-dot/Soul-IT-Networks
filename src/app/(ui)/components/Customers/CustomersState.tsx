"use client"
import { cardProps } from '@/types/cardContext'
import React, { useEffect, useState } from 'react'
import { PreLoader } from '../Common/PreLoader'

export const CustomersState: React.FC<cardProps> = ({ cardData }) => {
    const statsData = Array.isArray(cardData) ? cardData.filter(item => item.description?.includes("customers")) : [];
    const [counts, setCounts] = useState(statsData.map(() => 0));


    useEffect(() => {
        statsData.forEach((stat, index) => {
            let start = 0;
            const end = Number(stat.title);
            const speed = 20;

            const counter = setInterval(() => {
                start += Math.ceil(end / 100);
                setCounts((prev) => {
                    const updated = [...prev];
                    updated[index] = start >= end ? end : start;
                    return updated;
                });

                if (start >= end) clearInterval(counter);
            }, speed);
        });
    }, []);

    return (
        <section className="pt-12">

            <div className="container">
                <div className="bg-gray-50 backdrop-blur-md
                    rounded-xl shadow-lg p-4 grid grid-cols-4 gap-4 border border-secondary">
                    {
                        statsData?.length === 0 ? <div className="" ><PreLoader /></div> :
                            <>
                                {statsData?.map((stat, index) => (
                                    <div
                                        key={stat._id}
                                        className="text-center"
                                        data-aos="zoom-in"
                                        data-aos-delay={`${index * 150}`}
                                    >
                                        <h2
                                            className={`text-22 sm:text-28 font-bold text-primary`}
                                        >
                                            {Number(stat.title) === 1180
                                                ? `₹${counts[index]}M`
                                                : counts[index]}
                                            +
                                        </h2>
                                        <p
                                            className={`text-xs sm:text-sm font-medium text-SlateBlueText`}
                                        >
                                            {stat.description?.split("-")[0].trim()}
                                        </p>
                                    </div>
                                ))}</>
                    }
                </div>
            </div>

        </section>
    )
}
