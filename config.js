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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "242069351815";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_09_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNixcbiAgICAgICAgOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNCxcbiAgICAgICAgOSxcbiAgICAgICAgNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAzMixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTAyLFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDcxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcxLFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgNjksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgyLFxuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3LFxuICAgICAgICAxNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK092VmlzemlVOWVpSSs1cXViZHVqOG15YkM3UlRYbEVmdCtjMURJQllWND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicG5manU0ekZTWmlkbEZ2ZEdmaVNBUVwiLFxuICBcInBob25lSWRcIjogXCJjODdlYWY2NS1kYWQ0LTRkODAtYjNlZC01NGM3MDgyYjM0NmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICA2MixcbiAgICAgIDY5LFxuICAgICAgMTY5LFxuICAgICAgMjI4LFxuICAgICAgMTI1LFxuICAgICAgMTMzLFxuICAgICAgNjQsXG4gICAgICA5MCxcbiAgICAgIDE4OSxcbiAgICAgIDIyOCxcbiAgICAgIDExNyxcbiAgICAgIDE4NyxcbiAgICAgIDk4LFxuICAgICAgMTg3LFxuICAgICAgODMsXG4gICAgICA4MyxcbiAgICAgIDIwMSxcbiAgICAgIDkzLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMjI2LFxuICAgICAgMTg0LFxuICAgICAgMjUsXG4gICAgICA0NCxcbiAgICAgIDE4OCxcbiAgICAgIDY3LFxuICAgICAgMTg2LFxuICAgICAgMTA0LFxuICAgICAgMTM3LFxuICAgICAgMTYwLFxuICAgICAgMTM5LFxuICAgICAgMzYsXG4gICAgICAyMjMsXG4gICAgICAxOTYsXG4gICAgICAzNixcbiAgICAgIDE3NSxcbiAgICAgIDUyLFxuICAgICAgMTIxLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1BSzI1WVJQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDIwNjkzNTE4MTU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExODI0NTE5NzY2ODQwNDoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKWGRvZGNERUxhbnFiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIko2RWxHZll1dDFvUHVXTkdOdkdocXZ5UzdaWlo0TzhkR1RybnhacUh1VGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibDlBZDRDQVc5UUxOTVg5Z0RNUnZKb1VwRG04K1VqdXhnekVFVWpxRXRVRUdhTEEvWjBsQlhlaGFxaDlueU1xUCtJeTRnNjluOXFhT3o2cUZtOG1wQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWnFnR1hJL3lURmR0OHd6dkFtWWZ6eU9pTnhuckJMOWRSK3hFTDZKRkRGOWczUGxQZW1TVkpsc0FZRGNaWmVZaGVmNy9GU3FTc1VNS3FkUnlqbzBrQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQyMDY5MzUxODE1OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQzODU4NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "che guevara",
  packname: process.env.PACK_NAME || "jeunes révolutionnaires",
  botname : process.env.BOT_NAME  || "che guevara",
  ownername:process.env.OWNER_NAME|| "guevara935",


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
