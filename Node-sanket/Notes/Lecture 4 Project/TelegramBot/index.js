const {Telegraf} = require('telegraf');
require('dotenv').config();

const Token = process.env.TELEGRAM_TOKEN;
// console.log(Token)
// https://t.me/TheTechyBot
const bot = new Telegraf(Token);

bot.start((ctx)=>ctx.reply('A bot by Aryan'));
//command of hey set to the bot 
bot.command('Hey', (ctx)=>{ctx.reply(`Hey, I am a lazy and bakchod bot . Not gonna do much`)})

//on sticker , basically an event listener
bot.on('sticker', (ctx)=> ctx.reply('Love you too...............'))
bot.launch();

