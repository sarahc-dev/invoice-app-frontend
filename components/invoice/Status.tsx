import { InvoiceStatus } from "@/types";

export default function Status({
  status,
  style,
}: {
  status: InvoiceStatus;
  style: string;
}) {
  const formatStatus = status.charAt(0).toUpperCase() + status.slice(1);

  const getColour = () => {
    switch (status) {
      case "paid":
        return "text-green-400 bg-green-400";
      case "pending":
        return "text-orange-400 bg-orange-400";
      case "draft":
        return "text-blue-800 bg-blue-800";
    }
  };

  return (
    <div
      className={`heading-sm-var w-26 flex h-10 items-center justify-center rounded-md bg-opacity-[5.71%] ${getColour()} ${
        status === "draft" &&
        "dark:bg-blue-500 dark:bg-opacity-[5.71%] dark:text-blue-500"
      } ${style}`}
    >
      <div
        className={`mr-2 h-2 w-2 rounded-full ${getColour()} ${
          status === "draft" && "dark:bg-blue-500"
        }
        `}
      ></div>
      <p>{formatStatus}</p>
    </div>
  );
}
