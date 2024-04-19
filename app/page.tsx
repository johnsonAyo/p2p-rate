import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import TableCoponent from "./table";

import React from "react";
import { columns, exchanges } from "./data";

export default async function Home() {
  async function fetchData(endpoint: any) {
    const res = await fetch(endpoint);
    return res.json();
  }

  async function processExchangeData(exchange: any) {
    const buyData = await fetchData(exchange.buyEndpoint);
    const sellData = await fetchData(exchange.sellEndpoint);

    const buyPath = [...exchange.dataPath, ...(exchange.buyItemPath || [])]; // Combine dataPath and buyItemPath
    const sellPath = [...exchange.dataPath, ...(exchange.sellItemPath || [])]; // Combine dataPath and sellItemPath

    let buyItems, sellItems;
    const needsFiltering = exchange.mergedEndpoint;

    if (needsFiltering) {
      buyItems = buyData.filter((item: any) => item.type === "BUY");
      sellItems = sellData.filter((item: any) => item.type === "SELL");
    } else {
      buyItems = traverseData(buyData, buyPath); // Assuming nested buy data
      sellItems = traverseData(sellData, sellPath); // Assuming nested sell data
    }

    const buyItem = buyItems.find(
      (item: any) => item[exchange.buyVolumeProperty] > 500
    );
    const sellItem = sellItems?.find(
      (item: any) => item[exchange.sellVolumeProperty] > 500
    );

    const formattedData = {
      id: exchanges.indexOf(exchange) + 1,
      avatar: exchange.avatar, // Use avatar from exchange object
      name: exchange.name,
      buy: buyItem
        ? formatPriceWithCommas(buyItem?.[exchange.buyPriceProperty])
        : "Not Available",
      buyVolume: buyItem
        ? formatNumberWithCommas(buyItem?.[exchange.buyVolumeProperty])
        : "Not Available",
      sell: sellItem
        ? formatPriceWithCommas(sellItem?.[exchange.sellPriceProperty])
        : "Not Available",
      sellVolume: sellItem
        ? formatNumberWithCommas(sellItem[exchange.sellVolumeProperty])
        : "Not Available",
    };

    return formattedData;
  }

  function formatNumberWithCommas(number: any) {
    const number_without_decimals = parseInt(number);
    const formatted_number = number_without_decimals.toLocaleString("en-US", {
      minimumFractionDigits: 0, // No decimals
      maximumFractionDigits: 0, // No decimals
    });

    return formatted_number || "Not Available";
  }

  function formatPriceWithCommas(numberStr: any) {
    let number = parseFloat(numberStr);

    if (isNaN(number)) {
      return numberStr;
    }

    return number.toFixed(2) || "Not Available";
  }

  function traverseData(data: any, path: any) {
    if (!path || !path.length) {
      return data;
    }
    let current = data;

    for (const key of path) {
      current = current[key];
      if (!current) {
        return null; // Handle cases where a step in the path is missing
      }
    }

    return current;
  }

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
