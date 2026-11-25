// ★ 作品はここに追記・編集するだけ（画像は images/ に入れる）
// category: LP / BANNER / ADS / INSTAGRAM / SITE
// img を空にする（または画像が無い）と、仮カードが表示されます
const WORKS = [
  { title: "冬の福袋 LP", category: "LP", year: "2026", img: "images/work01.jpg", desc: "キャンペーンLPのデザイン・実装" },
  { title: "新作ローンチ LP", category: "LP", year: "2026", img: "images/work02.jpg", desc: "" },
  { title: "ブランドサイト リニューアル", category: "SITE", year: "2026", img: "images/work03.jpg", desc: "Before / After", before: "images/work03_before.jpg" },
  { title: "セール告知バナー", category: "BANNER", year: "2026", img: "images/work04.jpg", desc: "" },
  { title: "広告クリエイティブ A", category: "ADS", year: "2026", img: "images/work05.jpg", desc: "" },
  { title: "新作紹介 投稿", category: "INSTAGRAM", year: "2026", img: "images/work06.jpg", desc: "" },
  // ↓ 30点ぶん、同じ形式でコピーして増やしてください
];
// 仮カードで30点分見た目を確認するための自動補完（本番では削除OK）
while (WORKS.length < 30) {
  const cats = ["LP","BANNER","ADS","INSTAGRAM","SITE"];
  const n = WORKS.length + 1;
  WORKS.push({ title: "Project " + String(n).padStart(2,"0"), category: cats[n % 5], year: "2026", img: "", desc: "" });
}
