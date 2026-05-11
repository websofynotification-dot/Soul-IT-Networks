"use client";

import React, { useState } from 'react';
import {PreLoader} from '../Common/PreLoader';
import Pagination from '@/app/admin/components/common/Pagination';


export const BrochureCard: React.FC<{ data: { _id: string, title: string, filename: string }[] }> = ({ data }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 9;
  const totalPages = Math.ceil(data.length / recordsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <section className='pt-12'>
      {
        currentData?.length === 0 ? <PreLoader /> :

          <div className="container">
            <div className="grid gap-10 md:grid-cols-3">
              {currentData?.map((brochure, index) => (
                <div
                  key={brochure._id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100} // ✅ stagger animation
                  className="relative bg-white rounded-xl shadow-secondary/50 border border-secondary/50 p-6 shadow-xl overflow-hidden hover:-translate-y-2 transition duration-300"
                >
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-800">
                      {brochure.title}
                    </h3>

                    <button
                      onClick={() => window.open(`/api/auth/brochure/${brochure._id}`, "_blank")}
                      className="mt-6 px-4 py-3 bg-primary text-white rounded-md font-semibold hover:bg-transparent hover:border hover:border-secondary/50 hover:text-primary transition"
                    >
                      View Brochure
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              {
                totalPages > 1 && currentData?.length !== 0 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )
              }
            </div>


          </div>
      }


    </section>
  );
};