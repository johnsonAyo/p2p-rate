export default async function fetchRate() {
  const url =
    "https://www.kucoin.com/_api/otc/ad/list?status=PUTUP&currency=USDT&legal=NGN&page=1&pageSize=10&side=SELL&amount=&payTypeCodes=&lang=en_US";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("Data:", data);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const columns = [
  { name: "NAME", uid: "name" },
  { name: "SELL", uid: "sell" },
  { name: "SELL QUANTITY", uid: "sellVolume" },
  { name: "BUY", uid: "buy" },
  { name: "BUY QUANTITY", uid: "buyVolume" },
];

const users = [
  {
    id: 1,
    name: "KUCOIN",
    sell: "1100",
    buy: "1100",
    buyVolume: "29,000,000",
    team: "Management",
    sellVolume: "29,000,000",
    avatar: "https://www.svgrepo.com/show/331460/kucoin.svg",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "BYBIT",
    sell: "1100",
    buy: "1100",
    buyVolume: "29,000,000",
    team: "Management",
    sellVolume: "29,000,000",
    avatar: "https://www.svgrepo.com/show/331331/bybit.svg",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "OKX",
    sell: "1100",
    buy: "1100",
    buyVolume: "29,000,000",
    team: "Management",
    sellVolume: "29,000,000",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e4/OKX_Logo.svg",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "PAXFUL",
    sell: "1100",
    buy: "1100",
    buyVolume: "29,000,000",
    team: "Management",
    sellVolume: "29,000,000",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxMuCDhMaKzWH8PqXHL4rYgHBMqVS9jKDlSiJPdLouA&s",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "DEXPAY",
    sell: "1100",
    buy: "1100",
    buyVolume: "29,000,000",
    team: "Management",
    sellVolume: "29,000,000",
    avatar:
      "https://miro.medium.com/v2/resize:fit:450/1*yWHLLCLKSBYZXofi_FtFrQ.jpeg",
    email: "kristen.cooper@example.com",
  },
];

export { columns, users };
