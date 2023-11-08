import NoInvoices from "./NoInvoices";

// TODO update type
export default function InvoiceContainer({ invoices }: { invoices: any }) {
  if (invoices.length === 0) {
    return <NoInvoices />;
  }

  return null;
}
