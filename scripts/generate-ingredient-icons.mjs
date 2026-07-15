import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "assets", "ingredient-icons");
fs.mkdirSync(outDir, { recursive: true });

const ingredients = [
  ["chicken-breast", "鸡胸肉", "高蛋白", "cutlet", "#d98263", "#f4c29f"],
  ["egg", "鸡蛋", "高蛋白", "egg", "#f7efd8", "#f0b84b"],
  ["shrimp", "虾仁", "高蛋白", "shrimp", "#f47f62", "#ffd1bb"],
  ["seabass", "鲈鱼", "高蛋白", "whole-fish", "#6fb5c7", "#d6f4ef"],
  ["salmon", "三文鱼", "高蛋白", "salmon", "#f28a73", "#ffd6c6"],
  ["beef", "牛肉", "高蛋白", "steak", "#9e4d43", "#f0a084"],
  ["tofu", "豆腐", "高蛋白", "tofu", "#f5f0dd", "#d6caa3"],
  ["greek-yogurt", "希腊酸奶", "乳制品", "yogurt", "#f2f4f0", "#9cc7db"],
  ["tomato", "番茄", "蔬菜", "tomato", "#df5b4f", "#ffd1c5"],
  ["broccoli", "西兰花", "蔬菜", "broccoli", "#4f9a65", "#b9ddb4"],
  ["green-pepper", "青椒", "蔬菜", "bell-pepper", "#4b9f62", "#bfe6b8"],
  ["carrot", "胡萝卜", "蔬菜", "carrot", "#df8842", "#ffd69b"],
  ["cucumber", "黄瓜", "蔬菜", "cucumber", "#61a876", "#c9e7bd"],
  ["lettuce", "生菜", "蔬菜", "lettuce", "#73a95b", "#d5ebb2"],
  ["spinach", "菠菜", "蔬菜", "spinach", "#3f8d59", "#b8ddac"],
  ["mushroom", "蘑菇", "蔬菜", "mushroom", "#b4916f", "#efe0c6"],
  ["corn", "玉米", "主食", "corn", "#e4b63c", "#fff0a8"],
  ["brown-rice", "糙米", "主食", "rice", "#b9905c", "#ead7aa"],
  ["sweet-potato", "红薯", "主食", "sweet-potato", "#c9794f", "#f2c28c"],
  ["oats", "燕麦", "主食", "oats", "#c9a76d", "#efe0bc"],
  ["whole-wheat-toast", "全麦吐司", "主食", "toast", "#c98950", "#f1c987"],
  ["avocado", "牛油果", "优质脂肪", "avocado", "#558c58", "#d9e789"],
  ["almond", "杏仁", "优质脂肪", "almond", "#b98757", "#efd0a7"],
  ["banana", "香蕉", "水果", "banana", "#e3bd46", "#fff0a3"],
  ["pork", "猪肉", "肉蛋海鲜", "pork", "#c86f68", "#f4b9a7"],
  ["pork-ribs", "排骨", "肉蛋海鲜", "ribs", "#c66a60", "#f2c0a0"],
  ["chicken-thigh", "鸡腿肉", "肉蛋海鲜", "drumstick", "#d68455", "#f5c796"],
  ["duck-breast", "鸭胸肉", "肉蛋海鲜", "duck", "#b25a58", "#eab08f"],
  ["cod", "鳕鱼", "肉蛋海鲜", "cod-fillet", "#d7e7df", "#79aeb5"],
  ["tuna", "金枪鱼", "肉蛋海鲜", "tuna-steak", "#9a4860", "#e58aa2"],
  ["scallop", "扇贝", "肉蛋海鲜", "scallop", "#f0cfa4", "#fff0d8"],
  ["squid", "鱿鱼", "肉蛋海鲜", "squid", "#b9a7d8", "#ede4ff"],
  ["crab", "蟹肉", "肉蛋海鲜", "crab", "#dd705a", "#ffd0b9"],
  ["bok-choy", "小青菜", "蔬菜", "bok-choy", "#65a85d", "#dceec4"],
  ["cabbage", "白菜", "蔬菜", "cabbage", "#8dbb6b", "#dfeec7"],
  ["cauliflower", "花菜", "蔬菜", "cauliflower", "#e4dfc8", "#b8c98f"],
  ["zucchini", "西葫芦", "蔬菜", "zucchini", "#5d9c69", "#cae5b4"],
  ["eggplant", "茄子", "蔬菜", "eggplant", "#7560a8", "#d7c4f0"],
  ["potato", "土豆", "蔬菜", "potato", "#b88a58", "#ead0a6"],
  ["onion", "洋葱", "蔬菜", "onion", "#c49ac2", "#f0d9ed"],
  ["garlic", "大蒜", "蔬菜", "garlic", "#e7dfc8", "#f7f0d8"],
  ["ginger", "生姜", "蔬菜", "ginger", "#c49a5d", "#efd3a0"],
  ["celery", "芹菜", "蔬菜", "celery", "#6fad69", "#d2eab8"],
  ["asparagus", "芦笋", "蔬菜", "asparagus", "#609b61", "#d4e5a8"],
  ["pumpkin", "南瓜", "蔬菜", "pumpkin", "#d98b3d", "#ffd59a"],
  ["pea", "豌豆", "蔬菜", "pea-pod", "#74a957", "#d8ec9f"],
  ["white-rice", "米饭", "主食", "rice-bowl", "#eee9d9", "#cfc5a6"],
  ["noodles", "面条", "主食", "noodles", "#d6b874", "#f5e4a8"],
  ["pasta", "意面", "主食", "pasta", "#d9aa4c", "#f8dd8e"],
  ["quinoa", "藜麦", "主食", "quinoa", "#c9a96e", "#f0dfb4"],
  ["black-rice", "黑米", "主食", "black-rice", "#4b4354", "#a89ab6"],
  ["buckwheat", "荞麦", "主食", "buckwheat", "#9d7d5b", "#dfc29a"],
  ["rice-cake", "年糕", "主食", "rice-cake", "#f3eee1", "#d7ceb8"],
  ["apple", "苹果", "水果", "apple", "#d6534b", "#ffd1c9"],
  ["orange", "橙子", "水果", "orange", "#e59a38", "#ffd58c"],
  ["grape", "葡萄", "水果", "grape", "#8760a8", "#d8c4ee"],
  ["blueberry", "蓝莓", "水果", "blueberry", "#596eb4", "#c7d5ff"],
  ["strawberry", "草莓", "水果", "strawberry", "#d84e5e", "#ffc1c9"],
  ["kiwi", "猕猴桃", "水果", "kiwi", "#8fb653", "#dbeaa4"],
  ["mango", "芒果", "水果", "mango", "#e5a640", "#ffdc8a"],
  ["pineapple", "菠萝", "水果", "pineapple", "#d2aa3e", "#8dbb62"],
  ["milk", "牛奶", "乳制品", "milk", "#f3f6f2", "#9fc9db"],
  ["cheese", "芝士", "乳制品", "cheese", "#e0b649", "#ffe08b"],
  ["cottage-cheese", "茅屋芝士", "乳制品", "cottage-cheese", "#f4f2e7", "#d5d0bf"],
  ["soy-milk", "豆浆", "豆制品", "soy-milk", "#efe8d4", "#c8b987"],
  ["edamame", "毛豆", "豆制品", "edamame", "#69a95d", "#d5ebb2"],
  ["black-bean", "黑豆", "豆制品", "black-bean", "#4d4658", "#a99bb7"],
  ["chickpea", "鹰嘴豆", "豆制品", "chickpea", "#c79a58", "#ecd4a0"],
  ["walnut", "核桃", "坚果", "walnut", "#a8794d", "#e0bd90"],
  ["cashew", "腰果", "坚果", "cashew", "#c39a64", "#edd3a1"],
  ["peanut", "花生", "坚果", "peanut", "#b47d45", "#edc58b"],
  ["chia-seed", "奇亚籽", "坚果", "chia-seed", "#59545d", "#bdb5c3"],
  ["olive-oil", "橄榄油", "调味品", "oil", "#a4a74d", "#e4de88"],
  ["soy-sauce", "酱油", "调味品", "soy-sauce", "#6b4736", "#c49a72"],
  ["vinegar", "醋", "调味品", "vinegar", "#a95f5c", "#e7b7a8"],
  ["black-pepper", "黑胡椒", "调味品", "peppercorn", "#4b4a4a", "#b9b2a7"],
  ["chili", "辣椒", "调味品", "chili", "#c9473e", "#ffb2a8"],
  ["green-onion", "小葱", "调味品", "green-onion", "#5aa45c", "#d0ebb0"],
];

