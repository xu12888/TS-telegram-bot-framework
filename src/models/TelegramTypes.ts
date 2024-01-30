/**
 * ! MongoDB Telegram 相关的数据类型定义  示例代码
 */

export interface TelegramMessage {
  id: number;
  text: string;
  // 其他字段...
}

export interface TelegramUser {
  id: number;
  username: string;
  // 其他字段...
}

export interface ExtractedItem {
  keyword: string;
  number: number;
}
