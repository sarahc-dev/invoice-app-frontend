"use client";
import Image from "next/image";
import Plus from "@/public/assets/icon-plus.svg";

export default function NewButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      data-cy="newButton"
      className="heading-sm-var flex h-11 items-center rounded-3xl bg-blue-100 pl-1.5 pr-4 text-white transition-all hover:bg-blue-200 md:h-12 md:pl-2"
    >
      <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white md:mr-4">
        <Image src={Plus} alt="" height="10" width="10" />
      </span>
      <span data-cy="newButtonContent" className="pt-[3px]">
        New <span className="max-md:sr-only">Invoice</span>
      </span>
    </button>
  );
}
