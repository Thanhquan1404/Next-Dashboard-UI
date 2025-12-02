"use client";

import React from "react";

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
      <div className="bg-transparent p-4 flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-b-4 border-gray-200 mb-4"></div>
        <span className="text-gray-700 font-medium">Loading data...</span>
      </div>
  );
};

export default LoadingOverlay;