function svg(id, name, group, shape, primary, accent) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(name)}</title>
  <desc id="desc">${escapeXml(group)}食材图标：${escapeXml(name)}</desc>
  <defs>
    <linearGradient id="bg" x1="16" y1="14" x2="112" y2="116" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="${softBg(group)}"/>
    </linearGradient>
    <linearGradient id="main" x1="34" y1="28" x2="96" y2="98" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${accent}"/>
      <stop offset="1" stop-color="${primary}"/>
    </linearGradient>
    <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#31523d" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect x="8" y="8" width="112" height="112" rx="28" fill="url(#bg)"/>
  <circle cx="38" cy="35" r="14" fill="#fff" opacity="0.44"/>
  <g filter="url(#softShadow)" stroke="#2b4937" stroke-opacity="0.16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    ${shapeSvg(shape, primary, accent)}
  </g>
</svg>
`;
}

function shapeSvg(shape, primary, accent) {
  const g = "fill=\"url(#main)\"";
  const light = "fill=\"#fff\" opacity=\"0.58\"";
  const dark = "fill=\"#2b4937\" opacity=\"0.22\"";
  const stem = "fill=\"#4f8e54\"";

  const templates = {
    cutlet: `<path ${g} d="M38 56c8-19 31-28 48-15 17 12 13 38-5 49-20 12-48 2-49-19 0-5 2-10 6-15Z"/><path fill="#fff6ee" opacity=".7" d="M49 52c8-8 23-9 33-2 8 6 8 18 1 25-11-12-25-18-42-18 2-2 5-4 8-5Z"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".65" d="M47 73c13 6 28 7 42 1"/>`,
    pork: `<path ${g} d="M30 75c2-24 29-40 54-30 21 9 26 32 10 47-16 15-50 12-61-4-3-4-4-9-3-13Z"/><path fill="#fff6ee" opacity=".54" d="M48 55c15-9 35-7 46 5-13-1-22 5-26 18-6-10-14-17-20-23Z"/><circle cx="77" cy="72" r="8" fill="#8f4b48" opacity=".3"/>`,
    steak: `<path ${g} d="M31 71c4-21 29-37 52-29 20 7 25 32 10 46-15 14-49 12-59-4-3-4-4-8-3-13Z"/><path fill="#fff" opacity=".42" d="M50 64c8-9 24-12 33-2 8 9 1 22-13 24-15 3-28-9-20-22Z"/>`,
    ribs: `<path fill="#f7ead7" d="M38 42c8-9 21-6 24 7 4-14 22-15 28-3 7 15-6 25-26 48-22-22-38-36-26-52Z"/><path fill="none" stroke="${primary}" stroke-width="13" stroke-linecap="round" d="M37 75c16-14 37-19 58-12"/><path fill="none" stroke="${primary}" stroke-width="10" stroke-linecap="round" opacity=".9" d="M43 89c15-12 32-15 49-9"/><circle cx="38" cy="76" r="8" fill="#f7ead7"/><circle cx="96" cy="63" r="8" fill="#f7ead7"/>`,
    drumstick: `<path ${g} d="M38 77c-2-18 11-35 29-37 18-3 31 10 30 27-1 19-17 33-36 30-12-1-21-8-23-20Z"/><rect x="78" y="83" width="30" height="10" rx="5" fill="#f7ead7" transform="rotate(33 93 88)"/><circle cx="107" cy="98" r="7" fill="#f7ead7"/>`,
    duck: `<path ${g} d="M31 70c4-23 31-37 54-25 17 9 19 33 4 46-16 14-47 10-56-6-3-5-4-10-2-15Z"/><path ${dark} d="M48 49c12 16 31 17 43 8-3-5-8-9-14-12-10-5-21-4-29 4Z"/>`,
    egg: `<path ${g} d="M64 24c21 0 35 24 35 48 0 22-15 35-35 35S29 94 29 72c0-24 14-48 35-48Z"/><circle cx="64" cy="75" r="18" fill="#efb34d" opacity=".92"/>`,
    shrimp: `<path ${g} d="M82 34c18 9 17 34 3 49-15 17-43 17-53 2-8-12 1-27 16-27 7 0 14 4 16 11 6-2 10-7 10-14 0-8-6-14-15-14 7-10 16-11 23-7Z"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".55" d="M73 45c10 8 10 23-1 33M58 55c8 6 8 17 0 24"/><path fill="none" stroke="${primary}" stroke-width="4" d="M36 82c-8 7-14 7-20 1"/>`,
    "whole-fish": `<path ${g} d="M22 64c16-22 51-31 75-7 8-9 16-14 24-16-3 12-3 25 0 37-8-3-16-8-24-17-23 24-59 17-75 3Z"/><path fill="${accent}" opacity=".7" d="M63 43l15-13 8 20M63 85l17 12 6-20"/><circle cx="45" cy="57" r="5" fill="#253d45"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".58" d="M58 51c11 7 19 16 24 28"/><path fill="none" stroke="#2b4937" stroke-opacity=".2" stroke-width="3" d="M38 73c16 5 34 4 51-3"/>`,
    salmon: `<path fill="#fff2e8" d="M33 75c7-26 38-43 60-28 16 11 15 34-1 47-18 14-52 8-59-9-1-3-1-6 0-10Z"/><path ${g} d="M40 74c6-20 29-34 46-24 13 8 13 25 1 35-14 12-40 8-47-4-1-2-1-5 0-7Z"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".86" d="M51 55l29 31M64 50l28 27M43 69l22 24"/><path fill="#d95f58" opacity=".45" d="M44 82c12 8 29 8 42 0-10 13-33 15-42 0Z"/>`,
    "cod-fillet": `<path fill="#f8fff8" d="M27 73c7-24 38-38 62-27 17 8 20 28 7 42-16 17-52 17-66 1-4-5-5-10-3-16Z"/><path fill="${accent}" opacity=".7" d="M32 78c13-15 35-23 58-18 8 2 13 6 15 10-17-6-37-4-57 5l-16 3Z"/><path fill="none" stroke="${primary}" stroke-width="5" opacity=".72" d="M44 63c16-5 34-4 46 5M43 82c15 5 32 4 44-4"/><path fill="#fff" opacity=".95" d="M53 53c14-4 28-2 39 6-16-1-31 2-45 10 1-6 3-12 6-16Z"/>`,
    "tuna-steak": `<ellipse ${g} cx="66" cy="69" rx="35" ry="28" transform="rotate(-14 66 69)"/><ellipse cx="66" cy="69" rx="22" ry="15" fill="#7f3147" opacity=".42" transform="rotate(-14 66 69)"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".54" d="M42 66c14-12 36-16 55-7M45 80c16 7 34 7 49-2"/><path fill="#fff" opacity=".35" d="M54 45c4 17 18 30 38 35-12 12-39 12-50 1 1-15 5-27 12-36Z"/>`,
    scallop: `<path ${g} d="M28 82c5-28 18-45 36-45s31 17 36 45c-15 16-57 16-72 0Z"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".58" d="M64 39v51M47 44l12 46M81 44 69 90M36 59l22 31M92 59 70 90"/>`,
    squid: `<path ${g} d="M45 29h38l10 34-29 21-29-21 10-34Z"/><path fill="none" stroke="${primary}" stroke-width="7" d="M49 84v22M60 84v24M71 84v24M82 84v22"/><circle cx="57" cy="57" r="4" fill="#2b4937" opacity=".35"/><circle cx="72" cy="57" r="4" fill="#2b4937" opacity=".35"/>`,
    crab: `<ellipse ${g} cx="64" cy="70" rx="30" ry="22"/><circle cx="53" cy="62" r="4" fill="#2b4937" opacity=".35"/><circle cx="75" cy="62" r="4" fill="#2b4937" opacity=".35"/><path fill="none" stroke="${primary}" stroke-width="8" d="M34 56c-12-9-20 2-12 11M94 56c12-9 20 2 12 11M38 82l-17 11M90 82l17 11"/>`,
    tofu: `<path ${g} d="M37 41h54v54H37z"/><path ${light} d="M37 41l15-11h54L91 41H37Z"/><path fill="${accent}" opacity=".68" d="M91 41l15-11v54L91 95V41Z"/>`,
    yogurt: `<path fill="#fff" d="M31 52h66l-8 42c-2 10-10 17-20 17H59c-10 0-18-7-20-17l-8-42Z"/><ellipse ${g} cx="64" cy="53" rx="35" ry="13"/><circle cx="78" cy="47" r="8" fill="${accent}"/>`,
    tomato: `<circle ${g} cx="64" cy="70" r="31"/><path ${stem} d="M64 35l7 12 13-5-8 11 12 6-14 1 2 14-10-10-10 10 2-14-14-1 12-6-8-11 13 5 7-12Z"/>`,
    broccoli: `<circle ${g} cx="48" cy="51" r="17"/><circle ${g} cx="68" cy="42" r="19"/><circle ${g} cx="84" cy="58" r="17"/><path ${stem} d="M61 64h13l11 38H50l11-38Z"/>`,
    "bell-pepper": `<path ${g} d="M41 50c3-17 20-21 29-10 10-11 27-6 31 10 6 24-9 49-31 49S35 74 41 50Z"/><path ${stem} d="M65 32h12v17H65z"/>`,
    carrot: `<path ${g} d="M51 44c16-3 30 2 34 13L60 105 35 61c1-8 7-14 16-17Z"/><path ${stem} d="M56 43c-10-15-2-24 8-10 1-16 13-18 13 0 9-11 18-4 7 10H56Z"/><path fill="none" stroke="#fff" stroke-width="4" opacity=".48" d="M51 62l18-3M56 78l13-3"/>`,
    cucumber: `<rect ${g} x="37" y="29" width="38" height="78" rx="19" transform="rotate(15 56 68)"/><circle cx="82" cy="68" r="22" fill="${accent}" stroke="${primary}" stroke-width="7"/><ellipse cx="82" cy="68" rx="10" ry="7" fill="#eef7d6"/><g fill="#fff" opacity=".75"><ellipse cx="76" cy="64" rx="2.5" ry="5"/><ellipse cx="88" cy="64" rx="2.5" ry="5"/><ellipse cx="82" cy="75" rx="2.5" ry="5"/></g><path fill="none" stroke="#fff" stroke-width="4" opacity=".42" d="M52 40c-5 21-8 38-9 52"/>`,
    lettuce: `<path ${g} d="M65 29c24 15 33 43 10 72-31-7-45-29-30-54 7-10 15-16 20-18Z"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".55" d="M63 38c-2 24-3 42-13 59M63 61c12-5 21-12 27-22M58 74c-12-4-21-11-27-21"/>`,
    spinach: `<path ${g} d="M64 25c19 13 24 34 7 60-25-4-36-21-24-41 5-8 11-14 17-19Z"/><path ${g} d="M42 49c17 3 27 16 25 39-22 8-40-1-43-20-1-8 5-16 18-19Z" opacity=".86"/><path ${g} d="M86 48c-17 4-27 17-24 40 22 7 39-3 42-22 1-8-6-16-18-18Z" opacity=".86"/><path fill="none" stroke="#fff" stroke-width="4" opacity=".6" d="M64 35c0 26-8 48-22 66M65 56c10 13 18 27 25 42M51 63c-9 6-17 12-24 20"/>`,
    mushroom: `<path ${g} d="M28 62c3-23 23-37 44-34 20 3 34 18 32 39H28Z"/><path fill="${accent}" d="M54 63h24l7 39H47l7-39Z"/><path ${light} d="M41 51c5-9 15-14 27-14"/>`,
    corn: `<path ${g} d="M59 27c22 10 29 38 17 76-28-10-39-35-17-76Z"/><path fill="none" stroke="#fff" stroke-width="4" opacity=".46" d="M58 42c10 10 16 26 17 45M50 57l27-9M47 72l31-9"/><path ${stem} d="M43 82c13-5 26-4 38 5-8 13-25 18-38-5Z"/>`,
    rice: `<ellipse ${g} cx="64" cy="78" rx="36" ry="23"/><path fill="#fff" opacity=".82" d="M36 71c5-15 49-24 64 0-5 12-59 14-64 0Z"/><g fill="${primary}"><ellipse cx="52" cy="73" rx="4" ry="9"/><ellipse cx="64" cy="70" rx="4" ry="9"/><ellipse cx="76" cy="74" rx="4" ry="9"/></g>`,
    "sweet-potato": `<path fill="#9b4f54" d="M37 68c4-26 29-45 51-33 20 11 19 43-2 62-23 22-54 5-49-29Z"/><path ${g} d="M49 70c3-16 17-28 31-21 13 7 12 27-2 39-15 14-32 3-29-18Z"/><path fill="#fff0c8" opacity=".65" d="M57 56c8-6 17-7 25-3-12 3-21 10-28 22 0-8 1-14 3-19Z"/>`,
    oats: `<g fill="url(#main)"><ellipse cx="48" cy="58" rx="8" ry="14" transform="rotate(-24 48 58)"/><ellipse cx="64" cy="53" rx="8" ry="14" transform="rotate(14 64 53)"/><ellipse cx="80" cy="61" rx="8" ry="14" transform="rotate(32 80 61)"/><ellipse cx="58" cy="78" rx="8" ry="14" transform="rotate(34 58 78)"/><ellipse cx="78" cy="81" rx="8" ry="14" transform="rotate(-18 78 81)"/></g>`,
    toast: `<path ${g} d="M38 52c-2-18 10-31 26-31s28 13 26 31v48H38V52Z"/><rect x="45" y="58" width="38" height="34" rx="8" fill="#fff" opacity=".26"/>`,
    avocado: `<path ${g} d="M64 25c23 0 40 25 32 50-7 22-21 34-32 34S39 97 32 75c-8-25 9-50 32-50Z"/><path fill="${accent}" d="M64 39c15 0 26 16 21 32-4 13-13 21-21 21s-17-8-21-21c-5-16 6-32 21-32Z"/><circle cx="64" cy="71" r="11" fill="#6d5a39" opacity=".62"/>`,
    almond: `<path ${g} d="M64 24c25 17 28 51 0 82-28-31-25-65 0-82Z"/><path ${light} d="M59 42c-9 16-9 31 1 48"/>`,
    banana: `<path fill="none" stroke="${primary}" stroke-width="16" stroke-linecap="round" d="M34 50c17 45 54 57 72 19"/><path fill="none" stroke="${accent}" stroke-width="9" stroke-linecap="round" opacity=".85" d="M38 49c16 35 47 46 62 20"/>`,
    "bok-choy": `<path ${g} d="M63 96c-21-11-29-33-11-53 10 8 16 19 17 35 4-18 15-31 31-37 10 27-4 50-37 55Z"/><path fill="#f2f4dd" d="M47 101c7-20 13-42 17-64 7 21 10 44 8 66H47Z"/>`,
    cabbage: `<circle ${g} cx="64" cy="68" r="35"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".5" d="M39 69c8-20 28-29 49-19M45 84c17 4 37-1 47-18M61 34c-9 25-4 51 15 70"/>`,
    cauliflower: `<circle ${g} cx="48" cy="54" r="15"/><circle ${g} cx="65" cy="45" r="17"/><circle ${g} cx="84" cy="57" r="15"/><circle ${g} cx="64" cy="68" r="18"/><path ${stem} d="M53 75h25l7 25H46l7-25Z"/>`,
    zucchini: `<rect ${g} x="42" y="28" width="44" height="76" rx="20" transform="rotate(12 64 66)"/><path fill="none" stroke="#fff" stroke-width="4" opacity=".42" d="M59 40c-5 20-9 36-12 51"/>`,
    eggplant: `<path ${g} d="M61 39c25 5 39 29 28 50-10 19-38 21-53 7-17-17-5-51 25-57Z"/><path ${stem} d="M60 29c8 1 18 5 25 13-10 5-19 7-29 4l4-17Z"/>`,
    potato: `<path ${g} d="M38 66c5-24 25-38 48-27 20 10 23 39 6 55-20 19-59 3-54-28Z"/><circle cx="56" cy="62" r="4" ${dark}/><circle cx="75" cy="77" r="4" ${dark}/>`,
    onion: `<path ${g} d="M64 28c23 15 34 36 28 57-5 17-17 25-28 25s-23-8-28-25c-6-21 5-42 28-57Z"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".45" d="M64 37c-13 20-13 41 0 64M48 52c-6 15-4 30 6 44M80 52c6 15 4 30-6 44"/>`,
    garlic: `<path fill="#f8f1dc" d="M64 33c18 10 30 27 27 47-3 21-15 32-27 32S40 101 37 80c-3-20 9-37 27-47Z"/><path ${g} d="M64 38c8 10 12 24 11 43-1 18-5 27-11 27s-10-9-11-27c-1-19 3-33 11-43Z"/><path fill="${accent}" opacity=".82" d="M43 61c8 5 14 18 14 36-10-3-18-11-20-25-1-5 1-9 6-11ZM85 61c5 2 7 6 6 11-2 14-10 22-20 25 0-18 6-31 14-36Z"/><path ${stem} d="M59 32c7-13 15-15 24-7-13 2-19 8-22 18l-2-11Z"/>`,
    ginger: `<path ${g} d="M31 76c5-17 23-20 32-10 6-17 26-23 37-10 12 15-2 35-22 33-5 14-23 22-34 11-6-6-5-13-13-24Z"/><path ${light} d="M48 77c14-2 24-7 31-19"/>`,
    celery: `<path fill="none" stroke="${primary}" stroke-width="14" stroke-linecap="round" d="M46 103 55 43M64 104 64 36M82 103 73 43"/><path fill="none" stroke="#e9f5d4" stroke-width="4" opacity=".8" d="M46 101 55 45M64 102 64 39M82 101 73 45"/><path ${stem} d="M50 46c-20-8-22-24-3-25 8 0 13 6 14 15M77 46c20-8 22-24 3-25-8 0-13 6-14 15"/>`,
    asparagus: `<path fill="none" stroke="${primary}" stroke-width="9" stroke-linecap="round" d="M47 103 58 44M66 103 68 39M86 103 78 44"/><path ${g} d="M58 22l10 22H47l11-22ZM69 17l11 23H58l11-23ZM80 23l10 22H69l11-22Z"/><g fill="#fff" opacity=".55"><circle cx="58" cy="33" r="2.5"/><circle cx="69" cy="29" r="2.5"/><circle cx="80" cy="34" r="2.5"/></g>`,
    pumpkin: `<ellipse ${g} cx="64" cy="72" rx="37" ry="31"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".42" d="M64 42c-12 16-12 44 0 60M47 47c-10 15-9 36 1 51M81 47c10 15 9 36-1 51"/><path ${stem} d="M60 32h14l-5 17H57l3-17Z"/>`,
    "pea-pod": `<path ${g} d="M27 72c20-32 55-36 74-11-18 29-57 35-74 11Z"/><circle cx="49" cy="69" r="7" fill="#fff" opacity=".45"/><circle cx="65" cy="64" r="7" fill="#fff" opacity=".45"/><circle cx="81" cy="63" r="7" fill="#fff" opacity=".45"/>`,
    "rice-bowl": `<path fill="#fff" d="M29 60c3-24 67-24 70 0H29Z"/><path ${g} d="M28 64h72l-9 37H37l-9-37Z"/><g fill="#fff" opacity=".95">${riceGrains([[45,54],[-20],[58,49],[10],[71,50],[-8],[84,55],[18],[54,62],[28],[70,62],[-18]])}</g><path fill="#cfc5a6" opacity=".85" d="M37 78h54l-4 15H41l-4-15Z"/>`,
    noodles: `<path fill="#fff" d="M31 62h66l-8 36H39l-8-36Z"/><path fill="none" stroke="${primary}" stroke-width="6" stroke-linecap="round" d="M39 52c8-10 16 10 24 0s16 10 25 0M38 66c9 12 18-10 27 0s18-10 28 0M42 80c8 10 16-8 24 1s16-7 23 1"/><path fill="none" stroke="#8b6a36" stroke-width="4" stroke-linecap="round" d="M42 42l43 14"/>`,
    pasta: `<path fill="#fff" d="M33 74c8-19 54-21 64-2 5 10-6 24-31 25-26 1-39-10-33-23Z"/><path fill="none" stroke="${primary}" stroke-width="7" stroke-linecap="round" d="M44 73c8-16 31-14 39-3 6 9-3 18-18 17-14-1-18-10-9-16 9-6 22 1 28 10"/><path fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" opacity=".86" d="M41 84c18 8 38 7 54-3"/><circle cx="88" cy="61" r="5" fill="#d65a43" opacity=".72"/>`,
    quinoa: `<g fill="url(#main)">${dots([[46,55],[60,49],[75,54],[52,72],[68,69],[84,75],[58,88],[74,90]])}</g>`,
    "black-rice": `<path fill="#fff" d="M31 66h66l-8 34H39l-8-34Z"/><g fill="url(#main)">${riceGrains([[42,55],[-22],[55,50],[8],[69,51],[-12],[83,56],[22],[50,68],[28],[66,68],[-18],[80,72],[10]])}</g><path fill="#2d2535" opacity=".7" d="M39 76h50l-5 15H44l-5-15Z"/>`,
    buckwheat: `<g fill="url(#main)"><path d="M45 48l15-16 15 16-15 16-15-16Z"/><path d="M68 76l16-17 16 17-16 17-16-17Z"/><path d="M33 82l14-15 14 15-14 15-14-15Z"/><path d="M63 98l11-12 12 12-12 12-11-12Z"/></g><path fill="none" stroke="#fff" stroke-width="3" opacity=".52" d="M55 48h10M78 76h11M43 82h9"/>`,
    "rice-cake": `<rect ${g} x="37" y="49" width="54" height="22" rx="9"/><rect ${g} x="43" y="76" width="54" height="22" rx="9" opacity=".82"/>`,
    apple: `<circle ${g} cx="56" cy="70" r="27"/><circle ${g} cx="75" cy="70" r="27"/><path ${stem} d="M66 31c10 0 18 5 24 15-15 4-26 1-34-9l10-6Z"/><rect x="62" y="32" width="8" height="18" rx="4" fill="#7f633d"/>`,
    orange: `<circle ${g} cx="64" cy="70" r="34"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".45" d="M64 38c-16 18-16 45 0 64M42 54c15 7 29 7 44 0M42 86c15-7 29-7 44 0"/>`,
    grape: `<g fill="url(#main)"><circle cx="55" cy="50" r="12"/><circle cx="73" cy="50" r="12"/><circle cx="46" cy="68" r="12"/><circle cx="64" cy="68" r="12"/><circle cx="82" cy="68" r="12"/><circle cx="55" cy="86" r="12"/><circle cx="73" cy="86" r="12"/></g><path ${stem} d="M67 29c9 0 17 3 23 10-13 5-23 3-30-6l7-4Z"/>`,
    blueberry: `<g fill="url(#main)"><circle cx="51" cy="60" r="16"/><circle cx="75" cy="56" r="17"/><circle cx="67" cy="82" r="18"/></g><path fill="#fff" opacity=".38" d="M47 52l5 5 6-5-3 7 6 4-8 1-2 7-3-7-8-1 6-4-3-7Z"/>`,
    strawberry: `<path ${g} d="M64 43c24 0 34 20 22 42-8 15-18 25-22 25S50 100 42 85c-12-22-2-42 22-42Z"/><path ${stem} d="M64 35l7 12 13-5-7 12 12 5-14 1-3 12-8-10-8 10-3-12-14-1 12-5-7-12 13 5 7-12Z"/><g fill="#fff" opacity=".56">${dots([[55,62],[71,63],[61,76],[78,80],[52,84]])}</g>`,
    kiwi: `<circle ${g} cx="64" cy="70" r="34"/><circle cx="64" cy="70" r="22" fill="#bdda72"/><circle cx="64" cy="70" r="8" fill="#f4eed2"/><g fill="#2b4937" opacity=".55">${dots([[64,45],[79,52],[88,67],[80,84],[63,95],[48,86],[40,69],[48,52]])}</g>`,
    mango: `<path ${g} d="M43 72c1-25 20-46 40-37 20 9 21 43 2 62-20 19-43 2-42-25Z"/><path ${light} d="M56 51c8-8 18-11 27-8"/>`,
    pineapple: `<path ${stem} d="M64 24l8 17 16-10-8 19 19-2-16 12 12 15-20-7-11 18-11-18-20 7 12-15-16-12 19 2-8-19 16 10 8-17Z"/><path ${g} d="M41 63c10-13 36-13 46 0 8 10 7 32-5 43-9 8-27 8-36 0-12-11-13-33-5-43Z"/><path fill="none" stroke="#fff" stroke-width="3" opacity=".5" d="M44 76l40 21M84 76 44 97M42 88h44"/>`,
    milk: `<path fill="#fff" d="M48 35h32l8 20v51H40V55l8-20Z"/><path ${g} d="M40 68h48v38H40z"/><path fill="#fff" opacity=".6" d="M50 41h28"/>`,
    cheese: `<path ${g} d="M31 83l66-38v54H31V83Z"/><circle cx="76" cy="78" r="7" fill="#fff" opacity=".42"/><circle cx="57" cy="88" r="5" fill="#fff" opacity=".35"/>`,
    "cottage-cheese": `<path fill="#fff" d="M31 57h66l-8 38c-2 9-10 16-20 16H59c-10 0-18-7-20-16l-8-38Z"/><ellipse ${g} cx="64" cy="58" rx="35" ry="14"/><g fill="#fff" opacity=".62">${dots([[54,56],[65,53],[76,58],[60,64]])}</g>`,
    "soy-milk": `<path fill="#fff" d="M42 50h44c6 0 10 5 10 11v32c0 10-8 18-18 18H50c-10 0-18-8-18-18V61c0-6 4-11 10-11Z"/><path ${g} d="M34 70h60v23c0 9-7 16-16 16H50c-9 0-16-7-16-16V70Z"/><path fill="none" stroke="${primary}" stroke-width="7" d="M93 68c17 1 17 28 0 29"/><ellipse cx="64" cy="58" rx="22" ry="9" fill="#fff" opacity=".92"/><g fill="${primary}" opacity=".58"><ellipse cx="57" cy="57" rx="4" ry="3"/><ellipse cx="69" cy="57" rx="4" ry="3"/></g>`,
    edamame: `<path ${g} d="M27 72c20-32 55-36 74-11-18 29-57 35-74 11Z"/><circle cx="49" cy="69" r="8" fill="#fff" opacity=".42"/><circle cx="65" cy="64" r="8" fill="#fff" opacity=".42"/><circle cx="81" cy="63" r="8" fill="#fff" opacity=".42"/>`,
    "black-bean": `<g fill="url(#main)"><ellipse cx="51" cy="63" rx="15" ry="20" transform="rotate(-18 51 63)"/><ellipse cx="76" cy="75" rx="16" ry="21" transform="rotate(22 76 75)"/></g><path ${light} d="M44 58c5-5 11-7 17-4"/>`,
    chickpea: `<g fill="url(#main)"><circle cx="51" cy="62" r="16"/><circle cx="76" cy="70" r="18"/><circle cx="61" cy="87" r="15"/></g><circle cx="74" cy="64" r="5" fill="#fff" opacity=".35"/>`,
    walnut: `<path ${g} d="M42 69c-10-24 10-42 25-27 15-16 38 3 27 28-8 21-45 38-52-1Z"/><path fill="none" stroke="#fff" stroke-width="5" opacity=".42" d="M65 44c-8 16-4 31 5 47M51 59c12 0 24 6 35 18"/>`,
    cashew: `<path fill="none" stroke="${primary}" stroke-width="20" stroke-linecap="round" d="M37 58c14-34 67-25 60 17-6 36-61 37-62 0"/><path fill="none" stroke="${accent}" stroke-width="10" stroke-linecap="round" opacity=".78" d="M47 59c12-20 45-15 42 13"/><circle cx="39" cy="76" r="7" fill="${primary}"/><circle cx="94" cy="76" r="7" fill="${primary}"/><path fill="#fff" opacity=".32" d="M54 45c14-8 31-4 39 9-17-8-34-6-48 7 2-7 5-12 9-16Z"/>`,
    peanut: `<path ${g} d="M48 41c15-9 31 3 29 20 18-4 30 13 20 29-11 19-39 17-43-3-18 2-30-15-20-31 3-6 8-11 14-15Z"/><path ${light} d="M55 50c7 8 8 22 1 34"/>`,
    "chia-seed": `<g fill="url(#main)">${dots([[43,53],[58,48],[75,52],[87,65],[48,72],[65,70],[81,84],[56,91]])}</g>`,
    oil: `<path ${g} d="M64 26c21 26 32 43 32 59 0 17-14 29-32 29S32 102 32 85c0-16 11-33 32-59Z"/><path ${light} d="M51 72c3-12 10-23 20-35"/>`,
    "soy-sauce": `<path ${g} d="M64 26c21 26 32 43 32 59 0 17-14 29-32 29S32 102 32 85c0-16 11-33 32-59Z"/><path fill="#fff" opacity=".24" d="M43 86c16 8 29 8 42 0 0 12-9 19-21 19s-21-7-21-19Z"/>`,
    vinegar: `<path ${g} d="M64 26c21 26 32 43 32 59 0 17-14 29-32 29S32 102 32 85c0-16 11-33 32-59Z"/><path fill="#fff" opacity=".3" d="M50 70c9-11 19-16 31-16"/>`,
    peppercorn: `<g fill="url(#main)"><circle cx="48" cy="56" r="12"/><circle cx="72" cy="53" r="11"/><circle cx="83" cy="76" r="13"/><circle cx="57" cy="85" r="12"/></g><circle cx="45" cy="52" r="3" fill="#fff" opacity=".42"/>`,
    chili: `<path ${g} d="M35 74c26-4 45-18 57-42 11 32-10 64-51 68-8-5-10-15-6-26Z"/><path ${stem} d="M88 31c7-8 16-6 20 2-11 0-18 4-22 12l2-14Z"/>`,
    "green-onion": `<path fill="none" stroke="${primary}" stroke-width="10" stroke-linecap="round" d="M45 101 57 37M64 101 64 30M83 101 72 37"/><path ${stem} d="M56 38c-11-13-6-23 7-11M72 38c11-13 6-23-7-11"/>`,
  };

  return templates[shape] || `<circle ${g} cx="64" cy="68" r="32"/>`;
}

