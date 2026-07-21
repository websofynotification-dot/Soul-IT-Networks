"use client";

import { DataContextType } from "@/types/dataContext";
import { job } from "@/types/jobContext";

import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("usedata must be used within a DataProvider");
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [jobs, setJobs] = useState<job[]>([]);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const [jobRes] = await Promise.all([
        fetch("/api/auth/careers/job-opening"),
      ]);

      if (!jobRes.ok) throw new Error("Failed to fetch");

      const jobResJson = await jobRes.json();

      setJobs(jobResJson?.data);
    } catch (error) {
      console.error("Error fetching the data records : ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        jobs,
        navbarOpen,
        setNavbarOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
