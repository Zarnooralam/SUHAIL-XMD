const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_51_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDU1LFxuICAgICAgICAzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc2LFxuICAgICAgICA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDEwLFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1LFxuICAgICAgICA5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDUsXG4gICAgICAgIDk4LFxuICAgICAgICA4NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkh1RVpENkZueGI0VmZYVjduaExhUUVBNmIxdHNuYi9yY05wald4Ukg4UTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInd6bm0wQ3d3U05hUVpCYjktYllFN1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWM2OWVlZjItZDk5OC00ZjhhLTg1ZGMtMjcxOGIwZjY0ZGMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDIzOSxcbiAgICAgIDQyLFxuICAgICAgMTA1LFxuICAgICAgMTU0LFxuICAgICAgMTEyLFxuICAgICAgMTA4LFxuICAgICAgNjAsXG4gICAgICAxNDQsXG4gICAgICAwLFxuICAgICAgNixcbiAgICAgIDIwOCxcbiAgICAgIDkzLFxuICAgICAgMjI5LFxuICAgICAgMTUwLFxuICAgICAgMTY4LFxuICAgICAgMjU0LFxuICAgICAgMjEzLFxuICAgICAgNDMsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMTUyLFxuICAgICAgMTk5LFxuICAgICAgNzUsXG4gICAgICAxNjMsXG4gICAgICAyMTcsXG4gICAgICAyMSxcbiAgICAgIDE2NyxcbiAgICAgIDE3OSxcbiAgICAgIDEzNCxcbiAgICAgIDE3MCxcbiAgICAgIDE4MCxcbiAgICAgIDMwLFxuICAgICAgMTQ1LFxuICAgICAgMjUwLFxuICAgICAgMTA4LFxuICAgICAgMjIxLFxuICAgICAgNjgsXG4gICAgICA4NixcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJZWVpKWlk2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM3MDUzNTExNTA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNzQ4MjQyMzI0Mjc1NToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaWs2NHNERU11NDY3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJJL1JLSlM4dzZWY0krMkM5UXRjSmNVcGdnSnBCNkNZSHJHbE5kMDA0eDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQXQ2OEdRejY4dWtEWmJzSVNNdHh0VkU5NFBvTkJjYXFRSll2UUJQSm1IbUI1VGs0Mk5FK0VOTGxqMVVBbkIwUXNJSVlKS0JNZDNZdjEzc1ppMXhaQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWTM1dnF0dkFsYVFpa2dDVWVwaitIWU03c2RURWdBTXZrUDVGZUt0T0lDaUpHNktPWnl0Yy9KVEJEZnQrckpva1ZGWUNka1d6VTVwQXpZamxLQWJJQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNzA1MzUxMTUwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MDA3ODg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0NBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHQ0EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWeWVSYWRPWSt2aE1qbGJRZGRZckJURGhmcm9YdTNoaS9FcHZreTQwRTlVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzMDEzMjc1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzkzNDQ4MzM3MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
