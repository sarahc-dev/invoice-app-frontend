export type InvoiceStatus = "draft" | "pending" | "paid";
type None = "none";

export type InvoiceStatusFilter = InvoiceStatus | None;

type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

type InvoiceItem = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};
export interface Invoice {
  id: string;
  createdAt?: string;
  paymentDue: string;
  description?: string;
  paymentTerms?: number;
  clientName: string;
  clientEmail?: string;
  status: InvoiceStatus;
  senderAddress?: Address;
  clientAddress?: Address;
  items?: InvoiceItem[];
  total: number;
}
