const PRICE_LAST_MEASURED_AT = "2026-06-27T21:30:00+09:00";
const OUTLOOK_UPDATED_AT = "2026-06-27T21:30:00+09:00";
const PRICE_RECHECK_STATUS = "2026年6月27日 21:30に現在価格を再確認済み。KAYAK、Trip.com、Skyscanner、Google Flightsで4名条件の価格表示を確認しました。";
const googleFlightsUrl = "https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI2LTA5LTIxagcIARIDS0lYcgcIARIDVEFTGh4SCjIwMjYtMDktMjZqBwgBEgNUQVNyBwgBEgNLSVhAAUABQAFAAUgBcAGCAQsI____________AZgBAQ&tfu=EgYIABAAGAA&hl=ja";
const tripUrl = "https://jp.trip.com/flights/showfarefirst?dcity=osa&acity=tas&ddate=2026-09-21&rdate=2026-09-26&dairport=kix&triptype=rt&class=y&lowpricesource=searchform&quantity=4&searchboxarg=t&nonstoponly=off&locale=ja-JP&curr=JPY";
const kayakUrl = "https://www.kayak.co.jp/flights/KIX-TAS/2026-09-21/2026-09-26/4adults?fs=fdDir%3Dfalse&sort=price_a";
const skyscannerUrl = "https://www.skyscanner.jp/transport/flights/kix/tas/260921/260926/?adultsv2=4&cabinclass=economy&rtn=1&preferdirects=false";
const skyscannerAirChinaUrl = "https://www.skyscanner.jp/transport/flights/kix/tas/260921/260926/config/13068-2609211400--32690-1-16759-2609221940%7C16759-2609262100--32690-1-13068-2609272030?adultsv2=4&cabinclass=economy&rtn=1&preferdirects=false";

const flights = [
  {
    airline: "Air China · KAYAK",
    outbound: { time: "9/21 14:00 KIX → 9/22 19:40 TAS", duration: "33時間40分", transit: "PEK 23時間15分", alert: "深夜・翌日まで" },
    inbound: { time: "9/26 21:00 TAS → 9/27 20:30 KIX", duration: "19時間30分", transit: "北京経由", alert: "深夜・翌日着" },
    hours: 33.7, stops: 1, price: 446976, perPerson: 111744,
    tags: ["現在確認最安", "4名総額確認済み", "長時間乗継"], best: true,
    url: kayakUrl
  },
  {
    airline: "Air China · Skyscanner → Gotogate",
    outbound: { time: "9/21 14:00 KIX → 9/22 19:40 TAS", duration: "33時間40分", transit: "PEK 23時間15分", alert: "深夜・翌日まで" },
    inbound: { time: "9/26 21:00 TAS → 9/27 20:30 KIX", duration: "19時間30分", transit: "PEK 11時間05分", alert: "深夜・翌日着" },
    hours: 33.7, stops: 1, price: 447330, perPerson: 111833,
    tags: ["Gotogate現在確認", "機内・受託手荷物込み表示", "便まで入力済み"],
    url: skyscannerAirChinaUrl
  },
  {
    airline: "Air China · Trip.com",
    outbound: { time: "9/21 14:00 KIX → 9/22 19:40 TAS", duration: "33時間40分", transit: "PEK 23時間15分", alert: "深夜・翌日まで" },
    inbound: { time: "復路はリンク先で選択", duration: "選択便により変動", transit: "北京経由候補" },
    hours: 33.7, stops: 1, price: 451160, perPerson: 112790,
    tags: ["現在確認", "受託手荷物2×23kg表示"],
    url: tripUrl
  },
  {
    airline: "Asiana ＋ Uzbekistan Airways · Trip.com",
    outbound: { time: "9/21 00:15 KIX → 9/21 13:20 TAS", duration: "17時間05分", transit: "ICN 7時間55分", alert: "深夜出発" },
    inbound: { time: "復路はリンク先で選択", duration: "選択便により変動", transit: "仁川経由候補" },
    hours: 17.1, stops: 1, price: 760880, perPerson: 190220,
    tags: ["参考候補", "受託32kg表示", "北京より短い"],
    url: tripUrl
  },
  {
    airline: "Korean Air ＋ Asiana · Google Flights",
    outbound: { time: "9/21 14:00 KIX → 9/22 19:40 TAS", duration: "33時間40分", transit: "PEK 23時間15分", alert: "深夜・翌日まで" },
    inbound: { time: "9/26 21:00 TAS → 9/27 20:30 KIX", duration: "19時間30分", transit: "PEK 11時間05分", alert: "深夜・翌日着" },
    hours: 33.7, stops: 1, price: 459280, perPerson: 114820,
    tags: ["Google現在確認", "Air China", "便まで確認"],
    url: googleFlightsUrl
  }
];

