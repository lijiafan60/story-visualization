# 数据库设置说明（PostgreSQL）

## 文件说明

1. **database_schema.sql** - PostgreSQL 数据库表结构定义
2. **generate_insert_sql.ts** - 生成 INSERT SQL 语句的 TypeScript 脚本
3. **insert_data.sql** - 生成的 INSERT 语句（运行脚本后生成）

## 使用步骤

### 1. 创建数据库和表结构

#### 方法一：使用 psql 命令行

```bash
# 创建数据库
createdb -U postgres story_visualization

# 连接到数据库并执行建表脚本
psql -U postgres -d story_visualization -f database_schema.sql
```

**注意**：如果数据库已经创建并包含数据，需要先运行迁移脚本：

```bash
# 运行迁移脚本更新表结构
psql -U postgres -d story_visualization -f migrate_schema.sql
```

#### 方法二：使用 psql 交互式命令

```bash
# 连接到 PostgreSQL
psql -U postgres

# 在 psql 中执行
CREATE DATABASE story_visualization ENCODING 'UTF8';
\c story_visualization
\i database_schema.sql
```

#### 方法三：使用图形化工具

使用 pgAdmin、DBeaver 等工具连接到 PostgreSQL，然后执行 `database_schema.sql` 文件。

### 2. 生成 INSERT SQL 语句

#### 方法一：使用 tsx（推荐，支持 ES modules）

```bash
# 进入项目目录
cd story-visualization

# 安装 tsx（如果还没有）
npm install -D tsx

# 运行脚本生成 INSERT SQL
npx tsx generate_insert_sql.ts
```

#### 方法二：使用 ts-node（需要额外配置）

```bash
# 进入项目目录
cd story-visualization

# 运行脚本（使用 ESM 模式）
npx ts-node --esm --experimental-specifier-resolution=node generate_insert_sql.ts
```

#### 方法二：手动转换

如果 TypeScript 脚本无法运行，可以：
1. 使用在线工具将 TypeScript 数据转换为 JSON
2. 使用 Python/Node.js 脚本读取 JSON 并生成 SQL

### 3. 导入数据

```bash
# 使用 psql 导入（确保客户端编码为 UTF-8）
psql -U postgres -d story_visualization -f insert_data.sql

# 如果遇到编码错误，可以设置客户端编码
psql -U postgres -d story_visualization -c "SET client_encoding TO 'UTF8';" -f insert_data.sql

# 或者在 psql 中先设置编码
psql -U postgres -d story_visualization
\encoding UTF8
\i insert_data.sql
```

**注意**：如果遇到字符编码错误（如 "编码GBK的字符在编码UTF8没有相对应值"），请确保：
1. SQL 文件以 UTF-8 编码保存（脚本已自动处理）
2. PostgreSQL 客户端编码设置为 UTF-8
3. 数据库编码为 UTF-8（创建数据库时已设置）

## 数据库结构

### 表关系

```
narratives (叙事)
  ├── events (事件) - 一对多
  ├── entities (实体) - 一对多
  └── event_related_entities (事件关联实体) - 通过 events 关联
```

### 主要表说明

1. **narratives** - 存储叙事基本信息
2. **events** - 存储事件信息，包含日期、位置、媒体等
3. **entities** - 存储实体信息（人物、地点、组织等）
4. **event_related_entities** - 事件与实体的关联表（多对多）

## 注意事项

1. 数据库使用 UTF8 编码以支持中文和特殊字符
2. 所有外键都设置了 CASCADE 删除，删除叙事时会自动删除相关事件和实体
3. 日期字段分为年、月、日三个字段存储，以支持不完整的日期信息
4. location 和 media 字段在数据中可能是字符串或对象，脚本已处理这两种情况
5. PostgreSQL 使用触发器自动更新 `updated_at` 字段（MySQL 的 ON UPDATE CURRENT_TIMESTAMP 在 PostgreSQL 中需要通过触发器实现）
6. 自增字段使用 `BIGSERIAL` 类型（对应 MySQL 的 BIGINT AUTO_INCREMENT）

## 数据量估算

根据文件大小估算：
- 叙事数量：约 1-10 个
- 事件数量：约 100-1000 个
- 实体数量：约 50-500 个
- 事件关联实体：约 200-2000 条

建议在导入前先备份数据库。

