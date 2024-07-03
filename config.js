const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_23_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MixcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI4LFxuICAgICAgICA5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMTQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMixcbiAgICAgICAgMjQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNixcbiAgICAgICAgMTUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVTlzc3FVeW5YTXN3aHIzVnlDaEFDSVVtRVVHTHFub2R4ZWlLaEpmWkJwaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0YxT25XWHlUYTY2bXlxN04ydXpKUVwiLFxuICBcInBob25lSWRcIjogXCIxMGMxYmJiOS1lMTVhLTRiM2EtYjUyMS00ODYzMTgxZDUyNDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgODMsXG4gICAgICAxODYsXG4gICAgICAxODMsXG4gICAgICAxMDYsXG4gICAgICAyMyxcbiAgICAgIDg3LFxuICAgICAgMTE1LFxuICAgICAgNzksXG4gICAgICA4LFxuICAgICAgMTgzLFxuICAgICAgMjEyLFxuICAgICAgMTAxLFxuICAgICAgMTYsXG4gICAgICAxNzksXG4gICAgICAxOTcsXG4gICAgICAyMDUsXG4gICAgICA4NixcbiAgICAgIDIzMyxcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAyLFxuICAgICAgMjYsXG4gICAgICAxNTcsXG4gICAgICA5MCxcbiAgICAgIDI0OCxcbiAgICAgIDE1NSxcbiAgICAgIDEzMyxcbiAgICAgIDEzMSxcbiAgICAgIDExNSxcbiAgICAgIDIyOSxcbiAgICAgIDE1NCxcbiAgICAgIDE5MyxcbiAgICAgIDE1MCxcbiAgICAgIDE1NSxcbiAgICAgIDEyMixcbiAgICAgIDEzNixcbiAgICAgIDIwMyxcbiAgICAgIDIzMyxcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWSDNNWE1STVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjU2NzkzMTY0OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjk3OTgzOTEyNTExMjE6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVRCeFlnRUVQbjRrN1FHR0JzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0azZVUkhXNTdVMEZ2QVdyb1BxTDlSRjh6S2ovbllWNlBxTy8vK3RFZVdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNMU3V4OWZ4M0NpVW9mdGh2aUFwbHQycGNFZ3BxQmJFTjlJTG4yRWJkVGVvUkY5MGdlRDc1MGhJQ2NlK0tiRTVxR0Y4UTcyblU4Yk1lOWR1bGpUSERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlczdkMvVjRoRXZzV2xRS0xFOStNQVJvMjNqQXRpWmtzTnloVy90b0MwQ3RhallyQWpIb21ING5IYU4zSFlpb1lpaWdLdlgxdlJIQ1BmY09mOHJxOWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI1Njc5MzE2NDozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTkxNDIwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
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
