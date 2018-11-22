## 准备工作

### 创建数据库
- 新建数据库`learn`，
- 字符集： `utf8`,
- 排序规则：`utf8_general_ci`
- 创建相关表，新建查询，执行`file\learn.sql`

### 需要下载包

执行以下命令：
`cnpm install express mysql express-static body-parser cookie-session consolidate ejs -D`

```
"devDependencies": {
    "body-parser": "^1.18.3",
    "consolidate": "^0.15.1",
    "cookie-session": "^2.0.0-beta.3",
    "ejs": "^2.6.1",
    "express": "^4.16.4",
    "express-static": "^1.2.6",
    "mysql": "^2.16.0"
  }
```