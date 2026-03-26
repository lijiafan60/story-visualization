import type { Narrative } from '@/mock/types'
import { Narrative_yuhua } from './narrative1_雨花'
import { Narrative_sifa } from './narrative2_司法'
// import { Narrative_luxun } from './narrative3_鲁迅'
import { Narrative_dengzhongxia } from './narrative4_邓中夏'
import { Narrative_yundaiying } from './narrative5_恽代英'
import { Narrative_zhangchi } from './narrative6_张炽'
import { Narrative_yuanguoping } from './narrative7_袁国平'
import { Narrative_jinghantielu } from './narrative8_京汉铁路'
import { Narrative_yuhua_fake } from './narrative9_雨花FAKE'

/** 汇总多个叙事数据源，供 store / 路由按 id 区分 */
export const mockNarratives: Narrative[] = [
    Narrative_yuhua, 
    Narrative_dengzhongxia, 
    Narrative_yundaiying, 
    // Narrative_luxun,
    Narrative_zhangchi,
    Narrative_yuanguoping,
    Narrative_sifa, 
    Narrative_jinghantielu,
    Narrative_yuhua_fake
]
