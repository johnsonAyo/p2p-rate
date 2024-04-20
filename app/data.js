const columns = [
  { name: "EXCHANGE NAME", uid: "name" },
  { name: "SELL PRICE", uid: "sell" },
  { name: "SELL QUANTITY", uid: "sellVolume" },
  { name: "BUY PRICE", uid: "buy" },
  { name: "BUY QUANTITY", uid: "buyVolume" },
];

// const columns2 = [
//   { name: "EXCHANGE NAME", uid: "name" },
//   { name: "SELL PRICE", uid: "sell" },
//   { name: "SELL QUANTITY", uid: "sellVolume" },
//   { name: "BUY PRICE", uid: "buy" },
//   { name: "BUY QUANTITY", uid: "buyVolume" },
// ];

const kucoinSell =
  "https://www.kucoin.com/_api/otc/ad/list?status=PUTUP&currency=USDT&legal=NGN&page=1&pageSize=50&side=BUY";

const kucoinBuy =
  "https://www.kucoin.com/_api/otc/ad/list?status=PUTUP&currency=USDT&legal=NGN&page=1&pageSize=50&side=SELL";

const okexBuy =
  "https://www.okx.com/v3/c2c/tradingOrders/getMarketplaceAdsPrelogin?side=buy&paymentMethod=all&userType=all&sortType=price_asc&limit=100&cryptoCurrency=USDT&fiatCurrency=NGN&currentPage=1&numberPerPage=20";

const okexSell =
  "https://www.okx.com/v3/c2c/tradingOrders/getMarketplaceAdsPrelogin?side=sell&paymentMethod=all&userType=all&sortType=price_asc&limit=100&cryptoCurrency=USDT&fiatCurrency=NGN&currentPage=1&numberPerPage=20";

const htxBuy =
  "https://www.htx.com/-/x/otc/v1/data/trade-market?coinId=2&currency=15&tradeType=sell&currPage=1&payMethod=0&acceptOrder=0&country=&blockType=general&online=1&range=0&amount=&onlyTradable=false&isFollowed=false";
const htxSell =
  "https://www.htx.com/-/x/otc/v1/data/trade-market?coinId=2&currency=15&tradeType=buy&currPage=1&payMethod=0&acceptOrder=-1&country=&blockType=general&online=1&range=0&amount=&onlyTradable=false&isFollowed=false";
const paxfulBuy =
  "https://paxful.com/rest/v1/offers?transformResponse=camelCase&withFavorites=false&crypto_currency_id=4&is_payment_method_localized=0&visitor_country_has_changed=false&users_country_iso=NG&visitor_country_iso=NG&currency=NGN&payment-method%5B0%5D=bank-transfer&type=sell";
const paxfulSell =
  "https://paxful.com/rest/v1/offers?transformResponse=camelCase&withFavorites=false&crypto_currency_id=4&is_payment_method_localized=0&visitor_country_has_changed=false&users_country_iso=NG&visitor_country_iso=NG&currency=NGN&payment-method%5B0%5D=bank-transfer&type=buy";

const dexpaySell = "https://api.dexpay.io/trades?show-overview=true";

const dexpayBuy = "https://api.dexpay.io/trades?show-overview=true";

const localCoinSwapBuy =
  "https://iapi.localcoinswap.com/api/v2/offers/search/?trading_type=sell&coin_currency=USDT-BEP20&payment_method=bank-transfers&country_code=NG&ordering=country_first%2C-reputation%2Ccurrent_price_usd&offset=0&limit=10";

const localCoinSwapSell =
  "https://iapi.localcoinswap.com/api/v2/offers/search/?trading_type=buy&coin_currency=USDT-BEP20&payment_method=bank-transfers&country_code=NG&ordering=country_first%2C-reputation%2C-current_price_usd&offset=0&limit=10";

const remitanoBuy =
  "https://remitano.com/api/v2/offers?page=1&offer_type=sell&coin=usdt&fiat_currency=ngn&offline=true&offer_scope=public&filter_traded_partners=false&filter_makers_from_level3=false&use_api_v2=true&is_p2_p_home=true&coin_currency=usdt";

const remitanoSell =
  "https://remitano.com/api/v2/offers?page=1&offer_type=buy&coin=usdt&fiat_currency=ngn&offline=true&offer_scope=public&filter_traded_partners=false&filter_makers_from_level3=false&use_api_v2=true&is_p2_p_home=true&coin_currency=usdt";
const noonesBuy =
  "https://noones.com/rest/v1/offers?transformResponse=camelCase&searchId=846c3f29-fb4b-43e3-9641-1bc59c356b9d&user_badges%5B0%5D=1&user_badges%5B1%5D=2&user_badges%5B2%5D=8&user_badges%5B3%5D=7&user_badges%5B4%5D=6&user_badges%5B5%5D=5&user_badges%5B6%5D=10&sort=default&withFavorites=false&crypto_currency_id=4&is_payment_method_localized=0&group=bank-transfers&currency=NGN&type=sell";

