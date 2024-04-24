"use client";

import { Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";

function NewHeader() {
  const animals = ["perro", "gato"];
  return (
    <header className="w-full text-white py-4">
      <nav className="flex justify-between border-2 border-zinc-600 rounded-lg p-4">
        <div className="flex items-center gap-4 ">
          <span>SDC</span>
        </div>
        <div className="flex gap-4">
          <Link href={""}>About</Link>
          <Link href={""}>Services</Link>
        </div>
      </nav>
    </header>
  );
}

export default NewHeader;
