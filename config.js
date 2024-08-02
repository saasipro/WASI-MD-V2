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

global.SESSION_ID 
  process.env.SESSION_ID ||eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9LYnlnc3dXY3FHcXF5MVk2NTluVEQ2VU5qblR6ajV2V0lmRXNiOUlYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1lFV0tSV0hUY3NzMkhsUDhNcW1CNTFQa0lpV2k2U1pyVVUyWXVHcXdFZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRXkwL1A4NGNJZWdVajhnL2NGQThXdmpJaU1VUDBOZm5yR2w2M05jZUg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTNlNMV0FORlA1dWhrZVFYUDZnMnhtdGRJWk5qN3ZmMjN3SHhEODA5N2lBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDSDB4U0NndkNJeCtDR1hOZ2lEK1RxZkhrNmxuNzNOaTJNVmMvbnhHSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh4S2M5TGtLVTkvTENweUlGVDNkMkhQWElBVXVZT2lsOTVaZFI3eW9CVUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RPQzcxamxxRVFIREsvcVgzWHlEREE2aDcxWHBhSmkrVlU5NnliYTNrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGxvUDhlRXFMK2J2d3NFRzdUMDFhaFRSS05NK1BxNG1ENW9hcTFST2tSQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitIZTRudU96TUE3RDg3K2pkYm9BdHZaZTN6N1c5dFJjV3JRa09tNlNjcDBaVjJqdGh4MnRsa1psWnpETnkxN29YajRNQ1RLOWVwNUhxSXRSNWRseEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6Ik9LYlJsMjcvSDlTQnJyOWZRTk94RVllSzduZFAyRkZSaGNGNmVtYWxXU289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5nQ1lTZGY1US1lQU1qZWZWMXRlVHciLCJwaG9uZUlkIjoiYTIxOWE5MWUtZjRjNC00ZDEwLWEyMWMtYWFlOTZlNjRkOWM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFwbVVVb3RuQzRGdmFDNnYxTjdaM1lDcjU4UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyb2tKQW1UZnE0c2lwU1pKUGl0ZDdDS2xQMjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWTFYQ0ZEWUQiLCJtZSI6eyJpZCI6IjkyMzM0NjY5MDIzOTo5OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNdXNrYW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01LL3FaSUNFSWJWc2JVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilh5ZUNmTXpDNi9IWU1WQ05ocFZyT0FiZ2JRVnBRVW1URGJydmZhRnE2VUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlGa21lMzZKSkVDWEFGOEVuSjVuNUtOUGRyTjZHZjUrNUkrNEFqTUtNM2hzVTg0eGMzSk54eVB4WGJNanRQRklZY2VpMXNFNDMvb2hKMnZQZzFFQ0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxenFzYWI4SkxwRE9XTDFVdXprajlIbVhpblllNG1mVEN1bHBtN0M3VERTS3Fna1JETzFFU25DNzdESG1YY2tFeng1VFZPTFJjeFcvbWM4VUZGNHlCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0NjY5MDIzOTo5OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWOG5nbnpNd3V2eDJERlFqWWFWYXpnRzRHMEZhVUZKa3cyNjczMmhhdWxBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTc1NTA3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtMRSJ9
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9LYnlnc3dXY3FHcXF5MVk2NTluVEQ2VU5qblR6ajV2V0lmRXNiOUlYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1lFV0tSV0hUY3NzMkhsUDhNcW1CNTFQa0lpV2k2U1pyVVUyWXVHcXdFZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRXkwL1A4NGNJZWdVajhnL2NGQThXdmpJaU1VUDBOZm5yR2w2M05jZUg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTNlNMV0FORlA1dWhrZVFYUDZnMnhtdGRJWk5qN3ZmMjN3SHhEODA5N2lBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDSDB4U0NndkNJeCtDR1hOZ2lEK1RxZkhrNmxuNzNOaTJNVmMvbnhHSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh4S2M5TGtLVTkvTENweUlGVDNkMkhQWElBVXVZT2lsOTVaZFI3eW9CVUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RPQzcxamxxRVFIREsvcVgzWHlEREE2aDcxWHBhSmkrVlU5NnliYTNrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGxvUDhlRXFMK2J2d3NFRzdUMDFhaFRSS05NK1BxNG1ENW9hcTFST2tSQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitIZTRudU96TUE3RDg3K2pkYm9BdHZaZTN6N1c5dFJjV3JRa09tNlNjcDBaVjJqdGh4MnRsa1psWnpETnkxN29YajRNQ1RLOWVwNUhxSXRSNWRseEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6Ik9LYlJsMjcvSDlTQnJyOWZRTk94RVllSzduZFAyRkZSaGNGNmVtYWxXU289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5nQ1lTZGY1US1lQU1qZWZWMXRlVHciLCJwaG9uZUlkIjoiYTIxOWE5MWUtZjRjNC00ZDEwLWEyMWMtYWFlOTZlNjRkOWM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFwbVVVb3RuQzRGdmFDNnYxTjdaM1lDcjU4UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyb2tKQW1UZnE0c2lwU1pKUGl0ZDdDS2xQMjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWTFYQ0ZEWUQiLCJtZSI6eyJpZCI6IjkyMzM0NjY5MDIzOTo5OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNdXNrYW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01LL3FaSUNFSWJWc2JVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilh5ZUNmTXpDNi9IWU1WQ05ocFZyT0FiZ2JRVnBRVW1URGJydmZhRnE2VUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlGa21lMzZKSkVDWEFGOEVuSjVuNUtOUGRyTjZHZjUrNUkrNEFqTUtNM2hzVTg0eGMzSk54eVB4WGJNanRQRklZY2VpMXNFNDMvb2hKMnZQZzFFQ0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxenFzYWI4SkxwRE9XTDFVdXprajlIbVhpblllNG1mVEN1bHBtN0M3VERTS3Fna1JETzFFU25DNzdESG1YY2tFeng1VFZPTFJjeFcvbWM4VUZGNHlCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0NjY5MDIzOTo5OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWOG5nbnpNd3V2eDJERlFqWWFWYXpnRzRHMEZhVUZKa3cyNjczMmhhdWxBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTc1NTA3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtMRSJ9"
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