const noonesSell =
  "https://noones.com/rest/v1/offers?transformResponse=camelCase&searchId=846c3f29-fb4b-43e3-9641-1bc59c356b9d&user_badges%5B0%5D=1&user_badges%5B1%5D=2&user_badges%5B2%5D=8&user_badges%5B3%5D=7&user_badges%5B4%5D=6&user_badges%5B5%5D=5&user_badges%5B6%5D=10&sort=default&withFavorites=false&crypto_currency_id=4&is_payment_method_localized=0&group=bank-transfers&currency=NGN&type=buy";

const exchanges = [
  {
    avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e4/OKX_Logo.svg",
    name: "OKX",
    buyEndpoint: okexBuy,
    sellEndpoint: okexSell,
    dataPath: ["data"], // Common path for both buy/sell in OKX
    buyVolumeProperty: "availableAmount",
    sellVolumeProperty: "availableAmount",
    buyItemPath: ["buy"],
    sellItemPath: ["sell"],
    buyPriceProperty: "price",
    sellPriceProperty: "price",
  },

  {
    avatar:
      "https://cryptodaily.blob.core.windows.net/space/htx%201920%20X%201080.jpg",
    name: "HTX",
    buyPriceProperty: "price",
    sellPriceProperty: "price",
    buyEndpoint: htxBuy,
    sellEndpoint: htxSell,
    dataPath: ["data"], // Empty path for Kucoin (direct access)
    buyVolumeProperty: "tradeCount",
    sellVolumeProperty: "tradeCount",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxMuCDhMaKzWH8PqXHL4rYgHBMqVS9jKDlSiJPdLouA&s",

    name: "PAXFUL",
    buyPriceProperty: "fiatPricePerBtc",
    sellPriceProperty: "fiatPricePerBtc",
    buyEndpoint: paxfulBuy,
    sellEndpoint: paxfulSell,
    range: true,
    dataPath: ["data"], // Empty path for Kucoin (direct access)
    buyVolumeProperty: "fiatAmountRangeMax",
    sellVolumeProperty: "fiatAmountRangeMax",
  },
  {
    avatar:
      "https://miro.medium.com/v2/resize:fit:450/1*yWHLLCLKSBYZXofi_FtFrQ.jpeg",
    name: "Dexpay",
    buyEndpoint: dexpayBuy,
    sellEndpoint: dexpaySell,
    mergedEndpoint: true,
    dataPath: [],
    buyVolumeProperty: "quantityAvailable",
    sellVolumeProperty: "quantityAvailable",
    buyPriceProperty: "price",
    sellPriceProperty: "price",
  },

  {
    avatar: "https://www.svgrepo.com/show/331460/kucoin.svg",
    name: "Kucoin",
    buyPriceProperty: "floatPrice",
    sellPriceProperty: "floatPrice",
    buyEndpoint: kucoinBuy,
    sellEndpoint: kucoinSell,
    dataPath: ["items"], // Empty path for Kucoin (direct access)
    buyVolumeProperty: "currencyBalanceQuantity",
    sellVolumeProperty: "currencyBalanceQuantity",
  },
  {
    avatar:
      "https://play-lh.googleusercontent.com/7hZSZE1_0CzLp5DVmX09z98A4wL0_RuCFld0Den1g0Ws9tDJZ6Dl2TjUwBHo5SE8g8Rx",
    name: "REMITANO",
    buyPriceProperty: "price",
    sellPriceProperty: "price",
    buyEndpoint: remitanoSell,
    sellEndpoint: remitanoBuy,
    dataPath: ["offers"], // Empty path for Kucoin (direct access)
    buyVolumeProperty: "total_amount",
    sellVolumeProperty: "total_amount",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2ZJE91sDwGIKVYeas1B5TVIOCwi2xFobI2hGnIFbxA&s",
    name: "LOCALCOINSWAP",
    buyPriceProperty: "price_formula_value",
    sellPriceProperty: "price_formula_value",
    buyEndpoint: localCoinSwapSell,
    sellEndpoint: localCoinSwapBuy,
    range: true,
    dataPath: ["results"], // Empty path for Kucoin (direct access)
    buyVolumeProperty: "max_trade_size",
    sellVolumeProperty: "max_trade_size",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKkHoCTFeDLurQe5jc0SxMTGvm4-lTvGADG6EzvFSYpA&s",
    name: "NOONES",
    buyPriceProperty: "fiatPricePerBtc",
    sellPriceProperty: "fiatPricePerBtc",
    buyEndpoint: noonesBuy,
    sellEndpoint: noonesSell,
    range: true,
    dataPath: ["data"], // Empty path for Kucoin (direct access)
    buyVolumeProperty: "fiatAmountRangeMax",
    sellVolumeProperty: "fiatAmountRangeMax",
  },
];

export { columns, exchanges };
