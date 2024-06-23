const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Nigeria,Ogun state."


global.mongodb= process.env.MONGODB_URI || "mongosh "mongodb+srv://cluster0.zca9hz8.mongodb.net/" --apiVersion 1 --username immanueladebayo302"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9072642884";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,9072642984x";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,9072642884";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_56_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcyLFxuICAgICAgICA2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI5LFxuICAgICAgICA4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICA4NCxcbiAgICAgICAgNixcbiAgICAgICAgMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9SVXdDVTVZYWdod0t1S3ZVRmRMdW1QRFhtMDRUQXkxNlhNRW56T2xISkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImoyQ2NUdl8xUWFhRTVaa3dkc1VDMFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWYxODhkYWQtNTcxYi00MzQzLTk2ZGItYWVmNTk4YzM3YTQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OCxcbiAgICAgIDExLFxuICAgICAgODMsXG4gICAgICA0OCxcbiAgICAgIDIzMyxcbiAgICAgIDIyMSxcbiAgICAgIDQ4LFxuICAgICAgMTE5LFxuICAgICAgMTkxLFxuICAgICAgOTUsXG4gICAgICA4NSxcbiAgICAgIDk4LFxuICAgICAgNTcsXG4gICAgICA0NixcbiAgICAgIDg2LFxuICAgICAgMTksXG4gICAgICA4MSxcbiAgICAgIDIyMCxcbiAgICAgIDE0NCxcbiAgICAgIDE1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMTg3LFxuICAgICAgNzEsXG4gICAgICA0MSxcbiAgICAgIDQzLFxuICAgICAgMTE5LFxuICAgICAgMTg3LFxuICAgICAgMjM0LFxuICAgICAgMjIzLFxuICAgICAgNjUsXG4gICAgICAxMTcsXG4gICAgICAxMzIsXG4gICAgICAyNDgsXG4gICAgICAyMDEsXG4gICAgICAyNDYsXG4gICAgICAyNDcsXG4gICAgICA3MyxcbiAgICAgIDIxLFxuICAgICAgODEsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNHODYyQUhGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcyNjQyODg0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM3MDM1ODU1MzQzNzMwOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTENOdGFBR0VNYmwzYk1HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiTml6YTFPaDZIRHlEdVJZbm14M3l6YmllOFYxOGNXS2hPVXhMNGUzQnpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpoQW9kWVZ6bHlHQXVvays3SGs1NWpZVWNGMkNHWlBaNVNtY05lOXZOV0o3K3cyaDAvOWZnS3NKL3A2eWVFMWlkTkZjcStkUkYwckhKUWhvdjZvTUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZ6b0VRRUFmWlRmZFlJakdnOUJ0ck9LbzEvSUYzWUtLSXV1NkVkY3lvNnJVWHZ4Mngyd3RIQ1VHeFdUN2d2SXBiSEZpTGlDajIvd0F2YTJMN3hReWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzI2NDI4ODQ6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTEwNDIwMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "EmmyGold",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "EmmyGold"  ).toUpperCase(),



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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
