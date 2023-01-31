const { Telegraf } = require("telegraf");
const bot = new Telegraf("6069922094:AAElQC6vzu6ag0b9K3GKcuH2BCWu6EwLwEc");

bot.command("start", (ctx) => {
  console.log(ctx.from);
  let id = ctx.chat.id;
  let startMsg = `Assalomu alekum, Siz O'zbekiston matbuoti jurnalining rasmiy botiga tashrif buyurdingiz.

Xizmat yo'nalishlarini tanlang
    `;
  ctx.deleteMessage();
  bot.telegram.sendMessage(id, startMsg, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Bosma nashirga obuna bo'lish",
            callback_data: "bosma_nashr",
          },
        ],
        [
          {
            text: "Ilmiy maqolani nashr qilish",
            callback_data: "ilmiy_maqola",
          },
        ],
        [
          {
            text: "Reklama berish",
            callback_data: "reklama",
          },
        ],
        [
          {
            text: "Taxririyatga murojat yuborish",
            callback_data: "taxririyat",
          },
        ],
      ],
    },
  });
});

bot.action("bosma_nashr", (ctx) => {
  let id = ctx.chat.id;
  let msg = `Obuna muddatini tanlang`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(id, msg, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "6 oy",
            callback_data: "six_month",
          },
        ],
        [
          {
            text: "12 oy",
            callback_data: "tweenty_month",
          },
        ],
        [
          {
            text: "Bosh sahifaga qaytish",
            callback_data: "/start",
          },
        ],
      ],
    },
  });
});

bot.action("ilmiy_maqola", (ctx) => {
  let id = ctx.chat.id;
  let msg = `Maqola mavzusini tanlang`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(id, msg, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Ilmiy-ommabop",
            callback_data: "ilmiy",
          },
        ],
        [
          {
            text: "Ijtimoiy-siyosiy",
            callback_data: "ijtimoiy",
          },
        ],
        [
          {
            text: "Ma'naviy-marifiy",
            callback_data: "manaviy",
          },
        ],
        [
          {
            text: "Iqtisodiy",
            callback_data: "iqtisod",
          },
        ],

        [
          {
            text: "Boshqa",
            callback_data: "boshqa",
          },
        ],
        [
          {
            text: "Bosh sahifaga qaytish",
            callback_data: "/start",
          },
        ],
      ],
    },
  });
});

bot.action("reklama", (ctx) => {
  let id = ctx.chat.id;
  let msg = `Nashr turini tanlang`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(id, msg, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Bosma nashr",
            callback_data: "bosma",
          },
        ],
        [
          {
            text: "Web-saytga",
            callback_data: "web",
          },
        ],
        [
          {
            text: "Telegram kanalga",
            callback_data: "telegram",
          },
        ],
        [
          {
            text: "Hammasiga",
            callback_data: "all",
          },
        ],
        [
          {
            text: "Bosh sahifaga qaytish",
            callback_data: "/start",
          },
        ],
      ],
    },
  });
});

bot.action('six_month', async msg => {
    const namePrompt = await bot.telegram.sendMessage(msg.chat.id, "Hi, what's your name?", {
        reply_markup: {
            force_reply: false,
        },
    });
    await bot.telegram.sendMessage(msg.chat.id, namePrompt.message_id, async (nameMsg) => {
        const name = nameMsg.text;
        // save name in DB if you want to ...
        await bot.telegram.sendMessage(msg.chat.id, `Hello ${name}!`);
    });
});


bot.launch();
