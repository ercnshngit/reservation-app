import Link from "next/link";
import React from "react";

export default function MenuItem({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <li className="py-2 px-4 text-white hover:text-rose-400">
      <Link href={url}>{title}</Link>
    </li>
  );
}
