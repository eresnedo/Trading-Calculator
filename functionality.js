"use strict";

document.querySelector(".btn").addEventListener("click", function () {
  const depositValue = Number(document.querySelector(".depositInput").value);
  const leverageValue = Number(document.querySelector(".leverageInput").value);
  const entryValue = Number(document.querySelector(".entryInput").value);
  const exitValue = Number(document.querySelector(".exitInput").value);
  const deposValue = Number(document.querySelector(".depositInput").value);

  // Liquidation

  const lever = 100 / leverageValue;
  const liq1 = entryValue - entryValue * (lever / 100);
  document.querySelector(".liqResult").textContent = liq1.toFixed(2);

  // Profit or loss
  const pnl = deposValue * leverageValue;
  const rez = pnl * (exitValue / entryValue);
  const res = rez - pnl;
  document.querySelector(".pnlResult").textContent = res.toFixed(2);
});
