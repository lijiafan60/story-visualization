import { Narrative, EntityTypesEnum, EventTypesEnum } from '@/mock/types'

export const mockNarratives: Narrative[] = [
  {
    id: '1',
    title: '雨花英烈',
    entities: [
      { id: '1', name: '便衣侦缉队', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '2',
        name: '紧急扩大会议（大纱帽巷10号）',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '3', name: '中共中央', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '4', name: '八七会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '5', name: '团江苏省委', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '6',
        name: '全体委员及上海市各区委负责人联席会议',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '7', name: '中共宜兴县委', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '8', name: '秋收暴动', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '9', name: '中国共产党', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '10', name: '第六次全国代表大会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '11',
        name: '中共萧县县委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '12', name: '第一届委员会会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '13',
        name: '宿迁“小刀会”',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '14', name: '农民暴动', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '15', name: '长淮特委', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '16', name: '警察罢岗斗争', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '17',
        name: '梧州高中寒假服务团',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '18', name: '“火炬歌唱游行”', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '19',
        name: '越南独立同盟会',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '20',
        name: '越南民族解放同盟会成立大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '21', name: '北平市学联', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '22',
        name: '纪念“一·二八上海抗战四周年”大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '23', name: '牺盟会', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '24', name: '紧急会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '25',
        name: '新四军苏北指挥部',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '26', name: '反磨擦战役', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '27',
        name: '中共武汉区委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '28',
        name: '安源煤矿工人',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '29', name: '“五一”纪念会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '30', name: '南昌起义', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '31', name: '《大公报》', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '32', name: '“陕赈周”活动', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '33', name: '北洋政府', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '34', name: '五四运动', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '35',
        name: '西安师范学校',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '36', name: '联席会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '37',
        name: '中共党团组织',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '38',
        name: '反对英、日帝国主义的运动',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '39',
        name: '苏州学生联合会',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '40', name: '成立红军', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '41', name: '中共三大', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '42', name: '靖远起义', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '43', name: '甘肃大学堂', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '44',
        name: '陕甘宁边区民众剧团',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '45',
        name: '中央军校武汉分校',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '46', name: '开学典礼', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '47',
        name: '临时行动委员会',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '48', name: '对日作战', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '49', name: '第二次全国干部会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '50', name: '美国共产党', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '51', name: '反帝会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '52',
        name: '哈瓦那共产主义小组',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '53', name: '第一次代表大会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '54',
        name: '日本帝国主义',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '55', name: '九一八事变', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '56',
        name: '中共皖北(寿县)中心县委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '57', name: '书记联席会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '58',
        name: '湖南自修大学',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '59', name: '马克思主义讲演大会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '60', name: '县雪耻分会', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '61',
        name: '全城民众反对日本帝国主义示威大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '62', name: '韶山党支部', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '63', name: '平粜斗争', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '64', name: '英军水兵', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '65', name: '一六惨案', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '66',
        name: '徐州学生联合会',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '67',
        name: '丰、沛、肖、砀、邳、睢、铜、宿(迁)八县学生代表会议',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '68',
        name: '中共兴国区委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '69', name: '兴国暴动', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '70',
        name: '全国总工会苏区执行局',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '71',
        name: '闽、赣两省工人代表大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '72',
        name: '中共中央政治局',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '73', name: '遵义会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '74', name: '中央政治局', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '75', name: '沙窝会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '76', name: '皖南动委会', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '77',
        name: '各界抗敌组织负责人会议',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '78', name: '茂林青抗会', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '79',
        name: '茂林乡呼吁团结制止内战民众大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '80',
        name: '国民党顽固派',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '81', name: '横山事件', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '82', name: '皖南事变', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '83',
        name: '国民党“忠义救国军”',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '84', name: '李山战斗', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '85',
        name: '中共中央华中局',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '86',
        name: '阜宁县单家港第一次扩大会议',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '87',
        name: '新四军十六旅',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '88', name: '葛家桥伏击战', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '89',
        name: '金丹武各界士绅代表会议',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '90', name: '苏皖区党委', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '91', name: '减租减息运动', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '92',
        name: '国民革命军第三军',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '93', name: '阳江城军民联欢会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '94',
        name: '萍乡县各界团体',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '95', name: '萍乡市民大会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '96', name: '国民政府', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '97', name: '庐山中央政治会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '98', name: '新四军一旅', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '99', name: '联席扩大会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '100',
        name: '苏浙皖挺进军',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '101',
        name: '天目山第一次反顽战役',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '102',
        name: '中共中央华东局党校',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '103',
        name: '中共中央华东局党校第一期开学典礼',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '104',
        name: '郑州第二次京汉铁路各基层工会负责人会议',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '105', name: '夏县', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '106',
        name: '反对征收房屋税大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '107', name: '沙河县委', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '108', name: '抗日救亡活动', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '109', name: '战地服务团', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '110', name: '台儿庄大战', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '111', name: '军民联欢会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '112', name: '第三十军', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '113', name: '随枣会战', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '114', name: '竹沟惨案', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '115', name: '福建军政府', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '116',
        name: '福建临时省委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '117', name: '崇安县委', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '118', name: '群众大会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '119', name: '刘集村', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '120',
        name: '广饶县农会成立大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '121',
        name: '中国社会主义青年团济南地方组织',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '122', name: '成立大会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '123', name: '青岛团地委', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '124', name: '全体支部代表会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '125',
        name: '国民党宿县临时党部',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '126', name: '全县国民党员大会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '127',
        name: '中共豫陕区委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '128',
        name: '河南省红枪会代表联席会议',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '129',
        name: '中共长淮特委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '130', name: '扩大会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '131',
        name: '广郎宣苏维埃准备委员会',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '132', name: '土地革命运动', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '133', name: '芜湖学联', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '134', name: '各界会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '135', name: '江南秋收起义', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '136', name: '第七十三团', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '137',
        name: '攻打上蔡敌十二旅的作战',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '138', name: '红四军', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '139', name: '黄洋界保卫战', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '140',
        name: '中共永兴县党组织',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '141', name: '农民武装起义', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '142', name: '红五军团', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '143', name: '水口战役', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '144', name: '红一方面军', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '145',
        name: '第四次反“围剿”作战',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '146', name: '会理会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '147', name: '两河口会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '148',
        name: '中共中央西北局',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '149', name: '岷州会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '150',
        name: '八路军第一一五师',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '151', name: '平型关战役', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '152',
        name: '单级师范学校',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '153', name: '罢课', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '154', name: '黎平会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '155', name: '红二军团', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '156', name: '香枫溪会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '157', name: '保定军校', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '158', name: '东征军', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '159',
        name: '追悼孙中山及阵亡将士大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '160',
        name: '凤阳县党组织',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '161', name: '全县党员代表大会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '162', name: '直系军阀', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '163', name: '军事会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '164',
        name: '国民党蒋介石集团',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '165',
        name: '国民党五届七中全会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '166',
        name: '国民党福建第一行政区督察公署',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '167',
        name: '清剿闽东散匪谈话会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '168',
        name: '中共福建省委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '169', name: '牛栏前会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '170',
        name: '泉州国立海疆专科学校',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '171',
        name: '世界反帝大同盟',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '172', name: '代表大会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '173', name: '句容商界', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '174', name: '慰军行动', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '175',
        name: '潜山工农革命军',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '176', name: '联席军事会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '177', name: '日军', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '178', name: '江都仙女庙镇惨案', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '179', name: '红四师', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '180',
        name: '联合公审邱国忠大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '181',
        name: '中共东江特委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '182', name: '东江特委', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '183',
        name: '湘鄂赣边境特委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '184', name: '湘鄂赣特委', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '185',
        name: '第二届第二次执委会议',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '186',
        name: '红五军第五纵队',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '187', name: '武装示威', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '188',
        name: '中共红军第五军军委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '189', name: '总前委', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '190', name: '株洲会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '191',
        name: '冯案审判委员会',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '192',
        name: '会审冯翊清父子大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '193',
        name: '中共苏皖区党委',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '194',
        name: '长辛店劳动补习学校',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      {
        id: '195',
        name: '长辛店劳动补习学校成立大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '196', name: '英帝国主义', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      {
        id: '197',
        name: '开滦五矿工人大罢工',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '198',
        name: '贵州法政专门学校学生代表团',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '199', name: '贵州各校代表会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '200', name: '段祺瑞政府', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '201', name: '留日学生代表大会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '202',
        name: '昆明各界人士',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '203', name: '国民大会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '204',
        name: '团大连特别支部',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '205', name: '美国', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '206', name: '太平洋会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '207', name: '邓演达', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '208', name: '孙中山逝世追悼会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '209', name: '蒋介石', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '210', name: '反革命暴乱', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '211', name: '邓振询', desc: '', type: EntityTypesEnum.Person, relation: '' },
      {
        id: '212',
        name: '横山山南地区各县人士代表会议',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '213', name: '项英', desc: '', type: EntityTypesEnum.Person, relation: '' },
      {
        id: '214',
        name: '汉阳钢铁厂罢工斗争',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '215', name: '富田事变', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '216', name: '毛泽东', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '217', name: '洛川会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '218',
        name: '新四军全军（江北第四支队未参加）营以上干部会议',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '219', name: '秋收起义', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '220', name: '孟琇焘', desc: '', type: EntityTypesEnum.Person, relation: '' },
      {
        id: '221',
        name: '反对蒋介石暴政的斗争',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '222', name: '邓中夏', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '223', name: '太平洋劳动会议', desc: '', type: EntityTypesEnum.Event, relation: '' },
      {
        id: '224',
        name: '总前委和江西省行委联席会议',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      {
        id: '225',
        name: '第三次太平洋劳动大会',
        desc: '',
        type: EntityTypesEnum.Event,
        relation: ''
      },
      { id: '226', name: '岳北农工会', desc: '', type: EntityTypesEnum.Event, relation: '' },
      { id: '227', name: '汉斯·希伯', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '228', name: '反动当局', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '229', name: '王新义', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '230', name: '日寇', desc: '', type: EntityTypesEnum.Organization, relation: '' },
      { id: '231', name: '罗忠毅', desc: '', type: EntityTypesEnum.Person, relation: '' },
      {
        id: '232',
        name: '国民党第三战区长官司令部直属联络站',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '233', name: '周璧', desc: '', type: EntityTypesEnum.Person, relation: '' },
      {
        id: '234',
        name: '三元梅列集中营',
        desc: '',
        type: EntityTypesEnum.Organization,
        relation: ''
      },
      { id: '235', name: '卢懋榘', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '236', name: '张东皎', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '237', name: '梁占胜', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '238', name: '秦明', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '239', name: '马鸿逵', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '240', name: '川丰', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '241', name: '孙晓梅', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '242', name: '陈良义', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '243', name: '何禹图', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '244', name: '陈子涛', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '245', name: '《步兵操典》', desc: '', type: EntityTypesEnum.Document, relation: '' },
      { id: '246', name: '郭松龄', desc: '', type: EntityTypesEnum.Person, relation: '' },
      {
        id: '247',
        name: '反对战争主张和平、讨伐张作霖',
        desc: '',
        type: EntityTypesEnum.Document,
        relation: ''
      },
      { id: '248', name: '《唯物史观》', desc: '', type: EntityTypesEnum.Document, relation: '' },
      {
        id: '249',
        name: '《南京钦定的国民会议和我们所要求的国民会议》',
        desc: '',
        type: EntityTypesEnum.Document,
        relation: ''
      },
      { id: '250', name: '吴亚鲁', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '251', name: '《平民声》', desc: '', type: EntityTypesEnum.Document, relation: '' },
      { id: '252', name: '秦孟芳', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '253', name: '《忆灵菲》', desc: '', type: EntityTypesEnum.Document, relation: '' },
      { id: '254', name: '朱德', desc: '', type: EntityTypesEnum.Person, relation: '' },
      {
        id: '255',
        name: '《岷(州)洮(州)西(固)战役计划》',
        desc: '',
        type: EntityTypesEnum.Document,
        relation: ''
      },
      { id: '256', name: '金佛庄', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '257', name: '《论婚姻问题》', desc: '', type: EntityTypesEnum.Document, relation: '' },
      { id: '258', name: '胡文虎', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '259', name: '《星洲日报》', desc: '', type: EntityTypesEnum.Document, relation: '' },
      { id: '260', name: '《星华日报》', desc: '', type: EntityTypesEnum.Document, relation: '' },
      { id: '261', name: '谭震林', desc: '', type: EntityTypesEnum.Person, relation: '' },
      {
        id: '262',
        name: '《目前国际政治形势和自卫会的意义与任务》',
        desc: '',
        type: EntityTypesEnum.Document,
        relation: ''
      },
      { id: '263', name: '斯诺', desc: '', type: EntityTypesEnum.Person, relation: '' },
      { id: '264', name: '《毛泽东自传》', desc: '', type: EntityTypesEnum.Document, relation: '' },
      { id: '265', name: '《仁学》', desc: '', type: EntityTypesEnum.Document, relation: '' },
      { id: '266', name: '《创刊的使命》', desc: '', type: EntityTypesEnum.Document, relation: '' },
      {
        id: '267',
        name: '《为坚持江南敌后抗战之纲领》',
        desc: '',
        type: EntityTypesEnum.Document,
        relation: ''
      }
    ],
    events: [
      {
        id: '1',
        title: '便衣侦缉队破坏紧急扩大会议（大纱帽巷10号）',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '04', day: '11' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '南京', lat: 32.0603, lng: 118.7969 },
        media: '',
        relatedEntities: ['便衣侦缉队', '紧急扩大会议（大纱帽巷10号）']
      },
      {
        id: '2',
        title: '中共中央召开八七会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '08', day: '07' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '汉口', lat: 30.6197, lng: 114.2831 },
        media: '',
        relatedEntities: ['中共中央', '八七会议']
      },
      {
        id: '3',
        title: '团江苏省委召开全体委员及上海市各区委负责人联席会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '09', day: '16' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '上海', lat: 31.2304, lng: 121.4737 },
        media: '',
        relatedEntities: ['团江苏省委', '全体委员及上海市各区委负责人联席会议']
      },
      {
        id: '4',
        title: '中共宜兴县委发动秋收暴动',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '11', day: '01' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '宜兴', lat: 31.3406, lng: 119.823 },
        media: '',
        relatedEntities: ['中共宜兴县委', '秋收暴动']
      },
      {
        id: '5',
        title: '中国共产党召开第六次全国代表大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1928', month: '06', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '莫斯科', lat: 55.7558, lng: 37.6173 },
        media: '',
        relatedEntities: ['中国共产党', '第六次全国代表大会']
      },
      {
        id: '6',
        title: '中共萧县县委召开第一届委员会会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1928', month: '06', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '安徽', lat: 31.8612, lng: 117.2857 },
        media: '',
        relatedEntities: ['中共萧县县委', '第一届委员会会议']
      },
      {
        id: '7',
        title: '宿迁“小刀会”发动农民暴动',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1929', month: '02', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '宿迁', lat: 33.9619, lng: 118.2755 },
        media: '',
        relatedEntities: ['宿迁“小刀会”', '农民暴动']
      },
      {
        id: '8',
        title: '长淮特委发动警察罢岗斗争',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1930', month: '09', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '蚌埠', lat: 32.9163, lng: 117.3893 },
        media: '',
        relatedEntities: ['长淮特委', '警察罢岗斗争']
      },
      {
        id: '9',
        title: '梧州高中寒假服务团发动“火炬歌唱游行”',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1938', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '玉林', lat: 22.6545, lng: 110.1809 },
        media: '',
        relatedEntities: ['梧州高中寒假服务团', '“火炬歌唱游行”']
      },
      {
        id: '10',
        title: '越南独立同盟会召开越南民族解放同盟会成立大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1941', month: '04', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '靖西', lat: 23.1344, lng: 106.4175 },
        media: '',
        relatedEntities: ['越南独立同盟会', '越南民族解放同盟会成立大会']
      },
      {
        id: '11',
        title: '北平市学联召开纪念“一·二八上海抗战四周年”大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1936', month: '01', day: '28' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '北京', lat: 39.9042, lng: 116.4074 },
        media: '',
        relatedEntities: ['北平市学联', '纪念“一·二八上海抗战四周年”大会']
      },
      {
        id: '12',
        title: '牺盟会召开紧急会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1937', month: '07', day: '08' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '太原', lat: 37.8706, lng: 112.5489 },
        media: '',
        relatedEntities: ['牺盟会', '紧急会议']
      },
      {
        id: '13',
        title: '新四军苏北指挥部取胜反磨擦战役',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1940', month: '10', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '泰兴', lat: 32.1719, lng: 120.0516 },
        media: '',
        relatedEntities: ['新四军苏北指挥部', '反磨擦战役']
      },
      {
        id: '14',
        title: '中共武汉区委召开紧急会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1923', month: '02', day: '02' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '武汉', lat: 30.5928, lng: 114.3055 },
        media: '',
        relatedEntities: ['中共武汉区委', '紧急会议']
      },
      {
        id: '15',
        title: '安源煤矿工人召开“五一”纪念会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1924', month: '05', day: '01' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '安源', lat: 27.6256, lng: 113.8707 },
        media: '',
        relatedEntities: ['安源煤矿工人', '“五一”纪念会']
      },
      {
        id: '16',
        title: '中共中央发动南昌起义',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '08', day: '01' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '南昌', lat: 28.6829, lng: 115.8582 },
        media: '',
        relatedEntities: ['中共中央', '南昌起义']
      },
      {
        id: '17',
        title: '《大公报》筹划“陕赈周”活动',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1930', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '天津', lat: 39.3434, lng: 117.3616 },
        media: '',
        relatedEntities: ['《大公报》', '“陕赈周”活动']
      },
      {
        id: '18',
        title: '北洋政府引发五四运动',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1919', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '巴黎', lat: 48.8566, lng: 2.3522 },
        media: '',
        relatedEntities: ['北洋政府', '五四运动']
      },
      {
        id: '19',
        title: '西安师范学校召开联席会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1919', month: '05', day: '07' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '西安', lat: 34.3416, lng: 108.9398 },
        media: '',
        relatedEntities: ['西安师范学校', '联席会议']
      },
      {
        id: '20',
        title: '中共党团组织发动反对英、日帝国主义的运动',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '06', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '陕西', lat: 34.2655, lng: 108.9542 },
        media: '',
        relatedEntities: ['中共党团组织', '反对英、日帝国主义的运动']
      },
      {
        id: '21',
        title: '苏州学生联合会宣布成立红军',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1919', month: '05', day: '18' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '苏州', lat: 31.2989, lng: 120.5853 },
        media: '',
        relatedEntities: ['苏州学生联合会', '成立红军']
      },
      {
        id: '22',
        title: '中共中央召开中共三大',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1923', month: '06', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '广州', lat: 23.1291, lng: 113.2644 },
        media: '',
        relatedEntities: ['中共中央', '中共三大']
      },
      {
        id: '23',
        title: '中国共产党领导靖远起义',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1932', month: '05', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '白银', lat: 36.5448, lng: 104.1389 },
        media: '',
        relatedEntities: ['中国共产党', '靖远起义']
      },
      {
        id: '24',
        title: '甘肃大学堂成立',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1903', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '兰州', lat: 36.0611, lng: 103.8343 },
        media: '',
        relatedEntities: ['甘肃大学堂']
      },
      {
        id: '25',
        title: '陕甘宁边区民众剧团成立',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1938', month: '07', day: '04' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '延安', lat: 36.5853, lng: 109.4897 },
        media: '',
        relatedEntities: ['陕甘宁边区民众剧团']
      },
      {
        id: '26',
        title: '中央军校武汉分校召开开学典礼',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '02', day: '12' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '武昌', lat: 30.5465, lng: 114.3162 },
        media: '',
        relatedEntities: ['中央军校武汉分校', '开学典礼']
      },
      {
        id: '27',
        title: '临时行动委员会支持对日作战',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1933', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '察哈尔', lat: 41.0, lng: 113.0 },
        media: '',
        relatedEntities: ['临时行动委员会', '对日作战']
      },
      {
        id: '28',
        title: '临时行动委员会召开第二次全国干部会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1935', month: '11', day: '10' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '香港', lat: 22.3193, lng: 114.1694 },
        media: '',
        relatedEntities: ['临时行动委员会', '第二次全国干部会议']
      },
      {
        id: '29',
        title: '美国共产党召开反帝会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1926', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '旧金山', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['美国共产党', '反帝会议']
      },
      {
        id: '30',
        title: '哈瓦那共产主义小组召开第一次代表大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '08', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '古巴', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['哈瓦那共产主义小组', '第一次代表大会']
      },
      {
        id: '31',
        title: '日本帝国主义发动九一八事变',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1931', month: '09', day: '18' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '沈阳', lat: 41.8057, lng: 123.4315 },
        media: '',
        relatedEntities: ['日本帝国主义', '九一八事变']
      },
      {
        id: '32',
        title: '中共皖北(寿县)中心县委召开书记联席会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1932', month: '09', day: '09' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '淮南', lat: 32.6255, lng: 117.0186 },
        media: '',
        relatedEntities: ['中共皖北(寿县)中心县委', '书记联席会议']
      },
      {
        id: '33',
        title: '湖南自修大学召开马克思主义讲演大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1922', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '长沙', lat: 28.2278, lng: 112.9389 },
        media: '',
        relatedEntities: ['湖南自修大学', '马克思主义讲演大会']
      },
      {
        id: '34',
        title: '县雪耻分会召开全城民众反对日本帝国主义示威大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '12', day: '15' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '湘潭', lat: 27.8297, lng: 112.9441 },
        media: '',
        relatedEntities: ['县雪耻分会', '全城民众反对日本帝国主义示威大会']
      },
      {
        id: '35',
        title: '韶山党支部发动平粜斗争',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '韶山', lat: 27.915, lng: 112.5287 },
        media: '',
        relatedEntities: ['韶山党支部', '平粜斗争']
      },
      {
        id: '36',
        title: '英军水兵制造一六惨案',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '01', day: '06' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '九江', lat: 29.7051, lng: 116.0019 },
        media: '',
        relatedEntities: ['英军水兵', '一六惨案']
      },
      {
        id: '37',
        title: '徐州学生联合会召开丰、沛、肖、砀、邳、睢、铜、宿(迁)八县学生代表会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1919', month: '07', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '徐州', lat: 34.2058, lng: 117.2841 },
        media: '',
        relatedEntities: ['徐州学生联合会', '丰、沛、肖、砀、邳、睢、铜、宿(迁)八县学生代表会议']
      },
      {
        id: '38',
        title: '中共兴国区委发动兴国暴动',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1928', month: '10', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '赣州', lat: 25.8311, lng: 114.935 },
        media: '',
        relatedEntities: ['中共兴国区委', '兴国暴动']
      },
      {
        id: '39',
        title: '全国总工会苏区执行局召开闽、赣两省工人代表大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1932', month: '02', day: '07' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '瑞金', lat: 25.8856, lng: 116.0271 },
        media: '',
        relatedEntities: ['全国总工会苏区执行局', '闽、赣两省工人代表大会']
      },
      {
        id: '40',
        title: '中共中央政治局召开遵义会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1935', month: '01', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '遵义', lat: 27.7052, lng: 106.9336 },
        media: '',
        relatedEntities: ['中共中央政治局', '遵义会议']
      },
      {
        id: '41',
        title: '中央政治局召开沙窝会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1935', month: '08', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '沙窝', lat: 34.7, lng: 113.6 },
        media: '',
        relatedEntities: ['中央政治局', '沙窝会议']
      },
      {
        id: '42',
        title: '皖南动委会召开各界抗敌组织负责人会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1939', month: '02', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '黄山', lat: 29.7147, lng: 118.3376 },
        media: '',
        relatedEntities: ['皖南动委会', '各界抗敌组织负责人会议']
      },
      {
        id: '43',
        title: '茂林青抗会召开茂林乡呼吁团结制止内战民众大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1939', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '茂林', lat: 30.68, lng: 118.54 },
        media: '',
        relatedEntities: ['茂林青抗会', '茂林乡呼吁团结制止内战民众大会']
      },
      {
        id: '44',
        title: '国民党顽固派制造横山事件',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1940', month: '07', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '衡山', lat: 27.254, lng: 112.861 },
        media: '',
        relatedEntities: ['国民党顽固派', '横山事件']
      },
      {
        id: '45',
        title: '国民党顽固派发动皖南事变',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1941', month: '01', day: '06' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '皖南', lat: 30.3, lng: 118.0 },
        media: '',
        relatedEntities: ['国民党顽固派', '皖南事变']
      },
      {
        id: '46',
        title: '国民党“忠义救国军”参加李山战斗',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1941', month: '02', day: '17' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '太漏', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['国民党“忠义救国军”', '李山战斗']
      },
      {
        id: '47',
        title: '中共中央华中局召开阜宁县单家港第一次扩大会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1942', month: '01', day: '20' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '盐城', lat: 33.3478, lng: 120.1636 },
        media: '',
        relatedEntities: ['中共中央华中局', '阜宁县单家港第一次扩大会议']
      },
      {
        id: '48',
        title: '新四军十六旅领导葛家桥伏击战',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1942', month: '07', day: '26' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '海安', lat: 32.5403, lng: 120.465 },
        media: '',
        relatedEntities: ['新四军十六旅', '葛家桥伏击战']
      },
      {
        id: '49',
        title: '新四军十六旅召开金丹武各界士绅代表会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1942', month: '09', day: '20' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '金丹武', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['新四军十六旅', '金丹武各界士绅代表会议']
      },
      {
        id: '50',
        title: '苏皖区党委发动减租减息运动',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1942', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '苏南', lat: 31.5, lng: 120.5 },
        media: '',
        relatedEntities: ['苏皖区党委', '减租减息运动']
      },
      {
        id: '51',
        title: '国民革命军第三军召开阳江城军民联欢会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '11', day: '08' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '阳江', lat: 21.8583, lng: 111.9822 },
        media: '',
        relatedEntities: ['国民革命军第三军', '阳江城军民联欢会']
      },
      {
        id: '52',
        title: '萍乡县各界团体召开萍乡市民大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1926', month: '09', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '萍乡', lat: 27.6229, lng: 113.8542 },
        media: '',
        relatedEntities: ['萍乡县各界团体', '萍乡市民大会']
      },
      {
        id: '53',
        title: '国民政府召开庐山中央政治会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1926', month: '12', day: '04' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '庐山', lat: 29.5586, lng: 115.9999 },
        media: '',
        relatedEntities: ['国民政府', '庐山中央政治会议']
      },
      {
        id: '54',
        title: '新四军一旅召开联席扩大会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1942', month: '09', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '如皋', lat: 32.3716, lng: 120.5633 },
        media: '',
        relatedEntities: ['新四军一旅', '联席扩大会议']
      },
      {
        id: '55',
        title: '苏浙皖挺进军发动天目山第一次反顽战役',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1945', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '杭州', lat: 30.2741, lng: 120.1551 },
        media: '',
        relatedEntities: ['苏浙皖挺进军', '天目山第一次反顽战役']
      },
      {
        id: '56',
        title: '中共中央华东局党校召开中共中央华东局党校第一期开学典礼',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1946', month: '05', day: '04' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '临沂', lat: 35.1047, lng: 118.3564 },
        media: '',
        relatedEntities: ['中共中央华东局党校', '中共中央华东局党校第一期开学典礼']
      },
      {
        id: '57',
        title: '中国共产党召开郑州第二次京汉铁路各基层工会负责人会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1922', month: '04', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '郑州', lat: 34.7466, lng: 113.6254 },
        media: '',
        relatedEntities: ['中国共产党', '郑州第二次京汉铁路各基层工会负责人会议']
      },
      {
        id: '58',
        title: '夏县召开反对征收房屋税大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '运城', lat: 35.0263, lng: 111.0069 },
        media: '',
        relatedEntities: ['夏县', '反对征收房屋税大会']
      },
      {
        id: '59',
        title: '日本帝国主义发动九一八事变',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1931', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '北大营和沈阳', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['日本帝国主义', '九一八事变']
      },
      {
        id: '60',
        title: '沙河县委发动抗日救亡活动',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1931', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '邢台', lat: 37.0706, lng: 114.5049 },
        media: '',
        relatedEntities: ['沙河县委', '抗日救亡活动']
      },
      {
        id: '61',
        title: '战地服务团参加台儿庄大战',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1938', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '枣庄', lat: 34.8107, lng: 117.3237 },
        media: '',
        relatedEntities: ['战地服务团', '台儿庄大战']
      },
      {
        id: '62',
        title: '战地服务团召开军民联欢会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1938', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '信阳', lat: 32.1233, lng: 114.075 },
        media: '',
        relatedEntities: ['战地服务团', '军民联欢会']
      },
      {
        id: '63',
        title: '第三十军参加随枣会战',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1939', month: '05', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '随州', lat: 31.6901, lng: 113.3826 },
        media: '',
        relatedEntities: ['第三十军', '随枣会战']
      },
      {
        id: '64',
        title: '国民党顽固派制造竹沟惨案',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1939', month: '11', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '马店', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['国民党顽固派', '竹沟惨案']
      },
      {
        id: '65',
        title: '福建军政府成立',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '福州', lat: 26.0745, lng: 119.2965 },
        media: '',
        relatedEntities: ['福建军政府']
      },
      {
        id: '66',
        title: '福建临时省委召开紧急会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1928', month: '06', day: '24' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '厦门', lat: 24.4798, lng: 118.0894 },
        media: '',
        relatedEntities: ['福建临时省委', '紧急会议']
      },
      {
        id: '67',
        title: '崇安县委召开群众大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1929', month: '01', day: '18' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '崇安', lat: 31.575, lng: 120.3055 },
        media: '',
        relatedEntities: ['崇安县委', '群众大会']
      },
      {
        id: '68',
        title: '刘集村召开广饶县农会成立大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1926', month: '02', day: '27' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '东营', lat: 37.4346, lng: 118.6747 },
        media: '',
        relatedEntities: ['刘集村', '广饶县农会成立大会']
      },
      {
        id: '69',
        title: '中国社会主义青年团济南地方组织召开成立大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1922', month: '09', day: '16' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '济南', lat: 36.6512, lng: 117.1201 },
        media: '',
        relatedEntities: ['中国社会主义青年团济南地方组织', '成立大会']
      },
      {
        id: '70',
        title: '青岛团地委召开全体支部代表会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '06', day: '21' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '青岛', lat: 36.0671, lng: 120.3826 },
        media: '',
        relatedEntities: ['青岛团地委', '全体支部代表会议']
      },
      {
        id: '71',
        title: '国民党宿县临时党部召开全县国民党员大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '02', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '宿州', lat: 33.6461, lng: 116.9639 },
        media: '',
        relatedEntities: ['国民党宿县临时党部', '全县国民党员大会']
      },
      {
        id: '72',
        title: '中共豫陕区委召开河南省红枪会代表联席会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1926', month: '09', day: '18' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '河南', lat: 34.7466, lng: 113.6254 },
        media: '',
        relatedEntities: ['中共豫陕区委', '河南省红枪会代表联席会议']
      },
      {
        id: '73',
        title: '中共长淮特委召开扩大会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1932', month: '06', day: '05' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '合肥', lat: 31.8206, lng: 117.2272 },
        media: '',
        relatedEntities: ['中共长淮特委', '扩大会议']
      },
      {
        id: '74',
        title: '广郎宣苏维埃准备委员会发动土地革命运动',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1930', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '宣城', lat: 30.9457, lng: 118.756 },
        media: '',
        relatedEntities: ['广郎宣苏维埃准备委员会', '土地革命运动']
      },
      {
        id: '75',
        title: '芜湖学联召开各界会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '05', day: '19' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '芜湖', lat: 31.3525, lng: 118.4331 },
        media: '',
        relatedEntities: ['芜湖学联', '各界会议']
      },
      {
        id: '76',
        title: '中国共产党发动江南秋收起义',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '11', day: '01' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '无锡', lat: 31.4912, lng: 120.3119 },
        media: '',
        relatedEntities: ['中国共产党', '江南秋收起义']
      },
      {
        id: '77',
        title: '第七十三团参加攻打上蔡敌十二旅的作战',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '05', day: '14' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '驻马店', lat: 32.9802, lng: 114.0223 },
        media: '',
        relatedEntities: ['第七十三团', '攻打上蔡敌十二旅的作战']
      },
      {
        id: '78',
        title: '红四军参加黄洋界保卫战',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1928', month: '08', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '吉安', lat: 27.1138, lng: 114.993 },
        media: '',
        relatedEntities: ['红四军', '黄洋界保卫战']
      },
      {
        id: '79',
        title: '中共永兴县党组织领导农民武装起义',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1928', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '郴州', lat: 25.7705, lng: 113.0147 },
        media: '',
        relatedEntities: ['中共永兴县党组织', '农民武装起义']
      },
      {
        id: '80',
        title: '红五军团参加水口战役',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1932', month: '06', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '韶关', lat: 24.8104, lng: 113.5972 },
        media: '',
        relatedEntities: ['红五军团', '水口战役']
      },
      {
        id: '81',
        title: '红一方面军参加第四次反“围剿”作战',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1933', month: '02', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '抚州', lat: 27.948, lng: 116.3584 },
        media: '',
        relatedEntities: ['红一方面军', '第四次反“围剿”作战']
      },
      {
        id: '82',
        title: '中共中央召开会理会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1935', month: '05', day: '08' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '凉山彝族自治州', lat: 27.8816, lng: 102.267 },
        media: '',
        relatedEntities: ['中共中央', '会理会议']
      },
      {
        id: '83',
        title: '中共中央政治局召开两河口会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1935', month: '06', day: '26' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '赤水', lat: 28.59, lng: 105.698 },
        media: '',
        relatedEntities: ['中共中央政治局', '两河口会议']
      },
      {
        id: '84',
        title: '中央政治局召开沙窝会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1935', month: '08', day: '04' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '阿坝藏族羌族自治州', lat: 31.8994, lng: 102.2214 },
        media: '',
        relatedEntities: ['中央政治局', '沙窝会议']
      },
      {
        id: '85',
        title: '中共中央西北局召开岷州会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1935', month: '09', day: '16' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '定西', lat: 35.5807, lng: 104.6263 },
        media: '',
        relatedEntities: ['中共中央西北局', '岷州会议']
      },
      {
        id: '86',
        title: '八路军第一一五师取胜平型关战役',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1937', month: '10', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '大同', lat: 40.0768, lng: 113.3001 },
        media: '',
        relatedEntities: ['八路军第一一五师', '平型关战役']
      },
      {
        id: '87',
        title: '单级师范学校发动罢课',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1919', month: '05', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '潍坊', lat: 36.7069, lng: 119.1618 },
        media: '',
        relatedEntities: ['单级师范学校', '罢课']
      },
      {
        id: '88',
        title: '中央政治局召开黎平会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1934', month: '12', day: '18' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '黔东南苗族侗族自治州', lat: 26.5836, lng: 107.9775 },
        media: '',
        relatedEntities: ['中央政治局', '黎平会议']
      },
      {
        id: '89',
        title: '红二军团召开香枫溪会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1934', month: '06', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '铜仁', lat: 27.7183, lng: 109.1916 },
        media: '',
        relatedEntities: ['红二军团', '香枫溪会议']
      },
      {
        id: '90',
        title: '保定军校召开开学典礼',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1919', month: '08', day: '08' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '保定', lat: 38.8745, lng: 115.4648 },
        media: '',
        relatedEntities: ['保定军校', '开学典礼']
      },
      {
        id: '91',
        title: '东征军召开追悼孙中山及阵亡将士大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '03', day: '30' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '梅州', lat: 24.2991, lng: 116.1226 },
        media: '',
        relatedEntities: ['东征军', '追悼孙中山及阵亡将士大会']
      },
      {
        id: '92',
        title: '凤阳县党组织召开全县党员代表大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1928', month: '12', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '滁州', lat: 32.3018, lng: 118.3162 },
        media: '',
        relatedEntities: ['凤阳县党组织', '全县党员代表大会']
      },
      {
        id: '93',
        title: '直系军阀召开军事会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1923', month: '03', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '洛阳', lat: 34.6197, lng: 112.454 },
        media: '',
        relatedEntities: ['直系军阀', '军事会议']
      },
      {
        id: '94',
        title: '国民党蒋介石集团召开国民党五届七中全会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1940', month: '07', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '重庆', lat: 29.563, lng: 106.5516 },
        media: '',
        relatedEntities: ['国民党蒋介石集团', '国民党五届七中全会']
      },
      {
        id: '95',
        title: '国民党福建第一行政区督察公署召开清剿闽东散匪谈话会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1940', month: '10', day: '03' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '宁德', lat: 26.6657, lng: 119.5479 },
        media: '',
        relatedEntities: ['国民党福建第一行政区督察公署', '清剿闽东散匪谈话会']
      },
      {
        id: '96',
        title: '中共福建省委召开牛栏前会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1941', month: '10', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '南平', lat: 26.6415, lng: 118.1785 },
        media: '',
        relatedEntities: ['中共福建省委', '牛栏前会议']
      },
      {
        id: '97',
        title: '泉州国立海疆专科学校发动罢课',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1947', month: '06', day: '03' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '泉州', lat: 24.8741, lng: 118.6757 },
        media: '',
        relatedEntities: ['泉州国立海疆专科学校', '罢课']
      },
      {
        id: '98',
        title: '世界反帝大同盟召开代表大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1928', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '柏林', lat: 52.52, lng: 13.405 },
        media: '',
        relatedEntities: ['世界反帝大同盟', '代表大会']
      },
      {
        id: '99',
        title: '句容商界发动慰军行动',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '镇江', lat: 32.2044, lng: 119.4528 },
        media: '',
        relatedEntities: ['句容商界', '慰军行动']
      },
      {
        id: '100',
        title: '潜山工农革命军召开联席军事会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1930', month: '04', day: '08' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '六安', lat: 31.7337, lng: 116.5219 },
        media: '',
        relatedEntities: ['潜山工农革命军', '联席军事会议']
      },
      {
        id: '101',
        title: '日军制造江都仙女庙镇惨案',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1937', month: '12', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '扬州', lat: 32.3936, lng: 119.4127 },
        media: '',
        relatedEntities: ['日军', '江都仙女庙镇惨案']
      },
      {
        id: '102',
        title: '红四师召开联合公审邱国忠大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1928', month: '01', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '河源', lat: 23.7463, lng: 114.7004 },
        media: '',
        relatedEntities: ['红四师', '联合公审邱国忠大会']
      },
      {
        id: '103',
        title: '中共东江特委召开群众大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1928', month: '01', day: '05' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '汕尾', lat: 22.7857, lng: 115.3753 },
        media: '',
        relatedEntities: ['中共东江特委', '群众大会']
      },
      {
        id: '104',
        title: '东江特委召开联席会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1928', month: '04', day: '05' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '揭阳', lat: 23.5499, lng: 116.3727 },
        media: '',
        relatedEntities: ['东江特委', '联席会议']
      },
      {
        id: '105',
        title: '湘鄂赣边境特委召开扩大会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1929', month: '09', day: '02' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '岳阳', lat: 29.3703, lng: 113.134 },
        media: '',
        relatedEntities: ['湘鄂赣边境特委', '扩大会议']
      },
      {
        id: '106',
        title: '湘鄂赣特委召开第二届第二次执委会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1929', month: '12', day: '10' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '宜春', lat: 27.8043, lng: 114.383 },
        media: '',
        relatedEntities: ['湘鄂赣特委', '第二届第二次执委会议']
      },
      {
        id: '107',
        title: '红五军第五纵队发动武装示威',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1930', month: '03', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '咸宁', lat: 29.8414, lng: 114.3225 },
        media: '',
        relatedEntities: ['红五军第五纵队', '武装示威']
      },
      {
        id: '108',
        title: '中共红军第五军军委召开扩大会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1930', month: '06', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '黄石', lat: 30.2011, lng: 115.0389 },
        media: '',
        relatedEntities: ['中共红军第五军军委', '扩大会议']
      },
      {
        id: '109',
        title: '总前委召开株洲会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1930', month: '09', day: '13' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '株洲', lat: 27.8274, lng: 113.134 },
        media: '',
        relatedEntities: ['总前委', '株洲会议']
      },
      {
        id: '110',
        title: '冯案审判委员会召开会审冯翊清父子大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1937', month: '05', day: '06' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '庆阳', lat: 35.7342, lng: 107.6384 },
        media: '',
        relatedEntities: ['冯案审判委员会', '会审冯翊清父子大会']
      },
      {
        id: '111',
        title: '中共苏皖区党委召开联席会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1940', month: '03', day: '08' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '常州', lat: 31.8107, lng: 119.9741 },
        media: '',
        relatedEntities: ['中共苏皖区党委', '联席会议']
      },
      {
        id: '112',
        title: '长辛店劳动补习学校召开长辛店劳动补习学校成立大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '长辛店', lat: 39.8546, lng: 116.258 },
        media: '',
        relatedEntities: ['长辛店劳动补习学校', '长辛店劳动补习学校成立大会']
      },
      {
        id: '113',
        title: '英帝国主义镇压开滦五矿工人大罢工',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '开滦', lat: 39.665, lng: 118.18 },
        media: '',
        relatedEntities: ['英帝国主义', '开滦五矿工人大罢工']
      },
      {
        id: '114',
        title: '贵州法政专门学校学生代表团召开贵州各校代表会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1919', month: '07', day: '05' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '贵阳', lat: 26.647, lng: 106.6302 },
        media: '',
        relatedEntities: ['贵州法政专门学校学生代表团', '贵州各校代表会议']
      },
      {
        id: '115',
        title: '段祺瑞政府召开留日学生代表大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1918', month: '05', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '东京', lat: 35.6762, lng: 139.6503 },
        media: '',
        relatedEntities: ['段祺瑞政府', '留日学生代表大会']
      },
      {
        id: '116',
        title: '昆明各界人士召开国民大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1919', month: '03', day: '06' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '昆明', lat: 25.0389, lng: 102.7183 },
        media: '',
        relatedEntities: ['昆明各界人士', '国民大会']
      },
      {
        id: '117',
        title: '团大连特别支部组织罢课',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '大连', lat: 38.914, lng: 121.6147 },
        media: '',
        relatedEntities: ['团大连特别支部', '罢课']
      },
      {
        id: '118',
        title: '美国召开太平洋会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1921', month: '11', day: '12' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '华盛顿', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['美国', '太平洋会议']
      },
      {
        id: '119',
        title: '邓演达组织孙中山逝世追悼会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1925', month: '03', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '德国', lat: 51.1657, lng: 10.4515 },
        media: '',
        relatedEntities: ['邓演达', '孙中山逝世追悼会']
      },
      {
        id: '120',
        title: '蒋介石制造反革命暴乱',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '03', day: '23' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '安庆', lat: 30.5429, lng: 117.0638 },
        media: '',
        relatedEntities: ['蒋介石', '反革命暴乱']
      },
      {
        id: '121',
        title: '邓振询大会发言横山山南地区各县人士代表会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1942', month: '08', day: '01' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '横山', lat: 37.958, lng: 109.293 },
        media: '',
        relatedEntities: ['邓振询', '横山山南地区各县人士代表会议']
      },
      {
        id: '122',
        title: '项英组织汉阳钢铁厂罢工斗争',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1922', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '汉阳', lat: 30.5493, lng: 114.2658 },
        media: '',
        relatedEntities: ['项英', '汉阳钢铁厂罢工斗争']
      },
      {
        id: '123',
        title: '项英冷处理富田事变',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1931', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '富田', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['项英', '富田事变']
      },
      {
        id: '124',
        title: '毛泽东参加洛川会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1935', month: '08', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '洛川', lat: 35.7623, lng: 109.4323 },
        media: '',
        relatedEntities: ['毛泽东', '洛川会议']
      },
      {
        id: '125',
        title: '项英召开新四军全军（江北第四支队未参加）营以上干部会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1938', month: '04', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '徽州', lat: 29.867, lng: 118.339 },
        media: '',
        relatedEntities: ['项英', '新四军全军（江北第四支队未参加）营以上干部会议']
      },
      {
        id: '126',
        title: '毛泽东领导秋收起义',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1927', month: '09', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '湘赣边界', lat: 27.5, lng: 114.0 },
        media: '',
        relatedEntities: ['毛泽东', '秋收起义']
      },
      {
        id: '127',
        title: '孟琇焘参加反对蒋介石暴政的斗争',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1947', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '台北', lat: 25.033, lng: 121.5654 },
        media: '',
        relatedEntities: ['孟琇焘', '反对蒋介石暴政的斗争']
      },
      {
        id: '128',
        title: '邓中夏参加太平洋劳动会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1929', month: '08', day: '15' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '符拉迪沃斯托克', lat: 43.1155, lng: 131.8855 },
        media: '',
        relatedEntities: ['邓中夏', '太平洋劳动会议']
      },
      {
        id: '129',
        title: '毛泽东召开总前委和江西省行委联席会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1930', month: '10', day: '25' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '新余', lat: 27.8178, lng: 114.917 },
        media: '',
        relatedEntities: ['毛泽东', '总前委和江西省行委联席会议']
      },
      {
        id: '130',
        title: '毛泽东参加扩大会议',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1935', month: '09', day: '12' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '甘南藏族自治州', lat: 34.9864, lng: 102.911 },
        media: '',
        relatedEntities: ['毛泽东', '扩大会议']
      },
      {
        id: '131',
        title: '邓中夏出席第三次太平洋劳动大会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1929', month: '09', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '海参崴', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['邓中夏', '第三次太平洋劳动大会']
      },
      {
        id: '132',
        title: '毛泽东成立岳北农工会',
        type: EventTypesEnum.Counterwork,
        description: '',
        startDate: { year: '1923', month: '04', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '衡阳', lat: 26.8932, lng: 112.5719 },
        media: '',
        relatedEntities: ['毛泽东', '岳北农工会']
      },
      {
        id: '133',
        title: '日军杀害汉斯·希伯',
        type: EventTypesEnum.Judicial,
        description: '',
        startDate: { year: '1941', month: '11', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '沂南', lat: 35.55, lng: 118.47 },
        media: '',
        relatedEntities: ['日军', '汉斯·希伯']
      },
      {
        id: '134',
        title: '反动当局逮捕王新义',
        type: EventTypesEnum.Judicial,
        description: '',
        startDate: { year: '1932', month: '04', day: '18' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '阜阳', lat: 32.8897, lng: 115.8145 },
        media: '',
        relatedEntities: ['反动当局', '王新义']
      },
      {
        id: '135',
        title: '日寇杀害罗忠毅',
        type: EventTypesEnum.Judicial,
        description: '',
        startDate: { year: '1941', month: '11', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '溧阳', lat: 31.4154, lng: 119.484 },
        media: '',
        relatedEntities: ['日寇', '罗忠毅']
      },
      {
        id: '136',
        title: '国民党第三战区长官司令部直属联络站被关押于周璧',
        type: EventTypesEnum.Judicial,
        description: '',
        startDate: { year: '1944', month: '05', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '江西铅山', lat: 28.315, lng: 117.71 },
        media: '',
        relatedEntities: ['国民党第三战区长官司令部直属联络站', '周璧']
      },
      {
        id: '137',
        title: '三元梅列集中营被关押于卢懋榘',
        type: EventTypesEnum.Judicial,
        description: '',
        startDate: { year: '1941', month: '08', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '三明', lat: 26.263, lng: 117.639 },
        media: '',
        relatedEntities: ['三元梅列集中营', '卢懋榘']
      },
      {
        id: '138',
        title: '张东皎被杀害梁占胜',
        type: EventTypesEnum.Judicial,
        description: '',
        startDate: { year: '1932', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '张家口市', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['张东皎', '梁占胜']
      },
      {
        id: '139',
        title: '秦明被抓捕马鸿逵',
        type: EventTypesEnum.Judicial,
        description: '',
        startDate: { year: '1947', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '平凉', lat: 35.543, lng: 106.6649 },
        media: '',
        relatedEntities: ['秦明', '马鸿逵']
      },
      {
        id: '140',
        title: '川丰被杀害孙晓梅',
        type: EventTypesEnum.Judicial,
        description: '',
        startDate: { year: '1941', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '武进', lat: 31.7189, lng: 119.9424 },
        media: '',
        relatedEntities: ['川丰', '孙晓梅']
      },
      {
        id: '141',
        title: '陈良义被杀害何禹图',
        type: EventTypesEnum.Judicial,
        description: '',
        startDate: { year: '1927', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '温州', lat: 27.9938, lng: 120.6994 },
        media: '',
        relatedEntities: ['陈良义', '何禹图']
      },
      {
        id: '142',
        title: '陈子涛阅读《步兵操典》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1938', month: '09', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '武鸣', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['陈子涛', '《步兵操典》']
      },
      {
        id: '143',
        title: '郭松龄报告反对战争主张和平、讨伐张作霖',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1925', month: '11', day: '21' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '滦州', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['郭松龄', '反对战争主张和平、讨伐张作霖']
      },
      {
        id: '144',
        title: '秦明阅读《唯物史观》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1938', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '咸阳', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['秦明', '《唯物史观》']
      },
      {
        id: '145',
        title: '邓演达撰写文献作品《南京钦定的国民会议和我们所要求的国民会议》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1930', month: '01', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '意大利', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['邓演达', '《南京钦定的国民会议和我们所要求的国民会议》']
      },
      {
        id: '146',
        title: '吴亚鲁创办《平民声》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1923', month: '11', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '南通', lat: 31.9802, lng: 120.8943 },
        media: '',
        relatedEntities: ['吴亚鲁', '《平民声》']
      },
      {
        id: '147',
        title: '秦孟芳撰写文献作品《忆灵菲》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1939', month: '07', day: '26' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '郧阳', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['秦孟芳', '《忆灵菲》']
      },
      {
        id: '148',
        title: '朱德制定《岷(州)洮(州)西(固)战役计划》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1936', month: '08', day: '05' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '甘孜藏族自治州', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['朱德', '《岷(州)洮(州)西(固)战役计划》']
      },
      {
        id: '149',
        title: '金佛庄撰写文献作品《论婚姻问题》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1918', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '东阳', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['金佛庄', '《论婚姻问题》']
      },
      {
        id: '150',
        title: '胡文虎创办《星洲日报》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1935', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '新加坡', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['胡文虎', '《星洲日报》']
      },
      {
        id: '151',
        title: '胡文虎创办《星华日报》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1935', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '汕头', lat: 23.3535, lng: 116.6822 },
        media: '',
        relatedEntities: ['胡文虎', '《星华日报》']
      },
      {
        id: '152',
        title: '谭震林发表《目前国际政治形势和自卫会的意义与任务》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '吴市', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['谭震林', '《目前国际政治形势和自卫会的意义与任务》']
      },
      {
        id: '153',
        title: '斯诺撰写文献作品《毛泽东自传》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1937', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '陕北', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['斯诺', '《毛泽东自传》']
      },
      {
        id: '154',
        title: '邓中夏阅读《仁学》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1921', month: '12', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '郴县', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['邓中夏', '《仁学》']
      },
      {
        id: '155',
        title: '邓振询撰写文献作品《创刊的使命》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1942', month: '09', day: '10' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '苏皖', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['邓振询', '《创刊的使命》']
      },
      {
        id: '156',
        title: '邓振询发表《为坚持江南敌后抗战之纲领》',
        type: EventTypesEnum.Work,
        description: '',
        startDate: { year: '1940', month: '', day: '' },
        endDate: { year: '', month: '', day: '' },
        location: { name: '江南', lat: 0, lng: 0 },
        media: '',
        relatedEntities: ['邓振询', '《为坚持江南敌后抗战之纲领》']
      }
    ],
    description: '',
    imageUrl: ''
  }
]
