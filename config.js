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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348155228246";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_05_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICA5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDcwLFxuICAgICAgICA5MixcbiAgICAgICAgMTE3LFxuICAgICAgICA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MCxcbiAgICAgICAgNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwLFxuICAgICAgICA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMyLFxuICAgICAgICA0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5OWhkWDJVOHNhNkxqWXJlMTdxaXdSc2RUYndiRkE1RGp0VElqOEZSOXB3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNTUyMjgyNDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ5NUY3Mzg1MUQzM0VFM0QwNDA4NjUxQUFCMjI3NTU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODY1ODMyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNTUyMjgyNDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIyNTlBNjA4RTNDMDhCRTI3Q0MyOTZFNzZBRERBRTVGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODY1ODMyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuZUV5c1llOVN1R0lOOU9mZlFZMjVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNlNGM5Y2RiLWIyZmYtNDExZC1iNWVlLTg1MTYxNTIxMWMxM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDE1NixcbiAgICAgIDQ3LFxuICAgICAgNTQsXG4gICAgICAxMjUsXG4gICAgICAzMyxcbiAgICAgIDE0NixcbiAgICAgIDIxNCxcbiAgICAgIDE4LFxuICAgICAgMjAxLFxuICAgICAgMjA1LFxuICAgICAgNDMsXG4gICAgICAyNTIsXG4gICAgICAwLFxuICAgICAgMzIsXG4gICAgICAxNjMsXG4gICAgICAyMTYsXG4gICAgICAxMDUsXG4gICAgICAxMTIsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICAxMTIsXG4gICAgICAxMDMsXG4gICAgICAxMDYsXG4gICAgICAyMjEsXG4gICAgICA3OSxcbiAgICAgIDExNixcbiAgICAgIDI0LFxuICAgICAgMTA5LFxuICAgICAgNTUsXG4gICAgICAxMzQsXG4gICAgICAxNzAsXG4gICAgICAxNjEsXG4gICAgICAxMzksXG4gICAgICAyMTMsXG4gICAgICA1LFxuICAgICAgMTMzLFxuICAgICAgMjMzLFxuICAgICAgNjYsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNE5CV1dUVEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTUyMjgyNDY6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkphZGUgQ3J5c3RhbCBDb2xvdXJzXCIsXG4gICAgXCJsaWRcIjogXCIxOTcxNjkxMTQwMDE1NjM6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMSG55V3NRaWNyQ3N3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInU5WHlXNGEvUUZrT3ZpZ0Z5MlUvVms1cjRtSDYrVlhNbnZJMGppRHVOajA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOHc5aUxvMkNyNE5DUzI1bmNNcFd2a1U2bDhNYllLTkhYYW5hT2pXbGtObXNMbHdQUmM1WEhoWHRBQXByVGlqd2xRcWJxU0xOeFhKK09FU0ZaL2gxQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ1c5ZmJacGFPb2tRM1lDTTJpSWxia0dOYTVNMU5GYkp4TnB2cm9DTWlxYld6elJaTCtjRFdlOFRVS0h3endEeWRuQWErcndRY0JZWUQ2bGJBMWVRZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1NTIyODI0Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg2NTgzMTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOaldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5qVy5qc29uIjogIntcImtleURhdGFcIjpcInMrWXVKU3VSd3BGWU1hbHVHaEVvc1VtUmxkOUhubFFIZWdaTTlrNGl3c2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjI1NjA0NTI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg2NTgzMjE0NzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
