/**
 * 将 narratives.ts 中的数据转换为 SQL INSERT 语句
 * 运行: node insert_data.js
 */

const fs = require('fs');
const path = require('path');

// 转义 SQL 字符串
function escapeSql(str) {
    if (str === null || str === undefined) return 'NULL';
    if (typeof str !== 'string') return `'${String(str).replace(/'/g, "''")}'`;
    return `'${str.replace(/'/g, "''")}'`;
}

// 格式化日期字段
function formatDateField(dateObj) {
    if (!dateObj || typeof dateObj !== 'object') return { year: null, month: null, day: null };
    return {
        year: dateObj.year || null,
        month: dateObj.month || null,
        day: dateObj.day || null
    };
}

// 解析 location
function parseLocation(location) {
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
function parseMedia(media) {
    if (!media || typeof media === 'string') {
        return { url: null, caption: null, credit: null };
    }
    return {
        url: media.url || null,
        caption: media.caption || null,
        credit: media.credit || null
    };
}

// 读取并执行 narratives.ts 文件
function generateInsertSQL() {
    const filePath = path.join(__dirname, 'story-visualization', 'src', 'mock', 'narratives.ts');
    
    // 读取文件内容
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // 移除 import 语句
    content = content.replace(/^import.*$/m, '');
    
    // 提取 mockNarratives 数组
    // 使用 eval 或 vm 模块来执行 TypeScript 代码（简化版，实际应该使用 TypeScript 编译器）
    // 这里我们假设可以提取出 JSON 格式的数据
    
    console.log('开始生成 SQL INSERT 语句...');
    console.log('注意：此脚本需要 TypeScript 运行时环境');
    console.log('建议使用 ts-node 运行，或先将 TypeScript 编译为 JavaScript');
    
    // 由于文件很大，建议使用 TypeScript 编译器或 ts-node 来执行
    // 这里提供一个模板，实际执行需要配置 TypeScript 环境
}

if (require.main === module) {
    generateInsertSQL();
}

