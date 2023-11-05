export type InvoiceStatus = "Draft" | "Pending" | "Paid";
type None = "None";

export type InvoiceStatusFilter = InvoiceStatus | None;
