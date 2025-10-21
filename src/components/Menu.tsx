"use client";

import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "/home.png", label: "Home", href: "/", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/teacher.png", label: "Teachers", href: "/list/teachers", visible: ["admin", "teacher"] },
      { icon: "/student.png", label: "Students", href: "/list/students", visible: ["admin", "teacher"] },
      { icon: "/parent.png", label: "Parents", href: "/list/parents", visible: ["admin", "teacher"] },
      { icon: "/subject.png", label: "Subjects", href: "/list/subjects", visible: ["admin"] },
      { icon: "/class.png", label: "Classes", href: "/list/classes", visible: ["admin", "teacher"] },
      { icon: "/lesson.png", label: "Lessons", href: "/list/lessons", visible: ["admin", "teacher"] },
      { icon: "/exam.png", label: "Exams", href: "/list/exams", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/assignment.png", label: "Assignments", href: "/list/assignments", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/result.png", label: "Results", href: "/list/results", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/attendance.png", label: "Attendance", href: "/list/attendance", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/calendar.png", label: "Events", href: "/list/events", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/message.png", label: "Messages", href: "/list/messages", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/announcement.png", label: "Announcements", href: "/list/announcements", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: "/profile.png", 
        label: "Profile", 
        href: "/profile", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/setting.png", label: "Settings", href: "/settings", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/logout.png", label: "Logout", href: "/logout", visible: ["admin", "teacher", "student", "parent"] },
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
          {section.items.map((item) => (
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
          ))}
        </div>
      ))}
    </div>
  );
};
