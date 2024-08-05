const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="cutepixel33@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "233256793164" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233256793164";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_41_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5LFxuICAgICAgICA1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc1LFxuICAgICAgICA1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDkxLFxuICAgICAgICA3MixcbiAgICAgICAgMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzksXG4gICAgICAgIDc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDczLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBDeDYxeW5wNzFuRmJ3QlU4cjlPZ2Q2UDRJK0U0dVhyR2x6ZUF1YUFaMlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm50RmpQMEFWUkZDVS1zRDhBNEJlN2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjZlMjJlN2MtMTk2Yi00NmVmLTkwNGMtZDc1NjFiNTY1MDRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMTU3LFxuICAgICAgMTk2LFxuICAgICAgMTk2LFxuICAgICAgMTg4LFxuICAgICAgMjUsXG4gICAgICA0NixcbiAgICAgIDMyLFxuICAgICAgMTM4LFxuICAgICAgMjMxLFxuICAgICAgNDYsXG4gICAgICAxOTksXG4gICAgICAxMSxcbiAgICAgIDY0LFxuICAgICAgMTMxLFxuICAgICAgMTAxLFxuICAgICAgMTUxLFxuICAgICAgNDcsXG4gICAgICAxMjEsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAxMzksXG4gICAgICAxODgsXG4gICAgICAyNTEsXG4gICAgICAxMTEsXG4gICAgICA4NixcbiAgICAgIDc5LFxuICAgICAgMTIyLFxuICAgICAgNTEsXG4gICAgICAxNzcsXG4gICAgICAxNDgsXG4gICAgICA3NSxcbiAgICAgIDg4LFxuICAgICAgMTgyLFxuICAgICAgNzIsXG4gICAgICAxMDYsXG4gICAgICAxMjQsXG4gICAgICAyNDQsXG4gICAgICAxMCxcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMMkZRV1pBMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjU2NzkzMTY0OjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjk3OTgzOTEyNTExMjE6NjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmpKNk8wRkVJS1J3N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmS1QrYWQyaElGUEplaXlUcDMvb3JrTVRIL0l2Y20wcFJVNENKYkpLdUU4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjkwWW5GOVhkeHpLY0hpeG8wRytBZUZIVUFtdmpQZmZZREJZQkRxMWFMaXhiSjZjTExncm43RmY1YlRTV0lucXhiTTREVXNKT1hiM29zSlg0Z1g2SkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklkMTU0bXlLR2I1YkRTdmZLbWgzdzdCUHRpWW51bDFxOXRydTM3dU5tZXJ6cmluNEhUN0dvUU9laDJuWmd2SlFKZ09ZajZTcTl1M0djaHVIQnVKTUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI1Njc5MzE2NDo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg2MTcwNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mike"  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
