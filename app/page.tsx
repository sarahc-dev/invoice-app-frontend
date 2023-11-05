"use client";
import { useState } from "react";
import data from "@/data.json";
import InvoiceCountStatus from "@/components/invoice/InvoiceCountStatus";

export default function Home() {
  const [invoices, setInvoices] = useState(data);
  return (
    <main className="px-6 py-8 md:px-12 md:py-15 xl:py-20">
      <div className="mx-auto max-w-base">
        <div>
          <h1 className="heading-md md:heading-lg mb-1.5">Invoices</h1>
          {invoices && (
            <InvoiceCountStatus count={invoices.length} filter="None" />
          )}
        </div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
