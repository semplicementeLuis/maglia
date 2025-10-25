import React, { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300); // Allow time for fade-out animation
      }, duration - 300);

      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white font-mono text-sm py-2 px-5 rounded-full shadow-lg z-50 transition-all duration-300 ease-in-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
};

export default Toast;
