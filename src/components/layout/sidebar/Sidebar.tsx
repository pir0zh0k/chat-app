"use client";
import Image from "next/image";
import { Routes } from "./routes.data";
import Link from "next/link";
import { SunIcon } from "@heroicons/react/16/solid";

export const SideBar = () => {
  return (
    <>
      <aside className="p-5 flex flex-col items-center justify-between h-full border-r border-slate-800">
        <Image src="/logo.svg" width={45} height={45} alt="Logo image" />
        <div className="flex flex-col items-center gap-8">
          {Routes.map((item) => (
            <Link
              href={item.route}
              key={item.route}
              className="hover:text-white transition-colors"
            >
              <item.icon width={27} />
            </Link>
          ))}
        </div>
        <div>
          <SunIcon width={27} />
        </div>
      </aside>
    </>
  );
};
