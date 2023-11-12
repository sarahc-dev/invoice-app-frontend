import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import Avatar from "@/public/assets/image-avatar.jpg";
import ThemeToggleWrapper from "../ui/ThemeToggleWrapper";

export default function Header() {
  return (
    <header className="xl:w-26 flex h-18 justify-between bg-blue-800 md:h-20 xl:h-auto xl:flex-col xl:rounded-r-2xl">
      <div className="xl:w-26 xl:h-26 xl:after:w-26 relative flex w-18 items-center justify-center rounded-r-2xl bg-blue-100 after:absolute after:bottom-0 after:h-9 after:w-18 after:rounded-br-2xl after:rounded-tl-2xl after:bg-blue-200 md:w-20 md:after:h-10 md:after:w-20 xl:after:h-[3.2187rem]">
        <Image
          src={Logo}
          alt="Invoice app logo"
          priority={true}
          className="z-10 md:h-[1.8125rem] md:w-[1.9375rem] xl:h-[2.3569rem] xl:w-10"
        />
      </div>
      <div className="flex xl:flex-col">
        <ThemeToggleWrapper />
        <div className="flex h-full items-center border-l border-[#494e6e] px-6 md:px-8 xl:border-l-0 xl:border-t xl:py-6">
          <Image
            src={Avatar}
            alt="avatar"
            height="32"
            width="32"
            priority={true}
            className="rounded-full xl:h-10 xl:w-10"
          />
        </div>
      </div>
    </header>
  );
}
