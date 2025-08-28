const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpWSkZYak9iZktiS2lPakVzVkZKcjRXRDBlNEpVUlluQXprTkVQTGNuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXVDdUIxWDFoUXdscmhVZGFLcktRSVRVU1Yvc1VxQVBtUC9wbVViWnJIMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTWJZZDJyWjZkQXVWSHhORlhoM1lXcUd6SHRVMWpvRGV1SEMwNDcrSlY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNM0RUVU15b3BWeEcxeGtOQzR0d0NRbEYwMVNSbzFndnpRYThaZnc4eWo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVIOHBDSVRobXZpcFVGOW9DaTZwQm0vVHlyajlwMEM3WXlxTTZRakhrMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJtSGNPeHRGdHBaR1BFMVVuNUwvOHorVWFCOVhZcSsyR3JrY0dvcmZnWEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVIM3BFOEVNbjRzcmhqRUsrQlRxVm5uNG5TdGU0VHAzc2Z6RW54VTVXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmdNYzFybTFFZStyM0JCUG1nTHFQQ0IxelBCdmhxcUdITGNDMExwQmN6MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFoQ09KaTZzQ0hIVVpZSDJCUzdiS1hMd3NGdy9iUE9vY1QyY1Z3QmR4am9LUDVsNTdGMkpoenBEMDlrd3d3ejIyK215TEdqWE56emtob2dqeDUzaURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJMYzViNDhMNHJ3WmdKRDFISTdZRW4xeWl0QnlaSGNCMWttV040a3lNTDdNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQyODE4MDQ2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQTAyRDlCQzMxNTM2OUVEMjg0ODdDMEUyREZCNDFGOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MzY2OTQ5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIyQ0hSM1BNSCIsIm1lIjp7ImlkIjoiOTIzNDI4MTgwNDY1OjVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI2OTc4MDkyMDg5MzYzNjo1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlRFbXU0RkVONlF3TVVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibUlDMzVGS3BxUzZ5cGM5ek5WenQwUGNlQ0pwNXRnN2NJTWlTOVFZVEZHMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM20xaCtkd2RscGNtVUhvVUk5Nzk5YkxSdzdXMG5Fb25JdllQVHA0ei9vRnB1bW5pTFVNekRraXYvQXNNd0ZFMXdIR2Y2aEZTL0hCQnVDRFZQczh6Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IlowTEx6UWdsVDBtaHlRUzJabnVBM2d5c1FEOWZvTHg0dzFWOU9zZjNob0k5WUcwZENMWWFsY0xReG1FMDVWeURIOEZiNFVHMTJrY1AyMVVwSWJHbkR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDI4MTgwNDY1OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmlBdCtSU3Fha3VzcVhQY3pWYzdkRDNIZ2lhZWJZTzNDRElrdlVHRXhSdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MzY2OTQ2LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐖𝐇𝐈𝐓𝐄 𝐖𝐎𝐋𝐅🐺💀*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/l3glk8.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐖𝐇𝐈𝐓𝐄 𝐖𝐎𝐋𝐅",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝐖𝐇𝐈𝐓𝐄 𝐖𝐎𝐋𝐅",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923428180465",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝐖𝐇𝐈𝐓𝐄 𝐖𝐎𝐋𝐅 Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐖𝐇𝐈𝐓𝐄 𝐖𝐎𝐋𝐅 Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/l3glk8.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923428180465",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
