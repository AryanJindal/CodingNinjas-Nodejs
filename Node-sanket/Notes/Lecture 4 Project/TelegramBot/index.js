const {Telegraf} = require('telegraf');
// https://t.me/TheTechyBot
const bot = new Telegraf('6784586591:AAFJ5URVLcgdrclK4hqD7Vs-BjPMeiwfI50');

bot.start((ctx)=>ctx.reply('A bot by Aryan'));
//command of hey set to the bot 
bot.command('Hey', (ctx)=>{ctx.reply(`Hey, I am a lazy and bakchod bot . Not gonna do much`)})

//on sticker , basically an event listener
bot.on('sticker', (ctx)=> ctx.reply('Love you too...............'))
bot.launch();

