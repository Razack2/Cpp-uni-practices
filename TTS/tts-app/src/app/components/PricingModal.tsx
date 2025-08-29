"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          ⚠ Out of Credits
        </h2>
        <p className="text-gray-600 mb-6">
          You’ve run out of credits. Donate to have more credits.
        </p>

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
          >
          Record Your Own Voice
          </button>
          
          <button
            onClick={() => router.push("/pages/donate")}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer" 
          >
            View Donation Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
