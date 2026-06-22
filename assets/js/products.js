const products = [
  // Men's Shoes (1-4)
  {
    id: 1,
    name: "AeroStep Pro Runner 專業慢跑鞋",
    price: 3680,
    rating: 4.8,
    reviews: 124,
    category: "men",
    image: "assets/images/mens_runner.png",
    description: "專為長距離跑者設計的專業慢跑鞋。採用 AeroKnit 輕量針織鞋面，結合獨家 AeroFoam 避震中底，提供極佳的能量回饋與足部保護。霓虹綠與曜石黑的動感配色，展現運動時尚與速度感。",
    features: [
      "AeroKnit 輕巧高透氣針織技術，貼合腳型",
      "AeroFoam 高彈性避震科技中底，減輕關節負擔",
      "高耐磨橡膠大底，抓地力強，適應各種路面",
      "人體工學足弓支撐，減少跑步時的疲勞感"
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    colors: [
      { name: "曜石黑/螢光綠", hex: "#1a1a1a" },
      { name: "科技灰/動感藍", hex: "#7a7a7a" }
    ]
  },
  {
    id: 2,
    name: "Urban Scout Boot 城市探索皮革靴",
    price: 4980,
    rating: 4.9,
    reviews: 88,
    category: "men",
    image: "assets/images/mens_boot.png",
    description: "專為兼顧城市通勤與戶外微冒險設計的頂級皮革防潑水靴。採用精選優質牛皮，經特殊防泼水工藝處理。耐磨止滑大底配合加厚鞋領，舒適耐穿，經典深棕色澤極具英倫紳士風範。",
    features: [
      "嚴選防潑水處理真牛皮，風雨無阻",
      "重裝防滑顆粒大底，無懼濕滑路面",
      "舒適記憶海綿鞋墊，久站不累",
      "復古雙色編織鞋帶，堅固耐磨"
    ],
    sizes: [40, 41, 42, 43, 44],
    colors: [
      { name: "經典深棕", hex: "#5c4033" },
      { name: "極簡純黑", hex: "#000000" }
    ]
  },
  {
    id: 3,
    name: "Breeze Light Sneaker 極輕呼吸休閒鞋",
    price: 2480,
    rating: 4.6,
    reviews: 215,
    category: "men",
    image: "assets/images/mens_casual.png",
    description: "極簡舒適的極輕量休閒鞋，適合日常散步與商務休閒。使用一體成型的 3D 網眼鞋面包覆性佳，穿脫自如。淺灰色百搭外觀，是簡約生活風格的首選。",
    features: [
      "3D Mesh 循環透氣網眼網布，告別悶熱",
      "Slip-on 懶人式一秒套入設計，方便快捷",
      "極輕EVA防滑鞋底，每一步都輕盈如飛",
      "可拆洗活性碳鞋墊，長效防霉防臭"
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    colors: [
      { name: "百搭淺灰", hex: "#c0c0c0" },
      { name: "極簡純白", hex: "#ffffff" }
    ]
  },
  {
    id: 4,
    name: "Executive Leather Derby 經典英倫正裝皮鞋",
    price: 4500,
    rating: 4.7,
    reviews: 76,
    category: "men",
    image: "assets/images/mens_derby.png",
    description: "精緻的手工縫線與頂級拋光真皮打造的經典德比皮鞋。專為商務人士與正式場合設計，優雅奢華的深棕色調，鞋頭帶有自然漸層陰影，展現非凡的紳士品味。",
    features: [
      "頂級全粒面小牛皮，觸感細膩，光澤典雅",
      "經典德比鞋型，開襟綁帶設計，包容高腳背",
      "耐磨橡膠防滑大底貼皮，兼顧美觀與實用",
      "吸汗透氣真皮內裡，全天候乾爽舒適"
    ],
    sizes: [40, 41, 42, 43, 44],
    colors: [
      { name: "漸層深棕", hex: "#4b3621" },
      { name: "亮面典雅黑", hex: "#111111" }
    ]
  },

  // Women's Shoes (5-8)
  {
    id: 5,
    name: "Grace Flex Trainer 蜜桃粉體能訓練鞋",
    price: 3280,
    rating: 4.7,
    reviews: 95,
    category: "women",
    image: "assets/images/womens_trainer.png",
    description: "專為女性室內瑜珈、健身房訓練設計的多功能運動鞋。採用彈性針織鞋面包覆，搭配溫柔的蜜桃粉配色。輕薄的中底提供極佳的赤足感與高動態穩定性。",
    features: [
      "柔軟貼合高彈性針織面料，運動無拘無束",
      "雙密度緩震中底，適合高強度間歇訓練(HIIT)",
      "側向強化支撐結構，防止運動側翻扭傷",
      "超夢幻蜜桃粉色調，吸睛亮眼"
    ],
    sizes: [36, 37, 38, 39, 40],
    colors: [
      { name: "蜜桃粉", hex: "#ffb7c5" },
      { name: "丁香紫", hex: "#dbb2d1" }
    ]
  },
  {
    id: 6,
    name: "City Walk Platform 白金拼接增高板鞋",
    price: 2980,
    rating: 4.8,
    reviews: 142,
    category: "women",
    image: "assets/images/womens_platform.png",
    description: "街頭時尚必備的厚底板鞋。精緻的白皮革底色拼接奢華香檳金邊條飾，4公分完美黃金增高比例，悄悄修飾腿部線條。不論搭配裙裝或丹寧褲皆能完美駕馭。",
    features: [
      "4cm 厚底增高設計，視覺修飾腿部比例",
      "細緻質感合成皮革，耐髒且極易擦拭整理",
      "精緻金屬感拼接線條，低調奢華",
      "加厚防磨腳後跟軟墊，舒適加倍"
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    colors: [
      { name: "白金拼接", hex: "#f5f5dc" },
      { name: "白銀拼接", hex: "#e5e5e5" }
    ]
  },
  {
    id: 7,
    name: "Velvet Night Heel 優雅赫本絲絨高跟鞋",
    price: 3880,
    rating: 4.9,
    reviews: 64,
    category: "women",
    image: "assets/images/womens_heel.png",
    description: "奢華高雅的赫本風絲絨高跟鞋。選用極細緻黑色絲絨布料，7公分纖細鞋跟，搭配性感尖頭與包覆式流線剪裁，是晚宴、婚禮等正式場合的目光焦點。",
    features: [
      "高級進口法式絲絨，觸感天鵝絨般柔軟高貴",
      "7cm 穩固人體工學細高跟，修長身姿不累腳",
      "尖頭優雅流線，視覺延伸腳背線條",
      "軟Q乳膠腳掌氣墊，舒緩前掌受壓"
    ],
    sizes: [35, 36, 37, 38, 39],
    colors: [
      { name: "奢華絲絨黑", hex: "#0a0a0a" },
      { name: "復古酒紅", hex: "#800020" }
    ]
  },
  {
    id: 8,
    name: "Terra Trail Hiker 戶外越野健行鞋",
    price: 4200,
    rating: 4.8,
    reviews: 110,
    category: "women",
    image: "assets/images/womens_hiker.png",
    description: "專為熱愛山林運動的女性打造的越野健行鞋。沙灘米黃色鞋身搭配沉穩藍綠色點綴，搭載防水透氣薄膜與硬底黃金耐磨大底，完美適應各種惡劣戶外氣候與崎嶇碎石路。",
    features: [
      "HydroGuard 專業防水透氣薄膜，乾爽防雨",
      "大顆粒抗滑耐磨大底，泥濘濕滑山路剋星",
      "橡膠護趾防撞鞋頭，安心保護腳趾",
      "吸震EVA科技中底，舒緩下坡衝擊"
    ],
    sizes: [36, 37, 38, 39, 40],
    colors: [
      { name: "沙灘米/藍綠", hex: "#d2b48c" },
      { name: "石墨灰/桃紅", hex: "#4f4f4f" }
    ]
  },

  // Kids' Shoes (9-12)
  {
    id: 9,
    name: "Little Spark Light-up 歡樂閃耀發光童鞋",
    price: 1880,
    rating: 4.9,
    reviews: 156,
    category: "kids",
    image: "assets/images/kids_spark.png",
    description: "活潑有趣的兒童發光運動鞋。藍黃撞色設計充滿童趣，踩踏即可發光的智慧感應中底，增加孩子走路運動的樂趣。輕量無負擔的設計，呵護寶貝小腳健康成長。",
    features: [
      "重力感應發光中底，免充電，安全耐用",
      "透氣針織網布搭配超軟抗菌內裡",
      "一體式魔鬼氈設計，鍛鍊孩子自主穿鞋",
      "防滑軟Q大底，安全保護每次蹦跳"
    ],
    sizes: [28, 29, 30, 31, 32, 33, 34],
    colors: [
      { name: "童趣藍黃", hex: "#1e90ff" },
      { name: "甜美粉紫", hex: "#ff69b4" }
    ]
  },
  {
    id: 10,
    name: "Comfy Toddler Slip-on 軟底初學步鞋",
    price: 1280,
    rating: 4.8,
    reviews: 198,
    category: "kids",
    image: "assets/images/kids_toddler.png",
    description: "極致柔軟的學步懶人鞋。選用有機棉帆布及超柔軟防滑膠底，完美包覆幼兒細嫩腳掌。溫馨薄荷綠色調，溫和保護寶寶跨出的每一步。",
    features: [
      "極致柔軟防滑天然橡膠大底，足部健康發育",
      "100%有機棉帆布鞋面，柔軟親膚不过敏",
      "超寬敞鞋頭設計，讓寶寶腳趾自由伸展",
      "後跟提環設計，方便媽媽輔助穿脫"
    ],
    sizes: [22, 23, 24, 25, 26, 27],
    colors: [
      { name: "薄荷嫩綠", hex: "#aaf0d1" },
      { name: "暖心鵝黃", hex: "#fffacd" }
    ]
  },
  {
    id: 11,
    name: "Junior Court Sneaker 學院風網球運動鞋",
    price: 1980,
    rating: 4.7,
    reviews: 84,
    category: "kids",
    image: "assets/images/kids_court.png",
    description: "經典英倫學院風的兒童網球小白鞋。經典純白皮質拼接深藍色後跟，簡約時尚。耐磨抗造的鞋底結構，適合體育課、戶外活動及日常上學穿搭。",
    features: [
      "環保合成皮革鞋面，耐刮耐磨極易清潔",
      "耐磨橡膠一體大底，經久耐穿不開膠",
      "抗菌防臭科技鞋墊，運動整天不腳臭",
      "經典小白鞋造型，學院風穿搭必備"
    ],
    sizes: [30, 31, 32, 33, 34, 35, 36],
    colors: [
      { name: "經典白藍", hex: "#ffffff" },
      { name: "時尚全白", hex: "#f0f0f0" }
    ]
  },
  {
    id: 12,
    name: "Active Explorer Kid 兒童戶外探險鞋",
    price: 2200,
    rating: 4.8,
    reviews: 92,
    category: "kids",
    image: "assets/images/kids_hiker.png",
    description: "專為愛冒險的中高年級兒童設計的戶外探險運動鞋。亮眼橘黑配色，防潑水布料與防護型鞋頭，讓孩子無懼泥土沙石，盡情探索大自然。",
    features: [
      "防砂石橡膠防護型鞋頭，保護腳趾免受撞擊",
      "防潑水抗污網布鞋面，易乾好打理",
      "越野級深紋路止滑橡膠大底，安心登山",
      "快速束帶抽繩鞋帶，穿脫快速不鬆脫"
    ],
    sizes: [31, 32, 33, 34, 35, 36, 37],
    colors: [
      { name: "活力橘黑", hex: "#ff4500" },
      { name: "野性綠灰", hex: "#556b2f" }
    ]
  },

  // Accessories (13-14)
  {
    id: 13,
    name: "Merino Wool Cushioned Socks 美麗諾羊毛避震運動襪",
    price: 580,
    rating: 4.8,
    reviews: 312,
    category: "accessories",
    image: "assets/images/accessories_socks.png",
    description: "精選紐西蘭美麗諾羊毛混紡製成的高機能運動襪。足底加厚避震毛圈設計，吸濕排汗防異味，全方位保護雙足，是長途慢跑、登山健行者的最佳伴侶。",
    features: [
      "高比例頂級美麗諾羊毛，天然控溫抗異味",
      "足底環狀足弓壓力支撐與避震緩衝毛圈",
      "無縫腳趾縫合技術，杜絕摩擦紅腫",
      "腳背透氣網眼網布，加強散熱速度"
    ],
    sizes: ["S (35-38)", "M (39-42)", "L (43-46)"],
    colors: [
      { name: "曜石深灰", hex: "#3a3a3a" },
      { name: "經典碳黑", hex: "#1f1f1f" }
    ]
  },
  {
    id: 14,
    name: "Premium Odor Eliminator Spray 奈米銀長效除臭噴霧",
    price: 390,
    rating: 4.7,
    reviews: 420,
    category: "accessories",
    image: "assets/images/accessories_spray.png",
    description: "採用物理奈米銀離子與天然植物除臭配方。能迅速中和鞋內異味源，並在表面形成抗菌保護膜，長效抑制細菌繁殖。噴霧細緻均勻，溫和不傷皮革或布料。",
    features: [
      "物理奈米銀抗菌科技，從根源根除腳臭",
      "天然綠茶與尤加利精油香氛，清爽提神",
      "倒噴噴頭設計，輕鬆直達鞋頭死角",
      "環保無毒配方，全家大小鞋襪均適用"
    ],
    sizes: ["250ml"],
    colors: [
      { name: "經典瓶裝", hex: "#008080" }
    ]
  },

  // Others (15-16)
  {
    id: 15,
    name: "Carbon Fiber Shoe Trees 碳纖維輕量塑型鞋撐",
    price: 1200,
    rating: 4.9,
    reviews: 58,
    category: "others",
    image: "assets/images/others_shoetree.png",
    description: "頂級輕巧的碳纖維鞋撐。比傳統木質鞋撐更輕盈耐用，且完全不怕受潮。可調式精密彈簧拉桿，完美撐開鞋面，防止高檔皮鞋或球鞋產生皺褶與變形。",
    features: [
      "高科技輕量化碳纖維前掌撐板，質堅如鋼",
      "不鏽鋼高彈力伸縮調節拉桿，精確貼合鞋型",
      "極致輕量，出差旅行商務攜帶無壓力",
      "鏤空透氣孔設計，加速鞋內濕氣排出"
    ],
    sizes: ["M (39-42)", "L (43-46)"],
    colors: [
      { name: "科技黑碳", hex: "#1c1c1c" }
    ]
  },
  {
    id: 16,
    name: "Eco-clean Shoe Brush & Polish Kit 綠色環保清潔保養刷具組",
    price: 780,
    rating: 4.8,
    reviews: 134,
    category: "others",
    image: "assets/images/others_brush_kit.png",
    description: "全套頂級鞋履護理保養套裝。包含天然馬毛鞋刷、山毛櫸木長柄清潔刷、超細纖維擦鞋布以及天然蜂蠟滋養皮鞋膏。精裝馬口鐵盒包裝，自用送禮兩相宜。",
    features: [
      "100% 柔軟馬毛刷，清潔不傷精細皮革",
      "山毛櫸硬毛毛刷，輕鬆刷洗鞋底頑固泥沙",
      "純天然蜂蠟無毒滋養膏，防潑水防老化龜裂",
      "質感復古馬口鐵收納盒，整潔有序"
    ],
    sizes: ["標準套裝"],
    colors: [
      { name: "原木馬口鐵裝", hex: "#8b5a2b" }
    ]
  }
];

// If using in browser directly without module bundler:
if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
} else {
  window.products = products;
}
