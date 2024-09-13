'use client'

// --- next api
import { usePathname } from "next/navigation";

/**
 * Custom hook to check if the current pathname is the root page
 */
export const useIsRootPage = () => {
  const pathname = usePathname();
  return pathname === "/";
};