const searches = {
  meta: [
    ["01", "KAYAK", "現在確認：4名総額 ¥446,976・Air China", kayakUrl],
    ["02", "Skyscanner → Gotogate", "現在確認：4名総額 ¥447,330・便まで入力済み", skyscannerAirChinaUrl],
    ["03", "Trip.com", "現在確認：1名 ¥112,790・4名換算 ¥451,160", tripUrl],
    ["04", "Google Flights", "現在確認：Air China 4名総額 ¥459,280", googleFlightsUrl],
    ["05", "Flightnetwork", "Skyscanner内現在確認 ¥452,726・便まで入力済み", skyscannerAirChinaUrl],
    ["06", "Expedia", "Skyscanner内現在確認 ¥464,720・便まで入力済み", skyscannerAirChinaUrl],
    ["07", "Booking.com Flights", "Skyscanner内現在確認 ¥467,221・便まで入力済み", skyscannerAirChinaUrl],
    ["08", "TeaFlight", "Skyscanner内現在確認 ¥463,280・便まで入力済み", skyscannerAirChinaUrl],
    ["09", "エアトリ", "Skyscanner内現在確認 ¥464,720・便まで入力済み", skyscannerAirChinaUrl],
    ["10", "Kiwi.com", "4名・日程・区間入力済み", "https://www.kiwi.com/ja/search/results/osaka-japan/tashkent-uzbekistan/2026-09-21/2026-09-26?adults=4"],
    ["11", "momondo", "4名・日程・区間入力済み", "https://www.momondo.jp/flight-search/KIX-TAS/2026-09-21/2026-09-26/4adults?sort=price_a"],
    ["12", "Air China直販", "Skyscanner内現在確認 ¥524,720・便まで入力済み", skyscannerAirChinaUrl]
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
    ["A", "KIX → ICN", "4名・前半区間を単独検索", "https://www.kayak.co.jp/flights/KIX-ICN/2026-09-21/4adults?sort=bestflight_a"],
    ["B", "ICN → TAS", "4名・後半区間を単独検索", "https://www.kayak.co.jp/flights/ICN-TAS/2026-09-21/4adults?sort=bestflight_a"],
    ["C", "KIX → PVG", "4名・上海までを単独検索", "https://www.kayak.co.jp/flights/KIX-PVG/2026-09-21/4adults?sort=bestflight_a"],
    ["D", "PVG → TAS", "4名・上海からを単独検索", "https://www.kayak.co.jp/flights/PVG-TAS/2026-09-21/4adults?sort=bestflight_a"],
    ["E", "KIX → ALA", "4名・アルマトイまでを検索", "https://www.kayak.co.jp/flights/KIX-ALA/2026-09-21/4adults?sort=bestflight_a"],
    ["F", "ALA → TAS", "4名・中央アジア内を別購入", "https://www.kayak.co.jp/flights/ALA-TAS/2026-09-21/4adults?sort=bestflight_a"]
  ],
  skd: [
    ["01", "KIX → SKD / Skyscanner", "4名・サマルカンド往復を入力済み", "https://www.skyscanner.jp/transport/flights/kix/skd/260921/260926/?adultsv2=4&cabinclass=economy&rtn=1"],
    ["02", "KIX → SKD / KAYAK", "4名・SKD往復を入力済み", "https://www.kayak.co.jp/flights/KIX-SKD/2026-09-21/2026-09-26/4adults?sort=bestflight_a"],
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
    if (filter === "budget") return f.perPerson && f.perPerson <= 160000;
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
        <small>4名往復総額</small>
        <strong>${yen(f.price)}</strong>
        <small>1名 ${yen(f.perPerson)}</small>
        <a href="${f.url}" target="_blank" rel="noopener">4名・入力済みで開く ↗</a>
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

function updateFreshness() {
  const node = document.querySelector("#freshnessStatus");
  if (!node) return;
  const outlookAgeHours = (Date.now() - new Date(OUTLOOK_UPDATED_AT).getTime()) / 36e5;
  node.className = outlookAgeHours <= 48 ? "freshness is-fresh" : "freshness is-stale";
  node.innerHTML = `
    <b>現在価格確認：2026年6月27日 21:30</b>
    <span>${PRICE_RECHECK_STATUS}</span>
    <span>最安確認：KAYAK ¥446,976、Skyscanner/Gotogate ¥447,330、Trip.com ¥451,160、Google Flights/Air China ¥459,280。</span>
  `;
  if (outlookAgeHours > 48) {
    document.querySelectorAll(".confidence").forEach(el => {
      el.textContent = "外部要因の確認が48時間を超えたため、上昇・下降判定は要再調査";
    });
  }
}

updateFreshness();
