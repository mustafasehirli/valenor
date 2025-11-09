"use client";

import { useState } from "react";
import {
  ChevronLeft,
  LayoutDashboard,
  Users,
  Settings,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/" },
    { name: "Users", icon: Users, href: "/users" },
    { name: "Products", icon: Package, href: "/products" },
    { name: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <div
      className={`relative h-screen bg-gray-100 p-4 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <Button
        onClick={toggleSidebar}
        className="absolute top-4 -right-3 z-10"
        size="icon"
      >
        <ChevronLeft
          className={`transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : ""
          }`}
        />
      </Button>
      <div className="flex flex-col">
        <div
          className={`mb-8 text-2xl font-bold ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          Logo
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className="flex items-center rounded-md p-2 hover:bg-gray-200"
                >
                  <item.icon className="h-6 w-6" />
                  <span
                    className={`ml-4 transition-opacity duration-300 ${
                      isCollapsed ? "hidden" : "block"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;