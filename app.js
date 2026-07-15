const ingredients = [
  { id: "chicken-breast", name: "鸡胸肉", image: "./assets/ingredients/chicken-breast.jpg", group: "高蛋白" },
  { id: "egg", name: "鸡蛋", image: "./assets/ingredients/egg.jpg", group: "高蛋白" },
  { id: "shrimp", name: "虾仁", image: "./assets/ingredients/shrimp.jpg", group: "高蛋白" },
  { id: "seabass", name: "鲈鱼", image: "./assets/ingredients/seabass.jpg", group: "高蛋白" },
  { id: "salmon", name: "三文鱼", image: "./assets/ingredients/salmon.jpg", group: "高蛋白" },
  { id: "beef", name: "牛肉", image: "./assets/ingredients/beef.jpg", group: "高蛋白" },
  { id: "tofu", name: "豆腐", image: "./assets/ingredients/tofu.jpg", group: "高蛋白" },
  { id: "greek-yogurt", name: "希腊酸奶", image: "./assets/ingredients/greek-yogurt.jpg", group: "乳制品" },
  { id: "tomato", name: "番茄", image: "./assets/ingredients/tomato.jpg", group: "蔬菜" },
  { id: "broccoli", name: "西兰花", image: "./assets/ingredients/broccoli.jpg", group: "蔬菜" },
  { id: "green-pepper", name: "青椒", image: "./assets/ingredients/green-pepper.jpg", group: "蔬菜" },
  { id: "carrot", name: "胡萝卜", image: "./assets/ingredients/carrot.jpg", group: "蔬菜" },
  { id: "cucumber", name: "黄瓜", image: "./assets/ingredients/cucumber.jpg", group: "蔬菜" },
  { id: "lettuce", name: "生菜", image: "./assets/ingredients/lettuce.jpg", group: "蔬菜" },
  { id: "spinach", name: "菠菜", image: "./assets/ingredients/spinach.jpg", group: "蔬菜" },
  { id: "mushroom", name: "蘑菇", image: "./assets/ingredients/mushroom.jpg", group: "蔬菜" },
  { id: "corn", name: "玉米", image: "./assets/ingredients/corn.jpg", group: "主食" },
  { id: "brown-rice", name: "糙米", image: "./assets/ingredients/brown-rice.jpg", group: "主食" },
  { id: "sweet-potato", name: "红薯", image: "./assets/ingredients/sweet-potato.jpg", group: "主食" },
  { id: "oats", name: "燕麦", image: "./assets/ingredients/oats.jpg", group: "主食" },
  { id: "whole-wheat-toast", name: "全麦吐司", image: "./assets/ingredients/whole-wheat-toast.jpg", group: "主食" },
  { id: "avocado", name: "牛油果", image: "./assets/ingredients/avocado.jpg", group: "优质脂肪" },
  { id: "almond", name: "杏仁", image: "./assets/ingredients/almond.jpg", group: "优质脂肪" },
  { id: "banana", name: "香蕉", image: "./assets/ingredients/banana.jpg", group: "水果" },
];

ingredients.push(
  { id: "pork", name: "猪肉", group: "肉蛋海鲜" },
  { id: "pork-ribs", name: "排骨", group: "肉蛋海鲜" },
  { id: "chicken-thigh", name: "鸡腿肉", group: "肉蛋海鲜" },
  { id: "duck-breast", name: "鸭胸肉", group: "肉蛋海鲜" },
  { id: "cod", name: "鳕鱼", group: "肉蛋海鲜" },
  { id: "tuna", name: "金枪鱼", group: "肉蛋海鲜" },
  { id: "scallop", name: "扇贝", group: "肉蛋海鲜" },
  { id: "squid", name: "鱿鱼", group: "肉蛋海鲜" },
  { id: "crab", name: "蟹肉", group: "肉蛋海鲜" },
  { id: "bok-choy", name: "小青菜", group: "蔬菜" },
  { id: "cabbage", name: "白菜", group: "蔬菜" },
  { id: "cauliflower", name: "花菜", group: "蔬菜" },
  { id: "zucchini", name: "西葫芦", group: "蔬菜" },
  { id: "eggplant", name: "茄子", group: "蔬菜" },
  { id: "potato", name: "土豆", group: "蔬菜" },
  { id: "onion", name: "洋葱", group: "蔬菜" },
  { id: "garlic", name: "大蒜", group: "蔬菜" },
  { id: "ginger", name: "生姜", group: "蔬菜" },
  { id: "celery", name: "芹菜", group: "蔬菜" },
  { id: "asparagus", name: "芦笋", group: "蔬菜" },
  { id: "pumpkin", name: "南瓜", group: "蔬菜" },
  { id: "pea", name: "豌豆", group: "蔬菜" },
  { id: "white-rice", name: "米饭", group: "主食" },
  { id: "noodles", name: "面条", group: "主食" },
  { id: "pasta", name: "意面", group: "主食" },
  { id: "quinoa", name: "藜麦", group: "主食" },
  { id: "black-rice", name: "黑米", group: "主食" },
  { id: "buckwheat", name: "荞麦", group: "主食" },
  { id: "rice-cake", name: "年糕", group: "主食" },
  { id: "apple", name: "苹果", group: "水果" },
  { id: "orange", name: "橙子", group: "水果" },
  { id: "grape", name: "葡萄", group: "水果" },
  { id: "blueberry", name: "蓝莓", group: "水果" },
  { id: "strawberry", name: "草莓", group: "水果" },
  { id: "kiwi", name: "猕猴桃", group: "水果" },
  { id: "mango", name: "芒果", group: "水果" },
  { id: "pineapple", name: "菠萝", group: "水果" },
  { id: "milk", name: "牛奶", group: "乳制品" },
  { id: "cheese", name: "芝士", group: "乳制品" },
  { id: "cottage-cheese", name: "茅屋芝士", group: "乳制品" },
  { id: "soy-milk", name: "豆浆", group: "豆制品" },
  { id: "edamame", name: "毛豆", group: "豆制品" },
  { id: "black-bean", name: "黑豆", group: "豆制品" },
  { id: "chickpea", name: "鹰嘴豆", group: "豆制品" },
  { id: "walnut", name: "核桃", group: "坚果" },
  { id: "cashew", name: "腰果", group: "坚果" },
  { id: "peanut", name: "花生", group: "坚果" },
  { id: "chia-seed", name: "奇亚籽", group: "坚果" },
  { id: "olive-oil", name: "橄榄油", group: "调味品" },
  { id: "soy-sauce", name: "酱油", group: "调味品" },
  { id: "vinegar", name: "醋", group: "调味品" },
  { id: "black-pepper", name: "黑胡椒", group: "调味品" },
  { id: "chili", name: "辣椒", group: "调味品" },
  { id: "green-onion", name: "小葱", group: "调味品" },
);

const ingredientIconBasePath = "./assets/ingredient-icons";

ingredients.forEach((ingredient) => {
  ingredient.icon = `${ingredientIconBasePath}/${ingredient.id}.svg`;
});

const ingredientIcons = {
  "chicken-breast": "🍗",
  egg: "🥚",
  shrimp: "🍤",
  seabass: "🐟",
  salmon: "🍣",
  beef: "🥩",
  tofu: "◻",
  "greek-yogurt": "🥣",
  tomato: "🍅",
  broccoli: "🥦",
  "green-pepper": "🫑",
  carrot: "🥕",
  cucumber: "🥒",
  lettuce: "🥬",
  spinach: "🥬",
  mushroom: "🍄",
  corn: "🌽",
  "brown-rice": "🍚",
  "sweet-potato": "🍠",
  oats: "🥣",
  "whole-wheat-toast": "🍞",
  avocado: "🥑",
  almond: "◒",
  banana: "🍌",
  pork: "🥩",
  "pork-ribs": "🍖",
  "chicken-thigh": "🍗",
  "duck-breast": "🍖",
  cod: "🐟",
  tuna: "🐟",
  scallop: "○",
  squid: "◇",
  crab: "🦀",
  "bok-choy": "🥬",
  cabbage: "🥬",
  cauliflower: "✿",
  zucchini: "🥒",
  eggplant: "🍆",
  potato: "🥔",
  onion: "🧅",
  garlic: "🧄",
  ginger: "◆",
  celery: "☘",
  asparagus: "⌇",
  pumpkin: "🎃",
  pea: "●",
  "white-rice": "🍚",
  noodles: "🍜",
  pasta: "🍝",
  quinoa: "◌",
  "black-rice": "◐",
  buckwheat: "◇",
  "rice-cake": "▭",
  apple: "🍎",
  orange: "🍊",
  grape: "🍇",
  blueberry: "●",
  strawberry: "🍓",
  kiwi: "🥝",
  mango: "🥭",
  pineapple: "🍍",
  milk: "🥛",
  cheese: "🧀",
  "cottage-cheese": "◻",
  "soy-milk": "🥛",
  edamame: "🫛",
  "black-bean": "●",
  chickpea: "●",
  walnut: "◒",
  cashew: "◔",
  peanut: "🥜",
  "chia-seed": "∙",
  "olive-oil": "◍",
  "soy-sauce": "◧",
  vinegar: "◒",
  "black-pepper": "✺",
  chili: "🌶",
  "green-onion": "⌇",
};

const ingredientVisuals = {
  "chicken-breast": ["cutlet", "#d98263", "#f4c29f"],
  egg: ["egg", "#f7efd8", "#f0b84b"],
  shrimp: ["crescent", "#f47f62", "#ffd1bb"],
  seabass: ["fish", "#6fb5c7", "#d6f4ef"],
  salmon: ["fish-stripe", "#f28a73", "#ffd6c6"],
  beef: ["steak", "#9e4d43", "#f0a084"],
  tofu: ["cube", "#f5f0dd", "#d6caa3"],
  "greek-yogurt": ["bowl", "#f2f4f0", "#9cc7db"],
  tomato: ["round", "#df5b4f", "#ffd1c5"],
  broccoli: ["cluster", "#4f9a65", "#b9ddb4"],
  "green-pepper": ["pepper", "#4b9f62", "#bfe6b8"],
  carrot: ["root", "#df8842", "#ffd69b"],
  cucumber: ["pill", "#61a876", "#c9e7bd"],
  lettuce: ["leaf", "#73a95b", "#d5ebb2"],
  spinach: ["leaf", "#3f8d59", "#b8ddac"],
  mushroom: ["cap", "#b4916f", "#efe0c6"],
  corn: ["kernel", "#e4b63c", "#fff0a8"],
  "brown-rice": ["grain", "#b9905c", "#ead7aa"],
  "sweet-potato": ["tuber", "#c9794f", "#f2c28c"],
  oats: ["grain", "#c9a76d", "#efe0bc"],
  "whole-wheat-toast": ["toast", "#c98950", "#f1c987"],
  avocado: ["avocado", "#558c58", "#d9e789"],
  almond: ["nut", "#b98757", "#efd0a7"],
  banana: ["banana", "#e3bd46", "#fff0a3"],
  pork: ["cutlet", "#c86f68", "#f4b9a7"],
  "pork-ribs": ["rib", "#c66a60", "#f2c0a0"],
  "chicken-thigh": ["drum", "#d68455", "#f5c796"],
  "duck-breast": ["cutlet", "#b25a58", "#eab08f"],
  cod: ["fish-long", "#d7e7df", "#79aeb5"],
  tuna: ["fish-deep", "#9a4860", "#e58aa2"],
  scallop: ["shell", "#f0cfa4", "#fff0d8"],
  squid: ["squid", "#b9a7d8", "#ede4ff"],
  crab: ["crab", "#dd705a", "#ffd0b9"],
  "bok-choy": ["leaf-stem", "#65a85d", "#dceec4"],
  cabbage: ["round-leaf", "#8dbb6b", "#dfeec7"],
  cauliflower: ["cluster", "#e4dfc8", "#b8c98f"],
  zucchini: ["pill", "#5d9c69", "#cae5b4"],
  eggplant: ["eggplant", "#7560a8", "#d7c4f0"],
  potato: ["tuber", "#b88a58", "#ead0a6"],
  onion: ["onion", "#c49ac2", "#f0d9ed"],
  garlic: ["bulb", "#e7dfc8", "#f7f0d8"],
  ginger: ["root", "#c49a5d", "#efd3a0"],
  celery: ["stem", "#6fad69", "#d2eab8"],
  asparagus: ["stem", "#609b61", "#d4e5a8"],
  pumpkin: ["pumpkin", "#d98b3d", "#ffd59a"],
  pea: ["pod", "#74a957", "#d8ec9f"],
  "white-rice": ["grain", "#eee9d9", "#cfc5a6"],
  noodles: ["noodle", "#d6b874", "#f5e4a8"],
  pasta: ["twist", "#d9aa4c", "#f8dd8e"],
  quinoa: ["grain", "#c9a96e", "#f0dfb4"],
  "black-rice": ["grain-dark", "#4b4354", "#a89ab6"],
  buckwheat: ["diamond", "#9d7d5b", "#dfc29a"],
  "rice-cake": ["block", "#f3eee1", "#d7ceb8"],
  apple: ["apple", "#d6534b", "#ffd1c9"],
  orange: ["round", "#e59a38", "#ffd58c"],
  grape: ["cluster", "#8760a8", "#d8c4ee"],
  blueberry: ["berries", "#596eb4", "#c7d5ff"],
  strawberry: ["heart", "#d84e5e", "#ffc1c9"],
  kiwi: ["round-seed", "#8fb653", "#dbeaa4"],
  mango: ["mango", "#e5a640", "#ffdc8a"],
  pineapple: ["pineapple", "#d2aa3e", "#8dbb62"],
  milk: ["drop", "#f3f6f2", "#9fc9db"],
  cheese: ["wedge", "#e0b649", "#ffe08b"],
  "cottage-cheese": ["bowl", "#f4f2e7", "#d5d0bf"],
  "soy-milk": ["drop", "#efe8d4", "#c8b987"],
  edamame: ["pod", "#69a95d", "#d5ebb2"],
  "black-bean": ["bean", "#4d4658", "#a99bb7"],
  chickpea: ["bean", "#c79a58", "#ecd4a0"],
  walnut: ["nut", "#a8794d", "#e0bd90"],
  cashew: ["crescent", "#c39a64", "#edd3a1"],
  peanut: ["double-nut", "#b47d45", "#edc58b"],
  "chia-seed": ["seeds", "#59545d", "#bdb5c3"],
  "olive-oil": ["drop", "#a4a74d", "#e4de88"],
  "soy-sauce": ["drop", "#6b4736", "#c49a72"],
  vinegar: ["drop", "#a95f5c", "#e7b7a8"],
  "black-pepper": ["seeds", "#4b4a4a", "#b9b2a7"],
  chili: ["pepper", "#c9473e", "#ffb2a8"],
  "green-onion": ["stem", "#5aa45c", "#d0ebb0"],
};

