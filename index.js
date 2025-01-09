let bill = null;
let selecttip = null;
let nop = 1;
let exchangeRates = "USD";
let currenciesValue = {};
let userCurrencyExchange = 1;

function setVariables() {
  let appliedTip = (bill * selecttip) / 100;
  const totalamount = (Number(bill) + Number(appliedTip)) / Number(nop);
  document.getElementById("userinput").value = bill;
  document.getElementById("np").value = nop;
  document.getElementById("tipamount").innerText =
    "$" + (appliedTip * userCurrencyExchange).toFixed(2);
  if (nop > 0) {
    document.getElementById("totalbill").innerText =
      "$" + (totalamount * userCurrencyExchange).toFixed(2);
  }

  document.getElementById("dropdown-menu").value = exchangeRates;
}

function userinput() {
  bill = document.getElementById("userinput").value;
  setVariables();
}
function handleTipForFive() {
  selecttip = 5;
  setVariables();
}
function handleTipForTen() {
  selecttip = 10;

  setVariables();
}
function handleTipForFifteen() {
  selecttip = 15;
  setVariables();
}
function handleTipForTwentyFive() {
  selecttip = 25;
}
function handleTipForFifty() {
  selecttip = 50;
}
function handleTipForCustom() {
  selecttip = document.getElementById("custom").value;
  setVariables();
}
function totalNoP() {
  nop = document.getElementById("np").value;
  setVariables();
}
setVariables();
fetch(
  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_yG0OTEeMQyrYEUsWOEilVPjncPD0M3PCSGetAvwW&currencies=EUR%2CUSD%2CGBP"
)
  .then((response) => response.json())
  .then((data) => {
    currenciesValue = data.data;

    console.log("POP", currenciesValue);
  })
  .catch((error) => console.error("Error fetching exchange rates:", error));

function currency() {
  const currencyValue = document.getElementById("dropdown-menu").value;
  exchangeRates = currencyValue;
  userCurrencyExchange = currenciesValue[currencyValue];
  setVariables();
}
