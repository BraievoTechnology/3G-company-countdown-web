"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {MapPinIcon, Loader2Icon, FileTextIcon, CheckCircleIcon} from "lucide-react";
import axios from "axios";
import { PageTransition } from "@/app/admin/secure/components/UI/PageTransition";
import { generateDocument } from "@/app/admin/secure/services/generateService";
import { CategorySelect } from "@/app/admin/secure/components/UI/CategorySelect";
import {Project} from "@prisma/client";

// Fix: Define an extended Project type to handle nulls and images
type ExtendedProject = {
  id: number;
  project_name: string;
  description: string | null;
  location: string | null;
  start_date: Date | null;
  end_date: Date | null;
  budget: string | null;
  status: string;
  category: string;
  images: { image_name: string }[];
};

const GenerateDocument: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)
  const [generatedFilePath, setGeneratedFilePath] = useState<string | null>(
      null,
  )
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    // Reset selected projects when categories change
    setSelectedProjects([])
    const fetchProjects = async () => {
      if (selectedCategories.length === 0) {
        setProjects([])
        return
      }
      setIsLoading(true)
      setError('')
      try {
        const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

        const projectPromises = selectedCategories.map((category) =>
            axios.get(`${baseURL}/project?category=${category}`)
        );

        const responses = await Promise.all(projectPromises)
        const allProjects = responses.flatMap((response) => response.data)
        setProjects(allProjects)
      } catch (err) {
        setError('Failed to fetch projects. Please try again.')
        console.error('Error fetching projects:', err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProjects()
  }, [selectedCategories])
  const toggleProjectSelection = (project: Project) => {
    setSelectedProjects((prev) => {
      const isSelected = prev.some((p) => p.id === project.id)
      if (isSelected) {
        return prev.filter((p) => p.id !== project.id)
      } else {
        return [...prev, project]
      }
    })
  }
  const isProjectSelected = (projectId: number) => {
    return selectedProjects.some((p) => p.id === projectId)
  }
  const handleGenerateFile = async () => {
    if (selectedCategories.length === 0) {
      alert('Please select at least one category')
      return
    }
    if (selectedProjects.length === 0) {
      alert('Please select at least one project')
      return
    }
    setIsGenerating(true)
    try {
      const response = await generateDocument({
        categories: selectedCategories,
        clientName: '',
        projects: selectedProjects,
      })
      if (response.filePath) {
        setGeneratedFilePath(response.filePath)
      }
    } catch (err) {
      alert('Failed to generate document. Please try again.')
      console.error('Error generating document:', err)
    } finally {
      setIsGenerating(false)
    }
  }
  return (
      <PageTransition>
        <div className="min-h-screen bg-gray-50 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Generate Document
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Select one or more categories, then choose specific projects to
                include in your document
              </p>
            </div>
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Project Categories
                </label>
                <div className="mt-1">
                  <CategorySelect
                      value={selectedCategories}
                      onChange={setSelectedCategories}
                      multiple={true}
                  />
                </div>
                {selectedCategories.length > 0 && (
                    <div className="mt-2 text-sm text-gray-500">
                      {selectedCategories.length} categories selected
                    </div>
                )}
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Current Date & Time
                  </label>
                  <div className="mt-1 text-lg font-medium text-gray-900">
                    {format(currentDateTime, 'PPpp')}
                  </div>
                </div>
                {projects.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Selected Projects
                      </label>
                      <div className="mt-1 text-sm text-gray-600">
                        {selectedProjects.length} of {projects.length} projects
                        selected
                      </div>
                    </div>
                )}
              </div>
            </div>
            <div className="mb-8">
              <div className="flex gap-4 items-center">
                <button
                    onClick={handleGenerateFile}
                    disabled={
                        isLoading ||
                        isGenerating ||
                        selectedCategories.length === 0 ||
                        selectedProjects.length === 0
                    }
                    className="inline-flex items-center rounded-md bg-[#f1c233] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#f1c233]/90 focus:outline-none focus:ring-2 focus:ring-[#f1c233] focus:ring-offset-2 disabled:opacity-50"
                >
                  {isGenerating ? (
                      <>
                        <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                  ) : (
                      'Generate File'
                  )}
                </button>
                <a
                    href={generatedFilePath ? `${generatedFilePath}` : '#'}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => !generatedFilePath && e.preventDefault()}
                    className={`flex items-center rounded-md bg-[#f1c233] px-3 py-2 text-sm text-white hover:bg-[#f1c233]/80 ${!generatedFilePath ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <FileTextIcon size={16} className="mr-2 text-white" />
                  Download Document
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2Icon className="h-8 w-8 animate-spin text-[#f1c233]" />
                  </div>
              ) : error ? (
                  <div className="rounded-md bg-red-50 p-4 text-center text-red-700">
                    {error}
                  </div>
              ) : projects.length > 0 ? (
                  <>
                    <div className="mb-4 flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-700">
                        Click on projects to select them for the document
                      </p>
                      <button
                          onClick={() =>
                              setSelectedProjects(
                                  selectedProjects.length === projects.length
                                      ? []
                                      : [...projects],
                              )
                          }
                          className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        {selectedProjects.length === projects.length
                            ? 'Deselect All'
                            : 'Select All'}
                      </button>
                    </div>
                    <div className="space-y-4">
                      {projects.map((project) => (
                          <div
                              key={project.id}
                              className={`overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-md cursor-pointer border-2 ${isProjectSelected(project.id) ? 'border-[#f1c233]' : 'border-transparent'}`}
                              onClick={() => toggleProjectSelection(project)}
                          >
                            <div className="flex items-start gap-6 p-6">
                              <div className="aspect-video w-1/3 relative">
                                {isProjectSelected(project.id) && (
                                    <div className="absolute top-2 right-2 bg-[#f1c233] rounded-full p-1">
                                      <CheckCircleIcon
                                          size={20}
                                          className="text-white"
                                      />
                                    </div>
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="mb-4">
                                  <h3 className="text-lg font-medium text-gray-900">
                                    {project.project_name}
                                  </h3>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {project.description}
                                  </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div className="flex items-center text-gray-600">
                                    <MapPinIcon className="mr-2 h-4 w-4" />
                                    {project.location}
                                  </div>
                                  <div className="text-right font-medium text-gray-900">
                                    Budget: ${project.budget}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      ))}
                    </div>
                  </>
              ) : selectedCategories.length > 0 ? (
                  <div className="rounded-md bg-gray-50 p-12 text-center text-gray-500">
                    No projects found for these categories
                  </div>
              ) : null}
            </div>
          </div>
        </div>
      </PageTransition>
  )
}
export default GenerateDocument
