# 菜谱图片匹配审计表

盘点日期：2026-07-16

## 1. 审计目的

本文件用于记录当前菜谱和图片的匹配情况，作为后续修复菜谱图片、扩充菜谱和上线前验收的依据。

当前审计基于：

- `app.js` 中的菜谱名称、食材和图片路径。
- `lightflow-food-image-database/image-library.csv` 中的图片说明。
- 图片路径和菜名之间的语义匹配。

注意：本轮审计是第一版静态审计，尚未逐张人工看图确认像素细节。正式修复前仍建议在页面或图片总览中复查重点项。

## 2. 匹配等级定义

| 等级 | 含义 | 处理方式 |
|---|---|---|
| 精确匹配 | 菜名、主食材、菜品形态和图片基本一致 | 可保留 |
| 可接受近似 | 主食材或菜品形态接近，但不是完全对应 | 可短期保留，后续优化 |
| 不合格 | 图片明显是另一道菜或主要食材不一致 | 必须替换、改名或下架 |
| 待人工复查 | 仅靠路径和描述无法判断 | 需要打开图片确认 |

## 3. 当前风险概览

明显需要优先处理的菜谱：

- `tofu-broccoli-carrot`：豆腐西兰花胡萝卜煲使用麻婆豆腐图。
- `beef-mushroom-rice`：牛肉蘑菇糙米饭使用牛肉面图。
- `spinach-egg-mushroom`：菠菜蘑菇炒蛋使用蛋炒饭图。
- `beef-pepper-corn`：青椒牛肉玉米碗使用炒饭图。
- `tofu-spinach-mushroom`：豆腐菠菜蘑菇汤使用馄饨汤图。
- `tomato-salmon-spinach`：番茄三文鱼菠菜汤使用南瓜汤图。
- `oat-egg-toast`：燕麦鸡蛋全麦吐司使用蓝莓燕麦碗图。
- `creamy-cucumber-salad`：酸奶黄瓜小葱沙拉图片描述疑似甜品碗。

## 4. 审计表

