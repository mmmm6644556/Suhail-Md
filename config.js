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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_19_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM0LFxuICAgICAgICA2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3LFxuICAgICAgICA0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MixcbiAgICAgICAgMjUzLFxuICAgICAgICA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU0LFxuICAgICAgICA1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTExLFxuICAgICAgICA1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInJGSnJtYVd1aURxMEV4N0lSMDdDekd0TVhqZk5nZFBsbWY2ejA5b2pGb289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODk5NTgyMjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM1ODRDMzYyMjVDNzJFMkY3RjUwRDA5NjYyQjI3RDcwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzA1ODMyN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzS08yNGJKZ1FZbWlXanFHOElJanpRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQzZjlmMmQzLTBiYzQtNGY2Yi04MDI4LTAzOWI2MjQ0ZGQzOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDI1LFxuICAgICAgMTYsXG4gICAgICAxMzYsXG4gICAgICA1NixcbiAgICAgIDE0NixcbiAgICAgIDg3LFxuICAgICAgMjQ5LFxuICAgICAgMTMsXG4gICAgICAzMCxcbiAgICAgIDI0NCxcbiAgICAgIDksXG4gICAgICAyMjEsXG4gICAgICAyNDYsXG4gICAgICAxMTAsXG4gICAgICAyMzMsXG4gICAgICA4OCxcbiAgICAgIDIzMCxcbiAgICAgIDQxLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDY5LFxuICAgICAgMTYyLFxuICAgICAgMjA4LFxuICAgICAgMjAzLFxuICAgICAgMTc5LFxuICAgICAgMTA5LFxuICAgICAgMTYsXG4gICAgICAxMzQsXG4gICAgICAxMTYsXG4gICAgICAyMTMsXG4gICAgICAyMzksXG4gICAgICAxNyxcbiAgICAgIDIzLFxuICAgICAgMTg1LFxuICAgICAgMjIwLFxuICAgICAgMTA4LFxuICAgICAgNzAsXG4gICAgICAxNDEsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUFDR0hZVkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg5OTU4MjI1OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRM2fRc2fWM2fVM2fRc2fUs2fXCIsXG4gICAgXCJsaWRcIjogXCIyNjEzNDkxNzk0MTI1ODI6NTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT21Mbi9nQ0VKR1J6N1VHR0RFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlbU9CdTFvMTNJOEEyUk92ZnRzNFpiRjhJbWhUVHZidWhMZk1UbFk3Z2hjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNYQUpCZTVnNGNZSFRUMzJvbjZZTXFucXkzZGVneGFGc2lQZTV3Z09lV2prd2ViendObUwvT3FJaWpmQ2RINkRhcGY3UWxKNk5wN1NCQlFrbXQyZ0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkM4RWVtYXBuVkZGemFsRDg2T3A4WXY1VnRDYVNQMHFVMy9ab2ZtcFcrajU5OFZrMTk4NldGb0lKUWRiU09GaHhidllLYnV1MFI0ZW52YzJGeW9UMURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg5OTU4MjI1OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA1ODMyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBUTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFRNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQkp1ZkxBeFQ1NTJManRjUTZZUi9WaHc5dFNMWmdQTk81U0FZbXA1K1cyST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3ODkwMzg1NjksXCJjdXJyZW50SW5kZXhcIjoxNCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0Mjk3ODkwMzRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
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