const recipes = [
  recipe("tomato-egg", "番茄炒鸡蛋", ["tomato", "egg"], 298, 18, 12, 92, "番茄和鸡蛋就能完成，酸甜柔嫩，适合作为快手午餐。", "./lightflow-food-image-database/Chinese-Food/tomato-scrambled-eggs/tomato-scrambled-eggs-01.jpg"),
  recipe("chicken-broccoli", "鸡胸肉西兰花轻炒", ["chicken-breast", "broccoli", "carrot"], 356, 39, 18, 94, "鸡胸肉搭配西兰花和胡萝卜，蛋白质足，蔬菜量也稳。", "./lightflow-food-image-database/Western-Food/chicken-broccoli-plate/chicken-broccoli-plate-01.jpg"),
  recipe("shrimp-cucumber-egg", "虾仁黄瓜炒蛋", ["shrimp", "cucumber", "egg"], 326, 32, 15, 90, "虾仁、黄瓜和鸡蛋一起快炒，清爽高蛋白。", "./lightflow-food-image-database/Healthy-Light-Meals/shrimp-zucchini-rice-bowl/shrimp-zucchini-rice-bowl-01.jpg"),
  recipe("seabass-pepper", "青椒鲈鱼片", ["seabass", "green-pepper"], 312, 36, 16, 91, "鲈鱼片和青椒同炒，味道清淡，适合晚餐。", "./lightflow-food-image-database/Western-Food/grilled-fish-potato-plate/grilled-fish-potato-plate-01.jpg"),
  recipe("avocado-egg-toast", "牛油果鸡蛋全麦吐司", ["avocado", "egg", "whole-wheat-toast"], 412, 20, 10, 88, "全麦吐司、牛油果和鸡蛋组合，适合饱腹早餐。", "./lightflow-food-image-database/Western-Food/avocado-toast/avocado-toast-01.jpg"),
  recipe("tomato-tofu-soup", "番茄豆腐汤", ["tomato", "tofu"], 226, 17, 14, 89, "番茄煮出汤底，加入豆腐，轻盈又有蛋白质。", "./lightflow-food-image-database/Healthy-Light-Meals/tomato-soup/tomato-soup-01.jpg"),
  recipe("tofu-broccoli-carrot", "豆腐西兰花胡萝卜煲", ["tofu", "broccoli", "carrot"], 318, 21, 20, 87, "豆腐、绿叶菜和胡萝卜一起炖煮，适合清淡晚餐。", "./lightflow-food-image-database/Chinese-Food/mapo-tofu/mapo-tofu-01.jpg"),
  recipe("pepper-chicken", "青椒鸡胸肉", ["green-pepper", "chicken-breast"], 338, 38, 15, 90, "青椒和鸡胸肉大火快炒，做法简单，蛋白质扎实。", "./lightflow-food-image-database/Western-Food/grilled-chicken-vegetable-plate/grilled-chicken-vegetable-plate-01.jpg"),
  recipe("salmon-avocado-salad", "三文鱼牛油果生菜碗", ["salmon", "avocado", "lettuce", "cucumber"], 486, 34, 12, 93, "三文鱼、牛油果和生菜组合成冷食碗，脂肪质量更好。", "./lightflow-food-image-database/Healthy-Light-Meals/salmon-poke-bowl/salmon-poke-bowl-01.jpg"),
  recipe("beef-mushroom-rice", "牛肉蘑菇糙米饭", ["beef", "mushroom", "brown-rice"], 528, 36, 24, 86, "牛肉和蘑菇增香，糙米负责饱腹，适合训练日。", "./lightflow-food-image-database/Chinese-Food/beef-noodles/beef-noodles-01.jpg"),
  recipe("oat-yogurt-banana", "香蕉酸奶燕麦杯", ["oats", "greek-yogurt", "banana", "almond"], 388, 22, 6, 91, "燕麦、酸奶、香蕉和杏仁叠成早餐杯，不用开火。", "./lightflow-food-image-database/Healthy-Light-Meals/yogurt-banana-granola-bowl/yogurt-banana-granola-bowl-01.jpg"),
  recipe("sweet-potato-egg-salad", "红薯鸡蛋生菜沙拉", ["sweet-potato", "egg", "lettuce", "cucumber"], 372, 18, 18, 89, "红薯补充碳水，鸡蛋和生菜让整餐更平衡。", "./lightflow-food-image-database/Healthy-Light-Meals/chicken-avocado-salad/chicken-avocado-salad-01.jpg"),
  recipe("shrimp-corn-salad", "虾仁玉米黄瓜沙拉", ["shrimp", "corn", "cucumber", "lettuce"], 342, 29, 13, 90, "虾仁和玉米带来甜感，黄瓜让口感更清爽。", "./lightflow-food-image-database/Healthy-Light-Meals/shrimp-grain-bowl/shrimp-grain-bowl-01.jpg"),
  recipe("spinach-egg-mushroom", "菠菜蘑菇炒蛋", ["spinach", "mushroom", "egg"], 286, 21, 12, 88, "菠菜、蘑菇和鸡蛋快炒，适合早餐或轻晚餐。", "./lightflow-food-image-database/Chinese-Food/egg-fried-rice/egg-fried-rice-01.jpg"),
  recipe("salmon-broccoli-rice", "三文鱼西兰花糙米餐", ["salmon", "broccoli", "brown-rice"], 536, 37, 22, 92, "一份完整轻食盘：优质脂肪、蔬菜和慢碳水都有。", "./lightflow-food-image-database/Western-Food/salmon-broccoli-plate/salmon-broccoli-plate-01.jpg"),
  recipe("beef-pepper-corn", "青椒牛肉玉米碗", ["beef", "green-pepper", "corn"], 468, 35, 18, 86, "青椒牛肉搭配玉米，口味更有满足感。", "./lightflow-food-image-database/Chinese-Food/fried-rice/fried-rice-01.jpg"),
  recipe("tofu-spinach-mushroom", "豆腐菠菜蘑菇汤", ["tofu", "spinach", "mushroom"], 248, 20, 15, 89, "豆腐、菠菜、蘑菇做成清汤，适合晚上吃。", "./lightflow-food-image-database/Chinese-Food/wonton-soup/wonton-soup-01.jpg"),
  recipe("chicken-lettuce-wrap", "鸡胸肉生菜卷", ["chicken-breast", "lettuce", "cucumber", "carrot"], 336, 39, 16, 93, "用生菜包鸡胸肉和脆蔬菜，轻盈但不空。", "./lightflow-food-image-database/Healthy-Light-Meals/grilled-chicken-avocado-bowl/grilled-chicken-avocado-bowl-01.jpg"),
  recipe("avocado-shrimp-toast", "牛油果虾仁全麦吐司", ["avocado", "shrimp", "whole-wheat-toast"], 426, 31, 10, 88, "牛油果和虾仁铺在全麦吐司上，适合早午餐。", "./lightflow-food-image-database/Western-Food/avocado-toast/avocado-toast-01.jpg"),
  recipe("yogurt-almond-banana", "酸奶杏仁香蕉碗", ["greek-yogurt", "almond", "banana"], 318, 18, 5, 87, "酸奶、香蕉和杏仁组合，适合作为加餐。", "./lightflow-food-image-database/Healthy-Light-Meals/yogurt-fruit-bowl/yogurt-fruit-bowl-01.jpg"),
  recipe("chicken-sweet-potato", "鸡胸肉红薯训练餐", ["chicken-breast", "sweet-potato", "broccoli"], 472, 43, 24, 94, "鸡胸肉、红薯和西兰花，适合运动后补充。", "./lightflow-food-image-database/Western-Food/roasted-chicken/roasted-chicken-01.jpg"),
  recipe("tomato-salmon-spinach", "番茄三文鱼菠菜汤", ["tomato", "salmon", "spinach"], 384, 34, 18, 90, "番茄汤底配三文鱼和菠菜，清爽又有蛋白质。", "./lightflow-food-image-database/Healthy-Light-Meals/pumpkin-soup/pumpkin-soup-01.jpg"),
  recipe("beef-lettuce-cucumber", "牛肉生菜黄瓜卷", ["beef", "lettuce", "cucumber"], 352, 32, 15, 85, "薄切牛肉配生菜黄瓜，适合想吃肉但不想太重时。", "./lightflow-food-image-database/Western-Food/grilled-steak/grilled-steak-01.jpg"),
  recipe("oat-egg-toast", "燕麦鸡蛋全麦吐司", ["oats", "egg", "whole-wheat-toast"], 398, 22, 12, 84, "燕麦和鸡蛋提升饱腹感，全麦吐司做底。", "./lightflow-food-image-database/Healthy-Light-Meals/blueberry-oatmeal-bowl/blueberry-oatmeal-bowl-01.jpg"),
];

const imageLibraryHighlights = [
  { title: "牛肉面", category: "Chinese-Food", image: "./lightflow-food-image-database/Chinese-Food/beef-noodles/beef-noodles-02.jpg" },
  { title: "虾饺点心", category: "Chinese-Food", image: "./lightflow-food-image-database/Chinese-Food/shrimp-dumplings/shrimp-dumplings-01.jpg" },
  { title: "海鲜意面", category: "Western-Food", image: "./lightflow-food-image-database/Western-Food/seafood-pasta/seafood-pasta-01.jpg" },
  { title: "蘑菇披萨", category: "Western-Food", image: "./lightflow-food-image-database/Western-Food/mushroom-pizza/mushroom-pizza-01.jpg" },
  { title: "三文鱼轻食碗", category: "Healthy-Light-Meals", image: "./lightflow-food-image-database/Healthy-Light-Meals/salmon-poke-bowl/salmon-poke-bowl-01.jpg" },
  { title: "酸奶水果碗", category: "Healthy-Light-Meals", image: "./lightflow-food-image-database/Healthy-Light-Meals/yogurt-fruit-bowl/yogurt-fruit-bowl-01.jpg" },
];

const ingredientUnits = {
  "chicken-breast": "g",
  egg: "个",
  shrimp: "g",
  seabass: "g",
  salmon: "g",
  beef: "g",
  tofu: "g",
  "greek-yogurt": "g",
  tomato: "个",
  broccoli: "g",
  "green-pepper": "个",
  carrot: "根",
  cucumber: "根",
  lettuce: "份",
  spinach: "g",
  mushroom: "g",
  corn: "g",
  "brown-rice": "g",
  "sweet-potato": "g",
  oats: "g",
  "whole-wheat-toast": "片",
  avocado: "个",
  almond: "g",
  banana: "根",
};

Object.assign(ingredientUnits, {
  pork: "g",
  "pork-ribs": "g",
  "chicken-thigh": "g",
  "duck-breast": "g",
  cod: "g",
  tuna: "g",
  scallop: "g",
  squid: "g",
  crab: "g",
  "bok-choy": "份",
  cabbage: "份",
  cauliflower: "g",
  zucchini: "根",
  eggplant: "根",
  potato: "个",
  onion: "个",
  garlic: "瓣",
  ginger: "块",
  celery: "份",
  asparagus: "把",
  pumpkin: "g",
  pea: "g",
  "white-rice": "g",
  noodles: "g",
  pasta: "g",
  quinoa: "g",
  "black-rice": "g",
  buckwheat: "g",
  "rice-cake": "g",
  apple: "个",
  orange: "个",
  grape: "g",
  blueberry: "g",
  strawberry: "g",
  kiwi: "个",
  mango: "个",
  pineapple: "个",
  milk: "ml",
  cheese: "片",
  "cottage-cheese": "g",
  "soy-milk": "ml",
  edamame: "g",
  "black-bean": "g",
  chickpea: "g",
  walnut: "g",
  cashew: "g",
  peanut: "g",
  "chia-seed": "g",
  "olive-oil": "ml",
  "soy-sauce": "ml",
  vinegar: "ml",
  "black-pepper": "g",
  chili: "个",
  "green-onion": "根",
});

