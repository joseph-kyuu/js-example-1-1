/*
==============================
!!!!! 1.obj 上新增以下內容 !!!!!
==============================
*/

// 1. 設定屬性名為 "myName"，並賦予值為 "Tom"
// 2. 設定屬性名為 "age"，並賦予值為 18
// 3. 設定屬性名為 "pets"，並賦予值為 ["John","Mike"]
// 4. 設定屬性名為 "isWakeUp"，並賦予值為 false

let obj1 = {};

obj1.myName = "Tom";
obj1.age = 18;
obj1.pets = ["John", "Mike"];
obj1.isWakeUp = false;
console.log(obj1);

/*
=============================
!!!!! 2.斷剪刀石頭布的輸贏 !!!!!
=============================
*/

// 請新增一行 Code，在 colors 用 push 語法新增一筆顏色資料，名稱為 black
// 請新增一行 Code，寫 console.log 來印出陣列總長度筆數

let colors = ["red", "black", "yellow"];
colors.push("black");
console.log(colors);
console.log(colors.length);

/*
==========================
!!!!! 3.母親今年的狀態 !!!!!
==========================
*/

// 需要更新，還請協助她修改物件資料
// 流程一：母親多一歲了，幫他累加一歲在 age 屬性對應的 value 上
// 流程二：母親多了一位小孩，幫她在 sons 屬性新增一位 "John"
// 請新增一行 Code，寫 console.log 來印出 motherStatus

let motherStatus = [
  {
    name: "mary",
    age: 31,
    sons: ["Tom", "Bob"],
  },
];

motherStatus[0].age++;
motherStatus[0].sons.push("John");
console.log(motherStatus);

/*
========================
!!!!! 4.自行車的資料 !!!!!
========================
*/

// 資料一：小杰想取出第一筆的站點名稱，也就是 "YouBike2.0_捷運美麗島站(10號出口)"
// 資料二：小杰想取出第三筆的 "可容納之自行車總數"，屬性名稱為 "BikesCapacity"

