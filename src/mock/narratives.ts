import type { Narrative } from '@/mock/types'
import { Narrative_yuhua } from './narrative_地点'
import { Narrative_sifa } from './narrative_司法'

/** 汇总多个叙事数据源，供 store / 路由按 id 区分 */
export const mockNarratives: Narrative[] = [Narrative_yuhua, Narrative_sifa]