const defaultPantryAmounts = {
  "chicken-breast": 300,
  egg: 4,
  shrimp: 120,
  seabass: 0,
  salmon: 160,
  beef: 180,
  tofu: 200,
  "greek-yogurt": 250,
  tomato: 3,
  broccoli: 240,
  "green-pepper": 2,
  carrot: 2,
  cucumber: 2,
  lettuce: 2,
  spinach: 150,
  mushroom: 160,
  corn: 160,
  "brown-rice": 220,
  "sweet-potato": 260,
  oats: 120,
  "whole-wheat-toast": 4,
  avocado: 2,
  almond: 80,
  banana: 3,
};

Object.assign(defaultPantryAmounts, {
  pork: 0,
  "pork-ribs": 0,
  "chicken-thigh": 0,
  "duck-breast": 0,
  cod: 0,
  tuna: 0,
  scallop: 0,
  squid: 0,
  crab: 0,
  "bok-choy": 0,
  cabbage: 0,
  cauliflower: 0,
  zucchini: 0,
  eggplant: 0,
  potato: 0,
  onion: 0,
  garlic: 0,
  ginger: 0,
  celery: 0,
  asparagus: 0,
  pumpkin: 0,
  pea: 0,
  "white-rice": 0,
  noodles: 0,
  pasta: 0,
  quinoa: 0,
  "black-rice": 0,
  buckwheat: 0,
  "rice-cake": 0,
  apple: 0,
  orange: 0,
  grape: 0,
  blueberry: 0,
  strawberry: 0,
  kiwi: 0,
  mango: 0,
  pineapple: 0,
  milk: 0,
  cheese: 0,
  "cottage-cheese": 0,
  "soy-milk": 0,
  edamame: 0,
  "black-bean": 0,
  chickpea: 0,
  walnut: 0,
  cashew: 0,
  peanut: 0,
  "chia-seed": 0,
  "olive-oil": 0,
  "soy-sauce": 0,
  vinegar: 0,
  "black-pepper": 0,
  chili: 0,
  "green-onion": 0,
});

const recipeDetails = {
  "tomato-egg": {
    mealTypes: ["breakfast", "lunch", "dinner"],
    steps: ["番茄切块，鸡蛋打散备用。", "热锅少油倒入鸡蛋，凝固后盛出。", "番茄下锅炒出汁水，加入少量盐。", "倒回鸡蛋翻炒 30 秒，出锅前撒葱花。"],
    amounts: { tomato: 1, egg: 2 },
  },
  "chicken-broccoli": {
    mealTypes: ["lunch", "dinner"],
    steps: ["鸡胸肉切片，用少量盐和黑胡椒腌 10 分钟。", "西兰花和胡萝卜切小块，焯水 1 分钟。", "平底锅少油煎鸡胸肉至两面变色。", "加入蔬菜快炒，出锅前调味。"],
    amounts: { "chicken-breast": 150, broccoli: 120, carrot: 1 },
  },
  "shrimp-cucumber-egg": {
    mealTypes: ["lunch", "dinner"],
    steps: ["虾仁擦干，黄瓜切片，鸡蛋打散。", "先炒鸡蛋至嫩滑盛出。", "虾仁煎至变色后加入黄瓜。", "倒回鸡蛋，少盐调味后出锅。"],
    amounts: { shrimp: 100, cucumber: 1, egg: 1 },
  },
  "seabass-pepper": {
    mealTypes: ["lunch", "dinner"],
    steps: ["鲈鱼切片，用姜丝和少量盐腌 8 分钟。", "青椒切条，热锅快炒至断生。", "加入鱼片轻轻翻炒，避免碎裂。", "鱼片变白后出锅，保持清淡口味。"],
    amounts: { seabass: 150, "green-pepper": 1 },
  },
  "avocado-egg-toast": {
    mealTypes: ["breakfast", "snack"],
    steps: ["全麦吐司烤至微脆。", "牛油果压成泥，加入少量黑胡椒。", "鸡蛋煎熟或水煮切片。", "把牛油果和鸡蛋铺在吐司上。"],
    amounts: { avocado: 1, egg: 1, "whole-wheat-toast": 1 },
  },
  "tomato-tofu-soup": {
    mealTypes: ["lunch", "dinner"],
    steps: ["番茄切块，豆腐切小方块。", "番茄下锅炒出红汤。", "加入清水和豆腐，小火煮 6 分钟。", "按口味加盐，出锅前加一点葱花。"],
    amounts: { tomato: 1, tofu: 150 },
  },
  "tofu-broccoli-carrot": {
    mealTypes: ["lunch", "dinner"],
    steps: ["豆腐切块，西兰花和胡萝卜切小块。", "蔬菜先焯水，豆腐煎到表面微黄。", "加入少量清水焖 3 分钟。", "收汁后调味，保持少油。"],
    amounts: { tofu: 150, broccoli: 100, carrot: 1 },
  },
  "pepper-chicken": {
    mealTypes: ["lunch", "dinner"],
    steps: ["鸡胸肉切条，青椒切块。", "鸡肉用黑胡椒和少量盐腌制。", "热锅快炒鸡肉至变色。", "加入青椒继续翻炒至断生。"],
    amounts: { "green-pepper": 1, "chicken-breast": 150 },
  },
  "salmon-avocado-salad": {
    mealTypes: ["lunch", "dinner"],
    steps: ["三文鱼煎熟后静置 2 分钟。", "牛油果、黄瓜和生菜切好。", "把所有食材装碗。", "淋少量橄榄油或酸奶酱即可。"],
    amounts: { salmon: 140, avocado: 1, lettuce: 1, cucumber: 1 },
  },
  "beef-mushroom-rice": {
    mealTypes: ["lunch", "dinner"],
    steps: ["牛肉切薄片，蘑菇切片。", "糙米提前煮熟或加热。", "热锅煎牛肉和蘑菇，炒出香气。", "铺在糙米上，按口味调味。"],
    amounts: { beef: 140, mushroom: 100, "brown-rice": 120 },
  },
  "oat-yogurt-banana": {
    mealTypes: ["breakfast", "snack"],
    steps: ["燕麦放入杯底。", "加入希腊酸奶并轻轻抹平。", "香蕉切片铺上。", "撒杏仁，冷藏 10 分钟口感更好。"],
    amounts: { oats: 40, "greek-yogurt": 160, banana: 1, almond: 15 },
  },
  "sweet-potato-egg-salad": {
    mealTypes: ["breakfast", "lunch", "dinner"],
    steps: ["红薯蒸熟切块。", "鸡蛋煮熟切开。", "生菜和黄瓜洗净沥干。", "所有食材装盘，少量调味即可。"],
    amounts: { "sweet-potato": 150, egg: 1, lettuce: 1, cucumber: 1 },
  },
  "shrimp-corn-salad": {
    mealTypes: ["lunch", "dinner"],
    steps: ["虾仁焯熟或煎熟。", "玉米加热后沥干。", "黄瓜切丁，生菜撕小块。", "拌匀后加少量黑胡椒。"],
    amounts: { shrimp: 100, corn: 80, cucumber: 1, lettuce: 1 },
  },
  "spinach-egg-mushroom": {
    mealTypes: ["breakfast", "lunch", "dinner"],
    steps: ["菠菜洗净，蘑菇切片。", "鸡蛋打散炒至半熟盛出。", "蘑菇炒软后加入菠菜。", "倒回鸡蛋翻炒，少盐调味。"],
    amounts: { spinach: 100, mushroom: 90, egg: 2 },
  },
  "salmon-broccoli-rice": {
    mealTypes: ["lunch", "dinner"],
    steps: ["三文鱼两面煎熟。", "西兰花焯水后沥干。", "糙米加热装盘。", "组合成餐盘，撒黑胡椒。"],
    amounts: { salmon: 150, broccoli: 120, "brown-rice": 120 },
  },
  "beef-pepper-corn": {
    mealTypes: ["lunch", "dinner"],
    steps: ["牛肉切片，青椒切条。", "玉米提前加热。", "牛肉大火快炒至变色。", "加入青椒和玉米翻炒均匀。"],
    amounts: { beef: 130, "green-pepper": 1, corn: 90 },
  },
  "tofu-spinach-mushroom": {
    mealTypes: ["dinner"],
    steps: ["豆腐切块，菠菜和蘑菇洗净。", "锅中加水煮开后放入蘑菇。", "加入豆腐煮 4 分钟。", "最后放菠菜，调味后出锅。"],
    amounts: { tofu: 150, spinach: 100, mushroom: 90 },
  },
  "chicken-lettuce-wrap": {
    mealTypes: ["lunch", "dinner"],
    steps: ["鸡胸肉煎熟切条。", "生菜洗净作为包裹。", "黄瓜和胡萝卜切丝。", "用生菜包住鸡肉和蔬菜食用。"],
    amounts: { "chicken-breast": 140, lettuce: 1, cucumber: 1, carrot: 1 },
  },
  "avocado-shrimp-toast": {
    mealTypes: ["breakfast", "snack"],
    steps: ["吐司烤脆。", "牛油果压泥后铺在吐司上。", "虾仁煎熟放在表面。", "撒黑胡椒即可。"],
    amounts: { avocado: 1, shrimp: 90, "whole-wheat-toast": 1 },
  },
  "yogurt-almond-banana": {
    mealTypes: ["breakfast", "snack"],
    steps: ["酸奶倒入碗中。", "香蕉切片铺上。", "撒杏仁增加口感。", "可冷藏后食用。"],
    amounts: { "greek-yogurt": 180, almond: 15, banana: 1 },
  },
  "chicken-sweet-potato": {
    mealTypes: ["lunch", "dinner"],
    steps: ["红薯蒸熟切块。", "鸡胸肉煎熟切片。", "西兰花焯水。", "组合成训练餐盘。"],
    amounts: { "chicken-breast": 160, "sweet-potato": 180, broccoli: 120 },
  },
  "tomato-salmon-spinach": {
    mealTypes: ["lunch", "dinner"],
    steps: ["番茄炒出汤底。", "加入清水煮开。", "放入三文鱼块小火煮熟。", "最后加入菠菜烫软。"],
    amounts: { tomato: 1, salmon: 130, spinach: 100 },
  },
  "beef-lettuce-cucumber": {
    mealTypes: ["lunch", "dinner"],
    steps: ["牛肉煎熟切片。", "生菜和黄瓜洗净。", "用生菜包住牛肉和黄瓜。", "按口味蘸少量酱汁。"],
    amounts: { beef: 130, lettuce: 1, cucumber: 1 },
  },
  "oat-egg-toast": {
    mealTypes: ["breakfast", "snack"],
    steps: ["燕麦提前泡软或煮熟。", "鸡蛋煎熟。", "吐司烤脆。", "组合后撒黑胡椒。"],
    amounts: { oats: 40, egg: 1, "whole-wheat-toast": 1 },
  },
};

