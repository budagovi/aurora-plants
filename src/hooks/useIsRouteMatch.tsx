'use client'

// --- next api
import { usePathname } from "next/navigation";

/**
 * Custom hook to check if the current pathname matches a specific route or set of routes
 * @param routes [ array of route segments ]
 * @returns boolean
 * 
 * by default (if no arguement passed) checks wether route is '/' or not 
 */
export const useIsRouteMatch = (routes: string[] = ["/"]) => {
  const pathname = usePathname();
  return routes.includes(pathname);
};