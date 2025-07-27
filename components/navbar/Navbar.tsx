"use client";

import Link from "next/link";
import { rutas } from "./rutasNavbar";
import { HomeIcon } from "@primer/octicons-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const patchName = usePathname();

  console.log(patchName);

  return (
    <nav className=" bg-slate-600 flex items-center justify-between p-4 ">
      <div>
        <Link className=" text-white flex items-center gap-2 " href="/">
          <HomeIcon size={30} />
          <span>Logo</span>
        </Link>
      </div>
      <div>
        {rutas.map((ruta) => (
          <Link
            key={ruta.id}
            href={ruta.patch}
            className={
              patchName === ruta.patch
                ? "text-blue-400 px-2"
                : "text-white px-2"
            }
          >
            {ruta.texto}
          </Link>
        ))}
      </div>
    </nav>
  );
}
