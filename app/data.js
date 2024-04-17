import React from "react";
const columns = [
  { name: "NAME", uid: "name" },
  { name: "SELLING", uid: "selling" },
  { name: "BUYING", uid: "buying" },
  { name: "VOLUME", uid: "volume" },
];

const users = [
  {
    id: 1,
    name: "KUCOIN",
    selling: "1100",
    team: "Management",
    buying: "1090",
    volume: "29,000,000",
    avatar: "https://www.svgrepo.com/show/331460/kucoin.svg",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "BYBIT",
    selling: "1110",
    team: "Development",
    buying: "1090",
    volume: "29,000,000",
    avatar: "https://www.svgrepo.com/show/331331/bybit.svg",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "OKX",
    selling: "1112.5",
    team: "Development",
    buying: "1090",
    volume: "29,000,000",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e4/OKX_Logo.svg",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "PAXFUL",
    selling: "1118.3",
    team: "Marketing",
    buying: "1090",
    volume: "29,000,000",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxMuCDhMaKzWH8PqXHL4rYgHBMqVS9jKDlSiJPdLouA&s",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "DEXPAY",
    selling: "1100",
    team: "Sales",
    buying: "1090",
    volume: "24,000,000",
    avatar:
      "https://miro.medium.com/v2/resize:fit:450/1*yWHLLCLKSBYZXofi_FtFrQ.jpeg",
    email: "kristen.cooper@example.com",
  },
];

export { columns, users };