function dots(points) {
  return points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4"/>`).join("");
}

function riceGrains(items) {
  const grains = [];
  for (let i = 0; i < items.length; i += 2) {
    const [x, y] = items[i];
    const angle = items[i + 1][0];
    grains.push(`<ellipse cx="${x}" cy="${y}" rx="5" ry="10" transform="rotate(${angle} ${x} ${y})"/>`);
  }
  return grains.join("");
}

function softBg(group) {
  return {
    高蛋白: "#eef8f1",
    肉蛋海鲜: "#fff2ec",
    蔬菜: "#eff9ed",
    主食: "#fff8e9",
    水果: "#fff2f2",
    乳制品: "#f0f7fb",
    豆制品: "#f3f8ed",
    坚果: "#fff4e5",
    优质脂肪: "#f4f8e9",
    调味品: "#f8f2ea",
  }[group] || "#f4f8ef";
}

function escapeXml(value) {
  return String(value).replace(/[<>&"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[char]);
}

for (const item of ingredients) {
  const [id, name, group, shape, primary, accent] = item;
  fs.writeFileSync(path.join(outDir, `${id}.svg`), svg(id, name, group, shape, primary, accent));
}

const manifest = Object.fromEntries(
  ingredients.map(([id, name, group, shape]) => [id, { name, group, shape, icon: `./assets/ingredient-icons/${id}.svg` }]),
);
fs.writeFileSync(path.join(outDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

const cards = ingredients
  .map(
    ([id, name, group, shape]) => `
      <article>
        <img src="./${id}.svg" alt="${name}" />
        <strong>${name}</strong>
        <span>${id}</span>
        <small>${group} · ${shape}</small>
      </article>`,
  )
  .join("");

fs.writeFileSync(
  path.join(outDir, "contact-sheet.html"),
  `<!doctype html>
<html lang="zh-CN">
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>轻食谱食材图标审核表</title>
<style>
  body{margin:0;background:#f6f7f2;color:#16191c;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif}
  main{max-width:1180px;margin:auto;padding:34px}
  h1{margin:0 0 8px;font-size:28px}
  p{margin:0 0 24px;color:#6f7572}
  section{display:grid;grid-template-columns:repeat(auto-fill,minmax(132px,1fr));gap:14px}
  article{display:grid;gap:7px;padding:14px;border-radius:12px;background:white;box-shadow:0 12px 28px rgba(24,29,27,.08)}
  img{width:64px;height:64px;border-radius:18px}
  strong{font-size:16px}
  span,small{color:#6f7572;font-size:12px}
</style>
<main>
  <h1>轻食谱食材图标审核表</h1>
  <p>每个食材一个独立图标；重点检查是否一眼能对应食材、同类是否能区分、风格是否统一。</p>
  <section>${cards}</section>
</main>
</html>
`,
);

console.log(`Generated ${ingredients.length} ingredient icons in ${outDir}`);
