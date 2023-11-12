import Image from "next/image";
import Status from "./Status";
import Arrow from "@/public/assets/icon-arrow-right.svg";
import { Invoice } from "@/types";

export default function Invoice({ invoice }: { invoice: Invoice }) {
  const date = new Date(invoice.paymentDue);
  const dateString = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const total = `£ ${invoice.total.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return (
    <li className="rounded-lg bg-white dark:bg-blue-300">
      <a
        href={`/${invoice.id.toLowerCase()}`}
        className="p-6 max-md:grid max-md:grid-cols-2 md:flex md:items-center md:py-4"
      >
        <h2 className="heading-sm-var order-1">
          <span className="text-blue-700">#</span>
          {invoice.id}
        </h2>
        <p className="md:mr-13 order-3 text-sm tracking-normal text-blue-700 dark:text-blue-500 max-md:mb-2 max-md:mt-6 md:order-2 md:ml-7">{`Due ${dateString}`}</p>
        <p className="order-2 text-sm tracking-normal text-blue-700 dark:text-blue-500 max-md:text-end">
          {invoice.clientName}
        </p>
        <h3 className="heading-sm order-5 md:order-4 md:ml-auto">{total}</h3>
        <Status
          style="order-4 ml-auto md:ml-10 md:mr-5 max-md:mt-6 max-md:col-start-2 max-md:row-span-2 max-md:row-start-2"
          status={invoice.status}
        />
        <Image src={Arrow} alt="" className="max-md:hidden md:order-6" />
      </a>
    </li>
  );
}
