/** @format */

import { Ref } from "@/app/lib/utils";

export default function LiComponent(ref: Ref) {
  return (
    <a
      className='flex hover:bg-zinc-700 hover:animate-pulse p-2 rounded-md border-zinc-600 border w-full justify-center'
      href={`#${ref.idRef}`}>
      <li>{ref.name}</li>
    </a>
  );
}
