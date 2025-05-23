"use client";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { UserIcon, TrashIcon } from "lucide-react";

import {
  JobApplication,
  jobApplicationService,
} from "@/app/admin/secure/services/jobApplicationService";

import { DataTable } from "@/app/admin/secure/components/UI/DataTable";
import { Modal } from "@/app/admin/secure/components/UI/Modal";
import { ApplicationDetailsModal } from "@/app/admin/secure/components/Applications/ApplicationDetailsModal";
import { PageTransition } from "../../components/UI/PageTransition";
import {toast} from "sonner";

const JobApplications: React.FC = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<JobApplication[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setIsLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      setIsLoading(true);
      const data = await jobApplicationService.getAllApplications();
      setApplications(data);
      setFilteredApplications(data);
    } catch (error) {
      console.error("Failed to fetch applications:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredApplications(applications);
      return;
    }
    const filtered = applications.filter((app) => {
      const searchString = searchTerm.toLowerCase();
      return (
          (app.name?.toLowerCase() || "").includes(searchString) ||
          (app.email?.toLowerCase() || "").includes(searchString) ||
          (app.experience?.toLowerCase() || "").includes(searchString) ||
          (app.contact?.toLowerCase() || "").includes(searchString)
      );
    });
    setFilteredApplications(filtered);
  }, [searchTerm, applications]);

  const handleUpdateApplication = async (id: number, data: Partial<JobApplication>) => {
    try {
      await jobApplicationService.updateApplication(id, data);
      await fetchApplications();
    } catch (error) {
      console.error("Failed to update application:", error);
    }
  };

  const handleDelete = async (id: number, name: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you really want to delete "${name}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      const deletePromise = jobApplicationService.deleteApplication(id, {});
      toast.promise(deletePromise, {
        loading: 'Deleting job application...',
        success: 'Job application deleted!',
        error: 'Failed to delete job application. Please try again.',
      });

      try {
        await deletePromise;
        await fetchApplications();
      } catch (err) {
        // Already handled by toast
      }
    }
  };

  const columns = [
    {
      key: "name",
      header: "Candidate",
      width: "30%",
      render: (value: string, row: JobApplication) => (
          <div>
            <div className="font-medium text-gray-900 flex items-center">
              <UserIcon size={16} className="mr-2 text-gray-400" />
              {value}
            </div>
            <div className="text-sm text-gray-500 mt-1">{row.email}</div>
          </div>
      ),
    },
    {
      key: "experience",
      header: "Experience",
      width: "20%",
      render: (value: string | null) => (
          <div className="text-sm text-gray-600">{value || "Not specified"}</div>
      ),
    },
    {
      key: "expected_salary",
      header: "Expected Salary",
      width: "20%",
      render: (value: number | null) => (
          <div className="text-sm text-gray-600">
            {value ? `$${value}` : "Not specified"}
          </div>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      width: "10%",
      render: (_: any, row: JobApplication) => (
          <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(row.id, row.name);
              }}
              className="text-red-600 hover:text-red-800 transition"
              title="Delete Application"
          >
            <TrashIcon size={18} />
          </button>
      ),
    },
  ];

  return (
      <PageTransition>
        <div className="px-4 py-6 md:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-xl font-medium">Job Applications</h2>
            <p className="text-sm text-gray-500 mt-1">
              Manage and track all job applications
            </p>
          </div>

          <DataTable
              columns={columns}
              data={filteredApplications}
              searchPlaceholder="Search applications..."
              onSearch={setSearchTerm}
              onRowClick={(row) => {
                setSelectedApplication(row);
                setIsModalOpen(true);
              }}
          />

          {selectedApplication && (
              <Modal
                  isOpen={isModalOpen}
                  onClose={() => {
                    setIsModalOpen(false);
                    setSelectedApplication(null);
                  }}
                  title="Application Details"
              >
                <ApplicationDetailsModal
                    application={selectedApplication}
                    onUpdate={handleUpdateApplication}
                />
              </Modal>
          )}

          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredApplications.length} of {applications.length} applications
          </div>
        </div>
      </PageTransition>
  );
};

export default JobApplications;
