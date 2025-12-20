-- PostgreSQL 数据库脚本
-- 创建数据库（需要在 psql 中单独执行，或使用 createdb 命令）
-- CREATE DATABASE story_visualization ENCODING 'UTF8';

-- 连接到数据库后执行以下语句
-- \c story_visualization

-- 1. 叙事表 (narratives)
CREATE TABLE IF NOT EXISTS narratives (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建 updated_at 自动更新触发器函数
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 为 narratives 表创建触发器
CREATE TRIGGER update_narratives_updated_at BEFORE UPDATE ON narratives
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_narratives_title ON narratives(title);

-- 2. 事件表 (events)
CREATE TABLE IF NOT EXISTS events (
    id VARCHAR(50) NOT NULL,
    narrative_id VARCHAR(50) NOT NULL,
    title VARCHAR(500) NOT NULL,
    type VARCHAR(50) NOT NULL,
    description TEXT,
    start_date_year VARCHAR(10),
    start_date_month VARCHAR(10),
    start_date_day VARCHAR(10),
    end_date_year VARCHAR(10),
    end_date_month VARCHAR(10),
    end_date_day VARCHAR(10),
    location_name VARCHAR(500),
    location_lat DECIMAL(10, 7),
    location_lng DECIMAL(10, 7),
    media_url VARCHAR(500),
    media_caption TEXT,
    media_credit VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id, narrative_id),
    CONSTRAINT fk_events_narrative FOREIGN KEY (narrative_id) REFERENCES narratives(id) ON DELETE CASCADE
);

-- 为 events 表创建触发器
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_events_narrative_id ON events(narrative_id);
CREATE INDEX IF NOT EXISTS idx_events_type ON events(type);
CREATE INDEX IF NOT EXISTS idx_events_start_date ON events(start_date_year, start_date_month, start_date_day);

-- 3. 实体表 (entities)
CREATE TABLE IF NOT EXISTS entities (
    id VARCHAR(50) NOT NULL,
    narrative_id VARCHAR(50) NOT NULL,
    name VARCHAR(500) NOT NULL,
    narrative_desc TEXT,
    type VARCHAR(50) NOT NULL,
    relation VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id, narrative_id),
    CONSTRAINT fk_entities_narrative FOREIGN KEY (narrative_id) REFERENCES narratives(id) ON DELETE CASCADE
);

-- 为 entities 表创建触发器
CREATE TRIGGER update_entities_updated_at BEFORE UPDATE ON entities
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_entities_narrative_id ON entities(narrative_id);
CREATE INDEX IF NOT EXISTS idx_entities_name ON entities(name);
CREATE INDEX IF NOT EXISTS idx_entities_type ON entities(type);

-- 4. 事件关联实体表 (event_related_entities) - 多对多关系
CREATE TABLE IF NOT EXISTS event_related_entities (
    id BIGSERIAL PRIMARY KEY,
    event_id VARCHAR(50) NOT NULL,
    narrative_id VARCHAR(50) NOT NULL,
    entity_name VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_event_related_entities_event FOREIGN KEY (event_id, narrative_id) REFERENCES events(id, narrative_id) ON DELETE CASCADE
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_event_related_entities_event_id ON event_related_entities(event_id);
CREATE INDEX IF NOT EXISTS idx_event_related_entities_narrative_id ON event_related_entities(narrative_id);
CREATE INDEX IF NOT EXISTS idx_event_related_entities_event_narrative ON event_related_entities(event_id, narrative_id);
CREATE INDEX IF NOT EXISTS idx_event_related_entities_entity_name ON event_related_entities(entity_name);