recipes.push(
  recipe("tofu-greens-rice-bowl", "豆腐青菜糙米碗", ["tofu", "bok-choy", "brown-rice"], 438, 24, 18, 90, "豆腐配青菜和糙米，清淡但有饱腹感，适合工作日晚餐。", "./lightflow-food-image-database/Healthy-Light-Meals/tofu-greens-rice-bowl/tofu-greens-rice-bowl-01.jpg"),
  recipe("egg-avocado-rice-bowl", "牛油果鸡蛋米饭碗", ["egg", "avocado", "white-rice", "corn"], 486, 21, 14, 88, "鸡蛋、牛油果和玉米拌进米饭，适合不想开大火的快手餐。", "./lightflow-food-image-database/Healthy-Light-Meals/egg-avocado-rice-bowl/egg-avocado-rice-bowl-01.jpg"),
  recipe("tuna-avocado-corn-bowl", "金枪鱼牛油果玉米碗", ["tuna", "avocado", "corn", "cucumber"], 452, 36, 10, 90, "金枪鱼和牛油果提供优质蛋白与脂肪，黄瓜让口感更清爽。", "./lightflow-food-image-database/Healthy-Light-Meals/tuna-avocado-corn-bowl/tuna-avocado-corn-bowl-01.jpg"),
  recipe("lime-chicken-rice-bowl", "青柠鸡胸米饭碗", ["chicken-breast", "white-rice", "lettuce", "cucumber"], 498, 42, 18, 92, "鸡胸肉配米饭和生菜，挤一点青柠，味道轻盈但很顶饱。", "./lightflow-food-image-database/Healthy-Light-Meals/lime-chicken-rice-bowl/lime-chicken-rice-bowl-01.jpg"),
  recipe("chickpea-quinoa-bowl", "鹰嘴豆藜麦蔬菜碗", ["chickpea", "quinoa", "carrot", "lettuce"], 416, 18, 16, 87, "鹰嘴豆和藜麦组合，适合想吃植物蛋白的一餐。", "./lightflow-food-image-database/Healthy-Light-Meals/chickpea-quinoa-bowl/chickpea-quinoa-bowl-01.jpg"),
  recipe("cauliflower-tomato-salad", "花菜番茄沙拉碗", ["cauliflower", "tomato", "lettuce"], 238, 11, 12, 84, "花菜、番茄和生菜做成大份蔬菜碗，适合晚餐减负。", "./lightflow-food-image-database/Healthy-Light-Meals/cauliflower-tomato-salad-bowl/cauliflower-tomato-salad-bowl-01.jpg"),
  recipe("avocado-veggie-grain-bowl", "牛油果藜麦蔬菜碗", ["avocado", "quinoa", "cucumber", "lettuce"], 426, 14, 12, 88, "牛油果搭配藜麦和脆蔬菜，冷食也好吃。", "./lightflow-food-image-database/Healthy-Light-Meals/avocado-veggie-grain-bowl/avocado-veggie-grain-bowl-01.jpg"),
  recipe("roasted-potato-avocado-bowl", "烤土豆牛油果碗", ["potato", "avocado", "lettuce"], 398, 10, 24, 82, "土豆带来满足感，牛油果和生菜让整餐更平衡。", "./lightflow-food-image-database/Healthy-Light-Meals/roasted-potato-avocado-bowl/roasted-potato-avocado-bowl-01.jpg"),
  recipe("banana-kiwi-oatmeal", "香蕉猕猴桃燕麦碗", ["oats", "banana", "kiwi", "greek-yogurt"], 362, 19, 6, 90, "燕麦、酸奶、香蕉和猕猴桃组合，早餐酸甜又饱腹。", "./lightflow-food-image-database/Healthy-Light-Meals/banana-kiwi-oatmeal-bowl/banana-kiwi-oatmeal-bowl-01.jpg"),
  recipe("berry-yogurt-granola", "莓果酸奶燕麦碗", ["greek-yogurt", "blueberry", "strawberry", "oats"], 334, 20, 5, 91, "酸奶配莓果和燕麦，适合作为早餐或训练后加餐。", "./lightflow-food-image-database/Healthy-Light-Meals/berry-yogurt-granola-bowl/berry-yogurt-granola-bowl-01.jpg"),
  recipe("blueberry-oatmeal", "蓝莓牛奶燕麦碗", ["oats", "blueberry", "milk"], 328, 15, 8, 86, "牛奶煮燕麦，再铺蓝莓，温热或冷藏都可以。", "./lightflow-food-image-database/Healthy-Light-Meals/blueberry-oatmeal-bowl/blueberry-oatmeal-bowl-01.jpg"),
  recipe("green-salad-toast", "牛油果番茄吐司沙拉", ["lettuce", "tomato", "whole-wheat-toast", "avocado"], 384, 12, 10, 85, "生菜番茄配全麦吐司，适合轻早餐或加餐。", "./lightflow-food-image-database/Healthy-Light-Meals/green-salad-with-toast/green-salad-with-toast-01.jpg"),
  recipe("chicken-broccoli-rice-bowl", "鸡胸西兰花糙米碗", ["chicken-breast", "broccoli", "brown-rice"], 512, 43, 20, 94, "经典训练餐组合，蛋白质、蔬菜和慢碳水都到位。", "./lightflow-food-image-database/Healthy-Light-Meals/chicken-broccoli-rice-bowl/chicken-broccoli-rice-bowl-01.jpg"),
  recipe("chicken-egg-broccoli-bowl", "鸡蛋鸡胸西兰花碗", ["chicken-breast", "egg", "broccoli"], 442, 48, 18, 93, "鸡胸肉加鸡蛋，蛋白质更扎实，适合运动日。", "./lightflow-food-image-database/Healthy-Light-Meals/chicken-egg-broccoli-bowl/chicken-egg-broccoli-bowl-01.jpg"),
  recipe("shrimp-rice-bowl", "虾仁黄瓜米饭碗", ["shrimp", "white-rice", "cucumber"], 418, 31, 13, 88, "虾仁和黄瓜铺在米饭上，清爽、快手、不油腻。", "./lightflow-food-image-database/Healthy-Light-Meals/shrimp-rice-bowl/shrimp-rice-bowl-01.jpg"),
  recipe("zucchini-noodle-salad", "西葫芦凉拌面", ["zucchini", "noodles", "cucumber", "peanut"], 386, 15, 16, 84, "面条配西葫芦和黄瓜，少量花生增加香气。", "./lightflow-food-image-database/Healthy-Light-Meals/zucchini-noodle-salad/zucchini-noodle-salad-01.jpg"),
  recipe("pasta-tomato-salad", "番茄黄瓜意面沙拉", ["pasta", "tomato", "cucumber", "cheese"], 456, 19, 16, 85, "冷食意面沙拉，番茄和黄瓜让口感更轻。", "./lightflow-food-image-database/Healthy-Light-Meals/pasta-salad-bowl/pasta-salad-bowl-01.jpg"),
  recipe("salmon-chickpea-bowl", "三文鱼鹰嘴豆沙拉碗", ["salmon", "chickpea", "cucumber", "lettuce"], 492, 39, 14, 91, "三文鱼和鹰嘴豆组合，蛋白质充足，适合午餐。", "./lightflow-food-image-database/Healthy-Light-Meals/salmon-chickpea-bowl/salmon-chickpea-bowl-01.jpg"),
  recipe("pumpkin-milk-soup", "南瓜牛奶浓汤", ["pumpkin", "milk"], 286, 10, 18, 82, "南瓜煮软后打成汤，口感顺滑，适合轻晚餐。", "./lightflow-food-image-database/Healthy-Light-Meals/pumpkin-soup/pumpkin-soup-01.jpg"),
  recipe("creamy-cucumber-salad", "酸奶黄瓜小葱沙拉", ["cucumber", "greek-yogurt", "green-onion"], 168, 11, 8, 83, "黄瓜配酸奶酱，清爽低负担，适合作为配菜或加餐。", "./lightflow-food-image-database/Healthy-Light-Meals/creamy-cucumber-salad/creamy-cucumber-salad-01.jpg"),
  recipe("grilled-chicken-asparagus", "芦笋鸡胸土豆盘", ["chicken-breast", "asparagus", "potato"], 468, 41, 22, 90, "鸡胸肉、芦笋和土豆组成完整餐盘，适合午餐。", "./lightflow-food-image-database/Western-Food/grilled-chicken-asparagus-plate/grilled-chicken-asparagus-plate-01.jpg"),
  recipe("grilled-chicken-carrot", "胡萝卜烤鸡胸餐盘", ["chicken-breast", "carrot", "lettuce"], 382, 40, 20, 88, "鸡胸肉搭配胡萝卜和生菜，简单、干净、好执行。", "./lightflow-food-image-database/Western-Food/grilled-chicken-carrot-plate/grilled-chicken-carrot-plate-01.jpg"),
  recipe("roasted-chicken-broccoli", "烤鸡腿西兰花土豆盘", ["chicken-thigh", "broccoli", "potato"], 536, 38, 28, 84, "鸡腿肉更有满足感，搭配西兰花和土豆作为正餐。", "./lightflow-food-image-database/Western-Food/roasted-chicken-broccoli-plate/roasted-chicken-broccoli-plate-01.jpg"),
  recipe("seafood-tomato-pasta", "海鲜番茄意面", ["shrimp", "scallop", "pasta", "tomato"], 548, 36, 22, 82, "虾仁和扇贝配番茄意面，适合想吃得丰富的一餐。", "./lightflow-food-image-database/Western-Food/seafood-pasta/seafood-pasta-01.jpg"),
  recipe("mushroom-cheese-toast-pizza", "蘑菇芝士吐司披萨", ["mushroom", "cheese", "tomato", "whole-wheat-toast"], 438, 21, 14, 78, "用全麦吐司做底，蘑菇和芝士增加满足感。", "./lightflow-food-image-database/Western-Food/mushroom-pizza/mushroom-pizza-01.jpg"),
  recipe("kung-pao-chicken-light", "轻版宫保鸡丁", ["chicken-thigh", "peanut", "green-pepper", "green-onion"], 486, 34, 18, 80, "保留宫保鸡丁的香气，减少油量，适合作为满足感午餐。", "./lightflow-food-image-database/Chinese-Food/kung-pao-chicken/kung-pao-chicken-01.jpg"),
);

Object.assign(recipeDetails, {
  "tofu-greens-rice-bowl": {
    mealTypes: ["lunch", "dinner"],
    steps: ["豆腐切块，小青菜洗净。", "糙米提前煮熟或加热。", "豆腐煎到表面微黄，加入小青菜快炒。", "把豆腐青菜铺在糙米上，少量调味。"],
    amounts: { tofu: 160, "bok-choy": 1, "brown-rice": 120 },
  },
  "egg-avocado-rice-bowl": {
    mealTypes: ["breakfast", "lunch"],
    steps: ["米饭加热后装碗。", "鸡蛋煎熟或水煮切开。", "牛油果切片，玉米加热。", "全部装碗，撒黑胡椒即可。"],
    amounts: { egg: 2, avocado: 1, "white-rice": 120, corn: 70 },
  },
  "tuna-avocado-corn-bowl": {
    mealTypes: ["lunch", "dinner"],
    steps: ["金枪鱼沥干备用。", "牛油果和黄瓜切块。", "玉米加热后沥干。", "所有食材装碗，拌少量黑胡椒。"],
    amounts: { tuna: 120, avocado: 1, corn: 80, cucumber: 1 },
  },
  "lime-chicken-rice-bowl": {
    mealTypes: ["lunch", "dinner"],
    steps: ["鸡胸肉切片，少量盐和黑胡椒腌制。", "米饭加热，生菜和黄瓜洗净。", "鸡胸肉煎熟后静置 2 分钟。", "组合成碗，可挤一点青柠或加醋。"],
    amounts: { "chicken-breast": 160, "white-rice": 120, lettuce: 1, cucumber: 1 },
  },
  "chickpea-quinoa-bowl": {
    mealTypes: ["lunch", "dinner"],
    steps: ["藜麦煮熟放凉。", "胡萝卜切丝，生菜洗净。", "鹰嘴豆加热或直接沥干。", "装碗后加少量橄榄油和黑胡椒。"],
    amounts: { chickpea: 110, quinoa: 90, carrot: 1, lettuce: 1 },
  },
  "cauliflower-tomato-salad": {
    mealTypes: ["lunch", "dinner"],
    steps: ["花菜切小朵焯水。", "番茄切块，生菜洗净。", "花菜沥干后和蔬菜拌匀。", "用醋和黑胡椒轻调味。"],
    amounts: { cauliflower: 160, tomato: 1, lettuce: 1 },
  },
  "avocado-veggie-grain-bowl": {
    mealTypes: ["lunch", "dinner"],
    steps: ["藜麦煮熟放凉。", "牛油果和黄瓜切块。", "生菜撕小片。", "所有食材装碗，少量调味即可。"],
    amounts: { avocado: 1, quinoa: 90, cucumber: 1, lettuce: 1 },
  },
  "roasted-potato-avocado-bowl": {
    mealTypes: ["lunch", "dinner"],
    steps: ["土豆切块蒸熟或烤熟。", "牛油果切片，生菜洗净。", "土豆放凉后装碗。", "加入牛油果和生菜，撒黑胡椒。"],
    amounts: { potato: 1, avocado: 1, lettuce: 1 },
  },
  "banana-kiwi-oatmeal": {
    mealTypes: ["breakfast", "snack"],
    steps: ["燕麦用热水或酸奶泡软。", "香蕉和猕猴桃切片。", "酸奶倒入碗中。", "铺上水果和燕麦，冷藏 5 分钟。"],
    amounts: { oats: 45, banana: 1, kiwi: 1, "greek-yogurt": 150 },
  },
  "berry-yogurt-granola": {
    mealTypes: ["breakfast", "snack"],
    steps: ["酸奶倒入碗中。", "蓝莓和草莓洗净。", "燕麦撒在表面。", "轻轻拌匀后食用。"],
    amounts: { "greek-yogurt": 180, blueberry: 60, strawberry: 80, oats: 35 },
  },
  "blueberry-oatmeal": {
    mealTypes: ["breakfast", "snack"],
    steps: ["燕麦和牛奶小火煮到浓稠。", "倒入碗中稍微放凉。", "蓝莓铺在表面。", "可按口味撒少量坚果。"],
    amounts: { oats: 45, blueberry: 70, milk: 180 },
  },
  "green-salad-toast": {
    mealTypes: ["breakfast", "snack"],
    steps: ["吐司烤脆。", "生菜和番茄洗净切好。", "牛油果切片或压泥。", "把蔬菜和牛油果配吐司食用。"],
    amounts: { lettuce: 1, tomato: 1, "whole-wheat-toast": 1, avocado: 1 },
  },
  "chicken-broccoli-rice-bowl": {
    mealTypes: ["lunch", "dinner"],
    steps: ["鸡胸肉切片腌 10 分钟。", "西兰花焯水，糙米加热。", "鸡胸肉煎熟。", "三样食材装碗，撒黑胡椒。"],
    amounts: { "chicken-breast": 160, broccoli: 130, "brown-rice": 120 },
  },
  "chicken-egg-broccoli-bowl": {
    mealTypes: ["lunch", "dinner"],
    steps: ["鸡胸肉煎熟切片。", "鸡蛋煮熟切开。", "西兰花焯水。", "组合装碗，少盐调味。"],
    amounts: { "chicken-breast": 150, egg: 1, broccoli: 140 },
  },
  "shrimp-rice-bowl": {
    mealTypes: ["lunch", "dinner"],
    steps: ["虾仁煎熟或焯熟。", "米饭加热装碗。", "黄瓜切片。", "虾仁和黄瓜铺在米饭上。"],
    amounts: { shrimp: 120, "white-rice": 120, cucumber: 1 },
  },
  "zucchini-noodle-salad": {
    mealTypes: ["lunch", "dinner"],
    steps: ["面条煮熟过凉水。", "西葫芦和黄瓜切丝。", "花生压碎备用。", "把所有食材拌匀，可加少量醋。"],
    amounts: { zucchini: 1, noodles: 100, cucumber: 1, peanut: 15 },
  },
  "pasta-tomato-salad": {
    mealTypes: ["lunch", "dinner"],
    steps: ["意面煮熟后过凉水。", "番茄和黄瓜切块。", "芝士切小片。", "拌匀后撒黑胡椒。"],
    amounts: { pasta: 100, tomato: 1, cucumber: 1, cheese: 1 },
  },
  "salmon-chickpea-bowl": {
    mealTypes: ["lunch", "dinner"],
    steps: ["三文鱼煎熟后切块。", "鹰嘴豆加热或沥干。", "黄瓜和生菜洗净。", "装碗后少量调味。"],
    amounts: { salmon: 140, chickpea: 80, cucumber: 1, lettuce: 1 },
  },
  "pumpkin-milk-soup": {
    mealTypes: ["breakfast", "dinner"],
    steps: ["南瓜切块蒸软。", "加入牛奶打成细腻汤底。", "小火加热到微沸。", "按口味加黑胡椒或少量盐。"],
    amounts: { pumpkin: 220, milk: 160 },
  },
  "creamy-cucumber-salad": {
    mealTypes: ["snack", "dinner"],
    steps: ["黄瓜切片。", "酸奶加入黑胡椒搅匀。", "小葱切碎。", "全部拌匀后冷藏 5 分钟。"],
    amounts: { cucumber: 1, "greek-yogurt": 120, "green-onion": 1 },
  },
  "grilled-chicken-asparagus": {
    mealTypes: ["lunch", "dinner"],
    steps: ["鸡胸肉切片腌制。", "芦笋洗净，土豆蒸熟切块。", "鸡胸肉煎熟，芦笋快速煎香。", "装盘后撒黑胡椒。"],
    amounts: { "chicken-breast": 160, asparagus: 1, potato: 1 },
  },
  "grilled-chicken-carrot": {
    mealTypes: ["lunch", "dinner"],
    steps: ["鸡胸肉煎熟。", "胡萝卜切条焯水或煎软。", "生菜洗净沥干。", "三样装盘，少量调味。"],
    amounts: { "chicken-breast": 150, carrot: 1, lettuce: 1 },
  },
  "roasted-chicken-broccoli": {
    mealTypes: ["lunch", "dinner"],
    steps: ["鸡腿肉去多余油脂后煎熟或烤熟。", "西兰花焯水。", "土豆蒸熟切块。", "组合装盘，控制调味油量。"],
    amounts: { "chicken-thigh": 160, broccoli: 130, potato: 1 },
  },
  "seafood-tomato-pasta": {
    mealTypes: ["lunch", "dinner"],
    steps: ["意面煮到合适口感。", "番茄切块炒出汁。", "加入虾仁和扇贝煮熟。", "倒入意面翻拌均匀。"],
    amounts: { shrimp: 100, scallop: 80, pasta: 110, tomato: 1 },
  },
  "mushroom-cheese-toast-pizza": {
    mealTypes: ["breakfast", "snack"],
    steps: ["吐司放在烤盘上。", "番茄切片，蘑菇切片。", "铺上番茄、蘑菇和芝士。", "烤到芝士融化即可。"],
    amounts: { mushroom: 80, cheese: 1, tomato: 1, "whole-wheat-toast": 1 },
  },
  "kung-pao-chicken-light": {
    mealTypes: ["lunch", "dinner"],
    steps: ["鸡腿肉切丁，用少量酱油腌制。", "青椒切块，小葱切段。", "鸡丁煎熟后加入青椒。", "最后加入花生和小葱，快速翻匀。"],
    amounts: { "chicken-thigh": 150, peanut: 15, "green-pepper": 1, "green-onion": 1 },
  },
});

