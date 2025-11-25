"use client";
import { createContext, useContext, useState, useCallback } from "react";

interface NotificationContextType {
  showNotification: (msg: string, error?: boolean) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = () => useContext(NotificationContext)!;

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const showNotification = useCallback((msg: string, error = false) => {
    setMessage(msg);
    setIsError(error);

    const timer = setTimeout(() => {
      setMessage(null);
      setIsError(false);
      clearTimeout(timer);
    }, 2000);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}

      {/* UI Notification */}
      {message && (
        <div
          className={`
            fixed top-5 right-5
            z-[99999]
            px-4 py-3 
            rounded-md 
            shadow-sm 
            text-white text-xs
            border 
            animate-slide-in
            ${isError 
              ? "bg-red-500 border-red-600" 
              : "bg-blue-500 border-blue-600"
            }
          `}
          style={{
            position: "fixed",
            inset: "auto",
            top: "30px",
            right: "20px",
            maxWidth: "300px",
            pointerEvents: "auto",
          }}
        >
          {message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
