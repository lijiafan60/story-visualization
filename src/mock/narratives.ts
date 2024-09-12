// src/mock/narratives.ts
import { Narrative, EntityTypesEnum} from '@/mock/types';

export const mockNarratives: Narrative[] = [
  {
    id: "1",
    title: "邓振询的生平",
    description: "邓振询（1911-1972），中国共产党党员，革命家、外交家。",
    imageUrl: "/images/邓振询.jpg",
    events: [
      {
        id: "1-1",
        title: "邓振询出生",
        type: "生平",
        startDate: -1861920000000, // 1911年
        endDate: -1861920000000,
        location: {
          name: "湖南省长沙县",
          lat: 28.1980,
          lng: 113.0691
        },
        media: {
          url: "/images/1911年湖南省长沙县.jpg",
          caption: "邓振询出生地",
          credit: "历史档案馆"
        },
        description: "邓振询出生于湖南省长沙县。",
        relatedEntities: ["1-1", "1-2"]
      },
      {
        id: "1-2",
        title: "加入中国共产党",
        type: "政治生涯",
        startDate: -1199145600000, // 1932年
        endDate: -1199145600000,
        location: {
          name: "上海",
          lat: 31.2304,
          lng: 121.4737
        },
        media: {
          url: "/images/中国共产党党徽.png",
          caption: "中国共产党党徽",
          credit: "中国共产党"
        },
        description: "邓振询在上海加入中国共产党。",
        relatedEntities: ["1-1", "1-3"]
      },
      {
        id: "1-3",
        title: "担任外交部副部长",
        type: "职业生涯",
        startDate: -536457600000, // 1953年
        endDate: -220924800000, // 1963年
        location: {
          name: "北京",
          lat: 39.9042,
          lng: 116.4074
        },
        media: {
          url: "",
          caption: "中国外交部大楼",
          credit: "中国外交部"
        },
        description: "邓振询担任中华人民共和国外交部副部长。",
        relatedEntities: ["1-1", "1-4"]
      }
    ],
    entities: [
      {
        id: "1-1",
        name: "邓振询",
        type: EntityTypesEnum.Person
      },
      {
        id: "1-2",
        name: "湖南省长沙县",
        type: EntityTypesEnum.Location
      },
      {
        id: "1-3",
        name: "中国共产党",
        type: EntityTypesEnum.Organization
      },
      {
        id: "1-4",
        name: "中华人民共和国外交部",
        type: EntityTypesEnum.Organization
      }
    ]
  },
  {
    id: "2",
    title: "徐楚光的艺术人生",
    description: "徐楚光（1931-2019），中国著名画家、美术教育家。",
    imageUrl: "/images/徐楚光.jpg",
    events: [
      {
        id: "2-1",
        title: "徐楚光出生",
        type: "生平",
        startDate: -1230768000000, // 1931年
        endDate: -1230768000000,
        location: {
          name: "江苏省南京市",
          lat: 32.0603,
          lng: 118.7969
        },
        media: {
          url: "/images/1930年代的南京.jpg",
          caption: "1930年代的南京",
          credit: "历史档案馆"
        },
        description: "徐楚光出生于江苏省南京市。",
        relatedEntities: ["2-1", "2-2"]
      },
      {
        id: "2-2",
        title: "进入中央美术学院学习",
        type: "教育经历",
        startDate: -615254400000, // 1950年
        endDate: -457056000000, // 1955年
        location: {
          name: "北京",
          lat: 39.9042,
          lng: 116.4074
        },
        media: {
          url: "/images/中央美术学院.jpg",
          caption: "中央美术学院",
          credit: "中央美术学院官网"
        },
        description: "徐楚光进入中央美术学院学习油画。",
        relatedEntities: ["2-1", "2-3"]
      },
      {
        id: "2-3",
        title: "创作《春到北大荒》",
        type: "艺术创作",
        startDate: 31536000000, // 1971年
        endDate: 31536000000,
        location: {
          name: "黑龙江",
          lat: 47.1216,
          lng: 126.6422
        },
        media: {
          url: "",
          caption: "《春到北大荒》",
          credit: "徐楚光"
        },
        description: "徐楚光创作了著名油画《春到北大荒》。",
        relatedEntities: ["2-1", "2-4"]
      }
    ],
    entities: [
      {
        id: "2-1",
        name: "徐楚光",
        type: EntityTypesEnum.Person
      },
      {
        id: "2-2",
        name: "南京",
        type: EntityTypesEnum.Location
      },
      {
        id: "2-3",
        name: "中央美术学院",
        type: EntityTypesEnum.Organization
      },
      {
        id: "2-4",
        name: "《春到北大荒》",
        type: EntityTypesEnum.Work
      }
    ]
  },
  {
    id: "3",
    title: "洪灵菲的革命生涯",
    description: "洪灵菲（1902-1934），原名洪树森，中国作家、革命家。",
    imageUrl: "/images/洪灵菲.jpg",
    events: [
      {
        id: "3-1",
        title: "洪灵菲出生",
        type: "生平",
        startDate: -2145916800000, // 1902年
        endDate: -2145916800000,
        location: {
          name: "广东省潮安县",
          lat: 23.4682,
          lng: 116.6780
        },
        media: {
          url: "/images/广东省潮安县.jpg",
          caption: "广东省潮安县",
          credit: "百度百科"
        },
        description: "洪灵菲出生于广东省潮安县的一个贫苦农民家庭。",
        relatedEntities: ["3-1", "3-2"]
      },
      {
        id: "3-2",
        title: "加入中国共产党",
        type: "政治生涯",
        startDate: -1441584000000, // 1924年
        endDate: -1441584000000,
        location: {
          name: "广州",
          lat: 23.1291,
          lng: 113.2644
        },
        media: {
          url: "/images/中国共产党党徽.png",
          caption: "中国共产党党徽",
          credit: "百度百科"
        },
        description: "洪灵菲在广州加入中国共产党。",
        relatedEntities: ["3-1", "3-3"]
      },
      {
        id: "3-3",
        title: "创作小说《铁流》",
        type: "文学创作",
        startDate: -1157328000000, // 1933年
        endDate: -1157328000000,
        location: {
          name: "上海",
          lat: 31.2304,
          lng: 121.4737
        },
        media: {
          url: "",
          caption: "1930年代的上海",
          credit: "百度百科"
        },
        description: "洪灵菲创作了革命小说《铁流》，描绘了工人运动。",
        relatedEntities: ["3-1", "3-4"]
      }
    ],
    entities: [
      {
        id: "3-1",
        name: "洪灵菲",
        type: EntityTypesEnum.Person
      },
      {
        id: "3-2",
        name: "广东省潮安县",
        type: EntityTypesEnum.Location
      },
      {
        id: "3-3",
        name: "中国共产党",
        type: EntityTypesEnum.Organization
      },
      {
        id: "3-4",
        name: "《铁流》",
        type: EntityTypesEnum.Work
      }
    ]
  },
  {
    id: "4",
    title: "李耘生的艺术人生",
    description: "李耘生（1937-2021），中国著名画家，擅长中国画。",
    imageUrl: "/images/李耘生.jpg",
    events: [
      {
        id: "4-1",
        title: "李耘生出生",
        type: "生平",
        startDate: -1041379200000, // 1937年
        endDate: -1041379200000,
        location: {
          name: "江苏省南通市",
          lat: 31.9800,
          lng: 120.8944
        },
        media: {
          url: "/images/南通.jpg",
          caption: "南通市",
          credit: "百度百科"
        },
        description: "李耘生出生于江苏省南通市。",
        relatedEntities: ["4-1", "4-2"]
      },
      {
        id: "4-2",
        title: "进入中央美术学院",
        type: "教育经历",
        startDate: -362880000000, // 1958年
        endDate: -362880000000,
        location: {
          name: "北京",
          lat: 39.9042,
          lng: 116.4074
        },
        media: {
          url: "/images/中央美术学院.jpg",
          caption: "中央美术学院",
          credit: "百度百科"
        },
        description: "李耘生进入中央美术学院国画系学习。",
        relatedEntities: ["4-1", "4-3"]
      },
      {
        id: "4-3",
        title: "创作《长城》",
        type: "艺术创作",
        startDate: 631152000000, // 1990年
        endDate: 631152000000,
        location: {
          name: "北京",
          lat: 39.9042,
          lng: 116.4074
        },
        media: {
          url: "",
          caption: "李耘生作品",
          credit: "百度百科"
        },
        description: "李耘生创作了著名国画作品《长城》。",
        relatedEntities: ["4-1", "4-4"]
      }
    ],
    entities: [
      {
        id: "4-1",
        name: "李耘生",
        type: EntityTypesEnum.Person
      },
      {
        id: "4-2",
        name: "南通",
        type: EntityTypesEnum.Location
      },
      {
        id: "4-3",
        name: "中央美术学院",
        type: EntityTypesEnum.Organization
      },
      {
        id: "4-4",
        name: "《长城》",
        type: EntityTypesEnum.Work
      }
    ]
  },
  {
    id: "5",
    title: "孙津川的军旅生涯",
    description: "孙津川（1915-1976），中国人民解放军高级将领。",
    imageUrl: "/images/孙津川.jpg",
    events: [
      {
        id: "5-1",
        title: "孙津川出生",
        type: "生平",
        startDate: -1735689600000, // 1915年
        endDate: -1735689600000,
        location: {
          name: "山东省蓬莱县",
          lat: 37.8107,
          lng: 120.7589
        },
        media: {
          url: "/images/蓬莱县.webp",
          caption: "蓬莱县",
          credit: "百度百科"
        },
        description: "孙津川出生于山东省蓬莱县。",
        relatedEntities: ["5-1", "5-2"]
      },
      {
        id: "5-2",
        title: "参加八路军",
        type: "军旅生涯",
        startDate: -1009843200000, // 1938年
        endDate: -1009843200000,
        location: {
          name: "山东",
          lat: 36.6512,
          lng: 117.1201
        },
        media: {
          url: "",
          caption: "八路军",
          credit: "百度百科"
        },
        description: "孙津川参加八路军，开始了他的军旅生涯。",
        relatedEntities: ["5-1", "5-3"]
      },
      {
        id: "5-3",
        title: "担任第四野战军第四十一军军长",
        type: "军旅生涯",
        startDate: -694224000000, // 1948年
        endDate: -694224000000,
        location: {
          name: "中国",
          lat: 35.8617,
          lng: 104.1954
        },
        media: {
          url: "",
          caption: "中国人民解放军",
          credit: "百度百科"
        },
        description: "孙津川被任命为第四野战军第四十一军军长。",
        relatedEntities: ["5-1", "5-4"]
      }
    ],
    entities: [
      {
        id: "5-1",
        name: "孙津川",
        type: EntityTypesEnum.Person
      },
      {
        id: "5-2",
        name: "蓬莱县",
        type: EntityTypesEnum.Location
      },
      {
        id: "5-3",
        name: "八路军",
        type: EntityTypesEnum.Organization
      },
      {
        id: "5-4",
        name: "中国人民解放军",
        type: EntityTypesEnum.Organization
      }
    ]
  }
];
