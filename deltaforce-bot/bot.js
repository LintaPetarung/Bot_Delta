const TelegramBot = require('node-telegram-bot-api');

// Token bot dari environment variable di Render
const token = process.env.TOKEN;

// Inisialisasi bot
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  if (text.includes('harga') || text.includes('vip') || text.includes('paket')) {
    bot.sendMessage(chatId, `
📋 *Daftar Harga VIP Delta Force:*

🕐 1 Hari: 30k | 5$
📆 3 Hari: 50k | 8$
📆 7 Hari: 100k | 10$
📆 14 Hari: 150k | 15$
🗓️ 1 Bulan: 300k | 25$
🗓️ 2 Bulan: 450k | 40$

✅ Full fitur: Aimlock, Aim Assist, Anti Lag, 120 FPS, No Recoil!
🙏 Jangan lupa follow:
📺 YouTube: https://www.youtube.com/channel/UCl1514izGdDeCa5TmouGrEw  
🎵 TikTok: https://www.tiktok.com/@tonaaspasanstore
    `);
  } else if (text.includes('bayar') || text.includes('cara beli') || text.includes('beli')) {
    bot.sendMessage(chatId, `
💳 *Metode Pembayaran:*

- 💰 DANA : 082190708031 a/n R**** L*****
- 🏦 BRI  : 523901003280504 a/n Ricko L

Silakan pilih paket dan metode pembayaran ya! 😊

🙏 Follow juga:
📺 YouTube: https://www.youtube.com/channel/UCl1514izGdDeCa5TmouGrEw  
🎵 TikTok: https://www.tiktok.com/@tonaaspasanstore
    `);
  } else if (text.includes('fitur') || text.includes('keunggulan')) {
    bot.sendMessage(chatId, `
✨ *Fitur VIP Delta Force:*
- Aimlock 🔒
- Aim Assist 🎯
- No Recoil 💥
- Auto Headshot 💀
- 120 FPS Support ⚡
- Anti Lag Boost 🚀

🙏 Follow juga:
📺 YouTube: https://www.youtube.com/channel/UCl1514izGdDeCa5TmouGrEw  
🎵 TikTok: https://www.tiktok.com/@tonaaspasanstore
    `);
  } else {
    bot.sendMessage(chatId, `
Terima kasih sudah menghubungi kami! 😊
Ketik salah satu dari ini ya:
- *harga* / *vip*
- *fitur*
- *cara beli*

📺 YouTube: https://www.youtube.com/channel/UCl1514izGdDeCa5TmouGrEw  
🎵 TikTok: https://www.tiktok.com/@tonaaspasanstore
    `);
  }
});
