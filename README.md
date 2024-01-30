TS-Telegram-Bot-Framework
TS+Node.js framework for developing Telegram bots, suitable for medium to large-scale Telegram bot development.

Alt text

Before using, make sure to set the value of TELEGRAM_BOT_TOKEN in the .env file to your Telegram bot's token. Also, set the value of MONGODB_CONNECTION_STRING in the .env file to your MongoDB database connection URL.

Project Structure
lua
Copy code
|-- src/
| |-- index.ts // Entry file, starts the Telegram Bot
| |-- bot/
| | |-- TelegramBot.ts // Definition and main logic for the Telegram Bot class
| | |-- CommandController.ts // Controller for handling different commands
| |-- services/
| | |-- TelegramApiService.ts // Service for calling Telegram Bot API
| | |-- MongoDBService.ts // MongoDB database service
| |-- models/
| | |-- TelegramTypes.ts // Definition of data types related to Telegram
| | |-- DatabaseModels.ts // Definition of MongoDB database models
|-- config/
| |-- config.ts // Project configuration file
|-- utils/
| |-- logger.ts // Logging utility
|-- .env // Environment variable configuration file
|-- package.json
|-- tsconfig.json
If you find it challenging to understand, you can watch a video explanation of the project architecture on my YouTube channel.

YouTube Channel: www.youtube.com/@user-jp4wk4en4o

Project Setup and Start
Install project dependencies globally: npm install
Start the project: npm start
