import Image from "next/image";
import Illustration from "@/public/assets/illustration-empty.svg";

export default function NoInvoices() {
  return (
    <div className="mx-auto flex flex-1 items-center justify-center max-md:max-w-[206px]">
      <div className="text-center">
        <Image src={Illustration} alt="" priority={true} className="mx-auto" />
        <h2 className="heading-md mb-6 mt-10">There is nothing here</h2>
        <p className="text-blue-600 dark:text-blue-500">
          Create an invoice by clicking the
          <br />
          <span className="font-bold">New</span>
          <span className="font-bold max-md:sr-only"> Invoice</span> button and
          get started
        </p>
      </div>
    </div>
  );
}
