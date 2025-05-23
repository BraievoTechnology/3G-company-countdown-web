import React, { useState } from 'react'
import { XIcon, PlusIcon } from 'lucide-react'
import { ProjectStatus } from '@prisma/client'

interface ProjectFormData {
    name: string
    description: string
    location: string
    startDate: string
    endDate: string
    status: ProjectStatus
    budget: number | string
    category: string
    images: File[]
    imagesPreviews: string[]
}

interface InitialData {
    project_name?: string
    description?: string
    location?: string
    start_date?: string
    end_date?: string
    status?: ProjectStatus
    budget?: number | string
    category?: string
    images?: { image_name: string }[]
}

interface ProjectFormProps {
    onSubmit: (data: ProjectFormData) => void
    initialData?: InitialData
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState<ProjectFormData>({
        name: initialData?.project_name || '',
        description: initialData?.description || '',
        location: initialData?.location || '',
        startDate: initialData?.start_date?.split('T')[0] || '',
        endDate: initialData?.end_date?.split('T')[0] || '',
        status: initialData?.status || ProjectStatus.Planning,
        budget: initialData?.budget || '',
        category: initialData?.category || 'PROCUREMENT_AND_CONTRACTS',
        images: [],
        imagesPreviews: initialData?.images?.map((img) => img.image_name) || [],
    })

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newImages: File[] = [];
            const newPreviews: Promise<string>[] = [];

            Array.from(files).forEach((file) => {
                const maxSizeMB = 2;
                const fileSizeMB = file.size / (1024 * 1024);

                if (fileSizeMB > maxSizeMB) {
                    alert(`Image "${file.name}" is too large. Maximum allowed size is ${maxSizeMB}MB.`);
                    return;
                }

                newImages.push(file);
                const reader = new Promise<string>((resolve) => {
                    const fileReader = new FileReader();
                    fileReader.onloadend = () => resolve(fileReader.result as string);
                    fileReader.readAsDataURL(file);
                });
                newPreviews.push(reader);
            });

            Promise.all(newPreviews).then((results) => {
                setFormData((prev) => ({
                    ...prev,
                    images: [...prev.images, ...newImages],
                    imagesPreviews: [...prev.imagesPreviews, ...results],
                }));
            });
        }
    };


    const removeImage = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
            imagesPreviews: prev.imagesPreviews.filter((_, i) => i !== index),
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    const projectCategories = [
        { value: 'PROCUREMENT_AND_CONTRACTS', label: 'Procurement & Contracts' },
        { value: 'HIGHWAYS_AND_TRANSPORTATION_ENGINEERING', label: 'Highways & Transportation' },
        { value: 'WATER_RESOURCES_ENGINEERING', label: 'Water Resources' },
        { value: 'ENVIRONMENTAL_AND_CLIMATE_RESILIENCE_ENGINEERING', label: 'Environmental & Climate Resilience' },
        { value: 'URBAN_RURAL_AND_REGIONAL_DEVELOPMENT', label: 'Urban, Rural & Regional Development' },
        { value: 'COMMERCIAL_AND_HOUSING_DEVELOPMENT', label: 'Commercial & Housing Development' },
    ]

    const projectStatuses = [
        { value: ProjectStatus.Planning, label: 'Planning' },
        { value: ProjectStatus.inprogress, label: 'In Progress' },
        { value: ProjectStatus.completed, label: 'Completed' },
        { value: ProjectStatus.on_hold, label: 'On Hold' },
    ]

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload Block */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Project Images</label>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {formData.imagesPreviews.map((preview, index) => (
                        <div key={index} className="relative aspect-square">
                            <img
                                src={preview}
                                alt={`Preview ${index + 1}`}
                                className="h-full w-full rounded-lg object-cover"
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute right-1 top-1 rounded-full bg-white p-1 shadow-sm hover:bg-gray-100"
                            >
                                <XIcon size={16} />
                            </button>
                        </div>
                    ))}
                    <label className="flex aspect-square cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400">
                        <div className="space-y-1 text-center">
                            <PlusIcon className="mx-auto h-8 w-8 text-gray-400" />
                            <div className="text-sm text-gray-600">Add images</div>
                        </div>
                        <input type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
                    </label>
                </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Project Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Project Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Project Status */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Project Status</label>
                    <select
                        value={formData.status}
                        onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value as ProjectStatus }))}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                    >
                        {projectStatuses.map((status) => (
                            <option key={status.value} value={status.value}>
                                {status.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Start Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData((prev) => ({ ...prev, startDate: e.target.value }))}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"

                    />
                </div>

                {/* End Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => setFormData((prev) => ({ ...prev, endDate: e.target.value }))}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"

                    />
                </div>

                {/* Budget */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Budget</label>
                    <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => setFormData((prev) => ({ ...prev, budget: e.target.value }))}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Enter budget amount"
                    />
                </div>

                {/* Project Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Project Category</label>
                    <select
                        value={formData.category}
                        onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                    >
                        {projectCategories.map((category) => (
                            <option key={category.value} value={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter project description"
                />
            </div>

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit Project
                </button>
            </div>
        </form>
    )
}