recipes.forEach((item) => {
  const detail = recipeDetails[item.id] || {};
  item.mealTypes = detail.mealTypes || item.mealTypes;
  item.steps = detail.steps || item.steps;
  item.amounts = detail.amounts || item.amounts;
});

const navItems = [
  { key: "home", label: "首页", icon: "⌂" },
  { key: "discover", label: "发现", icon: "⌕" },
  { key: "log", label: "记录", icon: "▣" },
  { key: "profile", label: "我的", icon: "○" },
];

const ingredientCategories = ["全部", "高蛋白", "肉蛋海鲜", "蔬菜", "主食", "水果", "乳制品", "豆制品", "坚果", "优质脂肪", "调味品"];
const activityLevels = [
  { id: "light", label: "轻活动", factor: 1.2 },
  { id: "normal", label: "日常活动", factor: 1.375 },
  { id: "active", label: "规律运动", factor: 1.55 },
];
const goalOptions = ["稳健减脂", "维持体重", "增肌塑形"];
const preferenceOptions = ["高蛋白", "少油", "低碳", "多蔬菜"];
const mealSlots = [
  { id: "breakfast", label: "早餐", icon: "晨" },
  { id: "lunch", label: "午餐", icon: "午" },
  { id: "dinner", label: "晚餐", icon: "晚" },
  { id: "snack", label: "加餐", icon: "点" },
];
const storageKey = "light-flow-fit-state-v2";

const state = {
  page: "home",
  selectedIngredients: ["chicken-breast", "egg", "tomato", "broccoli"],
  ingredientCategory: "全部",
  ingredientSearch: "",
  bmr: { sex: "male", stage: "adult", age: 28, height: 172, weight: 60, activity: "normal" },
  profile: { goal: "稳健减脂", preferences: ["高蛋白", "少油"] },
  pantry: createDefaultPantry(),
  mealLogs: {},
  favorites: [],
  selectedDate: todayKey(),
  activeRecipeId: null,
  mealPickerRecipeId: null,
  pendingMealId: null,
  randomMealId: "lunch",
  randomRecipeId: null,
  randomHistory: [],
  toast: null,
  targetOverride: null,
};

const brandLogo = "./assets/brand/deer-logo.png";
const app = document.querySelector("#app");

hydrateState();
window.addEventListener("hashchange", render);
render();

function recipe(id, name, required, kcal, protein, time, score, desc, image) {
  return {
    id,
    name,
    required,
    kcal,
    protein,
    carbs: Math.max(12, Math.round((kcal - protein * 4) / 8)),
    fat: Math.max(5, Math.round(kcal / 52)),
    time,
    score,
    desc,
    image,
    mealTypes: ["lunch", "dinner"],
    steps: ["准备食材并清洗。", "按食材熟成速度依次下锅。", "少油少盐调味。", "装盘后趁热享用。"],
    amounts: Object.fromEntries(required.map((id) => [id, 1])),
  };
}

function getPage() {
  return location.hash.replace("#/", "") || "home";
}

function go(page) {
  location.hash = `#/${page}`;
}

function render() {
  state.page = getPage();
  app.innerHTML = `<main class="app-shell">${pageTemplate()}${bottomNav()}${recipeDetailModal()}${mealPickerModal()}${toastTemplate()}</main>`;
  bindEvents();
}

function pageTemplate() {
  if (state.page === "discover") return discoverPage();
  if (state.page === "log") return logPage();
  if (state.page === "profile") return profilePage();
  if (state.page === "scan") return scanPage();
  if (state.page === "ingredients") return ingredientsPage();
  return homePage();
}

function homePage() {
  const matchedRecipes = getMatchedRecipes();
  const bmr = calculateEnergy();
  const day = getDaySummary(state.selectedDate);

  return `
    <header class="hero-header">
      <div class="brand-lockup">
        <img src="${brandLogo}" alt="轻食谱小鹿轻食师 Logo" />
        <div>
          <p>今天从冰箱开始搭一餐</p>
          <h1>轻食谱</h1>
        </div>
      </div>
      <button class="round-button brand-orb" data-go="profile" aria-label="打开个人中心">
        <img src="${brandLogo}" alt="" />
      </button>
    </header>

    <button class="daily-card" data-go="log" aria-label="查看今日摄入、基础代谢和营养记录">
      <div>
        <span>今日摄入 · 点击调整基础代谢</span>
        <strong>${day.kcal} <small>/ ${bmr.target} 千卡</small></strong>
        <div class="progress"><i style="width:${Math.min(100, Math.round((day.kcal / bmr.target) * 100))}%"></i></div>
        <p>基础代谢 ${bmr.bmr} 千卡 · 剩余 ${Math.max(0, bmr.target - day.kcal)} 千卡</p>
      </div>
      <div class="daily-score"><strong>${matchedRecipes.ready.length}</strong><span>可做菜谱</span></div>
    </button>

    ${homeStats(matchedRecipes, bmr)}

    <section class="quick-actions" aria-label="快捷操作">
      <button class="action-card action-green" data-go="ingredients" aria-label="选择食材做一餐">
        <span class="action-icon">＋</span>
        <strong>选择食材做一餐</strong>
        <small>${ingredients.length} 种食材 · ${ingredientCategories.length - 1} 个分类</small>
        <b>›</b>
      </button>
      <button class="action-card action-berry" data-go="scan" aria-label="拍照识别这一餐">
        <span class="action-icon">◎</span>
        <strong>拍照识别这一餐</strong>
        <small>上传餐盘并估算热量</small>
        <b>›</b>
      </button>
    </section>

    <section class="section-head">
      <h2>今天吃点什么</h2>
      <button data-go="discover" aria-label="查看按食材匹配的菜谱">${matchedRecipes.ready.length} 道可做</button>
    </section>
    ${selectedStrip()}
    ${matchMeter(matchedRecipes)}
    <section class="recipe-list">
      ${matchedRecipes.ready.slice(0, 3).map(recipeListItem).join("") || emptyRecipeState()}
    </section>
    ${imageLibrarySection()}
  `;
}

function discoverPage() {
  const matchedRecipes = getMatchedRecipes();
  const pendingMeal = mealSlots.find((slot) => slot.id === state.pendingMealId);

  return `
    ${topBar("按食材做菜")}
    <section class="discover-intro">
      <span>INGREDIENT MATCH</span>
      <h1>${matchedRecipes.ready.length} 道现在能做</h1>
      <p>根据你已选的 ${state.selectedIngredients.length} 种食材排列组合；菜谱图由真实食材图组成。</p>
    </section>
    ${
      pendingMeal
        ? `<section class="meal-context-banner">
            <div><strong>正在为${pendingMeal.label}选菜</strong><span>点任意食谱的“加入${pendingMeal.label}”，会自动记录到今天。</span></div>
            <button type="button" data-clear-pending-meal>取消</button>
          </section>`
        : ""
    }
    ${imageLibrarySection("不知道吃什么？", "先选早餐、午餐、晚餐或加餐，系统会从全部食谱里随机挑一份。")}
    ${selectedStrip()}
    <section class="recipe-list">
      ${matchedRecipes.ready.map(recipeListItem).join("") || emptyRecipeState()}
    </section>
    <section class="section-head near-head">
      <h2>再补一点就能做</h2>
    </section>
    <section class="recipe-list">
      ${matchedRecipes.near.map(recipeListItem).join("") || `<section class="empty-state"><strong>暂时没有待补食谱</strong><p>换选几个食材试试。</p></section>`}
    </section>
  `;
}

function imageLibrarySection(title = "不知道吃什么？", subtitle = "选一餐，系统会从全部食谱里随机推荐，不再受冰箱库存限制。") {
  const randomMeal = mealSlots.find((slot) => slot.id === state.randomMealId) || mealSlots[1];
  const randomRecipe = getRandomRecipe();
  const stock = randomRecipe ? getRecipeStockStatus(randomRecipe) : null;
  const missingText = stock && !stock.canCook ? `缺 ${stock.missing.map((item) => `${getIngredient(item.id).name}${formatAmount(item.shortage, item.unit)}`).join("、")}` : "";

  return `
    <section class="library-section random-section" aria-label="${title}">
      <div class="section-head library-head">
        <div>
          <h2>${title}</h2>
          <p>${subtitle}</p>
        </div>
        <small>${randomMeal.label}</small>
      </div>
      <div class="random-meal-card">
        <div class="random-controls" aria-label="选择餐次">
          ${mealSlots
            .map((slot) => `<button type="button" class="${randomMeal.id === slot.id ? "active" : ""}" data-random-meal="${slot.id}">${slot.label}</button>`)
            .join("")}
        </div>
        ${
          randomRecipe
            ? `<article class="random-recipe" data-open-recipe="${randomRecipe.id}" role="button" tabindex="0" aria-label="查看${randomRecipe.name}详情">
                <img src="${randomRecipe.image}" alt="${randomRecipe.name}" loading="lazy" />
                <div>
                  <span>${stock?.canCook ? "库存足够 · 可自动扣减" : missingText}</span>
                  <strong>${randomRecipe.name}</strong>
                  <p>${randomRecipe.kcal} 千卡 · 蛋白质 ${randomRecipe.protein}g · ${randomRecipe.time} 分钟</p>
                  <div class="random-actions">
                    <button type="button" data-random-pick>换一道</button>
                    <button type="button" data-random-add="${randomRecipe.id}">加入${randomMeal.label}</button>
                  </div>
                </div>
              </article>`
            : `<section class="empty-state"><strong>暂时随机不到</strong><p>先去冰箱里补一点库存。</p></section>`
        }
      </div>
    </section>
  `;
}

