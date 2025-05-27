"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  Users,
  Briefcase,
  Newspaper,
  Folder,
  LogOut,
} from "lucide-react";
import Swal from "sweetalert2";


export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
    });

    if (result.isConfirmed) {




      router.push("/");

      // ✅ Show success message
      Swal.fire({
        title: "Logged Out!",
        text: "You have been successfully logged out.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const links = [
    {
      name: "Dashboard",
      href: "/admin/secure/pages/dashboard",
      icon: <Home size={18} />,
    },
    {
      name: "Job Application",
      href: "/admin/secure/pages/job-applications",
      icon: <Users size={18} />,
    },
    {
      name: "Job Opportunities",
      href: "/admin/secure/pages/job-opportunities",
      icon: <Briefcase size={18} />,
    },
    {
      name: "News Feed",
      href: "/admin/secure/pages/news-feed",
      icon: <Newspaper size={18} />,
    },
    {
      name: "Project",
      href: "/admin/secure/pages/projects",
      icon: <Folder size={18} />,
    },
    {
      name: "Generate Documents",
      href: "/admin/secure/pages/GenerateDocument",
      icon: <Folder size={18} />,
    },
  ];

  return (
      <aside className="w-64 bg-[#ffbe00] text-white flex flex-col">
        <div className="text-2xl font-bold m-8">3G Consultants</div>

        <nav className="flex flex-col space-y-2 flex-grow">
          {links.map((link) => (
              <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-4 px-10 py-3 hover:bg-white hover:text-[#f1c233] transition-colors ${
                      pathname === link.href
                          ? "bg-white text-[#f1c233]"
                          : "hover:bg-white"
                  }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
          ))}
        </nav>

        <button
            onClick={handleLogout}
            className="flex items-center mb-5 gap-4 px-10 py-3 w-full hover:bg-white hover:text-[#f1c233] transition-colors cursor-pointer"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </aside>
  );
}
