const DATA_UPDATED_AT = "2026-06-21T12:00:00+09:00";
const googleFlightsUrl = "https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI2LTA5LTIxagcIARIDS0lYcgcIARIDVEFTGh4SCjIwMjYtMDktMjZqBwgBEgNUQVNyBwgBEgNLSVhAAUABQAFAAUgBcAGCAQsI____________AZgBAQ&tfu=EgYIABAAGAA&hl=ja";
const tripUrl = "https://jp.trip.com/flights/showfarefirst?dcity=osa&acity=tas&ddate=2026-09-21&rdate=2026-09-26&dairport=kix&triptype=rt&class=y&lowpricesource=searchform&quantity=4&searchboxarg=t&nonstoponly=off&locale=ja-JP&curr=JPY";
const kayakUrl = "https://www.kayak.co.jp/flights/KIX-TAS/2026-09-21/2026-09-26/4adults?fs=fdDir%3Dfalse&sort=price_a";
const skyscannerUrl = "https://www.skyscanner.jp/transport/flights/kix/tas/260921/260926/?adultsv2=4&cabinclass=economy&rtn=1&preferdirects=false";

const flights = [
  {
    airline: "Air China · KAYAK",
    outbound: { time: "9/21 14:00 KIX → 9/22 19:40 TAS", duration: "33時間40分", transit: "PEK 23時間15分", alert: "深夜・翌日まで" },
    inbound: { time: "9/26 21:00 TAS → 9/27 20:30 KIX", duration: "19時間30分", transit: "北京経由", alert: "深夜・翌日着" },
    hours: 33.7, stops: 1, price: 484344, perPerson: 121086,
    tags: ["4席実測最安", "大人4名入力済み", "長時間乗継"], best: true,
    url: kayakUrl
  },
  {
    airline: "Air China · Trip.com",
    outbound: { time: "9/21 14:00 KIX → 9/22 19:40 TAS", duration: "33時間40分", transit: "PEK 23時間15分", alert: "深夜・翌日まで" },
    inbound: { time: "復路はリンク先で選択", duration: "選択便により変動", transit: "北京経由候補" },
    hours: 33.7, stops: 1, price: 488400, perPerson: 122100,
    tags: ["4席実測", "受託手荷物2×23kg表示"],
    url: tripUrl
  },
  {
    airline: "Asiana ＋ Uzbekistan Airways · Trip.com",
    outbound: { time: "9/21 00:15 KIX → 9/21 13:20 TAS", duration: "17時間05分", transit: "ICN 7時間55分", alert: "深夜出発" },
    inbound: { time: "復路はリンク先で選択", duration: "選択便により変動", transit: "仁川経由候補" },
    hours: 17.1, stops: 1, price: 760880, perPerson: 190220,
    tags: ["4席実測", "受託32kg表示", "北京より短い"],
    url: tripUrl
  },
  {
    airline: "Korean Air ＋ Asiana · Google Flights",
    outbound: { time: "9/21 12:35 KIX → 9/21 20:00 TAS", duration: "11時間25分", transit: "ICN 2時間10分" },
    inbound: { time: "9/26 21:55 TAS → 9/27 11:20 KIX", duration: "9時間25分", transit: "ICN 1時間10分", alert: "早朝・短時間" },
    hours: 11.4, stops: 1, price: 823920, perPerson: 205980,
    tags: ["Google 4名最安", "現在の料金：高い", "時間優先"],
    url: googleFlightsUrl
  }
];

const searches = {
  meta: [
    ["01", "KAYAK", "4名総額 ¥484,344・すべて入力済み", kayakUrl],
    ["02", "Trip.com", "4名総額 ¥488,400・すべて入力済み", tripUrl],
    ["03", "Google Flights", "4名総額 ¥823,920・すべて入力済み", googleFlightsUrl],
    ["04", "Skyscanner", "4名・日程入力済み（CAPTCHA後に表示）", skyscannerUrl],
    ["05", "Kiwi.com", "4名・日程・区間入力済み", "https://www.kiwi.com/ja/search/results/osaka-japan/tashkent-uzbekistan/2026-09-21/2026-09-26?adults=4"],
    ["06", "momondo", "4名・日程・区間入力済み", "https://www.momondo.jp/flight-search/KIX-TAS/2026-09-21/2026-09-26/4adults?sort=price_a"],
    ["07", "Expedia", "4名・日程・区間をURLに設定", "https://www.expedia.co.jp/Flights-Search?flight-type=on&mode=search&trip=roundtrip&leg1=from:KIX,to:TAS,departure:2026-09-21TANYT&leg2=from:TAS,to:KIX,departure:2026-09-26TANYT&options=cabinclass:economy&fromDate=2026-09-21&toDate=2026-09-26&adult=4"],
    ["08", "Booking.com Flights", "4名・日程・区間をURLに設定", "https://www.booking.com/flights/index.ja.html?type=ROUNDTRIP&cabinClass=ECONOMY&adults=4&from=KIX.AIRPORT&to=TAS.AIRPORT&depart=2026-09-21&return=2026-09-26"]
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
  const ageHours = (Date.now() - new Date(DATA_UPDATED_AT).getTime()) / 36e5;
  if (ageHours <= 48) {
    node.className = "freshness is-fresh";
    node.textContent = "最新判定：48時間以内の調査データ";
  } else {
    node.className = "freshness is-stale";
    node.textContent = `要再調査：価格データは${Math.floor(ageHours / 24)}日前です。下の入力済みリンクで最新価格を確認してください。`;
    document.querySelectorAll(".confidence").forEach(el => {
      el.textContent = "価格データが48時間を超えたため、上昇・下降判定は要再調査";
    });
  }
}

updateFreshness();
