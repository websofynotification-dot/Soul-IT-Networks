"use client";

import { DataContextType } from "@/types/dataContext";

import React, { createContext, useContext } from "react";

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

    return (
        <DataContext.Provider
            value={
                {
                }
            }
        >
            {children}
        </DataContext.Provider>
    );
};