function ingredientsPage() {
  const visibleIngredients = getVisibleIngredients();

  return `
    ${topBar("选择现有食材")}
    <section class="builder-intro">
      <span>BUILD YOUR PLATE</span>
      <h1>冰箱里有什么？</h1>
      <p>按分类筛选食材，选完后自动组合成可做菜谱。</p>
      <label class="search-box">
        <span>⌕</span>
        <input value="${state.ingredientSearch}" placeholder="搜索鸡胸肉、黄瓜、燕麦..." aria-label="搜索食材" data-search-ingredient />
      </label>
    </section>
    <section class="selected-panel interactive-panel">
      <strong>${state.selectedIngredients.length}</strong>
      <span>已选食材</span>
      <p>${getSelectedIngredientNames().join("、") || "还没有选择食材"}</p>
    </section>
    <section class="filter-row" aria-label="食材分类">
      ${ingredientCategories.map((cat) => `<button class="${state.ingredientCategory === cat ? "active" : ""}" data-ingredient-category="${cat}">${cat}</button>`).join("")}
    </section>
    <section class="ingredient-grid">
      ${visibleIngredients
        .map((item) => {
          const selected = state.selectedIngredients.includes(item.id);
          const unit = getIngredientUnit(item.id);
          const amount = getPantryAmount(item.id);
          return `
            <article class="ingredient-card ${selected ? "selected" : ""}">
              <div class="ingredient-icon" aria-hidden="true">${ingredientIconMarkup(item)}</div>
              <span class="ingredient-name">${item.name}</span>
              <small>${item.group} · 库存 ${formatAmount(amount, unit)}</small>
              <button class="ingredient-toggle" type="button" data-ingredient="${item.id}" aria-label="${selected ? "取消选择" : "选择"}${item.name}">${selected ? "✓" : "+"}</button>
              <div class="ingredient-quantity" aria-label="${item.name}库存数量">
                <button type="button" data-pantry-step="${item.id}" data-step="-1" aria-label="减少${item.name}">−</button>
                <strong>${formatAmount(amount, unit)}</strong>
                <button type="button" data-pantry-step="${item.id}" data-step="1" aria-label="增加${item.name}">＋</button>
              </div>
            </article>
          `;
        })
        .join("") || `<section class="empty-state"><strong>没有找到食材</strong><p>换个关键词或分类试试。</p></section>`}
    </section>
    <button class="sticky-cta" data-go="discover">根据 ${state.selectedIngredients.length} 种食材做菜 →</button>
  `;
}

function scanPage() {
  return `
    ${topBar("拍照识别这一餐")}
    <section class="scan-panel">
      <span>AI MEAL SCAN</span>
      <h1>拍下或选择餐食照片</h1>
      <button class="scan-drop" aria-label="选择餐食照片进行识别">
        <b>◎</b>
        <strong>上传餐食照片</strong>
        <small>支持完整餐盘、便当、外卖盒；识别结果可手动调整</small>
      </button>
      <div class="scan-steps">
        <span>01 俯拍餐盘</span>
        <span>02 避免遮挡</span>
        <span>03 结果可调整</span>
      </div>
    </section>
  `;
}

function logPage() {
  const energy = calculateEnergy();
  const activity = activityLevels.find((item) => item.id === state.bmr.activity);
  const day = getDaySummary(state.selectedDate);
  const progress = Math.min(100, Math.round((day.kcal / energy.target) * 100));
  return `
    ${topBar("今日记录")}
    <section class="record-summary energy-hero">
      <div class="date-switcher">
        <button data-date-step="-1" aria-label="前一天">‹</button>
        <div><p>${formatDateLabel(state.selectedDate)}</p><strong>${state.selectedDate}</strong></div>
        <button data-date-step="1" aria-label="后一天">›</button>
      </div>
      <h1>${day.kcal} <small>/ ${energy.target} 千卡</small></h1>
      <span>基础代谢 ${energy.bmr} 千卡 · ${activity.label} · ${state.profile.goal}</span>
      <div class="intake-progress" aria-label="今日摄入进度"><i style="width:${progress}%"></i></div>
      <div class="macro-row">
        <b>蛋白质 ${day.protein}g</b>
        <b>碳水 ${day.carbs}g</b>
        <b>脂肪 ${day.fat}g</b>
      </div>
    </section>
    <section class="target-card">
      <div>
        <strong>今日目标</strong>
        <span>${energy.target} 千卡 · 可拖动调整</span>
      </div>
      <input type="range" min="1200" max="2600" step="10" value="${energy.target}" data-target-calorie />
    </section>
    <section class="calculator-card">
      <div class="section-head">
        <h2>基础代谢计算</h2>
        <button type="button" data-reset-bmr>重置</button>
      </div>
      <div class="segmented-control" aria-label="性别">
        <button class="${state.bmr.sex === "male" ? "active" : ""}" data-bmr-sex="male">男生</button>
        <button class="${state.bmr.sex === "female" ? "active" : ""}" data-bmr-sex="female">女生</button>
      </div>
      <div class="segmented-control" aria-label="年龄阶段">
        <button class="${state.bmr.stage === "adult" ? "active" : ""}" data-bmr-stage="adult">成年人</button>
        <button class="${state.bmr.stage === "teen" ? "active" : ""}" data-bmr-stage="teen">青少年</button>
      </div>
      ${rangeInput("age", "年龄", state.bmr.age, 12, 70, "岁")}
      ${rangeInput("height", "身高", state.bmr.height, 130, 210, "cm")}
      ${rangeInput("weight", "体重", state.bmr.weight, 35, 130, "kg")}
      <div class="activity-row">
        ${activityLevels.map((item) => `<button class="${state.bmr.activity === item.id ? "active" : ""}" data-bmr-activity="${item.id}"><strong>${item.label}</strong><span>× ${item.factor}</span></button>`).join("")}
      </div>
      <details class="formula-note">
        <summary>公式说明</summary>
        <p>成年人使用 Mifflin-St Jeor：男生 10×体重 + 6.25×身高 - 5×年龄 + 5；女生末项为 -161。青少年用体重估算：男生 17.5×体重 + 651，女生 12.2×体重 + 746。结果仅作饮食记录参考。</p>
      </details>
    </section>
    <section class="meal-list">
      ${mealSlots.map((slot) => mealSlotCard(slot)).join("")}
    </section>
  `;
}

function profilePage() {
  return `
    ${topBar("我的")}
    <section class="profile-card">
      <div class="profile-avatar"><img src="${brandLogo}" alt="轻食谱小鹿轻食师 Logo" /></div>
      <h1>昊栋</h1>
      <p>坚持记录第 13 天</p>
      <div class="goal-pill">${state.profile.goal} · ${state.profile.preferences.join("、")}</div>
    </section>
    <section class="stat-grid">
      <article><strong>42%</strong><span>目标进度</span></article>
      <article><strong>${state.bmr.weight.toFixed(1)}</strong><span>体重 kg</span></article>
      <article><strong>${calculateBmi()}</strong><span>BMI</span></article>
      <article><strong>${calculateEnergy().bmr}</strong><span>基础代谢</span></article>
    </section>
    <section class="interactive-card">
      <h2>目标模式</h2>
      <div class="goal-grid">
        ${goalOptions.map((goal) => `<button class="${state.profile.goal === goal ? "active" : ""}" data-profile-goal="${goal}">${goal}</button>`).join("")}
      </div>
    </section>
    <section class="interactive-card">
      <h2>饮食偏好</h2>
      <div class="goal-grid">
        ${preferenceOptions.map((pref) => `<button class="${state.profile.preferences.includes(pref) ? "active" : ""}" data-profile-pref="${pref}">${pref}</button>`).join("")}
      </div>
    </section>
    <section class="settings-list">
      <button data-go="discover">收藏菜谱 <b>${getMatchedRecipes().ready.length} 道可做 ›</b></button>
      <button data-go="ingredients">管理食材 <b>${state.selectedIngredients.length} 种 ›</b></button>
      <button data-go="log">基础代谢 <b>${calculateEnergy().bmr} 千卡 ›</b></button>
    </section>
  `;
}

function rangeInput(key, label, value, min, max, unit) {
  return `
    <label class="range-field">
      <span>${label}<b>${value}${unit}</b></span>
      <input type="range" min="${min}" max="${max}" value="${value}" data-bmr-range="${key}" />
    </label>
  `;
}

function homeStats(matchedRecipes, energy) {
  const day = getDaySummary(state.selectedDate);
  return `
    <section class="home-stats" aria-label="今日轻食概览">
      <button data-go="ingredients">
        <strong>${state.selectedIngredients.length}</strong>
        <span>已选食材</span>
      </button>
      <button data-go="discover">
        <strong>${matchedRecipes.ready.length}</strong>
        <span>现在能做</span>
      </button>
      <button data-go="log">
        <strong>${day.kcal}</strong>
        <span>今日摄入</span>
      </button>
    </section>
  `;
}

function matchMeter(matchedRecipes) {
  const ready = matchedRecipes.ready.length;
  const near = matchedRecipes.near.length;
  const width = Math.min(100, 14 + ready * 11 + Math.min(near, 6) * 4);
  return `
    <section class="match-meter" aria-label="菜谱匹配进度">
      <div><strong>${ready}</strong><span>现在能做</span></div>
      <div><strong>${near}</strong><span>补一点能做</span></div>
      <i style="width:${width}%"></i>
    </section>
  `;
}

function selectedStrip() {
  return `<section class="selected-strip" aria-label="已选食材">${getSelectedIngredientNames().map((name) => `<span>${name}</span>`).join("")}</section>`;
}

function topBar(title) {
  return `
    <header class="top-bar">
      <button data-go="home" aria-label="返回首页">‹</button>
      <strong>${title}</strong>
      <span></span>
    </header>
  `;
}

function bottomNav() {
  const active = ["ingredients", "scan"].includes(state.page) ? "" : state.page;
  return `
    <nav class="bottom-nav" aria-label="主导航">
      ${navItems
        .map(
          (item) => `
            <button class="${active === item.key ? "active" : ""}" data-go="${item.key}" aria-label="${item.label}" aria-current="${
              active === item.key ? "page" : "false"
            }">
              <span>${item.icon}</span>${item.label}
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function mealSlotCard(slot) {
  const logs = getLogsForDate()[slot.id] || [];
  const total = logs.reduce((sum, item) => sum + item.kcal, 0);
  return `
    <article class="meal-slot ${logs.length ? "filled" : ""}">
      <span>${slot.icon}</span>
      <div>
        <strong>${slot.label} ${logs.length ? `· ${total} 千卡` : "未记录"}</strong>
        ${
          logs.length
            ? `<div class="meal-items">${logs
                .map(
                  (item) => `
                    <button type="button" class="meal-chip" data-open-recipe="${item.recipeId}">
                      <img src="${item.image}" alt="" />
                      <span>${item.name}</span>
                      <b>${item.kcal}</b>
                    </button>
                    <button type="button" class="delete-meal" data-delete-log="${item.logId}" data-meal="${slot.id}" aria-label="删除${item.name}">×</button>
                  `,
                )
                .join("")}</div>`
            : `<p>从食谱详情里加入${slot.label}</p>`
        }
      </div>
      <button type="button" data-start-meal="${slot.id}" aria-label="添加${slot.label}">＋</button>
    </article>
  `;
}

function recipeDetailModal() {
  const recipe = recipes.find((item) => item.id === state.activeRecipeId);
  if (!recipe) return "";
  const stock = getRecipeStockStatus(recipe);
  const favorite = state.favorites.includes(recipe.id);
  return `
    <section class="modal-backdrop" data-close-recipe>
      <article class="recipe-modal" role="dialog" aria-modal="true" aria-label="${recipe.name}详情" onclick="event.stopPropagation()">
        <button class="modal-close" type="button" data-close-recipe aria-label="关闭详情">×</button>
        <img class="modal-hero" src="${recipe.image}" alt="${recipe.name}" />
        <div class="modal-body">
          <div class="modal-title">
            <div>
              <span>${recipe.mealTypes.map((id) => mealSlots.find((slot) => slot.id === id)?.label).filter(Boolean).join(" / ")}</span>
              <h2>${recipe.name}</h2>
            </div>
            <button type="button" data-favorite-recipe="${recipe.id}">${favorite ? "已收藏" : "收藏"}</button>
          </div>
          <p>${recipe.desc}</p>
          <div class="nutrition-grid">
            <b>${recipe.kcal}<span>千卡</span></b>
            <b>${recipe.protein}g<span>蛋白质</span></b>
            <b>${recipe.carbs}g<span>碳水</span></b>
            <b>${recipe.fat}g<span>脂肪</span></b>
          </div>
          <section class="detail-block">
            <h3>冰箱库存</h3>
            <div class="stock-list">
              ${Object.entries(recipe.amounts)
                .map(([id, amount]) => {
                  const ingredient = getIngredient(id);
                  const unit = getIngredientUnit(id);
                  const enough = getPantryAmount(id) >= amount;
                  return `<span class="${enough ? "enough" : "missing"}">${ingredient.name} ${formatAmount(amount, unit)} <small>库存 ${formatAmount(getPantryAmount(id), unit)}</small></span>`;
                })
                .join("")}
            </div>
            ${stock.canCook ? `<em class="stock-ok">库存足够，记录后会自动扣减。</em>` : `<em class="stock-warn">库存不足：${stock.missing.map((item) => `${getIngredient(item.id).name}${formatAmount(item.shortage, item.unit)}`).join("、")}</em>`}
          </section>
          <section class="detail-block">
            <h3>制作步骤 <small>6 步跟做</small></h3>
            <ol class="steps-list">${getRecipeCookingSteps(recipe).map((step) => `<li>${step}</li>`).join("")}</ol>
          </section>
          <section class="modal-actions">
            ${mealSlots.map((slot) => `<button type="button" data-add-meal="${recipe.id}" data-meal="${slot.id}">加入${slot.label}</button>`).join("")}
          </section>
        </div>
      </article>
    </section>
  `;
}

