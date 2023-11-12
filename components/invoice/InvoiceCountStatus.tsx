import { InvoiceStatusFilter } from "@/types";

export default function InvoiceCountStatus({
  count,
  filter,
}: {
  count: number;
  filter: InvoiceStatusFilter;
}) {
  if (count === 0 && filter === "none") {
    return (
      <p className="leading-none text-blue-600 dark:text-blue-500">
        No invoices
      </p>
    );
  }

  if (count === 1) {
    if (filter === "none") {
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
          {count} {filter} invoice
        </p>
      );
    }
  } else {
    if (filter === "none") {
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
          {count} {filter} invoices
        </p>
      );
    }
  }
}
