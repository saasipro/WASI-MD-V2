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
global.owner = process.env.OWNER_NUMBER || "+92 337 6156638";
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

global.SESSION_ID ||eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVYSkZ1M3FKRmRYZmxGTnBjUDdyZG9FUHpUWGVkaXBLeGVFb0poTmcyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3BmRllpd21PdGVxcFRJdyszaVlQUit5akNnMGtZV1JDV3VlUldRWFRRND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRUN3Y0JYZFQ2YnpZRVpPNENjNG5hTVFQelcybkNSOGlQYW9kNHFlZFY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Y0hkYUFjMzMwVC9ZNUxwOThnZUNxOGRhdXVWWEM1bkxSaWFrajc1djJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Qa3ZJSXV0bjRGVHZLOVBpMENKUll1ZURGNVpLdWZLS3VFeGkrbUx0Mm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhsWE9yYk0wbXhDM2FqaWdFTE1RS2JNYnY0cWk2MkxDbDI2RVprOGowVG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RyZUV4anRLTVY3Mk1tbUhnbGhLcWEzb01aZFE3ekVhdFNSSVV0UVlGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmhZOElYdzJWNlNoSEZJMkRFeTJvTjdHRE51L0N6M1l1Q25KMWk4OHRWOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBWNGZoOUJaQ1k3QzZEM2pFYTUwaURqcE1XQTlaWURBRXkvRFl4ZzVIL1pzYWFrZ0YrZ2JtRzJOOHFGQWkwRTJ1bmhZdndBNkwxYzB5RDJQaXI4aUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJleGJqQXlua015WGhrM2QvT2Z5M0N3UjQyejQ5NFVCU1Z0cGZMd3RDMVlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjOGlfRy1paVJtcW4ycnFmOTFCUjFRIiwicGhvbmVJZCI6IjA1YjdkYTk2LTg0YjQtNDg5ZS04NzQ4LWFhOTkzZTk1YzQzNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQWpCYm9OblhVM3RIREFRTnQ4SWYzMU5WYkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUE1JVmwzam1iTG1GNG5udjRHTWw3MERzRXlvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilc0TEc1RjIyIiwibWUiOnsiaWQiOiI5MjMzNzYxNTY2Mzg6MTVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09YRDBMVUJFTy9Lb2JVR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikp0SVdFZC9DSC8yNThQYUxyMldGT3VpeEhjdHZWODYvY1JPNnVPZC9LbmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZidWo0TXBFSW1pazZtWkw4b3RvYVpCbHYzRFhDcndiRVNBdEhBLzFYdXdacTdySUNqSjdvK3p0UENhSmtVaEZrRXdqSHdCQUJRc3RxbG1qMllONEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKa1R1UmJvVDdwdTRmdnlzZnEvSEx2bStmVDhZUS9tekZaZ3B4Y3h5bUNyZWY3emhpVFdGUC9XVG81d1Evd09jQlhaTlR4aURYMEZvVnhZbzNBT2hBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM3NjE1NjYzODoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTYlNGaEhmd2gvOXVmRDJpNjlsaFRyb3NSM0xiMWZPdjNFVHVyam5meXAzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzEyMDU5fQ==
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVYSkZ1M3FKRmRYZmxGTnBjUDdyZG9FUHpUWGVkaXBLeGVFb0poTmcyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3BmRllpd21PdGVxcFRJdyszaVlQUit5akNnMGtZV1JDV3VlUldRWFRRND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRUN3Y0JYZFQ2YnpZRVpPNENjNG5hTVFQelcybkNSOGlQYW9kNHFlZFY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Y0hkYUFjMzMwVC9ZNUxwOThnZUNxOGRhdXVWWEM1bkxSaWFrajc1djJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Qa3ZJSXV0bjRGVHZLOVBpMENKUll1ZURGNVpLdWZLS3VFeGkrbUx0Mm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhsWE9yYk0wbXhDM2FqaWdFTE1RS2JNYnY0cWk2MkxDbDI2RVprOGowVG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RyZUV4anRLTVY3Mk1tbUhnbGhLcWEzb01aZFE3ekVhdFNSSVV0UVlGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmhZOElYdzJWNlNoSEZJMkRFeTJvTjdHRE51L0N6M1l1Q25KMWk4OHRWOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBWNGZoOUJaQ1k3QzZEM2pFYTUwaURqcE1XQTlaWURBRXkvRFl4ZzVIL1pzYWFrZ0YrZ2JtRzJOOHFGQWkwRTJ1bmhZdndBNkwxYzB5RDJQaXI4aUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJleGJqQXlua015WGhrM2QvT2Z5M0N3UjQyejQ5NFVCU1Z0cGZMd3RDMVlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjOGlfRy1paVJtcW4ycnFmOTFCUjFRIiwicGhvbmVJZCI6IjA1YjdkYTk2LTg0YjQtNDg5ZS04NzQ4LWFhOTkzZTk1YzQzNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQWpCYm9OblhVM3RIREFRTnQ4SWYzMU5WYkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUE1JVmwzam1iTG1GNG5udjRHTWw3MERzRXlvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilc0TEc1RjIyIiwibWUiOnsiaWQiOiI5MjMzNzYxNTY2Mzg6MTVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09YRDBMVUJFTy9Lb2JVR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikp0SVdFZC9DSC8yNThQYUxyMldGT3VpeEhjdHZWODYvY1JPNnVPZC9LbmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZidWo0TXBFSW1pazZtWkw4b3RvYVpCbHYzRFhDcndiRVNBdEhBLzFYdXdacTdySUNqSjdvK3p0UENhSmtVaEZrRXdqSHdCQUJRc3RxbG1qMllONEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKa1R1UmJvVDdwdTRmdnlzZnEvSEx2bStmVDhZUS9tekZaZ3B4Y3h5bUNyZWY3emhpVFdGUC9XVG81d1Evd09jQlhaTlR4aURYMEZvVnhZbzNBT2hBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM3NjE1NjYzODoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTYlNGaEhmd2gvOXVmRDJpNjlsaFRyb3NSM0xiMWZPdjNFVHVyam5meXAzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzEyMDU5fQ=="
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
