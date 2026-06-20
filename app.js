const googleFlightsUrl = "https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI2LTA5LTIxagcIARIDS0lYcgcIARIDVEFTGh4SCjIwMjYtMDktMjZqBwgBEgNUQVNyBwgBEgNLSVhAAUgBcAGCAQsI____________AZgBAQ&hl=ja";
const tripUrl = "https://jp.trip.com/flights/showfarefirst?dcity=osa&acity=tas&ddate=2026-09-21&rdate=2026-09-26&dairport=kix&triptype=rt&class=y&quantity=1&nonstoponly=off&locale=ja-JP&curr=JPY";

const flights = [
  {
    airline: "Air China · Gotogate",
    outbound: { time: "9/21 14:00 KIX → 9/22 19:40 TAS", duration: "33時間40分", transit: "PEK 23時間15分", alert: "深夜・翌日まで" },
    inbound: { time: "9/26 21:00 TAS → 9/27 12:40 KIX", duration: "11時間40分", transit: "PEK 3時間15分", alert: "早朝乗継" },
    hours: 33.7, stops: 1, price: 119296,
    tags: ["実測最安", "受託2個表示", "長時間乗継"], best: true,
    url: "https://www.gotogate.jp/"
  },
  {
    airline: "Air China · Skyscanner → Trip.com",
    outbound: { time: "9/21 14:00 KIX → 9/22 19:40 TAS", duration: "33時間40分", transit: "PEK 23時間15分", alert: "深夜・翌日まで" },
    inbound: { time: "9/26 21:00 TAS → 9/27 12:40 KIX", duration: "11時間40分", transit: "PEK 3時間15分", alert: "早朝乗継" },
    hours: 33.7, stops: 1, price: 121010,
    tags: ["Skyscanner最安", "手荷物込み表示"],
    url: "https://www.skyscanner.jp/transport/flights/kix/tas/260921/260926/?adultsv2=1&cabinclass=economy&rtn=1"
  },
  {
    airline: "China Eastern · Skyscanner",
    outbound: { time: "9/21 09:30 KIX → 9/21 18:40 TAS", duration: "13時間10分", transit: "PVG 2時間55分" },
    inbound: { time: "9/26 20:20 TAS → 9/27 13:20 KIX", duration: "13時間00分", transit: "PVG 4時間05分", alert: "早朝乗継" },
    hours: 13.2, stops: 1, price: 191720,
    tags: ["往復とも上海", "同一航空会社"],
    url: "https://www.skyscanner.jp/transport/flights/kix/tas/260921/260926/?adultsv2=1&cabinclass=economy&rtn=1"
  },
  {
    airline: "Asiana ＋ Korean Air · Skyscanner",
    outbound: { time: "9/21 10:30 KIX → 9/21 20:00 TAS", duration: "13時間30分", transit: "ICN 3時間55分" },
    inbound: { time: "9/26 21:55 TAS → 9/27 11:20 KIX", duration: "9時間25分", transit: "ICN 1時間10分", alert: "早朝・短時間" },
    hours: 13.5, stops: 1, price: 216380,
    tags: ["同一空港乗継", "復路が速い"],
    url: "https://www.skyscanner.jp/transport/flights/kix/tas/260921/260926/?adultsv2=1&cabinclass=economy&rtn=1"
  },
  {
    airline: "Asiana ＋ Korean Air · Skyscanner",
    outbound: { time: "9/21 11:10 KIX → 9/21 20:00 TAS", duration: "12時間50分", transit: "GMP → ICN 3時間25分", alert: "空港移動・要入国" },
    inbound: { time: "9/26 21:55 TAS → 9/27 11:20 KIX", duration: "9時間25分", transit: "ICN 1時間10分", alert: "早朝・短時間" },
    hours: 12.8, stops: 1, price: 217850,
    tags: ["ソウル空港移動", "荷物再預け注意"], adventure: true,
    url: "https://www.skyscanner.jp/transport/flights/kix/tas/260921/260926/?adultsv2=1&cabinclass=economy&rtn=1"
  },
  {
    airline: "Korean Air ＋ Asiana · Skyscanner",
    outbound: { time: "9/21 12:35 KIX → 9/21 20:00 TAS", duration: "11時間25分", transit: "ICN 2時間10分" },
    inbound: { time: "9/26 21:55 TAS → 9/27 11:20 KIX", duration: "9時間25分", transit: "ICN 1時間10分", alert: "早朝・短時間" },
    hours: 11.4, stops: 1, price: 230915,
    tags: ["実測最速", "受託1個表示"],
    url: "https://www.skyscanner.jp/transport/flights/kix/tas/260921/260926/?adultsv2=1&cabinclass=economy&rtn=1"
  }
];

