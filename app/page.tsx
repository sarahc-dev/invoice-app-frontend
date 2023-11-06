"use client";
import { useState } from "react";
import data from "@/data.json";
import InvoiceCountStatus from "@/components/invoice/InvoiceCountStatus";
import NewButton from "@/components/ui/NewButton";

export default function Home() {
  const [invoices, setInvoices] = useState(data);
  return (
    <main className="w-full px-6 py-8 md:px-12 md:py-15 xl:py-20">
      <div className="mx-auto flex max-w-base">
        <div className="mr-auto">
          <h1 className="heading-md md:heading-lg mb-1.5">Invoices</h1>
          {invoices && (
            <InvoiceCountStatus count={invoices.length} filter="None" />
          )}
        </div>
        <div>Filter</div>
        <NewButton onClick={() => {}} />
      </div>
    </main>
  );
}
