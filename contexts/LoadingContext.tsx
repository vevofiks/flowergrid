"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface LoadingContextType {
    isPreloaderComplete: boolean;
    setPreloaderComplete: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
    isPreloaderComplete: false,
    setPreloaderComplete: () => { },
});

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isPreloaderComplete, setPreloaderComplete] = useState(false);

    return (
        <LoadingContext.Provider value={{ isPreloaderComplete, setPreloaderComplete }}>
            {children}
        </LoadingContext.Provider>
    );
}