function mealPickerModal() {
  const recipe = recipes.find((item) => item.id === state.mealPickerRecipeId);
  if (!recipe) return "";
  return `
    <section class="modal-backdrop" data-close-meal-picker>
      <article class="meal-picker-modal" role="dialog" aria-modal="true" aria-label="选择加入哪一餐" onclick="event.stopPropagation()">
        <button class="modal-close" type="button" data-close-meal-picker aria-label="关闭">×</button>
        <img src="${recipe.image}" alt="${recipe.name}" />
        <div>
          <span>加入记录</span>
          <h2>${recipe.name}</h2>
          <p>选择要记到哪一餐；如果库存足够，冰箱数量会自动减少。</p>
          <div class="meal-picker-grid">
            ${mealSlots.map((slot) => `<button type="button" data-picker-meal="${slot.id}"><b>${slot.icon}</b><span>${slot.label}</span></button>`).join("")}
          </div>
        </div>
      </article>
    </section>
  `;
}

function toastTemplate() {
  if (!state.toast) return "";
  return `<div class="toast ${state.toast.type || "success"}"><strong>${state.toast.title}</strong><span>${state.toast.message}</span></div>`;
}

function bindEvents() {
  document.querySelectorAll("[data-go]").forEach((button) => {
    button.addEventListener("click", () => go(button.dataset.go));
  });

  document.querySelectorAll("[data-open-recipe]").forEach((card) => {
    card.addEventListener("click", () => openRecipe(card.dataset.openRecipe));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") openRecipe(card.dataset.openRecipe);
    });
  });

  document.querySelectorAll("[data-close-recipe]").forEach((button) => {
    button.addEventListener("click", closeRecipe);
  });

  document.querySelectorAll("[data-close-meal-picker]").forEach((button) => {
    button.addEventListener("click", closeMealPicker);
  });

  document.querySelectorAll("[data-open-meal-picker]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const recipeId = button.dataset.openMealPicker;
      if (state.pendingMealId) {
        addRecipeToMeal(recipeId, state.pendingMealId, { returnToLog: true });
      } else {
        state.mealPickerRecipeId = recipeId;
        render();
      }
    });
  });

  document.querySelectorAll("[data-picker-meal]").forEach((button) => {
    button.addEventListener("click", () => addRecipeToMeal(state.mealPickerRecipeId, button.dataset.pickerMeal));
  });

  document.querySelectorAll("[data-add-meal]").forEach((button) => {
    button.addEventListener("click", () => addRecipeToMeal(button.dataset.addMeal, button.dataset.meal));
  });

  document.querySelectorAll("[data-start-meal]").forEach((button) => {
    button.addEventListener("click", () => {
      state.pendingMealId = button.dataset.startMeal;
      state.randomMealId = button.dataset.startMeal;
      saveState();
      go("discover");
    });
  });

  document.querySelector("[data-clear-pending-meal]")?.addEventListener("click", () => {
    state.pendingMealId = null;
    saveState();
    render();
  });

  document.querySelectorAll("[data-random-meal]").forEach((button) => {
    button.addEventListener("click", () => {
      state.randomMealId = button.dataset.randomMeal;
      pickRandomRecipe();
      saveState();
      render();
    });
  });

  document.querySelector("[data-random-pick]")?.addEventListener("click", (event) => {
    event.stopPropagation();
    pickRandomRecipe();
    saveState();
    render();
  });

  document.querySelector("[data-random-add]")?.addEventListener("click", (event) => {
    event.stopPropagation();
    addRecipeToMeal(event.currentTarget.dataset.randomAdd, state.randomMealId || "lunch");
  });

  document.querySelectorAll("[data-favorite-recipe]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(button.dataset.favoriteRecipe);
    });
  });

  document.querySelectorAll("[data-delete-log]").forEach((button) => {
    button.addEventListener("click", () => deleteMealLog(button.dataset.deleteLog, button.dataset.meal));
  });

  document.querySelectorAll("[data-date-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDate = shiftDate(state.selectedDate, Number(button.dataset.dateStep));
      saveState();
      render();
    });
  });

  document.querySelector("[data-target-calorie]")?.addEventListener("input", (event) => {
    state.targetOverride = Number(event.target.value);
    saveState();
    render();
  });

  document.querySelectorAll("[data-ingredient]").forEach((button) => {
    button.addEventListener("click", () => {
      const ingredientId = button.dataset.ingredient;
      state.selectedIngredients = state.selectedIngredients.includes(ingredientId)
        ? state.selectedIngredients.filter((existing) => existing !== ingredientId)
        : [...state.selectedIngredients, ingredientId];
      if (state.selectedIngredients.includes(ingredientId) && getPantryAmount(ingredientId) <= 0) {
        state.pantry[ingredientId].quantity = defaultPantryAmounts[ingredientId] || 1;
      }
      if (!state.selectedIngredients.includes(ingredientId)) {
        state.pantry[ingredientId].quantity = 0;
      }
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-pantry-step]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      adjustPantry(button.dataset.pantryStep, Number(button.dataset.step));
    });
  });

  document.querySelectorAll("[data-ingredient-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.ingredientCategory = button.dataset.ingredientCategory;
      render();
    });
  });

  document.querySelector("[data-search-ingredient]")?.addEventListener("change", (event) => {
    state.ingredientSearch = event.target.value.trim();
    render();
  });

  document.querySelectorAll("[data-bmr-sex]").forEach((button) => {
    button.addEventListener("click", () => {
      state.bmr.sex = button.dataset.bmrSex;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-bmr-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      state.bmr.stage = button.dataset.bmrStage;
      state.bmr.age = state.bmr.stage === "teen" ? Math.min(state.bmr.age, 18) : Math.max(state.bmr.age, 19);
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-bmr-activity]").forEach((button) => {
    button.addEventListener("click", () => {
      state.bmr.activity = button.dataset.bmrActivity;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-bmr-range]").forEach((input) => {
    input.addEventListener("input", () => {
      state.bmr[input.dataset.bmrRange] = Number(input.value);
      saveState();
      render();
    });
  });

  document.querySelector("[data-reset-bmr]")?.addEventListener("click", () => {
    state.bmr = { sex: "male", stage: "adult", age: 28, height: 172, weight: 60, activity: "normal" };
    state.targetOverride = null;
    saveState();
    render();
  });

  document.querySelectorAll("[data-profile-goal]").forEach((button) => {
    button.addEventListener("click", () => {
      state.profile.goal = button.dataset.profileGoal;
      state.targetOverride = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-profile-pref]").forEach((button) => {
    button.addEventListener("click", () => {
      const pref = button.dataset.profilePref;
      state.profile.preferences = state.profile.preferences.includes(pref)
        ? state.profile.preferences.filter((item) => item !== pref)
        : [...state.profile.preferences, pref];
      saveState();
      render();
    });
  });
}

function openRecipe(recipeId) {
  state.activeRecipeId = recipeId;
  render();
}

function closeRecipe() {
  state.activeRecipeId = null;
  render();
}

function closeMealPicker() {
  state.mealPickerRecipeId = null;
  render();
}

function toggleFavorite(recipeId) {
  state.favorites = state.favorites.includes(recipeId)
    ? state.favorites.filter((id) => id !== recipeId)
    : [...state.favorites, recipeId];
  showToast(state.favorites.includes(recipeId) ? "已收藏" : "已取消收藏", recipes.find((item) => item.id === recipeId)?.name || "");
  saveState();
  render();
}

function addRecipeToMeal(recipeId, mealId, options = {}) {
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe || !mealId) return;
  const stock = getRecipeStockStatus(recipe);
  const logs = getLogsForDate();
  logs[mealId] = logs[mealId] || [];
  logs[mealId].push({
    logId: `${Date.now()}-${recipe.id}`,
    recipeId: recipe.id,
    name: recipe.name,
    image: recipe.image,
    kcal: recipe.kcal,
    protein: recipe.protein,
    carbs: recipe.carbs,
    fat: recipe.fat,
    deducted: stock.canCook,
  });

  if (stock.canCook) {
    Object.entries(recipe.amounts).forEach(([id, amount]) => {
      state.pantry[id].quantity = Math.max(0, getPantryAmount(id) - amount);
    });
    state.selectedIngredients = getAvailableIngredientIds();
  }

  state.activeRecipeId = null;
  state.mealPickerRecipeId = null;
  state.pendingMealId = null;
  if (options.returnToLog) {
    location.hash = "#/log";
  }
  showToast(`已加入${mealSlots.find((slot) => slot.id === mealId)?.label || "记录"}`, stock.canCook ? "冰箱库存已自动扣减" : "库存不足，已仅加入记录");
  saveState();
  render();
}

function adjustPantry(ingredientId, direction) {
  const ingredient = getIngredient(ingredientId);
  if (!ingredient) return;
  const step = getPantryStep(ingredientId) * direction;
  const nextQuantity = Math.max(0, getPantryAmount(ingredientId) + step);
  state.pantry[ingredientId] = {
    quantity: nextQuantity,
    unit: getIngredientUnit(ingredientId),
  };
  state.selectedIngredients = getAvailableIngredientIds();
  saveState();
  render();
}

function getPantryStep(ingredientId) {
  const unit = getIngredientUnit(ingredientId);
  if (["个", "根", "份", "片", "瓣", "块", "把"].includes(unit)) return 1;
  if (unit === "ml") return 50;
  if (["chicken-breast", "salmon", "beef", "shrimp", "seabass", "pork", "pork-ribs", "chicken-thigh", "duck-breast", "cod", "tuna", "scallop", "squid", "crab"].includes(ingredientId)) return 50;
  return 20;
}

function deleteMealLog(logId, mealId) {
  const logs = getLogsForDate();
  logs[mealId] = (logs[mealId] || []).filter((item) => item.logId !== logId);
  showToast("已删除记录", "今日摄入已更新");
  saveState();
  render();
}

function showToast(title, message, type = "success") {
  state.toast = { title, message, type };
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = null;
    render();
  }, 2200);
}

function getLogsForDate(date = state.selectedDate) {
  if (!state.mealLogs[date]) {
    state.mealLogs[date] = { breakfast: [], lunch: [], dinner: [], snack: [] };
  }
  return state.mealLogs[date];
}

function getDaySummary(date) {
  const logs = getLogsForDate(date);
  const items = mealSlots.flatMap((slot) => logs[slot.id] || []);
  return items.reduce(
    (sum, item) => ({
      kcal: sum.kcal + item.kcal,
      protein: sum.protein + item.protein,
      carbs: sum.carbs + item.carbs,
      fat: sum.fat + item.fat,
    }),
    { kcal: 0, protein: 0, carbs: 0, fat: 0 },
  );
}

function getRecipeStockStatus(recipe) {
  const missing = Object.entries(recipe.amounts)
    .map(([id, amount]) => {
      const unit = getIngredientUnit(id);
      const shortage = Math.max(0, amount - getPantryAmount(id));
      return { id, unit, shortage };
    })
    .filter((item) => item.shortage > 0);
  return { canCook: missing.length === 0, missing };
}

function getAvailableIngredientIds() {
  return ingredients.filter((item) => getPantryAmount(item.id) > 0).map((item) => item.id);
}

function getPantryAmount(id) {
  return Number(state.pantry[id]?.quantity || 0);
}

function getIngredientUnit(id) {
  return state.pantry[id]?.unit || ingredientUnits[id] || "份";
}

function formatAmount(amount, unit) {
  return `${Number(amount).toLocaleString("zh-CN", { maximumFractionDigits: 1 })}${unit}`;
}

function formatRecipeAmountList(recipe) {
  return Object.entries(recipe.amounts)
    .map(([id, amount]) => {
      const ingredient = getIngredient(id);
      return `${ingredient?.name || id} ${formatAmount(amount, getIngredientUnit(id))}`;
    })
    .join("、");
}

function getRecipeCookingSteps(recipe) {
  const steps = (recipe.steps || []).filter(Boolean);
  const profile = getRecipeCookingProfile(recipe);
  const amountText = formatRecipeAmountList(recipe);
  const generated = [
    `备料：按用量准备 ${amountText}，${getRecipePrepNote(recipe)}`,
    `${profile.prepLabel}：${steps[0] || profile.prep}`,
    `${profile.processLabel}：${steps[1] || profile.process}`,
    `${profile.cookLabel}：${steps[2] || profile.cook}`,
    `调味收尾：${steps[3] || profile.season}`,
    `出餐判断：${profile.finish}`,
  ];
  return generated.map((step) => step.replace(/\s+/g, " ").trim()).slice(0, 6);
}

