import { useQuery } from "react-query";
import { exchanges } from "./../data";
import processExchangeData from "./../process";

const fetchCurrencyData = async () => {
  const mappedData = await Promise.all(exchanges.map(processExchangeData));
  return mappedData;
};

export function useCurrencyData() {
  return useQuery("currencyData", fetchCurrencyData, {
    refetchInterval: 10000, // Fetch every 10 seconds
  });
}