const searches = {
  meta: [
    ["01", "Gotogate", "実測 ¥119,296・Air China", "https://www.gotogate.jp/"],
    ["02", "Trip.com", "実測 ¥122,070・同便を照合", tripUrl],
    ["03", "KAYAK", "実測 ¥122,870・販売元19件を比較", "https://www.kayak.co.jp/flights/KIX-TAS/2026-09-21/2026-09-26?sort=price_a"],
    ["04", "Google Flights", "最安タブ ¥121,572〜・時刻比較", googleFlightsUrl],
    ["05", "Skyscanner", "実測 ¥121,010・26社を横断", "https://www.skyscanner.jp/transport/flights/kix/tas/260921/260926/?adultsv2=1&cabinclass=economy&rtn=1"],
    ["06", "Kiwi.com", "別会社・自己乗継の組合せ", "https://www.kiwi.com/ja/search/results/osaka-japan/tashkent-uzbekistan/2026-09-21/2026-09-26"],
    ["07", "momondo", "KAYAK系の別表示", "https://www.momondo.jp/flight-search/KIX-TAS/2026-09-21/2026-09-26?sort=bestflight_a"],
    ["08", "Expedia", "KAYAK内実測 ¥126,160", "https://www.expedia.co.jp/Flights"],
    ["09", "Booking.com Flights", "KAYAK内実測 ¥126,445", "https://www.booking.com/flights/index.ja.html"],
    ["10", "Flightnetwork", "KAYAK内実測 ¥123,029", "https://www.flightnetwork.com/"],
    ["11", "HIS", "KAYAK内実測 ¥153,630", "https://www.his-j.com/air/"],
    ["12", "Surpr!ce", "KAYAK内実測 ¥154,460", "https://www.surpricenow.com/"],
    ["13", "Agoda Flights", "KAYAK内実測 ¥187,935", "https://www.agoda.com/flights"],
    ["14", "eDreams", "KAYAK内実測 ¥198,569", "https://www.edreams.jp/"],
    ["15", "JTB", "KAYAK内実測 ¥200,320", "https://www.jtb.co.jp/kaigai_air/"],
    ["16", "Kissandfly", "KAYAK内実測 ¥230,065", "https://kissandfly.com/"],
    ["17", "TeaFlight", "KAYAK内実測 ¥256,230", "https://teaflight.com/"],
    ["18", "Opodo", "eDreams系の別ブランド", "https://www.opodo.jp/"],
    ["19", "BudgetAir", "Etraveli系OTAを比較", "https://www.budgetair.jp/"],
    ["20", "Mytrip", "Etraveli系の別販売画面", "https://www.mytrip.com/"]
  ],
  airline: [
    ["CA", "Air China", "最安便の直販確認先・フォーム動作確認済み", "https://www.airchina.jp/JP/JP/Home"],
    ["KE", "Korean Air", "KIX–ICN区間の直販確認", "https://www.koreanair.com/"],
    ["OZ", "Asiana Airlines", "仁川経由の本命", "https://flyasiana.com/"],
    ["HY", "Uzbekistan Airways", "ICN–TAS・国内線を確認", "https://www.uzairways.com/"],
    ["MU", "China Eastern", "上海経由を直販検索", "https://www.ceair.com/"],
    ["CZ", "China Southern", "広州経由を直販検索", "https://www.csair.com/"],
    ["KC", "Air Astana", "アルマトイ経由を確認", "https://airastana.com/"],
    ["EY", "Etihad Airways", "アブダビ新接続を確認", "https://www.etihad.com/"],
    ["EK", "Emirates", "ドバイ経由・セール確認", "https://www.emirates.com/jp/japanese/"],
    ["TK", "Turkish Airlines", "イスタンブール経由", "https://www.turkishairlines.com/"],
    ["OD", "Batik Air Malaysia", "Trip.com ¥161,420便の直販確認", "https://www.batikair.com.my/"]
  ],
  split: [
    ["A", "KIX → ICN", "前半区間を単独検索", "https://www.kayak.co.jp/flights/KIX-ICN/2026-09-21?sort=bestflight_a"],
    ["B", "ICN → TAS", "後半区間を単独検索", "https://www.kayak.co.jp/flights/ICN-TAS/2026-09-21?sort=bestflight_a"],
    ["C", "KIX → PVG", "上海までを単独検索", "https://www.kayak.co.jp/flights/KIX-PVG/2026-09-21?sort=bestflight_a"],
    ["D", "PVG → TAS", "上海からを単独検索", "https://www.kayak.co.jp/flights/PVG-TAS/2026-09-21?sort=bestflight_a"],
    ["E", "KIX → ALA", "アルマトイまでを検索", "https://www.kayak.co.jp/flights/KIX-ALA/2026-09-21?sort=bestflight_a"],
    ["F", "ALA → TAS", "中央アジア内を別購入", "https://www.kayak.co.jp/flights/ALA-TAS/2026-09-21?sort=bestflight_a"]
  ],
  skd: [
    ["01", "KIX → SKD / Google", "サマルカンド往復を比較", "https://www.google.com/travel/flights?hl=ja"],
    ["02", "KIX → SKD / Skyscanner", "サマルカンド着のOTA横断", "https://www.skyscanner.jp/transport/flights/kix/skd/260921/260926/?adultsv2=1&cabinclass=economy"],
    ["03", "KIX → SKD / KAYAK", "SKD往復の検索", "https://www.kayak.co.jp/flights/KIX-SKD/2026-09-21/2026-09-26?sort=bestflight_a"],
    ["04", "TAS着 → SKD発", "オープンジョーを手動比較", "https://www.google.com/travel/flights?hl=ja"],
    ["05", "Uzbekistan Railways", "TAS–サマルカンド鉄道", "https://eticket.railway.uz/"],
    ["06", "Air Samarkand", "SKD拠点の航空会社", "https://www.airsamarkand.com/"]
  ]
};

