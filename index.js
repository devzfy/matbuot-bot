const TelegramApi = require('node-telegram-bot-api')

const api = '5860940866:AAFxccDyUq7c87XCGOxOap6izndqMnIqql0'

const bot = new TelegramApi(api, {polling: true})

bot.on('message', msg =>{
    const chatId = msg.chat.id
        bot.sendMessage(chatId, `salom` )
})


