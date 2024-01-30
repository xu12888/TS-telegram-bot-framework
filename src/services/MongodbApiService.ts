/**
 *! MongoDB 数据库服务   示例代码
 */

import config from "../../config/config";
import { MongoClient } from "mongodb";

const uri = config.mongodbConnectionString;
const collectionName = ""; // 替换为你的数据库中的数据表名
const userConnectionCache = new Map();

export async function connectToDatabase(userId: any) {
  // 检查用户缓存中是否已存在连接
  if (userConnectionCache.has(userId)) {
    return userConnectionCache.get(userId);
  }

  try {
    const client = await MongoClient.connect(uri, {
      minPoolSize: 0,
      maxPoolSize: 20, // 设置连接池大小，根据实际需求调整
      maxConnecting: 10, // 接池中可以同时建立的最大连接数
    });
    // 缓存连接
    userConnectionCache.set(userId, client);

    return client;
  } catch (error) {
    console.error(`为用户 ${userId} 创建连接失败:`, error);
    throw error;
  }
}

// 关闭用户连接
export async function closeUserConnection(userId: any) {
  if (userConnectionCache.has(userId)) {
    const client = userConnectionCache.get(userId);
    await client.close();
    // 从缓存中移除连接
    userConnectionCache.delete(userId);
  }
}