const yen = value => value ? `¥${value.toLocaleString("ja-JP")}` : "価格要確認";

function renderFlights(filter = "all") {
  const grid = document.querySelector("#flightGrid");
  const visible = flights.filter(f => {
    if (filter === "fast") return f.hours <= 18;
    if (filter === "one") return f.stops === 1;
    if (filter === "budget") return f.price && f.price <= 160000;
    if (filter === "adventure") return f.adventure;
    return true;
  });

  grid.innerHTML = visible.map(f => `
    <article class="flight-card ${f.best ? "best" : ""}">
      <div>
        <span class="airline">${f.airline}</span>
        <div class="trip-directions">
          <div class="direction">
            <span class="direction-label">往路</span>
            <strong>${f.outbound.time}</strong>
            <small>${f.outbound.duration} · ${f.outbound.transit}${f.outbound.alert ? ` <em>${f.outbound.alert}</em>` : ""}</small>
          </div>
          <div class="direction">
            <span class="direction-label return">復路</span>
            <strong>${f.inbound.time}</strong>
            <small>${f.inbound.duration} · ${f.inbound.transit}${f.inbound.alert ? ` <em>${f.inbound.alert}</em>` : ""}</small>
          </div>
        </div>
        <div class="flight-tags">${f.tags.map(t => `<span class="mini-tag">${t}</span>`).join("")}</div>
      </div>
      <div class="price-box">
        <small>往復表示</small>
        <strong>${yen(f.price)}</strong>
        <a href="${f.url}" target="_blank" rel="noopener">販売元で再検索 ↗</a>
      </div>
    </article>
  `).join("");
}

function renderSearchLinks(tab = "meta") {
  document.querySelector("#searchLinks").innerHTML = searches[tab].map(([code, name, desc, url]) => `
    <a class="search-link" href="${url}" target="_blank" rel="noopener">
      <span>${code}</span>
      <strong>${name} ↗</strong>
      <small>${desc}</small>
    </a>
  `).join("");
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderFlights(button.dataset.filter);
  });
});

document.querySelectorAll(".search-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".search-tab").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderSearchLinks(button.dataset.tab);
  });
});

document.querySelectorAll(".mobile-more").forEach(button => {
  button.addEventListener("click", () => {
    const target = button.parentElement.querySelector(button.dataset.expand);
    target.classList.toggle("mobile-expanded");
    button.textContent = target.classList.contains("mobile-expanded") ? "表示をコンパクトにする" : button.dataset.expand.includes("provider") ? "販売元をすべて表示" : "さらに表示";
  });
});

renderFlights();
renderSearchLinks();
