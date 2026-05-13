"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { jobProps } from "@/types/jobContext";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { LuAlarmClockCheck } from "react-icons/lu";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdFilterAltOff, MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";
import { PreLoader } from "../Common/PreLoader";
import { categoryProps } from "@/types/categoryContext";
import { VscWorkspaceUntrusted } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";

export const JobOpenings: React.FC<jobProps & categoryProps> = ({ jobData, categoryData }) => {
    const jobCategory = categoryData?.filter(item => item.categoryType === "Job");

    return (
        <Suspense fallback={<p>Loading blogs...</p>}>
            <JobList jobData={jobData} categoryData={jobCategory} />
        </Suspense>

    );
}

export const JobList: React.FC<jobProps & categoryProps> = ({ jobData, categoryData }) => {
    const INITIAL_COUNT = 3;

    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const [filters, setFilters] = useState({
        category: "All",
        type: "All",
        location: "All",
        search: ""
    });
    const router = useRouter();
    useEffect(() => {
        setVisibleCount(INITIAL_COUNT);
    }, [filters]);

    const filterJobs = jobData?.filter((job) => {

        const matchCategory = filters.category === "All" || job.category === filters.category;
        const matchType = filters.type === "All" || job.type === filters.type;
        const matchLocation = filters.location === "All" || job.location === filters.location;
        const matchSearch = filters.search === "" || job.title?.toLowerCase().includes(filters.search.toLowerCase());
        return matchCategory && matchType && matchLocation && matchSearch;
    });

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const isBottom =
            target.scrollTop + target.clientHeight >=
            target.scrollHeight - 20;

        if (isBottom && visibleCount < filterJobs.length) {
            setVisibleCount((prev) => prev + 3);
        }
    };

    return (
        <section className="bg-gray-50">

            <div className="container">
                <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
                    <h3 className="text-primary uppercase">—  Open Positions —</h3>
                    <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
                        Career{" "}<span className="text-secondary">Opportunities</span>
                    </h2>
                    <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
                        Explore opportunities to work on impactful IT projects—<br />
                        and grow your career with us.
                    </p>
                </div>
                <div>

                    {
                        jobData?.length === 0 || categoryData.length === 0 ? <PreLoader /> :
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                <div className="lg:col-span-1 bg-white p-5 rounded-2xl shadow-md h-fit sticky top-20 border border-secondary" data-aos="fade-right" data-aos-delay="150">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-sm  text-MidnightNavyText">Showing {filterJobs.length} jobs</p>
                                        {
                                            (filters.category !== "All" || filters.location !== "All" || filters.type !== "All") &&
                                            <div className="flex items-center justify-center gap-1 cursor-pointer"
                                                onClick={() => setFilters({ ...filters, category: "All", location: "All", type: "All" })}>
                                                <MdFilterAltOff className="text-secondary" />
                                                <p className="text-sm text-MidnightNavyText">Clear all filters</p>
                                            </div>
                                        }
                                    </div>
                                    <div className="mb-3" data-aos="fade-up" data-aos-delay="100">
                                        <label htmlFor="search" className="flex gap-1 items-center mb-1 text-primary text-sm font-semibold">
                                            <CiSearch className="font-medium" />
                                            Search Job
                                        </label>
                                        <input
                                            id="search"
                                            type="text"
                                            placeholder="Search jobs by title..."
                                            value={filters.search}
                                            onChange={(e) => {
                                                setFilters({ ...filters, search: e.target.value });
                                            }}
                                            className="w-full border text-SlateBlueText border-SlateBlueText rounded-lg p-2 outline-none focus:ring-1 focus:ring-SlateBlueText/80"
                                        />
                                    </div>

                                    <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
                                        <label htmlFor="format" className="flex gap-1 items-center mb-1 text-primary text-sm font-semibold">
                                            <BiCategoryAlt size={12} />
                                            Category
                                        </label>
                                        <select
                                            id="jobCategory"
                                            value={filters.category}
                                            onChange={(e) => {
                                                setFilters({ ...filters, category: e.target.value });
                                            }}
                                            className="p-2 w-full border text-MidnightNavyText  border-SlateBlueText rounded-lg outline-none cursor-pointer focus:ring-1 focus:ring-SlateBlueText/80"
                                        >
                                            <option>All</option>

                                            {
                                                categoryData?.map((item, index) => (
                                                    <option key={index}>{item.category}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
                                        <label htmlFor="format" className="flex gap-1 items-center mb-1 text-primary text-sm font-semibold">
                                            <LuAlarmClockCheck size={12} />
                                            Job Type
                                        </label>
                                        <select
                                            id="type"
                                            value={filters.type}
                                            onChange={(e) => {
                                                setFilters({ ...filters, type: e.target.value });
                                            }}
                                            className="p-2 w-full border text-MidnightNavyText  border-SlateBlueText rounded-lg outline-none cursor-pointer focus:ring-1 focus:ring-SlateBlueText/80"
                                        >
                                            <option>All</option>
                                            {
                                                ["Full time", "Internship", "Contractual"]?.map((item, index) => (
                                                    <option key={index}>{item}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="200">
                                        <label htmlFor="format" className="flex gap-1 items-center mb-1 text-primary text-sm font-semibold">
                                            <FaMapMarkerAlt size={12} />
                                            Location
                                        </label>
                                        <select
                                            id="type"
                                            value={filters.location}
                                            onChange={(e) => {
                                                setFilters({ ...filters, location: e.target.value });
                                            }}
                                            className="p-2 w-full border text-MidnightNavyText  border-SlateBlueText rounded-lg outline-none cursor-pointer focus:ring-1 focus:ring-SlateBlueText/80"
                                        >
                                            <option>All</option>
                                            {
                                                ["All Locations (India)", "Lucknow, Uttar Pradesh", "Noida, Uttar Pradesh"]?.map((item, index) => (
                                                    <option key={index}>{item}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="lg:col-span-3">
                                    <div
                                        onScroll={handleScroll}
                                        className="h-[45vh] md:h-[55vh] lg:h-[66vh] overflow-y-auto pr-2 space-y-6"
                                    >
                                        {filterJobs?.slice(0, visibleCount).map(job => (
                                            <div
                                                key={job._id}
                                                className="group border border-secondary rounded-2xl p-5 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                                                data-aos="fade-left" data-aos-delay="150"

                                            >
                                                <div className="flex justify-between items-center">
                                                    <h3 className="font-semibold text-20 text-MidnightNavyText transition-all duration-300 group-hover:text-primary">
                                                        {job.title}
                                                    </h3>
                                                    <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-SlateBlueText">
                                                        <div className="flex items-center justify-center gap-1"><FaMapMarkerAlt className="text-primary transition-all duration-300 group-hover:text-secondary" /><span> {job.location}</span></div>

                                                        <div className="flex items-center justify-center gap-1"><LuAlarmClockCheck className="text-primary transition-all duration-300 group-hover:text-secondary" /> <span>{job.type}</span></div>

                                                        <div className="flex items-center justify-center gap-1"> <IoBagRemoveOutline className="text-primary transition-all duration-300 group-hover:text-secondary" /> <span> {job.experience}</span></div>
                                                    </div>
                                                </div>

                                                <span className="text-sm p-1 px-2 rounded-md text-secondary bg-secondary/10 w-auto">
                                                    {job.category}
                                                </span>

                                                <p className="mt-2 text-SlateBlueText">{job.subTitle}</p>
                                                <div className="flex justify-between items-center mt-6">
                                                    <div className="flex justify-center items-center gap-2">

                                                        <div className="flex items-center justify-center gap-2 text-primary text-sm">
                                                            <FaEnvelope />
                                                            <Link href={`mailto:anubhav@soulitnetworks.com?subject=Application for ${job.title} `} className="font-semibold hover:text-secondary/80">Email</Link>

                                                        </div>
                                                        <div className="sm:h-5 h-3 w-px bg-SlateBlueText" />
                                                        <div className="flex items-center justify-center gap-2 text-success text-sm ">
                                                            <FaWhatsapp />
                                                            <Link
                                                                href={`https://wa.me/919918701634?text=${encodeURIComponent(`Hi Soul IT Networks, I'd like to apply for the ${job.title} position.`)}`}
                                                                target="_blank"
                                                                className="font-semibold hover:text-success/80"
                                                            >
                                                                WhatsApp
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <button className="flex justify-center items-center gap-2 text-primary rounded-md font-semibold text-sm transition-all duration-300 hover:text-secondary/80"
                                                        onClick={() => router.push(`/careers/${job.slug}`)}
                                                    >
                                                        View Job <MdOutlineArrowRightAlt size={25} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}

                                        {filterJobs.length === 0 && (
                                            <div className="flex flex-col items-center justify-center gap-4 border border-secondary rounded-2xl p-5 bg-white shadow-sm hover:shadow-xltransition-all duration-300">

                                                <div className="bg-secondary/10 w-28 h-28 rounded-full flex items-center justify-center">

                                                    <VscWorkspaceUntrusted className="text-secondary  text-7xl" />
                                                </div>
                                                <p className="text-center text-SlateBlueText">
                                                    No job openings match your filters. Try adjusting your criteria or send us your resume.
                                                </p>


                                                <Link
                                                    href={`https://wa.me/919918701634?text=${encodeURIComponent(`Hi Soul IT Networks, I'd like to apply for the job position.`)}`}
                                                    target="_blank"
                                                    className="p-4 bg-white  font-semibold rounded-md hover:text-white transition duration-300 shadow-lg justify-center items-center gap-2 text-success border border-success  hover:bg-success/80">
                                                    <span className="flex items-center gap-2">Send Now
                                                        <FaWhatsapp size={20} /> </span>
                                                </Link>
                                            </div>
                                        )}

                                        {visibleCount < filterJobs.length && (
                                            <p className="text-center text-primary">
                                                Scroll to load more...
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
}