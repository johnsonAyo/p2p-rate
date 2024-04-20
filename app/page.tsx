import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import TableCoponent from "./table";
import { useCurrencyData } from "./hooks/fetch-rate";
import React from "react";
import { columns, exchanges } from "./data";
import processExchangeData from "./process";

export default async function Home() {
  // const { data: currencyData, isLoading, error } = useCurrencyData();
  // const [currencyData, setCurrencyData] = useState(null);

  // useEffect(() => {
  //   const updateData = async () => {
  //     const updatedData: any = await Promise.all(
  //       exchanges.map(processExchangeData)
  //     ); // Or your existing fetch logic
  //     setCurrencyData(updatedData);
  //   };

  //   console.log({ currencyData });
  //   updateData(); // Initial update
  //   const intervalId = setInterval(updateData, 10000); // Update every 10 seconds
  //   return () => clearInterval(intervalId); // Cleanup
  // }, []);

  const mappedData = await Promise.all(exchanges.map(processExchangeData));

  return (
    <section className="flex flex-col items-center justify-center gap-2 md:py-4">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Real-Time P2P&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>USDT to Naira&nbsp;</h1>
        <h1 className={title()}>Exchange Rate &nbsp;</h1>
        <br />
      </div>
      <TableCoponent columns={columns} users={mappedData} />
    </section>
  );
}
