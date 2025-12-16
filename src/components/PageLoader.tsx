// components/PageLoader.tsx
import React from "react";

interface PageLoaderProps {
  text?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ text = "Loading..." }) => {
  return (
    <div className="page-loader">
      <div className="spinner" />
      <p>{text}</p>

      <style jsx>{`
        .page-loader {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.85);
          z-index: 9999;
        }

        .spinner {
          width: 48px;
          height: 48px;
          border: 4px solid #e5e7eb;
          border-top-color: #2563eb;
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        p {
          margin-top: 12px;
          color: #374151;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
