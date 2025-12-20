-- 迁移脚本：修复 events 表主键和 event_related_entities 表结构
-- 如果数据库已经创建，运行此脚本来更新表结构

-- 1. 删除 event_related_entities 表的外键约束（如果存在）
ALTER TABLE event_related_entities DROP CONSTRAINT IF EXISTS fk_event_related_entities_event;

-- 2. 删除 events 表的主键约束
ALTER TABLE events DROP CONSTRAINT IF EXISTS events_pkey;

-- 3. 添加 narrative_id 列到 event_related_entities 表（如果不存在）
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'event_related_entities' AND column_name = 'narrative_id'
    ) THEN
        ALTER TABLE event_related_entities ADD COLUMN narrative_id VARCHAR(50);
    END IF;
END $$;

-- 4. 更新 event_related_entities 表中的 narrative_id（从 events 表中获取）
UPDATE event_related_entities ere
SET narrative_id = e.narrative_id
FROM events e
WHERE ere.event_id = e.id AND ere.narrative_id IS NULL;

-- 5. 设置 narrative_id 为 NOT NULL（在更新数据后）
ALTER TABLE event_related_entities ALTER COLUMN narrative_id SET NOT NULL;

-- 6. 为 events 表创建新的组合主键
ALTER TABLE events ADD PRIMARY KEY (id, narrative_id);

-- 7. 重新创建 event_related_entities 表的外键约束
ALTER TABLE event_related_entities 
ADD CONSTRAINT fk_event_related_entities_event 
FOREIGN KEY (event_id, narrative_id) 
REFERENCES events(id, narrative_id) 
ON DELETE CASCADE;

-- 8. 创建新的索引
CREATE INDEX IF NOT EXISTS idx_event_related_entities_narrative_id ON event_related_entities(narrative_id);
CREATE INDEX IF NOT EXISTS idx_event_related_entities_event_narrative ON event_related_entities(event_id, narrative_id);

-- 完成迁移
SELECT 'Migration completed successfully!' AS status;

