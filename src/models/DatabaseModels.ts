/**
 * ! MongoDB 数据库模型定义  示例代码
 */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  // 其他字段...
});

export const UserModel = mongoose.model("User", userSchema);

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  // 其他字段...
});

export const PostModel = mongoose.model("Post", postSchema);
