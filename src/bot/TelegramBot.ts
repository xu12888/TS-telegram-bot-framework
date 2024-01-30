/**
 * ! Telegram Bot 类的定义和主要逻辑   示例代码
 */

import { sendDarts, bettingTemplate } from "../services/TelegramApiService";

export class TelegramBotHandler {
  private bot: any;

  constructor(bot: any) {
    this.bot = bot;
  }

  async handleMessages(chatId: any): Promise<void> {
    // 处理消息的逻辑
    await sendDarts(chatId, 3, this.bot);
  }

  async replyBettingMessage(extractedData: any): Promise<string> {
    return await bettingTemplate(extractedData);
  }
}
