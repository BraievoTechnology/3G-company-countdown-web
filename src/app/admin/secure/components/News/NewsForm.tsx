import React, { useState } from "react";
import { ImagePlusIcon, XIcon } from "lucide-react";

interface NewsFormData {
  title: string;
  summary: string;
  content: string;
  image: File | string;
  imagePreview: string;
  status: "draft" | "published";
}

interface NewsFormProps {
  onSubmit: (data: NewsFormData) => void;
  initialData?: Partial<NewsFormData>;
}

export const NewsForm: React.FC<NewsFormProps> = ({
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState<NewsFormData>({
    title: initialData?.title || "",
    summary: initialData?.summary || "",
    content: initialData?.content || "",
    image: initialData?.image || "",
    imagePreview: initialData?.imagePreview || "",
    status: initialData?.status || "draft",
  });

  const [warning, setWarning] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes

      if (file.size > maxSize) {
        setWarning(
          "Warning: The image size exceeds 2MB. Please select a smaller file."
        );
        // Optionally, do not set the image if too large
        // return;
      } else if (file.size === maxSize) {
        setWarning("Warning: The image size is exactly 2MB.");
      } else {
        setWarning("");
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: file,
          imagePreview: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (warning) {
      alert("Please fix the warnings before submitting.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Image Upload */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Article Image
        </label>
        <div className="relative">
          {formData.imagePreview ? (
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={formData.imagePreview}
                alt="Preview"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    image: "",
                    imagePreview: "",
                  }))
                }
                className="absolute right-2 top-2 rounded-full bg-white p-1 shadow-sm hover:bg-gray-100"
              >
                <XIcon size={16} />
              </button>
            </div>
          ) : (
            <label className="flex h-48 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400">
              <div className="space-y-1 text-center">
                <ImagePlusIcon className="mx-auto h-8 w-8 text-gray-400" />
                <div className="text-sm text-gray-600">Upload image</div>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>
        {/* Warning message */}
        {warning && <p className="text-sm text-red-600 mt-1">{warning}</p>}
      </div>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#ffbe00] focus:outline-none focus:ring-1 focus:ring-[#ffbe00]"
          required
        />
      </div>
      {/* Summary */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Summary
        </label>
        <textarea
          value={formData.summary}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              summary: e.target.value,
            }))
          }
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#ffbe00] focus:outline-none focus:ring-1 focus:ring-[#ffbe00]"
          required
          rows={4}
        />
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          value={formData.status}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              status: e.target.value as "draft" | "published",
            }))
          }
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#ffbe00] focus:outline-none focus:ring-1 focus:ring-[#ffbe00]"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>
      {/* Submit Button */}
      <div className="flex justify-end space-x-3 border-t border-gray-200 pt-4">
        <button
          type="submit"
          className="rounded-md border-1 border-[#ffbe00] bg-white hover:bg-[#ffbe00] hover:text-white transition-colors px-4 py-2 text-sm font-medium text-[#ffbe00] cursor-pointer"
          disabled={!!warning}
        >
          {initialData ? "Update Article" : "Create Article"}
        </button>
      </div>
    </form>
  );
};
