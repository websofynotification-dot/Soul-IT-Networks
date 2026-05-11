"use client"
import { projectProps } from '@/types/projectContext'
import React, { useMemo, useState } from 'react'
import { PreLoader } from '../Common/PreLoader';
import Pagination from '@/app/admin/components/common/Pagination';
import { RiPoliceBadgeLine } from 'react-icons/ri';
import { categoryProps } from '@/types/categoryContext';

export const Project: React.FC<projectProps & categoryProps> = ({ projectData, categoryData }) => {

    const [search, setSearch] = useState("");
    const [proCategory, setProCategory] = useState("All");
    const [year, setYear] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const uniqueYears = useMemo(() => {
        return [...new Set(projectData?.map(item => item.project_year))];
    }, [projectData]);

    const recordsPerPage = 12;

    const filterCategory = categoryData?.filter(item => item.categoryType === "Project");

    const filterProjects = projectData?.filter((pro) => {

        const matchCategory = proCategory === "All" || pro.project_category === proCategory;
        const matchYear = year === "All" || pro.project_year === year;
        const matchSearch = search === "" || pro.title?.toLowerCase().includes(search.toLowerCase());

        return matchCategory && matchYear && matchSearch;
    });

    const totalPages = Math.ceil(filterProjects.length / recordsPerPage);

    const currentData = filterProjects.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    return (
        <section className="pt-12">
            <div className="container">
                <div className="mb-16 sm:mb-20"
                    data-aos="fade-up"
                >
                    {
                        filterCategory?.length === 0 ? <PreLoader /> :
                            <form className="grid gap-4 md:grid-cols-3">
                                <div data-aos="fade-up" data-aos-delay="100">
                                    <label htmlFor="search" className="block mb-1 text-primary font-medium">
                                        Search Projects
                                    </label>
                                    <input
                                        id="search"
                                        type="text"
                                        placeholder="Search by title"
                                        value={search}
                                        onChange={(e) => {
                                            setSearch(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        className="w-full border text-SlateBlueText border-secondary rounded-lg p-3 outline-none focus:ring-1 focus:ring-secondary/80"
                                    />
                                </div>

                                <div data-aos="fade-up" data-aos-delay="200">
                                    <label htmlFor="format" className="block mb-1 text-primary font-medium">
                                        Category
                                    </label>
                                    <select
                                        id="proCategory"
                                        value={proCategory}
                                        onChange={(e) => {
                                            setProCategory(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        className="w-full border text-MidnightNavyText  border-secondary rounded-lg p-3 outline-none cursor-pointer focus:ring-1 focus:ring-secondary/80"
                                    >
                                        <option>All</option>

                                        {
                                            filterCategory?.map((item, index) => (
                                                <option key={index}>{item.category}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="300">
                                    <label htmlFor="language" className="block mb-1 text-primary font-medium">
                                        Year
                                    </label>
                                    <select
                                        id="year"
                                        value={year}
                                        onChange={(e) => {
                                            setYear(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        className="w-full border border-secondary text-MidnightNavyText rounded-lg p-3 outline-none cursor-pointer focus:ring-1 focus:ring-secondary/80"
                                    >
                                        <option>All</option>
                                        {
                                            uniqueYears?.map((year, index) => (
                                                <option key={index}>{year}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </form>
                    }
                </div>

                <div>
                    {
                        currentData?.length === 0 ? <PreLoader /> :
                            <div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                                    {currentData?.map((step, index) => (
                                        <div
                                            key={step._id}
                                            className="relative group transition-all duration-300"
                                            data-aos="fade-up"
                                            data-aos-delay={index * 100}
                                        >
                                            <p
                                                className="absolute -top-9 left-0 w-auto h-10 flex items-center justify-center rounded-t-2xl border bg-white font-semibold px-3 border-secondary text-primary text-xs sm:text-sm"
                                            >
                                                {step.project_year}
                                            </p>

                                            <div
                                                className="p-4 sm:p-5 rounded-b-2xl rounded-tr-2xl border-secondary  border mb-4 bg-white shadow-md relative transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1"
                                            >
                                                <div
                                                    className="absolute right-[-20px] top-1/2 -translate-y-1/2 border-y-[12px] sm:border-y-[15px] border-y-transparent border-l-[16px] sm:border-l-[20px] border-l-primary"
                                                />
                                                <div
                                                    className="absolute left-[-10px] sm:left-[-13px] top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border bg-white border-secondary"
                                                />

                                                <div className="space-y-3">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <div className="flex flex-col mb-2">
                                                            <h3 className="font-semibold text-base sm:text-lg text-MidnightNavyText">
                                                                {step.title}
                                                            </h3>
                                                            <p className="text-xs text-secondary leading-relaxed">
                                                                {step.project_category}
                                                            </p>
                                                        </div>
                                                        <div
                                                            className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-primary/20"
                                                        >
                                                            <div className="text-primary">
                                                                <RiPoliceBadgeLine size={20} />
                                                            </div>

                                                            <div
                                                                className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition duration-300"
                                                            />
                                                        </div>
                                                    </div>

                                                    <p className="text-xs sm:text-sm h-14 text-SlateBlueText leading-relaxed text-justify">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    }
                </div>
                {
                    totalPages > 1 &&
                    <div className={`${totalPages > 1 ? "mt-12" : "mt-0"}`}>
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    </div>
                }
            </div>
        </section>
    )
}

