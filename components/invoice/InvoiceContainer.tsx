import NoInvoices from "./NoInvoices";
import InvoiceItem from "./Invoice";
import { Invoice } from "@/types";

export default function InvoiceContainer({
  invoices,
}: {
  invoices: Invoice[];
}) {
  if (invoices.length === 0) {
    return <NoInvoices />;
  }

  return (
    <ul
      data-cy="invoiceList"
      className="mx-auto flex w-full max-w-base flex-col gap-4 pb-18"
    >
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </ul>
  );
}
