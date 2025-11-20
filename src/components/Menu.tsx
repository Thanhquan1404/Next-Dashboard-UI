"use client";

import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "/dashboard.png", label: "Dashboard", href: "/dashboard", visible: ["Admin", "Employee"] },
      { icon: "/sale-report.png", label: "Sale report", href: "/sale-report", visible: ["Admin", "Employee"] },
      { icon: "/customers.png", label: "Customers", href: "/customers", visible: ["Admin", "Employee"] },
      { icon: "/products.png", label: "Products", href: "/products", visible: ["Admin", "Employee"] },
      { icon: "/leads.png", label: "Leads", href: "/leads", visible: ["Admin", "Employee"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: "/profile.png", label: "Profile", href: "/profile", visible: ["Admin", "Employee"] },
      { icon: "/setting.png", label: "Settings", href: "/settings", visible: ["Admin", "Employee"] },
      { icon: "/logout.png", label: "Logout", href: "/logout", visible: ["Admin", "Employee"] },
    ],
  },
];

export const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          {/* Section title */}
          <span className="hidden lg:block text-gray-400 font-light my-2">
            {section.title}
          </span>

          {/* Menu items */}
          {section.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="
                    flex items-center gap-4 lg:justify-start justify-center
                    text-gray-500 p-2 rounded-md relative
                    transition-all duration-300 ease-in-out
                    hover:bg-gray-100 hover:text-blue-600
                    hover:translate-x-2 hover:scale-[1.03]
                    before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px]
                    before:bg-blue-500 before:transition-all before:duration-300
                    hover:before:w-full
                  "
                >
                  <Image
                    src={item.icon}
                    width={15}
                    height={15}
                    alt={item.label}
                    className="transition-transform duration-300 ease-in-out group-hover:rotate-6"
                  />
                  <span className="hidden lg:block text-sm">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};