const bikeStationData = {
  data: [
    {
      StationUID: "KHH501201001",
      StationID: "501201001",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_捷運美麗島站(10號出口)",
        En: "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 10)",
      },
      StationPosition: {
        PositionLon: 120.30212,
        PositionLat: 22.63213,
        GeoHash: "wsj8c813d",
      },
      StationAddress: {
        Zh_tw: "中山一路168號前方",
        En: "No.168, Zhongshan 1st. Rd.",
      },
      BikesCapacity: 23,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:21:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201002",
      StationID: "501201002",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_捷運美麗島站(2號出口)",
        En: "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 2)",
      },
      StationPosition: {
        PositionLon: 120.30175,
        PositionLat: 22.63035,
        GeoHash: "wsj89x9p3",
      },
      StationAddress: {
        Zh_tw: "中山一路83號旁停車場前方",
        En: "No.83, Zhongshan 1st. Rd.",
      },
      BikesCapacity: 40,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:05:04+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201003",
      StationID: "501201003",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_捷運美麗島站(5號出口)",
        En: "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 5)",
      },
      StationPosition: {
        PositionLon: 120.3031,
        PositionLat: 22.63118,
        GeoHash: "wsj89xfh1",
      },
      StationAddress: {
        Zh_tw: "中正三路179號前方",
        En: "No.179, Zhongzheng 3rd. Rd",
      },
      BikesCapacity: 23,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:18:03+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201004",
      StationID: "501201004",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_七賢洛陽街口",
        En: "YouBike2.0_Qixian Luoyang St. Intersection",
      },
      StationPosition: {
        PositionLon: 120.30945,
        PositionLat: 22.63416,
        GeoHash: "wsj8c8qtt",
      },
      StationAddress: {
        Zh_tw: "七賢一路266號前方",
        En: "No.266, Qixian 1st Rd.",
      },
      BikesCapacity: 15,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:18:03+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201005",
      StationID: "501201005",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_中山七賢路口西南側",
        En: "YouBike2.0_Zhongshan Qixian Rd. Intersection (Southwest)",
      },
      StationPosition: {
        PositionLon: 120.30209,
        PositionLat: 22.63422,
        GeoHash: "wsj8c83mc",
      },
      StationAddress: {
        Zh_tw: "中山一路223號前方",
        En: "No.223, Zhongshan 1st Rd.",
      },
      BikesCapacity: 19,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:11:03+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201006",
      StationID: "501201006",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_中山八德路口西南側",
        En: "YouBike2.0_Zhongshan Bade Rd. Intersection (Southwest)",
      },
      StationPosition: {
        PositionLon: 120.30219,
        PositionLat: 22.63565,
        GeoHash: "wsj8c89qh",
      },
      StationAddress: {
        Zh_tw: "中山一路279號前方",
        En: "No.279, Zhongshan 1st Rd.",
      },
      BikesCapacity: 28,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:20:03+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201007",
      StationID: "501201007",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_新興高中",
        En: "YouBike2.0_Sinsing Senior High School",
      },
      StationPosition: {
        PositionLon: 120.30346,
        PositionLat: 22.62399,
        GeoHash: "wsj89wd63",
      },
      StationAddress: {
        Zh_tw: "五福二路/文衡一路口東北側",
        En: "Wufu 2nd Rd. & Wenheng 1st Rd. Intersection (Northeast)",
      },
      BikesCapacity: 19,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:05:04+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201008",
      StationID: "501201008",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_新興公園西南側",
        En: "YouBike2.0_Xinxing Park (Southwest)",
      },
      StationPosition: {
        PositionLon: 120.31219,
        PositionLat: 22.63601,
        GeoHash: "wsj8cbb8m",
      },
      StationAddress: {
        Zh_tw: "興邦路與開封街口東北側",
        En: "Xingbang Rd. & Kaifeng St. Intersection (Northeast)",
      },
      BikesCapacity: 25,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T18:56:03+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201009",
      StationID: "501201009",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_中正和平路口西北側",
        En: "YouBike2.0_Zhongzheng Heping Rd. Intersection (Northwest)",
      },
      StationPosition: {
        PositionLon: 120.31771,
        PositionLat: 22.63041,
        GeoHash: "wsj89zsxt",
      },
      StationAddress: {
        Zh_tw: "中正二路162號前方",
        En: "No.162, Zhongzheng 2nd Rd.",
      },
      BikesCapacity: 20,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:20:03+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201010",
      StationID: "501201010",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_六合錦田路口",
        En: "YouBike2.0_Liuhe Jintian Rd. Intersection",
      },
      StationPosition: {
        PositionLon: 120.31097,
        PositionLat: 22.63235,
        GeoHash: "wsj8c8pfb",
      },
      StationAddress: {
        Zh_tw: "六合一路44號對側",
        En: "No.44, Liuhe 1st Rd. (Opposite)",
      },
      BikesCapacity: 10,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:17:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201011",
      StationID: "501201011",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_捷運信義國小站(5號出口)",
        En: "YouBike2.0_KRT Sinyi Elementary School Sta. (Exit 5)",
      },
      StationPosition: {
        PositionLon: 120.31292,
        PositionLat: 22.63073,
        GeoHash: "wsj89zc1w",
      },
      StationAddress: {
        Zh_tw: "中正三路2號前方",
        En: "No.2, Zhongzheng 3rd Rd.",
      },
      BikesCapacity: 22,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:16:17+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201012",
      StationID: "501201012",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_高雄市財稅行政大樓",
        En: "YouBike2.0_Kaohsiung Financial Services Building",
      },
      StationPosition: {
        PositionLon: 120.30977,
        PositionLat: 22.63069,
        GeoHash: "wsj89xyck",
      },
      StationAddress: {
        Zh_tw: "中正三路25號前方",
        En: "No.25, Zhongzheng 3rd Rd.",
      },
      BikesCapacity: 18,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:21:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201013",
      StationID: "501201013",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_復興民權街口",
        En: "YouBike2.0_Fuxing Minquan St. Intersection",
      },
      StationPosition: {
        PositionLon: 120.30883,
        PositionLat: 22.62418,
        GeoHash: "wsj89ww5q",
      },
      StationAddress: {
        Zh_tw: "復興民權街口東北側",
        En: "Fuxing Minquan St. Intersection (Northeast)",
      },
      BikesCapacity: 22,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:15:03+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201014",
      StationID: "501201014",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_忠孝公園",
        En: "YouBike2.0_Zhongxiao Park",
      },
      StationPosition: {
        PositionLon: 120.30575,
        PositionLat: 22.62717,
        GeoHash: "wsj89x5uz",
      },
      StationAddress: {
        Zh_tw: "忠孝一路/民生一路口東南側",
        En: "Zhongxiao 1st Rd. & Minsheng 1st Rd. Intersection (Southeast)",
      },
      BikesCapacity: 19,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T18:54:04+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201015",
      StationID: "501201015",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_捷運中央公園站(2號出口)",
        En: "YouBike2.0_KRT Central Park Sta. (Exit 2)",
      },
      StationPosition: {
        PositionLon: 120.30124,
        PositionLat: 22.62389,
        GeoHash: "wsj89w89w",
      },
      StationAddress: {
        Zh_tw: "捷運中央公園站2號出口後方",
        En: "KRT Central Park Sta. (Exit 2)",
      },
      BikesCapacity: 25,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:21:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201016",
      StationID: "501201016",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_捷運中央公園站(3號出口)",
        En: "YouBike2.0_KRT Central Park Sta. (Exit 3)",
      },
      StationPosition: {
        PositionLon: 120.30152,
        PositionLat: 22.62684,
        GeoHash: "wsj89x0fu",
      },
      StationAddress: {
        Zh_tw: "中山一路/民生二路口東南側",
        En: "Zhongshan 1st Rd. & Minsheng 2nd Rd. Intersection (Southeast)",
      },
      BikesCapacity: 25,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:21:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201017",
      StationID: "501201017",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_捷運美麗島站(9號出口)",
        En: "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 9)",
      },
      StationPosition: {
        PositionLon: 120.30203,
        PositionLat: 22.63252,
        GeoHash: "wsj8c817b",
      },
      StationAddress: {
        Zh_tw: "中山一路153號",
        En: "No. 153, Zhongshan 1st Rd.",
      },
      BikesCapacity: 27,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:21:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201018",
      StationID: "501201018",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_捷運信義國小站(1號出口)",
        En: "YouBike2.0_KRT Xinyi Elementary School Sta. (Exit 1)",
      },
      StationPosition: {
        PositionLon: 120.309886,
        PositionLat: 22.630946,
        GeoHash: "wsj89xyfz",
      },
      StationAddress: {
        Zh_tw: "中正三路/錦田路(西北側)",
        En: "Zhongzheng 3rd Rd. /Jintian Rd(Northwest)",
      },
      BikesCapacity: 24,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T18:39:04+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201019",
      StationID: "501201019",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_六合公園(七賢路)",
        En: "YouBike2.0_Liuhe Park(Qixian Rd.)",
      },
      StationPosition: {
        PositionLon: 120.3059,
        PositionLat: 22.6342,
        GeoHash: "wsj8c8kjf",
      },
      StationAddress: {
        Zh_tw: "七賢一路420號南側",
        En: "No. 420, Qixian Rd. (South)",
      },
      BikesCapacity: 28,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:16:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201020",
      StationID: "501201020",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_中山民生圓環",
        En: "YouBike2.0_Zhongshan Minsheng Roundabout",
      },
      StationPosition: {
        PositionLon: 120.30149,
        PositionLat: 22.6279,
        GeoHash: "wsj89x2c5",
      },
      StationAddress: {
        Zh_tw: "中山民生路口西北側",
        En: "Zhongshan & Minsheng Rd. Intersection (Northwest)",
      },
      BikesCapacity: 24,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:21:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201021",
      StationID: "501201021",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_捷運美麗島站(7號出口)",
        En: "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 7)",
      },
      StationPosition: {
        PositionLon: 120.30343,
        PositionLat: 22.63143,
        GeoHash: "wsj89xfm9",
      },
      StationAddress: {
        Zh_tw: "中正三路178號",
        En: "No. 178, Zhongzheng 3rd Rd.",
      },
      BikesCapacity: 15,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:15:03+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201022",
      StationID: "501201022",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_捷運美麗島站(6號出口)",
        En: "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 6)",
      },
      StationPosition: {
        PositionLon: 120.30431,
        PositionLat: 22.63111,
        GeoHash: "wsj89xfgv",
      },
      StationAddress: {
        Zh_tw: "中正林森路口西南側",
        En: "Zhongzheng & Linsen Rd. Intersection (Southwest)",
      },
      BikesCapacity: 16,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:18:03+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201023",
      StationID: "501201023",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_民族八德路口",
        En: "YouBike2.0_Minzu Bade Rd. Intersection",
      },
      StationPosition: {
        PositionLon: 120.31341,
        PositionLat: 22.63539,
        GeoHash: "wsj8cb9s9",
      },
      StationAddress: {
        Zh_tw: "民族八德路口西北側",
        En: "Minzu & Bade Rd. Intersection (Northwest)",
      },
      BikesCapacity: 28,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:16:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201024",
      StationID: "501201024",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_高雄高商(復興路)",
        En: "YouBike2.0_Kaohsiung Commercial High School (Fuxing Rd.)",
      },
      StationPosition: {
        PositionLon: 120.30845,
        PositionLat: 22.62516,
        GeoHash: "wsj89wvcn",
      },
      StationAddress: {
        Zh_tw: "復興二路171號東側",
        En: "No. 171, Fuxing 2nd Rd. (East)",
      },
      BikesCapacity: 24,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:21:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201025",
      StationID: "501201025",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_民權民生路口",
        En: "YouBike2.0_Minquan Minsheng Rd. Intersection",
      },
      StationPosition: {
        PositionLon: 120.31086,
        PositionLat: 22.62723,
        GeoHash: "wsj89xptn",
      },
      StationAddress: {
        Zh_tw: "民權民生路口東南側",
        En: "Minquan & Minsheng Rd. Intersection (Southeast)",
      },
      BikesCapacity: 24,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:14:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201026",
      StationID: "501201026",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_大同國小(大同路)",
        En: "YouBike2.0_Ta-Tung Elementary School",
      },
      StationPosition: {
        PositionLon: 120.29895,
        PositionLat: 22.62823,
        GeoHash: "wsj89rr4b",
      },
      StationAddress: {
        Zh_tw: "大同一路229巷口西南側",
        En: "Ln. 229, Datong 1st Rd. (Southwest)",
      },
      BikesCapacity: 19,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T18:32:03+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201027",
      StationID: "501201027",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_民族河南路口",
        En: "YouBike2.0_National Henan Road",
      },
      StationPosition: {
        PositionLon: 120.31388,
        PositionLat: 22.63612,
        GeoHash: "wsj8cbcbu",
      },
      StationAddress: {
        Zh_tw: "民族二路/河南路口(南側)",
        En: "Minzu 2nd Road/Henan Intersection (south side)",
      },
      BikesCapacity: 23,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:17:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201028",
      StationID: "501201028",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_七賢民族二路口",
        En: "YouBike2.0_Qixian Minzu 2nd Rd.",
      },
      StationPosition: {
        PositionLon: 120.3131,
        PositionLat: 22.63388,
        GeoHash: "wsj8cb37f",
      },
      StationAddress: {
        Zh_tw: "七賢一路/民族二路口(西北側)",
        En: "Qixian 1st Rd. / Minzu 2nd Rd.(Northwest)",
      },
      BikesCapacity: 20,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:17:16+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201029",
      StationID: "501201029",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_六合公園(六合一路)",
        En: "YouBike2.0_Liuhe Park(Liuhe 1st Rd)",
      },
      StationPosition: {
        PositionLon: 120.30553,
        PositionLat: 22.632833,
        GeoHash: "wsj8c85vf",
      },
      StationAddress: {
        Zh_tw: "六合一路/忠孝一路(東南側)",
        En: "Liuhe 1st Rd./Zhongxiao 1st Rd.(Southeast)",
      },
      BikesCapacity: 13,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:18:03+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
    {
      StationUID: "KHH501201030",
      StationID: "501201030",
      AuthorityID: "KHH",
      StationName: {
        Zh_tw: "YouBike2.0_中正忠孝一路口",
        En: "YouBike2.0_Zhongzheng Zhongxiao 1st Rd.",
      },
      StationPosition: {
        PositionLon: 120.30621,
        PositionLat: 22.63098,
        GeoHash: "wsj89xu71",
      },
      StationAddress: {
        Zh_tw: "中正三路/忠孝一路(東南側)",
        En: "Zhongzheng 3rd Rd./Zhongxiao 1st Rd.(Southeast)",
      },
      BikesCapacity: 15,
      ServiceType: 2,
      SrcUpdateTime: "2026-07-23T19:12:02+08:00",
      UpdateTime: "2026-07-23T19:21:36+08:00",
    },
  ],
};

console.log(bikeStationData.data.length);
console.log(bikeStationData.data[0].StationName.Zh_tw);
console.log(bikeStationData.data[2].BikesCapacity);

/*
==========================
!!!!! 5.物件的屬性和值 !!!!!
==========================
*/

let family = {
  isFamily: true,
  motherName: Jane,
  fatherName: Bill,
  daughterName: Rosa,
  sonName: Howard,
  dogsName: ["Bobo", "Koko"],
};
