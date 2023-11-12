"use client";
import { useState, useEffect } from "react";
import InvoiceCountStatus from "@/components/invoice/InvoiceCountStatus";
import NewButton from "@/components/ui/NewButton";
import InvoiceContainer from "@/components/invoice/InvoiceContainer";
import { Invoice } from "@/types";

export default function Home() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setInvoices(data));
  }, []);

  return (
    <main className="flex w-full flex-1 flex-col px-6 py-8 md:px-12 md:py-15 xl:py-20">
      <div className="mx-auto mb-8 flex w-full max-w-base md:mb-14 xl:mb-16">
        <div className="mr-auto">
          <h1 className="heading-md md:heading-lg mb-1.5">Invoices</h1>
          {invoices && (
            <InvoiceCountStatus count={invoices.length} filter="none" />
          )}
        </div>
        <div></div>
        <NewButton onClick={() => {}} />
      </div>
      <InvoiceContainer invoices={invoices} />
    </main>
  );
}