| 菜谱 ID | 当前菜名 | 当前图片路径 | 匹配等级 | 问题说明 | 建议处理 |
|---|---|---|---|---|---|
| tomato-egg | 番茄炒鸡蛋 | `Chinese-Food/tomato-scrambled-eggs/tomato-scrambled-eggs-01.jpg` | 可接受近似 | 图库描述偏 omurice/tomato sauce，不一定是中式番茄炒蛋 | 人工复查；必要时换图或改名 |
| chicken-broccoli | 鸡胸肉西兰花轻炒 | `Western-Food/chicken-broccoli-plate/chicken-broccoli-plate-01.jpg` | 可接受近似 | 主食材接近，形态偏餐盘不是轻炒 | 可短期保留 |
| shrimp-cucumber-egg | 虾仁黄瓜炒蛋 | `Healthy-Light-Meals/shrimp-zucchini-rice-bowl/shrimp-zucchini-rice-bowl-01.jpg` | 不合格 | 图片是虾仁西葫芦饭碗，不是黄瓜炒蛋 | 换炒蛋图，或改成虾仁西葫芦饭碗 |
| seabass-pepper | 青椒鲈鱼片 | `Western-Food/grilled-fish-potato-plate/grilled-fish-potato-plate-01.jpg` | 可接受近似 | 是鱼类餐盘，但不是青椒鱼片 | 可短期保留；后续换更准确鱼片图 |
| avocado-egg-toast | 牛油果鸡蛋全麦吐司 | `Western-Food/avocado-toast/avocado-toast-01.jpg` | 可接受近似 | 牛油果吐司匹配，鸡蛋需人工确认 | 人工复查 |
| tomato-tofu-soup | 番茄豆腐汤 | `Healthy-Light-Meals/tomato-soup/tomato-soup-01.jpg` | 可接受近似 | 是番茄汤，但豆腐不一定明显 | 可短期保留 |
| tofu-broccoli-carrot | 豆腐西兰花胡萝卜煲 | `Chinese-Food/mapo-tofu/mapo-tofu-01.jpg` | 不合格 | 麻婆豆腐图和清淡豆腐蔬菜煲明显不一致 | 换图、改名为麻婆豆腐轻食版，或下架 |
| pepper-chicken | 青椒鸡胸肉 | `Western-Food/grilled-chicken-vegetable-plate/grilled-chicken-vegetable-plate-01.jpg` | 可接受近似 | 鸡肉蔬菜餐盘接近，但不是青椒鸡胸肉 | 可短期保留 |
| salmon-avocado-salad | 三文鱼牛油果生菜碗 | `Healthy-Light-Meals/salmon-poke-bowl/salmon-poke-bowl-01.jpg` | 精确匹配 | 主食材和形态基本一致 | 保留 |
| beef-mushroom-rice | 牛肉蘑菇糙米饭 | `Chinese-Food/beef-noodles/beef-noodles-01.jpg` | 不合格 | 图片是牛肉面，不是牛肉蘑菇糙米饭 | 换牛肉饭/牛肉餐盘图，或下架 |
| oat-yogurt-banana | 香蕉酸奶燕麦杯 | `Healthy-Light-Meals/yogurt-banana-granola-bowl/yogurt-banana-granola-bowl-01.jpg` | 精确匹配 | 酸奶、香蕉、燕麦/谷物碗匹配 | 保留 |
| sweet-potato-egg-salad | 红薯鸡蛋生菜沙拉 | `Healthy-Light-Meals/chicken-avocado-salad/chicken-avocado-salad-01.jpg` | 不合格 | 图片是鸡肉牛油果沙拉，不是红薯鸡蛋沙拉 | 换图或改菜名 |
| shrimp-corn-salad | 虾仁玉米黄瓜沙拉 | `Healthy-Light-Meals/shrimp-grain-bowl/shrimp-grain-bowl-01.jpg` | 可接受近似 | 虾仁碗接近，但玉米黄瓜需确认 | 人工复查 |
| spinach-egg-mushroom | 菠菜蘑菇炒蛋 | `Chinese-Food/egg-fried-rice/egg-fried-rice-01.jpg` | 不合格 | 图片是蛋炒饭，不是菠菜蘑菇炒蛋 | 换图或改为蛋炒饭类菜谱 |
| salmon-broccoli-rice | 三文鱼西兰花糙米餐 | `Western-Food/salmon-broccoli-plate/salmon-broccoli-plate-01.jpg` | 精确匹配 | 三文鱼和西兰花餐盘匹配 | 保留 |
| beef-pepper-corn | 青椒牛肉玉米碗 | `Chinese-Food/fried-rice/fried-rice-01.jpg` | 不合格 | 图片是炒饭，不是青椒牛肉玉米碗 | 换图或改成牛肉炒饭 |
| tofu-spinach-mushroom | 豆腐菠菜蘑菇汤 | `Chinese-Food/wonton-soup/wonton-soup-01.jpg` | 不合格 | 图片是馄饨汤，不是豆腐菠菜蘑菇汤 | 换图或下架 |
| chicken-lettuce-wrap | 鸡胸肉生菜卷 | `Healthy-Light-Meals/grilled-chicken-avocado-bowl/grilled-chicken-avocado-bowl-01.jpg` | 不合格 | 图片是鸡肉牛油果碗，不是生菜卷 | 换图或改成鸡肉牛油果碗 |
| avocado-shrimp-toast | 牛油果虾仁全麦吐司 | `Western-Food/avocado-toast/avocado-toast-01.jpg` | 可接受近似 | 牛油果吐司匹配，虾仁不一定存在 | 人工复查；如无虾仁则改名 |
| yogurt-almond-banana | 酸奶杏仁香蕉碗 | `Healthy-Light-Meals/yogurt-fruit-bowl/yogurt-fruit-bowl-01.jpg` | 可接受近似 | 酸奶水果碗匹配，杏仁香蕉需确认 | 可短期保留 |
| chicken-sweet-potato | 鸡胸肉红薯训练餐 | `Western-Food/roasted-chicken/roasted-chicken-01.jpg` | 可接受近似 | 鸡肉匹配，红薯和西兰花不一定明显 | 人工复查 |
| tomato-salmon-spinach | 番茄三文鱼菠菜汤 | `Healthy-Light-Meals/pumpkin-soup/pumpkin-soup-01.jpg` | 不合格 | 图片是南瓜汤 | 换图或下架 |
| beef-lettuce-cucumber | 牛肉生菜黄瓜卷 | `Western-Food/grilled-steak/grilled-steak-01.jpg` | 可接受近似 | 牛肉匹配，但不是生菜黄瓜卷 | 可短期保留；后续换卷类图 |
| oat-egg-toast | 燕麦鸡蛋全麦吐司 | `Healthy-Light-Meals/blueberry-oatmeal-bowl/blueberry-oatmeal-bowl-01.jpg` | 不合格 | 图片是蓝莓燕麦碗，不是鸡蛋吐司 | 改成蓝莓燕麦碗或换图 |
| tofu-greens-rice-bowl | 豆腐青菜糙米碗 | `Healthy-Light-Meals/tofu-greens-rice-bowl/tofu-greens-rice-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| egg-avocado-rice-bowl | 牛油果鸡蛋米饭碗 | `Healthy-Light-Meals/egg-avocado-rice-bowl/egg-avocado-rice-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| tuna-avocado-corn-bowl | 金枪鱼牛油果玉米碗 | `Healthy-Light-Meals/tuna-avocado-corn-bowl/tuna-avocado-corn-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| lime-chicken-rice-bowl | 青柠鸡胸米饭碗 | `Healthy-Light-Meals/lime-chicken-rice-bowl/lime-chicken-rice-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| chickpea-quinoa-bowl | 鹰嘴豆藜麦蔬菜碗 | `Healthy-Light-Meals/chickpea-quinoa-bowl/chickpea-quinoa-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| cauliflower-tomato-salad | 花菜番茄沙拉碗 | `Healthy-Light-Meals/cauliflower-tomato-salad-bowl/cauliflower-tomato-salad-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| avocado-veggie-grain-bowl | 牛油果藜麦蔬菜碗 | `Healthy-Light-Meals/avocado-veggie-grain-bowl/avocado-veggie-grain-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| roasted-potato-avocado-bowl | 烤土豆牛油果碗 | `Healthy-Light-Meals/roasted-potato-avocado-bowl/roasted-potato-avocado-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| banana-kiwi-oatmeal | 香蕉猕猴桃燕麦碗 | `Healthy-Light-Meals/banana-kiwi-oatmeal-bowl/banana-kiwi-oatmeal-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| berry-yogurt-granola | 莓果酸奶燕麦碗 | `Healthy-Light-Meals/berry-yogurt-granola-bowl/berry-yogurt-granola-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| blueberry-oatmeal | 蓝莓牛奶燕麦碗 | `Healthy-Light-Meals/blueberry-oatmeal-bowl/blueberry-oatmeal-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| green-salad-toast | 牛油果番茄吐司沙拉 | `Healthy-Light-Meals/green-salad-with-toast/green-salad-with-toast-01.jpg` | 可接受近似 | 绿叶沙拉和吐司匹配，牛油果需确认 | 人工复查 |
| chicken-broccoli-rice-bowl | 鸡胸西兰花糙米碗 | `Healthy-Light-Meals/chicken-broccoli-rice-bowl/chicken-broccoli-rice-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| chicken-egg-broccoli-bowl | 鸡蛋鸡胸西兰花碗 | `Healthy-Light-Meals/chicken-egg-broccoli-bowl/chicken-egg-broccoli-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| shrimp-rice-bowl | 虾仁黄瓜米饭碗 | `Healthy-Light-Meals/shrimp-rice-bowl/shrimp-rice-bowl-01.jpg` | 可接受近似 | 虾仁米饭碗匹配，黄瓜需确认 | 可短期保留 |
| zucchini-noodle-salad | 西葫芦凉拌面 | `Healthy-Light-Meals/zucchini-noodle-salad/zucchini-noodle-salad-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| pasta-tomato-salad | 番茄黄瓜意面沙拉 | `Healthy-Light-Meals/pasta-salad-bowl/pasta-salad-bowl-01.jpg` | 可接受近似 | 意面沙拉匹配，番茄黄瓜需确认 | 可短期保留 |
| salmon-chickpea-bowl | 三文鱼鹰嘴豆沙拉碗 | `Healthy-Light-Meals/salmon-chickpea-bowl/salmon-chickpea-bowl-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| pumpkin-milk-soup | 南瓜牛奶浓汤 | `Healthy-Light-Meals/pumpkin-soup/pumpkin-soup-01.jpg` | 精确匹配 | 南瓜汤匹配 | 保留 |
| creamy-cucumber-salad | 酸奶黄瓜小葱沙拉 | `Healthy-Light-Meals/creamy-cucumber-salad/creamy-cucumber-salad-01.jpg` | 不合格 | 图库描述疑似甜品/抹茶配料碗，不像黄瓜酸奶沙拉 | 人工看图后换图或改名 |
| grilled-chicken-asparagus | 芦笋鸡胸土豆盘 | `Western-Food/grilled-chicken-asparagus-plate/grilled-chicken-asparagus-plate-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| grilled-chicken-carrot | 胡萝卜烤鸡胸餐盘 | `Western-Food/grilled-chicken-carrot-plate/grilled-chicken-carrot-plate-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| roasted-chicken-broccoli | 烤鸡腿西兰花土豆盘 | `Western-Food/roasted-chicken-broccoli-plate/roasted-chicken-broccoli-plate-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| seafood-tomato-pasta | 海鲜番茄意面 | `Western-Food/seafood-pasta/seafood-pasta-01.jpg` | 精确匹配 | 主食材和形态匹配 | 保留 |
| mushroom-cheese-toast-pizza | 蘑菇芝士吐司披萨 | `Western-Food/mushroom-pizza/mushroom-pizza-01.jpg` | 可接受近似 | 蘑菇芝士披萨匹配，但不是吐司披萨 | 可短期保留或改名 |
| kung-pao-chicken-light | 轻版宫保鸡丁 | `Chinese-Food/kung-pao-chicken/kung-pao-chicken-01.jpg` | 精确匹配 | 菜名和图片匹配 | 保留 |

## 5. 第一轮修复建议

优先修复所有“不合格”项，再处理“可接受近似”项。

第一轮建议处理顺序：

1. 先改明显错图的菜谱。
2. 如果图库中有更准确图片，直接替换路径。
3. 如果没有准确图片，但当前图片质量好，优先改菜名和食材，让它贴近图片。
4. 如果既不能换图也不能改名，暂时下架该菜谱。
5. 修复后在发现页和菜谱详情页复查。

## 6. 下一步

下一轮正式修复前，应先打开重点图片人工确认，尤其是：

- `tomato-scrambled-eggs-01.jpg`
- `avocado-toast-01.jpg`
- `creamy-cucumber-salad-01.jpg`
- 所有被标记为“不合格”的图片。

