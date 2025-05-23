"use client";
import { useEffect, useState } from "react";
import { NewsFeed } from "@prisma/client";
import { newsFeedService } from "@/app/admin/secure/services/newsFeedService";
import { Badge } from "@/app/admin/secure/components/UI/Badge";
import { PageTransition } from "@/app/admin/secure/components/UI/PageTransition";
import { AddButton } from "@/app/admin/secure/components/UI/AddButton";
import { DataTable } from "@/app/admin/secure/components/UI/DataTable";
import { Modal } from "@/app/admin/secure/components/UI/Modal";
import { NewsForm } from "@/app/admin/secure/components/News/NewsForm";
import { toast, Toaster } from "sonner";
import Swal from "sweetalert2";

const NewsFeedPage: React.FC = () => {
  const [news, setNews] = useState<NewsFeed[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsFeed[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<NewsFeed | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [, setIsLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const data = await newsFeedService.getAllNews();
      setNews(data);
      setFilteredNews(data);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  useEffect(() => {
    let result = [...news];
    if (searchTerm) {
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filterValue && filterValue !== "all") {
      result = result.filter(
        (article) => article.status.toLowerCase() === filterValue.toLowerCase()
      );
    }
    setFilteredNews(result);
  }, [news, searchTerm, filterValue]);

  const handleAddArticle = async (formData: FormData) => {
    try {
      const createPromise = newsFeedService.createNews(formData);

      toast.promise(createPromise, {
        loading: "Adding news article...",
        success: "News article created successfully!",
        error: "Failed to create news article. Please try again.",
      });

      await createPromise;
      await fetchNews();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to create news:", error);
      // error toast handled by toast.promise
    }
  };
  const handleUpdate = async (formData: FormData) => {
    if (!editingArticle) {
      toast.warning("No article selected for update.");
      return;
    }

    try {
      const updatePromise = newsFeedService.updateNews(
        editingArticle.id,
        formData
      );

      toast.promise(updatePromise, {
        loading: "Updating article...",
        success: "Article updated successfully!",
        error: "Failed to update article. Please try again.",
      });

      await updatePromise;
      await fetchNews();
      setIsModalOpen(false);
      setEditingArticle(null);
    } catch (error) {
      console.error("Failed to update news:", error);
      // Error toast already shown by toast.promise
    }
  };

  const handleDelete = async (article: NewsFeed) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to delete "${article.title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await newsFeedService.deleteNews(article.id);
        await fetchNews();
        toast.success("Article deleted successfully!");
      } catch (error) {
        console.error("Failed to delete news:", error);
        toast.error("Failed to delete article. Please try again.");
      }
    }
  };
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  const handleFilter = (value: string) => {
    setFilterValue(value.toLowerCase());
  };
  const handleEdit = (article: NewsFeed) => {
    setEditingArticle(article);
    setIsModalOpen(true);
  };
  const columns = [
    {
      key: "title",
      header: "Title",
      width: "30%",
    },
    {
      key: "summary",
      header: "Summary",
      width: "35%",
      render: (value: string) => (
        <div className="max-w-[700px] break-words line-clamp-3 overflow-hidden text-ellipsis">
          {value}
        </div>
      ),
    },
    {
      key: "createTime",
      header: "createTime",
      width: "10%",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
    {
      key: "status",
      header: "Status",
      width: "10%",
      render: (value: string) => (
        <Badge
          text={value}
          color={
            value === "published"
              ? "green"
              : value === "draft"
              ? "gray"
              : "gray"
          }
        />
      ),
    },
  ];
  return (
    <>
      <Toaster position="top-right" richColors />
      <PageTransition>
        <div className="px-4 py-6 md:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-medium">News Feed Management</h2>
            <AddButton
              label="Add News Article"
              onClick={() => {
                setEditingArticle(null);
                setIsModalOpen(true);
              }}
            />
          </div>
          <DataTable
            columns={columns}
            data={filteredNews}
            searchPlaceholder="Search news articles..."
            filterOptions={{
              label: "Filter by status",
              options: [
                // {
                //   label: "All",
                //   value: "all",
                // },
                {
                  label: "Published",
                  value: "published",
                },
                {
                  label: "Draft",
                  value: "draft",
                },
              ],
            }}
            onSearch={handleSearch}
            onFilter={handleFilter}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <Modal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setEditingArticle(null);
            }}
            title={editingArticle ? "Edit Article" : "Add News Article"}
          >
            <NewsForm
              onSubmit={editingArticle ? handleUpdate : handleAddArticle}
              initialData={editingArticle}
            />
          </Modal>
          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredNews.length} of {news.length} articles
          </div>
        </div>
      </PageTransition>
    </>
  );
};
export default NewsFeedPage;
