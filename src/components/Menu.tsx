"use client";

import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";
import { usePathname } from "next/navigation";
import { useAuthentication } from "@/providers/AuthenticationProvider";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "/dashboard.png", label: "Dashboard", href: "/dashboard", visible: ["Admin", "Employee"] },
      { icon: "/sale_report.png", label: "Sale report", href: "/sale-report", visible: ["Admin", "Employee"] },
      { icon: "/customers.png", label: "Customers", href: "/customers", visible: ["Admin", "Employee"] },
      { icon: "/products.png", label: "Products", href: "/products", visible: ["Admin", "Employee"] },
      { icon: "/leads.png", label: "Leads", href: "/leads", visible: ["Admin", "Employee"] },
      { icon: "/quotation.png", label: "Quotations", href: "/quotations", visible: ["Admin", "Employee"] },
      { icon: "/orders.png", label: "Orders", href: "/orders", visible: ["Admin", "Employee"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: "/profile.png", label: "Profile", href: "/profile", visible: ["Admin", "Employee"] },
      { icon: "/setting.png", label: "Settings", href: "/settings", visible: ["Admin", "Employee"] },
      { icon: "/logout.png", label: "Logout", href: "/", visible: ["Admin", "Employee"] },
    ],
  },
];

export const Menu = () => {
  const {userLogOut} = useAuthentication();
  const pathname = usePathname();

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
            if (!item.visible.includes(role)) return null;

            const isActive = pathname.startsWith(item.href);

            if (item.label === "Logout") {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  onClick={() => userLogOut()}
                  className={`
                  flex items-center gap-4 lg:justify-start justify-center
                  p-2 rounded-md relative transition-all duration-300 ease-in-out

                  ${false ? "text-blue-600 bg-blue-50 translate-x-2" : "text-gray-500"}

                  hover:bg-gray-100 hover:text-blue-600 hover:translate-x-2 hover:scale-[1.03]

                  before:content-[''] before:absolute before:left-0 before:w-[4px] before:rounded-r-md
                  before:transition-all before:duration-300
                  ${false ? "before:h-full before:bg-blue-500" : "before:h-0 hover:before:h-full before:bg-blue-500"}
                `}
                >
                  <Image
                    src={item.icon}
                    width={20}
                    height={20}
                    alt={item.label}
                    className={`
                    transition-transform duration-300 ease-in-out
                    ${false ? "brightness-0 saturate-150" : ""}
                  `}
                  />
                  <span className="hidden lg:block text-sm">{item.label}</span>
                </Link>
              );
            }

            return (
              <Link
                href={item.href}
                key={item.label}
                className={`
                  flex items-center gap-4 lg:justify-start justify-center
                  p-2 rounded-md relative transition-all duration-300 ease-in-out

                  ${isActive ? "text-blue-600 bg-blue-50 translate-x-2" : "text-gray-500"}

                  hover:bg-gray-100 hover:text-blue-600 hover:translate-x-2 hover:scale-[1.03]

                  before:content-[''] before:absolute before:left-0 before:w-[4px] before:rounded-r-md
                  before:transition-all before:duration-300
                  ${isActive ? "before:h-full before:bg-blue-500" : "before:h-0 hover:before:h-full before:bg-blue-500"}
                `}
              >
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt={item.label}
                  className={`
                    transition-transform duration-300 ease-in-out
                    ${isActive ? "brightness-0 saturate-150" : ""}
                  `}
                />
                <span className="hidden lg:block text-sm">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};