function getRecipePrepNote(recipe) {
  const groups = new Set(recipe.required.map((id) => getIngredient(id)?.group).filter(Boolean));
  if (groups.has("水果") && groups.has("蔬菜")) return "蔬菜和水果洗净沥干，容易氧化的食材最后切。";
  if (groups.has("水果")) return "水果洗净或去皮，冷食类食材提前冷藏口感更好。";
  if (groups.has("蔬菜")) return "蔬菜洗净沥干，蛋白质类食材提前擦干更容易上色。";
  if (groups.has("肉蛋海鲜") || groups.has("高蛋白")) return "蛋白质类食材提前擦干，调味料放在手边。";
  return "需要加热的食材提前回温，冷食类食材保持新鲜。";
}

function getRecipeCookingProfile(recipe) {
  const name = recipe.name;
  const id = recipe.id;
  const hasStaple = recipe.required.some((item) => ["white-rice", "brown-rice", "noodles", "pasta", "quinoa", "black-rice", "buckwheat", "rice-cake", "whole-wheat-toast", "potato", "sweet-potato", "oats"].includes(item));
  const hasCrispVegetable = recipe.required.some((item) => ["lettuce", "cucumber", "spinach", "bok-choy", "cabbage", "celery"].includes(item));
  const isBreakfastBowl = /酸奶|燕麦|水果|莓果|蓝莓|香蕉|猕猴桃/.test(name);
  const isToast = /吐司|披萨/.test(name);
  const isSoup = /汤|浓汤/.test(name);
  const isSalad = /沙拉|凉拌|生菜卷|蔬菜碗|藜麦|鹰嘴豆/.test(name) || (hasCrispVegetable && !hasStaple && /碗|卷/.test(name));
  const isBowl = /碗|饭|米饭|糙米|训练餐|餐盘/.test(name);

  if (isBreakfastBowl) {
    return {
      prepLabel: "冷食准备",
      processLabel: "分层组合",
      cookLabel: "静置入味",
      prep: "水果切片或切块，酸奶和燕麦提前取出备用。",
      process: "先铺燕麦或酸奶，再放水果和坚果，层次更清楚。",
      cook: "不需要开火，冷藏 5-10 分钟会更顺口。",
      season: "按口味加少量坚果或奇亚籽，不额外加糖。",
      finish: "酸奶浓稠、燕麦变软即可；作为早餐可加一份鸡蛋提高蛋白质。",
    };
  }

  if (isToast) {
    return {
      prepLabel: "切配",
      processLabel: "铺料",
      cookLabel: "加热",
      prep: "吐司先烤到表面微脆，配料切薄片更容易入口。",
      process: "把湿润食材铺在中间，边缘留一点空间方便拿取。",
      cook: "平底锅或烤箱加热 2-4 分钟，表面微微上色即可。",
      season: "撒黑胡椒或少量盐，避免酱料太多。",
      finish: "吐司边缘微脆、配料热透即可；想更轻可把芝士减半。",
    };
  }

  if (isSoup) {
    return {
      prepLabel: "切配",
      processLabel: "炒香汤底",
      cookLabel: "小火煮",
      prep: "汤料切成接近大小，蛋白质类食材提前擦干。",
      process: "先处理能出香气的食材，再加水或牛奶形成汤底。",
      cook: "保持小火微沸，避免豆腐、鱼肉或奶汤被大火冲散。",
      season: "最后少量加盐或黑胡椒，先尝味再补。",
      finish: "汤色均匀、主料熟透即可；晚餐吃可以少配主食。",
    };
  }

  if (isSalad) {
    return {
      prepLabel: "准备主料",
      processLabel: "处理配菜",
      cookLabel: "组合装盘",
      prep: "蔬菜充分沥干，口感会更脆，也不容易把酱汁冲淡。",
      process: "需要加热的蛋白质先煎熟或焯熟，再放凉 1-2 分钟。",
      cook: "先放叶菜，再放主食和蛋白质，最后放容易氧化的食材。",
      season: "用少量橄榄油、醋或酸奶酱拌匀即可。",
      finish: "叶菜不出水、蛋白质熟透即可；带饭时酱汁分开放。",
    };
  }

  if (isBowl) {
    return {
      prepLabel: "切配",
      processLabel: "处理主食",
      cookLabel: "处理蛋白质",
      prep: "主料切成一口大小，蔬菜和主食提前备好。",
      process: "米饭、糙米或藜麦先加热，铺在碗底更稳。",
      cook: "蛋白质类食材中火煎熟，蔬菜焯水或快炒到断生。",
      season: "最后统一调味，少油少盐，保留食材本味。",
      finish: "主食热透、蛋白质熟透、蔬菜仍有颜色即可；训练日可增加主食。",
    };
  }

  return {
    prepLabel: "切配",
    processLabel: "预处理",
    cookLabel: "下锅",
    prep: "主料切成接近大小，调味料提前放在手边。",
    process: "蛋白质类食材先腌制或擦干，蔬菜按熟成速度分开放。",
    cook: "热锅后先下蛋白质，再下蔬菜，大火快炒保持口感。",
    season: "出锅前少量调味，避免一开始就放太咸。",
    finish: "蛋白质熟透、蔬菜断生即可；想更轻可减少油量并增加蔬菜。",
  };
}

function todayKey() {
  return toDateKey(new Date());
}

function toDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function shiftDate(key, days) {
  const date = new Date(`${key}T12:00:00`);
  date.setDate(date.getDate() + days);
  return toDateKey(date);
}

function formatDateLabel(key) {
  const date = new Date(`${key}T12:00:00`);
  const today = todayKey();
  if (key === today) return "今天";
  if (key === shiftDate(today, -1)) return "昨天";
  if (key === shiftDate(today, 1)) return "明天";
  return date.toLocaleDateString("zh-CN", { month: "long", day: "numeric", weekday: "short" });
}

function createDefaultPantry() {
  return Object.fromEntries(
    ingredients.map((item) => [
      item.id,
      {
        quantity: defaultPantryAmounts[item.id] || 0,
        unit: ingredientUnits[item.id] || "份",
      },
    ]),
  );
}

function hydrateState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    state.bmr = { ...state.bmr, ...(saved.bmr || {}) };
    state.profile = { ...state.profile, ...(saved.profile || {}) };
    state.pantry = { ...createDefaultPantry(), ...(saved.pantry || {}) };
    state.mealLogs = saved.mealLogs || {};
    state.favorites = saved.favorites || [];
    state.selectedDate = saved.selectedDate || todayKey();
    state.targetOverride = saved.targetOverride || null;
    state.randomMealId = saved.randomMealId || "lunch";
    state.randomRecipeId = saved.randomRecipeId || null;
    state.randomHistory = Array.isArray(saved.randomHistory) ? saved.randomHistory.slice(0, 8) : [];
    state.selectedIngredients = getAvailableIngredientIds();
  } catch {
    state.pantry = createDefaultPantry();
  }
}

function saveState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      bmr: state.bmr,
      profile: state.profile,
      pantry: state.pantry,
      mealLogs: state.mealLogs,
      favorites: state.favorites,
      selectedDate: state.selectedDate,
      targetOverride: state.targetOverride,
      randomMealId: state.randomMealId,
      randomRecipeId: state.randomRecipeId,
      randomHistory: state.randomHistory,
    }),
  );
}

function getVisibleIngredients() {
  const keyword = state.ingredientSearch.toLowerCase();
  return ingredients.filter((item) => {
    const categoryMatch = state.ingredientCategory === "全部" || item.group === state.ingredientCategory;
    const searchMatch = !keyword || item.name.toLowerCase().includes(keyword) || item.group.toLowerCase().includes(keyword) || item.id.includes(keyword);
    return categoryMatch && searchMatch;
  });
}

function getSelectedIngredientNames() {
  return getAvailableIngredientIds().map((id) => getIngredient(id)?.name).filter(Boolean);
}

function getIngredient(id) {
  return ingredients.find((ingredient) => ingredient.id === id);
}

function getIngredientIcon(id) {
  const ingredient = getIngredient(id);
  return ingredient?.icon || "";
}

function ingredientIconMarkup(ingredient) {
  const icon = ingredient?.icon;
  if (!icon) return `<span class="ingredient-icon-missing">待补</span>`;
  return `<img src="${icon}" alt="${ingredient.name}图标" loading="lazy" />`;
}

function recipeIngredientMarkup(id) {
  const ingredient = getIngredient(id);
  if (!ingredient) return "";
  const icon = getIngredientIcon(ingredient.id);
  if (!icon) return `<span title="${ingredient.name}" aria-label="${ingredient.name}">待补</span>`;
  return `<img src="${icon}" alt="${ingredient.name}" loading="lazy" />`;
}

function getMatchedRecipes() {
  const selected = new Set(getAvailableIngredientIds());
  const ranked = recipes
    .map((recipe) => {
      const matched = recipe.required.filter((id) => selected.has(id));
      const missing = recipe.required.filter((id) => !selected.has(id));
      return { ...recipe, matched, missing, stockStatus: getRecipeStockStatus(recipe) };
    })
    .sort((a, b) => a.missing.length - b.missing.length || b.matched.length - a.matched.length || b.score - a.score);

  return {
    ready: ranked.filter((recipe) => recipe.missing.length === 0),
    near: ranked.filter((recipe) => recipe.missing.length > 0 && recipe.matched.length > 0).slice(0, 8),
  };
}

function getRandomCandidates() {
  const mealId = state.randomMealId || "lunch";
  return recipes.filter((recipe) => recipe.mealTypes.includes(mealId));
}

function getRandomRecipe() {
  const candidates = getRandomCandidates();
  const existing = candidates.find((recipe) => recipe.id === state.randomRecipeId);
  if (existing) return existing;
  pickRandomRecipe();
  return candidates.find((recipe) => recipe.id === state.randomRecipeId) || candidates[0] || recipes[0];
}

function pickRandomRecipe() {
  const candidates = getRandomCandidates();
  if (!candidates.length) {
    state.randomRecipeId = null;
    return;
  }
  const recent = new Set([state.randomRecipeId, ...(state.randomHistory || [])].filter(Boolean).slice(0, 5));
  const freshPool = candidates.filter((recipe) => !recent.has(recipe.id));
  const nextPool = freshPool.length ? freshPool : candidates.filter((recipe) => recipe.id !== state.randomRecipeId);
  const finalPool = nextPool.length ? nextPool : candidates;
  const nextId = finalPool[Math.floor(Math.random() * finalPool.length)].id;
  state.randomHistory = [nextId, ...(state.randomHistory || []).filter((id) => id !== nextId)].slice(0, 8);
  state.randomRecipeId = nextId;
}

function recipeListItem(recipe) {
  const isReady = recipe.missing.length === 0;
  const favorite = state.favorites.includes(recipe.id);
  const pendingMeal = mealSlots.find((slot) => slot.id === state.pendingMealId);
  return `
    <article class="recipe-row ${isReady ? "ready" : "near"}" data-open-recipe="${recipe.id}" role="button" tabindex="0" aria-label="查看${recipe.name}详情">
      <div class="recipe-photo" aria-label="${recipe.name}菜品图片">
        <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
        <div class="recipe-ingredients" aria-label="${recipe.name}所需食材">
          ${recipe.required
            .slice(0, 3)
            .map(recipeIngredientMarkup)
            .join("")}
        </div>
      </div>
      <div class="recipe-copy">
        <h3>${recipe.name}</h3>
        <p>${recipe.desc}</p>
        <span>${recipe.kcal} 千卡 · 蛋白质 ${recipe.protein}g · ${recipe.time} 分钟</span>
        ${
          recipe.stockStatus.canCook
            ? `<em>库存足够 · 可直接记录</em>`
            : `<em>还差：${recipe.stockStatus.missing.map((item) => `${getIngredient(item.id).name}${formatAmount(item.shortage, item.unit)}`).join("、")}</em>`
        }
        <div class="recipe-actions">
          <button type="button" data-favorite-recipe="${recipe.id}" aria-label="${favorite ? "取消收藏" : "收藏"}${recipe.name}">${favorite ? "已收藏" : "收藏"}</button>
          <button type="button" data-open-meal-picker="${recipe.id}">${pendingMeal ? `加入${pendingMeal.label}` : "加入"}</button>
        </div>
      </div>
      <b>${recipe.score}</b>
    </article>
  `;
}

function calculateEnergy() {
  const { sex, stage, age, height, weight, activity } = state.bmr;
  const activityFactor = activityLevels.find((item) => item.id === activity)?.factor || 1.375;
  let bmr;

  if (stage === "teen") {
    bmr = sex === "male" ? 17.5 * weight + 651 : 12.2 * weight + 746;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age + (sex === "male" ? 5 : -161);
  }

  const maintenance = Math.round(bmr * activityFactor);
  const calculatedTarget = state.profile.goal === "稳健减脂" ? maintenance - 300 : state.profile.goal === "增肌塑形" ? maintenance + 220 : maintenance;
  const target = state.targetOverride || calculatedTarget;
  return { bmr: Math.round(bmr), maintenance, target: Math.max(1200, target) };
}

function calculateBmi() {
  const heightM = state.bmr.height / 100;
  return (state.bmr.weight / (heightM * heightM)).toFixed(1);
}

function emptyRecipeState() {
  return `
    <section class="empty-state" aria-label="暂无可做菜谱">
      <strong>当前食材还不够</strong>
      <p>去食材页多选几样，就会自动匹配菜谱。</p>
    </section>
  `;
}
