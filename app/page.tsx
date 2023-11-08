"use client";
import { useState } from "react";
import InvoiceCountStatus from "@/components/invoice/InvoiceCountStatus";
import NewButton from "@/components/ui/NewButton";
import InvoiceContainer from "@/components/invoice/InvoiceContainer";

export default function Home() {
  const [invoices, setInvoices] = useState([]);
  return (
    <main className="flex w-full flex-1 flex-col px-6 py-8 md:px-12 md:py-15 xl:py-20">
      <div className="mx-auto flex w-full max-w-base">
        <div className="mr-auto">
          <h1 className="heading-md md:heading-lg mb-1.5">Invoices</h1>
          {invoices && (
            <InvoiceCountStatus count={invoices.length} filter="None" />
          )}
        </div>
        <div></div>
        <NewButton onClick={() => {}} />
      </div>
      <InvoiceContainer invoices={invoices} />
    </main>
  );
}
