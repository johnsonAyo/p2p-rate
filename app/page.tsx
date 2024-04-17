import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GetServerSideProps } from "next";

import React from "react";
import { columns, users } from "./data";
import TableCoponent from "./table";

const kucoinSell =
  "https://www.kucoin.com/_api/otc/ad/list?status=PUTUP&currency=USDT&legal=NGN&page=1&pageSize=10&side=SELL&amount=&payTypeCodes=&lang=en_US";

const kucoinBuy =
  "https://www.kucoin.com/_api/otc/ad/list?status=PUTUP&currency=USDT&legal=NGN&page=1&pageSize=10&side=BUY&amount=&payTypeCodes=&lang=en_US";

export default async function Home() {
  const buyEndpoint = async () => {
    const res = await fetch(kucoinBuy);
    return res.json();
  };

  const sellEndpoint = async () => {
    const res = await fetch(kucoinSell);
    return res.json();
  };

  const populateMappedData = async () => {
    const [kucoinBuydata, kucoinSelldata] = await Promise.all([
      buyEndpoint(),
      sellEndpoint(),
    ]);

    // const buyItem = kucoinBuydata.items.find(
    //   (item) => item.currencyBalanceQuantity > 10
    // );
    // const sellItem = kucoinSelldata.items.find(
    //   (item) => item.currencyBalanceQuantity > 10
    // );
    // console.log("buy", kucoinBuydata.items);

    const buyItem = kucoinBuydata.items[0];
    const sellItem = kucoinSelldata.items[0];

    const buy = buyItem?.floatPrice;
    const buyVolume = buyItem?.currencyBalanceQuantity;
    const buyNickName = buyItem.nickName;
    const sell = sellItem?.floatPrice;
    const sellVolume = sellItem?.currencyBalanceQuantity;
    const sellNickName = sellItem.nickName;

    return {
      id: 1,
      name: "Kucoin",
      buy,
      buyVolume,
      sell,
      sellVolume,
      sellNickName,
      buyNickName,
    };
  };

  const mappedData = await populateMappedData();
  console.log(mappedData);

  //   const updateData = async () => {
  //     const mappedData = await populateMappedData();
  //     console.log(mappedData);

  //     // Call the function recursively after a delay to continue polling
  //     setTimeout(updateData, 10000); // Update every second
  //   };

  //   // Initial call to start the polling process
  //   updateData();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-4">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Real-Time P2P&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>USDT to Naira&nbsp;</h1>
        <h1 className={title()}>Exchange Rate &nbsp;</h1>
        <br />
      </div>
      <TableCoponent columns={columns} users={[mappedData]} />
    </section>
  );
}
