import React from "react";
import { PlusIcon } from "lucide-react";
interface AddButtonProps {
  label: string;
  onClick: () => void;
}
export const AddButton: React.FC<AddButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="flex items-center px-4 py-2 bg-gray-50 text-[#ffbe00] border-2 border-[#ffbe00] rounded-md hover:bg-[#ffbe00] hover:text-white transition-colors cursor-pointer"
      onClick={onClick}
    >
      <PlusIcon size={18} className="mr-1" />
      <span>{label}</span>
    </button>
  );
};
