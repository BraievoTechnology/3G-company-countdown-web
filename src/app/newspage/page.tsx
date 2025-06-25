"use client";
import React from "react";
import SectionTitle from "../Components/ui/SectionTitle";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { useNews } from "../hooks/useNews";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";

const NewsPage = () => {
  const { news, loading, error } = useNews();
  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-xl text-[#f1c235]">Loading news...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-xl text-red-600">
          Error loading news: {error.message}
        </div>
      </div>
    );
  }
  const publishedNews = news.filter((item) => item.status === "published");
  return (
    <>
      <Header />
      <div className="w-full">
        <section className="relative bg-black mt-[-105px] text-white py-34">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl max-w-3xl">
              Stay informed about our latest projects, achievements, and
              industry insights.
            </p>
          </div>
        </section>
        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Latest News"
              subtitle="Keep up with our recent developments and industry insights."
              centered={true}
            />
            <div className="space-y-6 mt-12">
              {publishedNews.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {article.images && (
                      <div className="md:w-1/3 relative">
                        <div className="aspect-[4/3] w-full h-full">
                          <img
                            src={`${article.images}`}
                            alt={article.title || ""}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#f1c235] mb-2 sm:mb-3">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mb-4">
                          {article.summary}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          <div className="flex items-center">
                            <CalendarIcon
                              size={20}
                              className="text-yellow-500 mr-2"
                            />
                            <span className="text-gray-700 text-sm sm:text-base">
                              {new Date(
                                article.createTime
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default NewsPage;
