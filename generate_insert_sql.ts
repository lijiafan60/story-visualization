/**
 * 将 narratives.ts 中的数据转换为 SQL INSERT 语句
 * 运行: npx tsx generate_insert_sql.ts
 * 或者: cd story-visualization && npx tsx generate_insert_sql.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// 使用相对路径导入，避免路径别名问题
import { mockNarratives } from './src/mock/narratives';

// ES modules 中获取 __dirname 的方式
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 转义 SQL 字符串
function escapeSql(str: string | null | undefined): string {
    if (str === null || str === undefined) return 'NULL';
    return `'${String(str).replace(/'/g, "''")}'`;
}

// 格式化日期字段
function formatDateField(dateObj: { year: string; month: string; day: string } | string) {
    if (!dateObj || typeof dateObj === 'string') {
        return { year: null, month: null, day: null };
    }
    return {
        year: dateObj.year || null,
        month: dateObj.month || null,
        day: dateObj.day || null
    };
}

// 解析 location
function parseLocation(location: any) {
    if (!location || typeof location === 'string') {
        return { name: null, lat: null, lng: null };
    }
    return {
        name: location.name || null,
        lat: location.lat || null,
        lng: location.lng || null
    };
}

// 解析 media
function parseMedia(media: any) {
    if (!media || typeof media === 'string') {
        return { url: null, caption: null, credit: null };
    }
    return {
        url: media.url || null,
        caption: media.caption || null,
        credit: media.credit || null
    };
}

// 生成 SQL INSERT 语句
function generateInsertSQL() {
    const sqlStatements: string[] = [];
    
    sqlStatements.push('-- 开始事务');
    sqlStatements.push('START TRANSACTION;');
    sqlStatements.push('');
    
    // 插入 narratives
    sqlStatements.push('-- 插入叙事数据');
    for (const narrative of mockNarratives) {
        const sql = `INSERT INTO narratives (id, title, description, image_url) VALUES (${escapeSql(narrative.id)}, ${escapeSql(narrative.title)}, ${escapeSql(narrative.description)}, ${escapeSql(narrative.imageUrl)});`;
        sqlStatements.push(sql);
    }
    sqlStatements.push('');
    
    // 插入 events
    sqlStatements.push('-- 插入事件数据');
    for (const narrative of mockNarratives) {
        for (const event of narrative.events) {
            const startDate = formatDateField(event.startDate);
            const endDate = formatDateField(event.endDate);
            const location = parseLocation(event.location);
            const media = parseMedia(event.media);
            // 处理 type 为 null 或 undefined 的情况，使用默认值 '社交'（社交活动）
            const eventType = event.type || '社交';
            
            const sql = `INSERT INTO events (id, narrative_id, title, type, description, start_date_year, start_date_month, start_date_day, end_date_year, end_date_month, end_date_day, location_name, location_lat, location_lng, media_url, media_caption, media_credit) VALUES (${escapeSql(event.id)}, ${escapeSql(narrative.id)}, ${escapeSql(event.title)}, ${escapeSql(eventType)}, ${escapeSql(event.description)}, ${escapeSql(startDate.year)}, ${escapeSql(startDate.month)}, ${escapeSql(startDate.day)}, ${escapeSql(endDate.year)}, ${escapeSql(endDate.month)}, ${escapeSql(endDate.day)}, ${escapeSql(location.name)}, ${location.lat !== null ? location.lat : 'NULL'}, ${location.lng !== null ? location.lng : 'NULL'}, ${escapeSql(media.url)}, ${escapeSql(media.caption)}, ${escapeSql(media.credit)});`;
            sqlStatements.push(sql);
        }
    }
    sqlStatements.push('');
    
    // 插入 entities
    sqlStatements.push('-- 插入实体数据');
    for (const narrative of mockNarratives) {
        for (const entity of narrative.entities) {
            const sql = `INSERT INTO entities (id, narrative_id, name, narrative_desc, type, relation) VALUES (${escapeSql(entity.id)}, ${escapeSql(narrative.id)}, ${escapeSql(entity.name)}, ${escapeSql(entity.desc)}, ${escapeSql(entity.type)}, ${escapeSql(entity.relation)});`;
            sqlStatements.push(sql);
        }
    }
    sqlStatements.push('');
    
    // 插入 event_related_entities
    sqlStatements.push('-- 插入事件关联实体数据');
    for (const narrative of mockNarratives) {
        for (const event of narrative.events) {
            for (const entityName of event.relatedEntities || []) {
                const sql = `INSERT INTO event_related_entities (event_id, narrative_id, entity_name) VALUES (${escapeSql(event.id)}, ${escapeSql(narrative.id)}, ${escapeSql(entityName)});`;
                sqlStatements.push(sql);
            }
        }
    }
    sqlStatements.push('');
    
    sqlStatements.push('-- 提交事务');
    sqlStatements.push('COMMIT;');
    
    // 写入文件（确保使用 UTF-8 编码，并添加 BOM 以兼容 Windows）
    const outputPath = path.join(__dirname, 'insert_data.sql');
    const content = '\uFEFF' + sqlStatements.join('\n'); // 添加 UTF-8 BOM
    fs.writeFileSync(outputPath, content, { encoding: 'utf8' });
    
    console.log('\n✅ SQL 文件生成成功！');
    
    console.log(`SQL 文件已生成: ${outputPath}`);
    console.log(`共生成 ${sqlStatements.length} 条 SQL 语句`);
    console.log(`包含 ${mockNarratives.length} 个叙事`);
    console.log(`包含 ${mockNarratives.reduce((sum, n) => sum + n.events.length, 0)} 个事件`);
    console.log(`包含 ${mockNarratives.reduce((sum, n) => sum + n.entities.length, 0)} 个实体`);
}

// 执行
generateInsertSQL();

