import { InvoiceStatusFilter } from "@/types";

export default function InvoiceCountStatus({
  count,
  filter,
}: {
  count: number;
  filter: InvoiceStatusFilter;
}) {
  if (count === 0 && filter === "None") {
    return (
      <p className="leading-none text-blue-600 dark:text-blue-500">
        No invoices
      </p>
    );
  }

  if (count === 1) {
    if (filter === "None") {
      return (
        <p className="leading-none text-blue-600 dark:text-blue-500">
          <span className="max-md:sr-only">There is </span>
          {count}
          <span className="max-md:sr-only"> total</span> invoice
        </p>
      );
    } else {
      return (
        <p className="leading-none text-blue-600 dark:text-blue-500">
          <span className="max-md:sr-only">There is </span>
          {count} {filter.toLowerCase()} invoice
        </p>
      );
    }
  } else {
    if (filter === "None") {
      return (
        <p className="leading-none text-blue-600 dark:text-blue-500">
          <span className="max-md:sr-only">There are </span>
          {count}
          <span className="max-md:sr-only"> total</span> invoices
        </p>
      );
    } else {
      return (
        <p className="leading-none text-blue-600 dark:text-blue-500">
          <span className="max-md:sr-only">There are </span>
          {count} {filter.toLowerCase()} invoices
        </p>
      );
    }
  }

  // filter, count
  // filter - "none", "draft", "pending", "paid"

  // Mobile
  // 7 invoices
  // No invoices
  // Filtered?

  // There are 7 total invoices
  // There are 4 pending invoices
  // There are 3 paid invoices
  // There are 2 draft invoices
  // There are 0 pending invoices
}
