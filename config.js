//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "+92 3346690239";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "True";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID ||eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0JWSXpYU3lwZnBDK2taa0NGSXZFQWRBa3NQdTMrcTFmcGYvU21xM3owST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlFzallhbFFiSGR2bmZJSThRRFpER3ZHK0xZYlhEZzR2bWRBMmVRRDFuZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSVQ3aUpMZ1BDN2tuU0dOUThPazc0MnhBb3JGYVRmYU9FWSs5bWtTUTBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRdWU5RHgxWEFKZVQ1dVVGc3RsczJzS0J5SDI2Y09OZGo1T1U1eCtmYTFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ERWFuNndlN2V4UUZVZ3UzY1o5QXNEa3k5UUNBVm4vaEl4OGNjdENZSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ1Q1VDMm42aUZNZjZJb2s0WnF5akowbmErb2NJaUV3bzhLWHRnL1d4aUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFHYXVVQWJtUjBHTlpDZk4yRklqUG5QQkJZYnJOOXNkYm1pZFpqSzRGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVdpcDRQVTFXRGZCWGEzMkVIQUMxV3c3dmFCMWJLS2Ira1ZNbWFvK0ozcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imkyd1RhMmUraENGUTVvUDZwR3Zhb2pmbzljTTVXSU9Tc0pMTWh5bjlsSDZFSnlkdnMwVS9UWk1FdVVOSmNRc01jK2NCOWIrTmJVc1oxMWFUVnpLeWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJPQzhCQU1MWXAzRFV1U3gwOWk5T0FvUXQrS0FBUWZLSHVhL0tqRloyamJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKRTBPSXhDMFJzV0YzTHdMVjRSQzRnIiwicGhvbmVJZCI6IjkyYzZlODY1LTBlMGUtNDg2OS04NDY4LTNmNTQxZDVmYjBkOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlbXlMenRIaUs1Z09pcFJuczBjTFRiaWZoWkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjNkczBxakV0eHJpUklhczByMnFGTStrYUVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk0R0ZRNUUyIiwibWUiOnsiaWQiOiI5MjMzNDY2OTAyMzk6ODZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXVza2FuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMeS9xWklDRU5lS3BMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYeWVDZk16QzYvSFlNVkNOaHBWck9BYmdiUVZwUVVtVERicnZmYUZxNlVBPSIsImFjY291bnRTaWduYXR1cmUiOiJKcWwzQXU0TlJ2VVpXaEF3dzNQYW9yME1yM2d6cGdndmFWQ1BPV3V0cHZzeDVSQUpLNmowbjJwTFR0bDM0QzRRdVpnZXJBVVFGWWlCa09ZYllxa2JEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTWt2akZteVZkSjJrb1UvaHZtWElpd3RZK1VBcEQyeldydE4zekt0SEo3b2I1SWV4QXVlYjk3d2M5K0xIVklsUjVUNUFZWFRhQVVIY0R3aHo1WURkaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNDY2OTAyMzk6ODZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjhuZ256TXd1dngyREZRallhVmF6Z0c0RzBGYVVGSmt3MjY3MzJoYXVsQSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjM1Mjk5N30=
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0JWSXpYU3lwZnBDK2taa0NGSXZFQWRBa3NQdTMrcTFmcGYvU21xM3owST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlFzallhbFFiSGR2bmZJSThRRFpER3ZHK0xZYlhEZzR2bWRBMmVRRDFuZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSVQ3aUpMZ1BDN2tuU0dOUThPazc0MnhBb3JGYVRmYU9FWSs5bWtTUTBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRdWU5RHgxWEFKZVQ1dVVGc3RsczJzS0J5SDI2Y09OZGo1T1U1eCtmYTFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ERWFuNndlN2V4UUZVZ3UzY1o5QXNEa3k5UUNBVm4vaEl4OGNjdENZSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ1Q1VDMm42aUZNZjZJb2s0WnF5akowbmErb2NJaUV3bzhLWHRnL1d4aUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFHYXVVQWJtUjBHTlpDZk4yRklqUG5QQkJZYnJOOXNkYm1pZFpqSzRGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVdpcDRQVTFXRGZCWGEzMkVIQUMxV3c3dmFCMWJLS2Ira1ZNbWFvK0ozcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imkyd1RhMmUraENGUTVvUDZwR3Zhb2pmbzljTTVXSU9Tc0pMTWh5bjlsSDZFSnlkdnMwVS9UWk1FdVVOSmNRc01jK2NCOWIrTmJVc1oxMWFUVnpLeWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJPQzhCQU1MWXAzRFV1U3gwOWk5T0FvUXQrS0FBUWZLSHVhL0tqRloyamJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKRTBPSXhDMFJzV0YzTHdMVjRSQzRnIiwicGhvbmVJZCI6IjkyYzZlODY1LTBlMGUtNDg2OS04NDY4LTNmNTQxZDVmYjBkOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlbXlMenRIaUs1Z09pcFJuczBjTFRiaWZoWkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjNkczBxakV0eHJpUklhczByMnFGTStrYUVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk0R0ZRNUUyIiwibWUiOnsiaWQiOiI5MjMzNDY2OTAyMzk6ODZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXVza2FuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMeS9xWklDRU5lS3BMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYeWVDZk16QzYvSFlNVkNOaHBWck9BYmdiUVZwUVVtVERicnZmYUZxNlVBPSIsImFjY291bnRTaWduYXR1cmUiOiJKcWwzQXU0TlJ2VVpXaEF3dzNQYW9yME1yM2d6cGdndmFWQ1BPV3V0cHZzeDVSQUpLNmowbjJwTFR0bDM0QzRRdVpnZXJBVVFGWWlCa09ZYllxa2JEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTWt2akZteVZkSjJrb1UvaHZtWElpd3RZK1VBcEQyeldydE4zekt0SEo3b2I1SWV4QXVlYjk3d2M5K0xIVklsUjVUNUFZWFRhQVVIY0R3aHo1WURkaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNDY2OTAyMzk6ODZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjhuZ256TXd1dngyREZRallhVmF6Z0c0RzBGYVVGSmt3MjY3MzJoYXVsQSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjM1Mjk5N30="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
