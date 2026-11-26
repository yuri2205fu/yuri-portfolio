// ★ 作品はここに追記・編集するだけ（画像は images/ に入れる）
// category: LP / BANNER / ADS / INSTAGRAM / SITE
// img を空にする（または画像が無い）と、仮カードが表示されます
const WORKS = [
  { title: "EVEN 冬の福BOX 2026 LP", category: "LP", year: "2026", img: "images/work01.jpg", desc: "福袋キャンペーンLPのデザイン・実装（オープニング演出・福引き・Shopify埋め込み対応）", url: "works/even-fukubox-2026/" },
  { title: "EVEN 冬の福BOX 2026 LP（C案）", category: "LP", year: "2026", img: "images/work-even-c.jpg", desc: "同じ福袋キャンペーンの別デザイン案「夜明けの重箱」（スクロールで夜が明ける演出・福引き）", url: "works/even-fukubox-2026-c/" },
  { title: "Natu Rock × EVEN 別注ブレスレット", category: "LP", year: "2026", img: "works/naturock-even-bracelet/assets/naturock_exclusive_fv_sp_v2.png", desc: "別注コラボ商品の発売告知特集ページ", url: "works/naturock-even-bracelet/" },
  { title: "SALVAGE PUBLIC Kolepa 26A/W LOOKBOOK Vol.2", category: "LP", year: "2026", img: "works/kolepa-26aw-lookbook-vol2/assets/26Lookbook_vol2_kv.webp", desc: "秋冬コレクションのLOOKBOOKページ", url: "works/kolepa-26aw-lookbook-vol2/" },
  { title: "秋冬の新作 2点で10%OFF", category: "LP", year: "2026", img: "works/even-aw-new-2items-10off/assets/even_2buy_fv.jpg", desc: "まとめ買いキャンペーンの告知特集ページ", url: "works/even-aw-new-2items-10off/" },
  { title: "日本オープン記念 別注コレクション", category: "LP", year: "2026", img: "works/even-japan-open-collection/assets/sp_pattern5_v6_1080x1350_7d1ad825-5417-412f-a98c-1dd2712e40a9.png", desc: "大会記念の別注コレクション特集ページ", url: "works/even-japan-open-collection/" },
  { title: "決済方法追加のお知らせ", category: "LP", year: "2026", img: "works/even-payment-methods-info/assets/ceckout_banner_1080x1350_nocta.png", desc: "新しい決済方法の告知ページ", url: "works/even-payment-methods-info/" },
  { title: "EVEN別注アイテムまとめ", category: "LP", year: "2026", img: "works/even-exclusive-items/assets/even_ecclusive_kvsp.png", desc: "別注アイテムを一覧で紹介する特集ページ", url: "works/even-exclusive-items/" },
  { title: "BOGEY LOUNGE 26A/W LOOKBOOK", category: "LP", year: "2026", img: "works/bogey-lounge-26aw-lookbook/assets/bogey_26aw_kw_1200_800.png", desc: "秋冬コレクションのLOOKBOOKページ", url: "works/bogey-lounge-26aw-lookbook/" },
  { title: "SALVAGE PUBLIC Kolepa 26A/W LOOKBOOK", category: "LP", year: "2026", img: "works/kolepa-26aw-lookbook/assets/kolepa26aw_kv_1200_800.png", desc: "秋冬コレクションのLOOKBOOKページ", url: "works/kolepa-26aw-lookbook/" },
  { title: "EVEN 真夏のジャンボ福BOX 2026", category: "LP", year: "2026", img: "works/even-summer-jumbo-fukubox-2026/assets/26summer_fukubox_1080-1350.webp", desc: "数量限定の夏の福袋キャンペーンページ", url: "works/even-summer-jumbo-fukubox-2026/" },
  { title: "SALVAGE PUBLIC Kolepa Sunglasses Collection", category: "LP", year: "2026", img: "works/kolepa-sunglasses-collection/assets/sunglasses_Collection_1080_1350.png", desc: "サングラスコレクションの特集ページ", url: "works/kolepa-sunglasses-collection/" },
  { title: "夏を乗り切る！機能性アイテム特集", category: "LP", year: "2026", img: "works/even-summer-functional-wear/assets/kinousei_1080_1350.webp", desc: "機能性ウェアを紹介する季節特集ページ", url: "works/even-summer-functional-wear/" },
  { title: "MIZUNO × EVEN GLOVE DRIVER COVER Vol.2", category: "LP", year: "2026", img: "works/mizuno-even-glove-vol2/assets/glove_vol2_kv__1080_1350.png", desc: "別注コラボの制作秘話を動画とともに伝える特集ページ", url: "works/mizuno-even-glove-vol2/" },
  { title: "SALVAGE PUBLIC Kolepa 26S/S LOOKBOOK", category: "LP", year: "2026", img: "works/kolepa-26ss-lookbook/assets/kolepa26ss_contents.webp", desc: "春夏コレクションのLOOKBOOKページ", url: "works/kolepa-26ss-lookbook/" },
  { title: "街でも使えるゴルフウェア", category: "LP", year: "2026", img: "works/even-golfwear-for-town/assets/keen_styling_1080_1350.webp", desc: "ゴルフウェアのスタイリング提案特集ページ", url: "works/even-golfwear-for-town/" },
  { title: "SALVAGE PUBLIC Kolepa 2026 S/S VISUAL", category: "LP", year: "2026", img: "works/kolepa-2026ss-visual/assets/kolepa_look_1_1.webp", desc: "春夏シーズンのビジュアルページ", url: "works/kolepa-2026ss-visual/" },
  { title: "MIZUNO × EVEN GLOVE DRIVER COVER", category: "LP", year: "2026", img: "works/mizuno-even-glove-driver-cover/assets/mizuno_glove_1200_800.png", desc: "別注コラボ商品の特集ページ", url: "works/mizuno-even-glove-driver-cover/" },
  { title: "山小屋泊を楽しむ山旅アイテム特集", category: "LP", year: "2026", img: "works/kawarime-yamagoya-items/assets/1200_800_PC_0706.webp", desc: "山旅向けアイテムの特集ページ", url: "works/kawarime-yamagoya-items/" },
  { title: "FLOG GOLF CLUB Reimagines the Caddy Bag", category: "LP", year: "2026", img: "works/flog-golf-club-caddy-bag/assets/flaggolf_features_1200_800.png", desc: "キャディバッグの特集ページ", url: "works/flog-golf-club-caddy-bag/" },
  { title: "Kolepa 特注ネームプレート プレゼントキャンペーン", category: "LP", year: "2026", img: "works/kolepa-nameplate-campaign/assets/plate_presentKV_1200-800.webp", desc: "購入特典キャンペーンの告知ページ", url: "works/kolepa-nameplate-campaign/" },
  { title: "ウールを組み合わせて、快適な夏に", category: "LP", year: "2026", img: "works/kawarime-wool-summer/assets/wool_tanktop_fullcolor.png", desc: "夏のウールアイテム特集ページ", url: "works/kawarime-wool-summer/" },
  { title: "BEAXIS × EVEN \"BALANCE CORE TURF\"", category: "LP", year: "2026", img: "works/beaxis-even-balance-core-turf/assets/beaxis_1_FV.webp", desc: "別注シューズの特集ページ", url: "works/beaxis-even-balance-core-turf/" },
  { title: "リトルマウンテンシリーズ セットアップ特集", category: "LP", year: "2026", img: "works/kawarime-little-mountain-setup/assets/mountain-setup_KV_pc_1200_800.webp", desc: "セットアップの着こなし提案ページ", url: "works/kawarime-little-mountain-setup/" },
  { title: "スタイリスト白男川清美さんコラボ第2弾", category: "LP", year: "2026", img: "works/kawarime-stylist-collab-vol2/assets/1200_800.png", desc: "スタイリストとのコラボ特集ページ", url: "works/kawarime-stylist-collab-vol2/" },
  { title: "自分らしい山の楽しみ方", category: "LP", year: "2026", img: "works/kawarime-my-way-mountain/assets/PC_B_1.webp", desc: "山の楽しみ方を提案する特集ページ", url: "works/kawarime-my-way-mountain/" },
  { title: "TALKING with Our Japan Director", category: "LP", year: "2026", img: "works/talking-with-our-japan-director/assets/interview_FV.webp", desc: "ディレクターのインタビュー特集ページ", url: "works/talking-with-our-japan-director/" },
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
