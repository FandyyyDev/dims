const {
        WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const toMs = require('ms')
const crypto = require('crypto')
const fetch = require('node-fetch')
const { exec } = require('child_process')
const client = new WAConnection()
const yts = require('yt-search')

// Lib
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./database/baileys/rpgfunction");
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./database/baileys/lvlfunction");
const { addBalance, kurangBalance, getBalance } = require("./lib/balance")
const { color, bgcolor } = require('./lib/color')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { lirikLagu } = require('./lib/lirik')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif")
const { wikiSearch } = require('./lib/wiki')
const { herolist } = require('./lib/herolist')
const { herodetails } = require('./lib/herodetail')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { mediafireDl } = require('./lib/mediafire')
const { pinterest } = require('./lib/pinterest')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const scrapper = require('./lib/scrapper')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/myfuncx')
const game = require("./lib/game");
const Exif = require('./lib/exif')
const exif = new Exif()

// Database
let event = JSON.parse(fs.readFileSync('./database/event.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
// let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let antitele = JSON.parse(fs.readFileSync('./database/antitele.json'))
let antibitly = JSON.parse(fs.readFileSync('./database/antibitly.json'))
let antiyt = JSON.parse(fs.readFileSync('./database/antiyt.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
let nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
let mute = JSON.parse(fs.readFileSync('./database/mute.json'))
let settings = JSON.parse(fs.readFileSync('./config.json'))
let mess = JSON.parse(fs.readFileSync('./message/mess.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let tictactoe = JSON.parse(fs.readFileSync('./database/tictactoe.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let family = JSON.parse(fs.readFileSync('./database/family100.json'))
// let siapakahaku = JSON.parse(fs.readFileSync('./database/siapakahaku.json'))
let tebakkalimat = JSON.parse(fs.readFileSync('./database/tebakkalimat.json'))
let tebakkata = JSON.parse(fs.readFileSync('./database/tebakkata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
// let tekateki = JSON.parse(fs.readFileSync('./database/tekateki.json'))
// let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))

// Database Rpg
let _RPG = JSON.parse(fs.readFileSync('./database/baileys/rpg/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./database/baileys/rpg/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./database/baileys/rpg/inventori.json'))
let _healt = JSON.parse(fs.readFileSync('./database/baileys/rpg/healt.json'))

cmhit = []

// Settings
let {
    ownerNumberr,
    ownerName,
    botName,
    apikeys,
    txtDonate
} = settings
let thumb = fs.readFileSync(settings.pathImg)
let qris = fs.readFileSync('./media/qris.jpg')
fake = `© ${ownerName} || ${pendaftar.length} User ❤️`
healthCounts = 100
potionawal = 1
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
publik = true
bugc = true
multi = true
nopref = false
ky_ttt = []
tttawal = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

// Functions StcCmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = fadly = async (fadly, msg) => {
   try {
       if (!msg.hasNewMessage) return
       msg = msg.messages.all()[0]
       if (!msg.message) return
       if (msg.key && !msg.key.remoteJid == 'status@broadcast') return
       if ((Object.keys(msg.message)[0] === 'ephemeralMessage' && JSON.stringify(msg.message).includes('EPHEMERAL_SETTING')) && msg.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !msg.key.fromMe) {
       nums = msg.participant
       longkapnye = "\n".repeat(420)
       tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
       fadly.groupRemove(msg.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
       fadly.sendMessage(msg.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
       }
       msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
       const typei = Object.keys(msg.message)[0]
       global.prefix
       me = fadly.user
       m = simple.smsg(fadly, msg)
       const antibot = m.isBaileys
       const content = JSON.stringify(msg.message)
       const from = msg.key.remoteJid
       const type = Object.keys(msg.message)[0]
       const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
       const { newMenu } = require('./message/help')
       const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
       const cmd = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(msg.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(msg.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(msg.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
       fadly.on("CB:action,,battery", json => {
       const battery = json[2][0][1].value
       const persenbat = parseInt(battery)
       baterai.battery = `${persenbat}%`
       baterai.isCharge = json[2][0][1].live
       })
       if (multi){
           var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '#'
       } else {
       if (nopref){
           prefix = ''
       } else {
           prefix = prefa
           }
       }
       isStc = Object.keys(msg.message)[0] == "stickerMessage" ? msg.message.stickerMessage.fileSha256.toString('hex') : ""
       isStc = `${isStc}`
       const timestamp = speed();
       const latensi = speed() - timestamp
       const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
       isStc !== "" && content.includes("conversation")
       const body = (type === 'listResponseMessage' && msg.message.listResponseMessage.title) ? msg.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption.startsWith(prefix) ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption.startsWith(prefix) ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(msg.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(msg.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(msg.message.stickerMessage.fileSha256.toString('base64')) : ""
       const budo = (typei === 'conversation') ? msg.message.conversation : (typei === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
       const budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
       const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
       const args = body.trim().split(/ +/).slice(1)
       const isCmd = body.startsWith(prefix)
       const arg = budy.slice(command.length + 2, budy.length)
       const q = args.join(' ')
       const c = args.join(' ')
       var pes = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''
       const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
       cmhit.push(command)
       const botNumber = fadly.user.jid
       const ownerNumber = ["62895379169488@s.whatsapp.net", "6285867933269@s.whatsapp.net", "6283877301667@s.whatsapp.net"]
       const isGroup = from.endsWith('@g.us')
       const sender = msg.key.fromMe ? fadly.user.jid : isGroup ? msg.participant : msg.key.remoteJid
       const senderNumber = sender.split("@")[0] 
       const conts = msg.key.fromMe ? fadly.user.jid : fadly.contacts[msg.sender]
       const pushname = msg.key.fromMe ? fadly.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
       const totalchat = await fadly.chats.all()
       const chat_all = await fadly.chats.all()
       const groupMetadata = isGroup ? await fadly.groupMetadata(from) : ''
       const groupName = isGroup ? groupMetadata.subject : ''
       const groupId = isGroup ? groupMetadata.jid : ''
       const groupMembers = isGroup ? groupMetadata.participants : ''
       const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
       const groupDesc = isGroup ? groupMetadata.desc : ''
       const groupOwner = isGroup ? groupMetadata.owner : ''
       const isOwner = ownerNumber.includes(sender)
       const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
       let d = new Date
       let locale = 'id'
       let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
       const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
       const week = d.toLocaleDateString(locale, { weekday: 'long' })
       const calender = d.toLocaleDateString(locale, {
       day: 'numeric',
       month: 'long',
       year: 'numeric'
       })
       let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
       const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
       const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
       const mentionByreply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
       const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
       mention != undefined ? mention.push(mentionByreply) : []
       const mentionUser = mention != undefined ? mention.filter(n => n) : []
       const isUser = pendaftar.includes(sender)
       
       // const isPremium = premium.includes(sender) || isOwner
       const isNsfw = isGroup ? nsfww.includes(from) : false
       const isGroupAdmins = groupAdmins.includes(sender) || false
       const isAntiWame = isGroup ? antiwame.includes(from) : false
       const isAntivirtex = isGroup ? antivirtex.includes(from) : false
       const isAntiLink = isGroup ? antilink.includes(from) : false
       const isAntiTele = isGroup ? antitele.includes(from) : false
       const isAntiBitly = isGroup ? antibitly.includes(from) : false
       const isAntiYt = isGroup ? antiyt.includes(from) : false
       const isWelkom = isGroup ? welkom.includes(from) : false
       const isMuted = isGroup ? mute.includes(from) : false
       const isEventon = isGroup ? event.includes(from) : false
       const isPetualang = checkPetualangUser(sender)
       membr = []
       const pff = groupMembers
       const go = groupMembers
       const goo = pff[Math.floor(Math.random() * pff.length)]
       const oe = go[Math.floor(Math.random() * go.length)]
       const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
       const isButton = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
       
       function parseMention(text = '') {
           return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
       }
       function monospace(string) {
           return '```' + string + '```'
       }
       function randomNomor(angka){
           return Math.floor(Math.random() * angka) + 1
       }
       const simir = (teks) => {
           fadly.sendMessage(from, teks, text, { quoted: msg })
       }
       const math = (teks) => {
           return Math.floor(teks)
       }
       const sendMess = (hehe, teks) => {
           fadly.sendMessage(hehe, teks, text, { quoted: msg, contextInfo: { forwardingScore: 508, isForwarded: true}})
       }
       const reply = (teks) => {
           fadly.sendMessage(from, teks, text, {quoted: msg})
       }
       const isUrl = (url) => {
           return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
       }
       const katalog = (teks) => {
           res = fadly.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999, "message": teks, "footerText": `*© ${ownerName}*`, "thumbnail": thumb, "surface": 'CATALOG' }}, {quoted: msg})
           fadly.relayWAMessage(res)
       }
       const costum = (pesan, tipe, target, target2) => {
           fadly.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
       }
       const grupinv = (teks) => {
           grup = fadly.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/JI25LDtPW784GAZoRD9fW9', "groupName": `${ownerName}`, "footerText": `*© ${ownerName}*`, "jpegThumbnail": thumb, "caption": teks}}, {quoted:finv})
           fadly.relayWAMessage(grup)
       }
       const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? fadly.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : fadly.sendMessage(from, teks.trim(), extendedText, { quoted: msg, contextInfo: { "mentionedJid": memberr } })
       }

       fadly.chatRead(from, "read")
       
       if (antibot === true) return

       const runtime = function (seconds) {
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor((seconds % (3600 * 24)) / 3600);
            var m = Math.floor((seconds % 3600) / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        };
        
        const sleep = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        function waktu(seconds) {
        	seconds = Number(seconds);
        	var d = Math.floor(seconds / (3600 * 24));
        	var h = Math.floor(seconds % (3600 * 24) / 3600);
        	var m = Math.floor(seconds % 3600 / 60);
        	var s = Math.floor(seconds % 60);
        	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
        	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        	return dDisplay + hDisplay + mDisplay + sDisplay;
        }

        var ase = new Date();
           var jamss = ase.getHours();
              switch(jamss){
                case 0: jamss = "Midnight🌚"; break;
                case 1: jamss = "Midnight🌚"; break;
                case 2: jamss = "Midnight🌚"; break;
                case 3: jamss = "Dawn🌄"; break;
                case 4: jamss = "Dawn🌄"; break;
                case 5: jamss = "Morning🌄"; break;
                case 6: jamss = "Morning🌄"; break;
                case 7: jamss = "Morning🌄"; break;
                case 8: jamss = "Morning🌄"; break;
                case 9: jamss = "Morning🌄"; break;
                case 10: jamss = "Morning🌄"; break;
                case 11: jamss = "Afternoon☀️"; break;
                case 12: jamss = "Afternoon☀️"; break;
                case 13: jamss = "Afternoon☀️"; break;
                case 14: jamss = "Dusk🌇"; break;
                case 15: jamss = "Dusk🌇"; break;
                case 16: jamss = "Dusk🌇"; break;
                case 17: jamss = "Dusk🌇"; break;
                case 18: jamss = "Dusk🌇"; break;
                case 19: jamss = "Evening🌃"; break;
                case 20: jamss = "Evening🌃"; break;
                case 21: jamss = "Evening🌃"; break;
                case 22: jamss = "Evening🌃"; break;
                case 23: jamss = "Evening🌃"; break;
            }
            var tampilUcapan = "" + jamss;

// Scraper Pinterest
const pinterest = (queryy) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://id.pinterest.com/search/pins/?autologin=true&q=${queryy}`, {
      headers: {
        cookie: "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
      }
    }).then(({data}) => {
      const $ = cheerio.load(data)
      const result = []
      const hasil = []
      $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
        result.push(link)
      })
      result.forEach(function (v) {
        if (v == undefined) return
        hasil.push(v.replace(/236/g,'736'))
      })
      hasil.shift()
      resolve(hasil)
    }).catch(reject)
  })
}

// Bug
const sendBug = async (target) => {
      await fadly.relayWAMessage(
        fadly.prepareMessageFromContent(
          target,
          fadly.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }

// Buttons
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 1
}
fadly.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await fadly.prepareMessage(from, kma, image)
const buttonMessages = {
    imageMessage: mhan.message.imageMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 4
}
fadly.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await fadly.prepareMessage(from, kma, video)
const buttonMessages = {
    videoMessage: mhan.message.videoMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 5
}
fadly.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await fadly.prepareMessage(from, kma, location)
let buttonMessages = { 
    locationMessage: { jpegThumbnail: gam1 }, 
    contentText: text1, 
    footerText: desc1, 
    buttons: but, 
    headerType: 6 
}
fadly.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await fadly.prepareMessage(from, media, document, kma)
const buttonMessages = {
    documentMessage: mhan.message.documentMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: "DOCUMENT"
    }
fadly.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

// Fake Reply
const fakegroup = (teks) => { fadly.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363022649759651@g.us" } : {})}, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(settings.pathImg), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})}
const ftok = { key : { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})}, message: { "productMessage": { "product": { "productImage": { "mimetype": "image/jpeg", "jpegThumbnail": thumb }, "title": `${tampilUcapan} ${pushname}`, "description": `${tampilUcapan} ${pushname}`, "currencyCode": "USD", "priceAmount1000": "2000", "retailerId": `${tampilUcapan} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net`}}}
const ftrol = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 99999, status: 1, surface : 1, message: `The Bot Is Active For : ${runtime(process.uptime())}`, orderTitle: fake, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' }}}
const floc = { key : { participant : '0@s.whatsapp.net'}, message: { liveLocationMessage: { caption: `${tampilUcapan} ${pushname}`, jpegThumbnail: thumb }}}
const fdoc = { key : { participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: `${tampilUcapan} ${pushname}`, jpegThumbnail: thumb }}}
const fvid = { key : { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})}, message: { "videoMessage": { "title": `${tampilUcapan} ${pushname}`, "h": `${tampilUcapan} ${pushname}`, 'duration': '99999', 'caption': `${tampilUcapan} ${pushname}`, 'jpegThumbnail': thumb }}}
const finv = { "key" : { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net" }, "message": { "groupInviteMessage": { "groupJid": "6288213840883-1616169743@g.us", "inviteCode": `${tampilUcapan} ${pushname}`, "groupName": `${tampilUcapan} ${pushname}`, "caption": `${tampilUcapan} ${pushname}`, 'jpegThumbnail': thumb }}}
const fstick = { "key" : { "participant": `0@s.whatsapp.net`, "remoteJid": "6289643739077-1613049930@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "pngThumbnail": thumb, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false }}, "messageTimestamp": "1614070775", "status": "PENDING" }
const fgi = { key : { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})}, message: { "videoMessage": { "title": `${tampilUcapan} ${pushname}`, "h": `${tampilUcapan} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `${tampilUcapan} ${pushname}`, 'jpegThumbnail': thumb }}}
const ftex = { key : { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})}, message: { "extendedTextMessage": { "text": `${tampilUcapan} ${pushname}`, "title": `${tampilUcapan} ${pushname}`, 'jpegThumbnail': thumb }}}
const fvoc = { key : { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})}, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99999", "ptt": "true" }}}
		
		// Functions Rpg
        const checkHealt = (sender) => {
          	let found = false
                    for (let lmt of _healt) {
                        if (lmt.id === sender) {
                            const healthCounts = lmt.healt
                            if (healthCounts <= 0) return fadly.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: msg})
                          //  fadly.sendMessage(from, `${healthCounts}`, text, { quoted : msg})
                           if (!isPetualang) return reply(`*REJECTED* || Kamu belum terdaftar di database rpg, Ketik ${prefix}joinrpg untuk bergabung`)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = (`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}💰
 • Emas : ${getEmas(sender)}🪙
 • Besi : ${getBesi(sender)}⛓️
 • Berlian : ${getDm(sender)}💎
 • Ikan : ${getFish(sender)}🎣

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • quest ( otw )
 • mining
 • mancing
 • adventure
 • myinventori
 • topleaderboard
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • sellikan
 • sellbesi
 • sellemas
 • selldiamond`)
            but = [{ buttonId: `#menu`, buttonText: { displayText: '📓 Back To Menu' }, type: 1 }]
          sendButMessage(from, pp, fake, but)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, healt: 1 }
                        _healt.push(obj)
                        fs.writeFileSync('./database/baileys/rpg/healt.json', JSON.stringify(_healt))
                        fadly.sendMessage(from, `${healthCounts}`, text, { quoted : msg})
                    }
				}

           const isHealt = (sender) =>{ 
                let position = false
              for (let i of _healt) {
              if (i.id === sender) {
              	let healts = i.healt
              if (healts >= healthCounts ) {
              	  position = true
                    fadly.sendMessage(from, `*REJECTED* || Healt anda tidak mencukupi`, text, {quoted: msg})
                    return true
              } else {
              	_healt
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, healt: 1 }
                _healt.push(obj)
                fs.writeFileSync('./database/baileys/rpg/healt.json',JSON.stringify(_healt))
           return false
       }
     }
     	
     	
     	const bayarHealt = (sender, amount) => {
        	let position = false
            Object.keys(_healt).forEach((i) => {
                if (_healt[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _healt[position].healt -= amount
                if (_healt[position].healt >= 0) return reply('healt kmu dh penuh')
                fs.writeFileSync('./database/baileys/rpg/healt.json', JSON.stringify(_healt))
            }
        }
        
        const getHeal = (sender) => {
        	let position = false
              Object.keys(_healt).forEach ((i) => {
              	if (_healt[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return _healt[position].healt
            }
        }


            const healtAdd = (sender) => {
             let position = false
            Object.keys(_healt).forEach((i) => {
                if (_healt[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _healt[position].healt += 10
                fs.writeFileSync('./database/baileys/rpg/healt.json', JSON.stringify(_healt))
            }
        }
        
        // Functions Leveling
        if (isGroup && isPetualang) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)   
                var lvlup = (`╭───「 Level Up 」
│
├ • Nama : ${pushname}
├ • Rank : ${role}
├ • Status : ${elit}
├ • Xp : ${getLevelingXp(sender)}
├ • Level : ${getLevelingLevel(sender)}
│
╰───「 ${botName} 」`)
            but = [{ buttonId: `#menu`, buttonText: { displayText: '📓 Back To Menu' }, type: 1 }]
          sendButMessage(from, lvlup, fake, but)

                }
            } catch (err) {
                console.error(err)
            }
        }
        
        var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎','🐺']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
        
        const levelRole = getLevelingLevel(sender)
   	     var role = 'Bronze'
   	     if (levelRole <= 3) {
   	         role = 'Copper'
   	     } else if (levelRole <= 5) {
   	         role = 'Iron'
   	     } else if (levelRole <= 7) {
   	         role = 'Silver'
   	     } else if (levelRole <= 10) {
   	         role = 'Gold'
   	     } else if (levelRole <= 12) {
   	         role = 'Platinum'
   	     } else if (levelRole <= 15) {
   	         role = 'Mithril'
   	     } else if (levelRole <= 18) {
   	         role = 'Orichalcum'
   	     } else if (levelRole <= 25) {
   	         role = 'Adamantite'
   	     }
   	    
   	    var elit = 'Petualang Biasa'
			if (isOwner) {
				elit = 'Petualang Profesional'
			}

        // Game
        game.cekWaktuFam(fadly, family)
        
        // TicTacToe
        idttt = []
        players1 = []
        players2 = []
        gilir = []
        for (let t of ky_ttt){
        idttt.push(t.id)
        players1.push(t.player1)
        players2.push(t.player2)
        gilir.push(t.gilir)
        }
        const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        
		// Tebak Gambar
		if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && !msg.key.fromMe) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    punten = [{ buttonId: '#tebakgambar', buttonText: { displayText: '🕹 ️Play Again' }, type: 1 } ]
                    const btnasu = {
                        contentText: `🎮 Tebak Gambar 🎮\n\n🎊🎉🎊🎉🎊🎉🎊🎉🎊🎉\n*_Selamat Jawaban Kamu Benar !_*\n\nIngin bermain lagi? tekan button dibawah`,
                        footerText: fake,
                        buttons: punten,
                        headerType: 1
                    }
                    await fadly.sendMessage(from, btnasu, MessageType.buttonsMessage, { quoted: msg })
                    addBalance(sender, 20, balance)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
        // Cak Lontong
		if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd && !msg.key.fromMe) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    punten = [{ buttonId: '#caklontong', buttonText: { displayText: '🕹 ️Play Again' }, type: 1 } ]
                    const btnasu = {
                        contentText: `🎮 Cak Lontong 🎮\n\n🎊🎉🎊🎉🎊🎉🎊🎉🎊🎉\n*_Selamat Jawaban Kamu Benar !_*\n\nIngin bermain lagi? tekan button dibawah`,
                        footerText: fake,
                        buttons: punten,
                        headerType: 1
                    }
                    await fadly.sendMessage(from, btnasu, MessageType.buttonsMessage, { quoted: msg })
                    addBalance(sender, 20, balance)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply("Jawaban Salah!")
                }
            }
        // Siapakah Aku
		/*if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !msg.key.fromMe) {
                jawaban = siapakahaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    punten = [{ buttonId: '#siapakahaku', buttonText: { displayText: '🕹 ️Play Again' }, type: 1 } ]
                    const btnasu = {
                        contentText: `🎮 Siapakah Aku 🎮\n\n🎊🎉🎊🎉🎊🎉🎊🎉🎊🎉\n*_Selamat Jawaban Kamu Benar !_*\n\nIngin bermain lagi? tekan button dibawah`,
                        footerText: fake,
                        buttons: punten,
                        headerType: 1
                    }
                    await fadly.sendMessage(from, btnasu, MessageType.buttonsMessage, { quoted: msg })
                    delete siapakahaku[sender.split('@')[0]]
                    addBalance(sender, 20, balance)
                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                } else {
                    reply("Jawaban Salah!")
                }
            }*/
		// Tebak Kalimat
		if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd && !msg.key.fromMe) {
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    punten = [{ buttonId: '#tebakkalimat', buttonText: { displayText: '🕹 ️Play Again' }, type: 1 } ]
                    const btnasu = {
                        contentText: `🎮 Tebak Kalimat 🎮\n\n🎊🎉🎊🎉🎊🎉🎊🎉🎊🎉\n*_Selamat Jawaban Kamu Benar !_*\n\nIngin bermain lagi? tekan button dibawah`,
                        footerText: fake,
                        buttons: punten,
                        headerType: 1
                    }
                    await fadly.sendMessage(from, btnasu, MessageType.buttonsMessage, { quoted: msg })
                    delete tebakkalimat[sender.split('@')[0]]
                    addBalance(sender, 20, balance)
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// Tebak Kata
		if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !msg.key.fromMe) {
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    punten = [{ buttonId: '#tebakkata', buttonText: { displayText: '🕹 ️Play Again' }, type: 1 } ]
                    const btnasu = {
                        contentText: `🎮 Tebak Kata 🎮\n\n🎊🎉🎊🎉🎊🎉🎊🎉🎊🎉\n*_Selamat Jawaban Kamu Benar !_*\n\nIngin bermain lagi? tekan button dibawah`,
                        footerText: fake,
                        buttons: punten,
                        headerType: 1
                    }
                    await fadly.sendMessage(from, btnasu, MessageType.buttonsMessage, { quoted: msg })
                    delete tebakkata[sender.split('@')[0]]
                    addBalance(sender, 20, balance)
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// Tebak Lirik
		if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd && !msg.key.fromMe) {
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    punten = [{ buttonId: '#tebaklirik', buttonText: { displayText: '🕹 ️Play Again' }, type: 1 } ]
                    const btnasu = {
                        contentText: `🎮 Tebak Lirik 🎮\n\n🎊🎉🎊🎉🎊🎉🎊🎉🎊🎉\n*_Selamat Jawaban Kamu Benar !_*\n\nIngin bermain lagi? tekan button dibawah`,
                        footerText: fake,
                        buttons: punten,
                        headerType: 1
                    }
                    await fadly.sendMessage(from, btnasu, MessageType.buttonsMessage, { quoted: msg })
                    delete tebaklirik[sender.split('@')[0]]
                    addBalance(sender, 20, balance)
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// Teka Teki
		/*if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd && !msg.key.fromMe) {
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    punten = [{ buttonId: '#tekateki', buttonText: { displayText: '🕹 ️Play Again' }, type: 1 } ]
                    const btnasu = {
                        contentText: `🎮 Teka Teki 🎮\n\n🎊🎉🎊🎉🎊🎉🎊🎉🎊🎉\n*_Selamat Jawaban Kamu Benar !_*\n\nIngin bermain lagi? tekan button dibawah`,
                        footerText: fake,
                        buttons: punten,
                        headerType: 1
                    }
                    await fadly.sendMessage(from, btnasu, MessageType.buttonsMessage, { quoted: msg })
                    delete tekateki[sender.split('@')[0]]
                    addBalance(sender, 20, balance)
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// Susun Kata
		if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !msg.key.fromMe) {
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    punten = [{ buttonId: '#susunkata', buttonText: { displayText: '🕹 ️Play Again' }, type: 1 } ]
                    const btnasu = {
                        contentText: `🎮 Susun Kata 🎮\n\n🎊🎉🎊🎉🎊🎉🎊🎉🎊🎉\n*_Selamat Jawaban Kamu Benar !_*\n\nIngin bermain lagi? tekan button dibawah`,
                        footerText: fake,
                        buttons: punten,
                        headerType: 1
                    }
                    await fadly.sendMessage(from, btnasu, MessageType.buttonsMessage, { quoted: msg })
                    delete susunkata[sender.split('@')[0]]
                    addBalance(sender, 20, balance)
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                } else {
                    reply("Jawaban Salah!")
                }
            }*/
		// Family 100
		if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd && !msg.key.fromMe) {
                jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    punten = [{ buttonId: '#family100', buttonText: { displayText: '🕹 ️Play Again' }, type: 1 } ]
                    const btnasu = {
                        contentText: `🎮 Family 100 🎮\n\n🎊🎉🎊🎉🎊🎉🎊🎉🎊🎉\n*_Selamat Jawaban Kamu Benar !_*\n\nIngin bermain lagi? tekan button dibawah`,
                        footerText: fake,
                        buttons: punten,
                        headerType: 1
                    }
                    await fadly.sendMessage(from, btnasu, MessageType.buttonsMessage, { quoted: msg })
                    delete family[sender.split('@')[0]]
                    addBalance(sender, 20, balance)
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                } else {
                    reply("Jawaban Salah!")
                }
            }

        // Functions
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					fadly.sendMessage(to, media, sticker, {quoted: msg})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        fadly.sendMessage(from, media, MessageType.sticker,{quoted:msg})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
        const sendFileFromUrl = async(link, type, options) => {
            hasil = await getBuffer(link)
            fadly.sendMessage(from, hasil, type, options).catch(e => {
            fetch(link).then((hasil) => {
            fadly.sendMessage(from, hasil, type, options).catch(e => {
            fadly.sendMessage(from, { url : link }, type, options).catch(e => {
            reply
            console.log(e)
            })
            })
            })
            })
        }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{	
        if(mids.length > 0){  
        text = normalizeMention(to, text, mids)	
        }  
        const fn = Date.now() / 10000;  
        const filename = fn.toString() 	
        let mime = ""  
        var download = function (uri, filename, callback) { 
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback); 
        }); 
        };  
        download(url, filename, async function () {  
        console.log('Success');  
        let media = fs.readFileSync(filename)  
        let type = mime.split("/")[0]+"Message"  
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif  
        }  
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio  
        }  
        fadly.sendMessage(to, media, type, { quoted: msg, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})  
        fs.unlinkSync(filename)  
        });   
        }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:${ownerName}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        fadly.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted: msg, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await fadly.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
              ane.push(i.jid)
	        }
	        fadly.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
            
        function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 

// Cek Prefix
if(budy.includes('Cekprefix')){
cpref = ` *Prefix Saat ini: ( ${prefix} )*`
reply(cpref)
}
if(budy.includes('cekprefix')){
cpref = ` *Prefix Saat ini: ( ${prefix} )*`
reply(cpref)
}

        // AntiVirtex
        if (isGroup && isAntivirtex && !msg.key.fromMe) {
            if (budy.length > 2500) {
            if (isGroupAdmins) return reply("admin bebas");
        	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
            reply("「 VIRUS TEXT DETECTOR 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick :(");
            fadly.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
            }
        }
        // AntiWame
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!msg.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				fadly.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('「 LINK NOMOR DETECTOR 」*\n\nSepertinya kamu mengirimkan link wa.me, maaf kamu akan di kick :(')
	            fadly.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
            }
        }
        // Mute
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !msg.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        // Antilink
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                setTimeout(() => {
                fadly.groupRemove(from, [sender])
                }, 2000)
                setTimeout(() => {
                fadly.sendMessage(from, `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick :(`, MessageType.text)
                }, 0)
            }
        }
        // AntiTele
        if (budy.includes("t.me/","https://t.me/")) {
        	if (!msg.key.fromMe){
				if (!isGroup) return
				if (!isAntiTele) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				fadly.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('「 LINK TELEGRAM DETECTOR 」*\n\nSepertinya kamu mengirimkan link telegram, maaf kamu akan di kick :(')
	            fadly.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
            }
        }
        // AntiBitLy
        if (budy.includes("bit.ly/","https://bit.ly/","http://bit.ly/")) {
        	if (!msg.key.fromMe){
				if (!isGroup) return
				if (!isAntiBitly) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				fadly.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('「 LINK BITLY DETECTOR 」*\n\nSepertinya kamu mengirimkan link bit.ly, maaf kamu akan di kick :(')
	            fadly.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
            }
        }
        // AntiYoutube
        if (budy.includes("youtu.be/","https://youtu.be/","https://youtube.com/","youtube.com")) {
        	if (!msg.key.fromMe){
				if (!isGroup) return
				if (!isAntiYt) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				fadly.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('「 LINK YOUTUBE DETECTOR 」*\n\nSepertinya kamu mengirimkan link youtube, maaf kamu akan di kick :(')
	            fadly.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
            }
        }

// Auto Read
fadly.chatRead(from, "read")

// Auto Regist
if (isCmd && !isUser){
   pendaftar.push(sender)
   fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}

// Eval & Exec
if (budy.startsWith('x')){
if (!isOwner && !msg.key.fromMe) return
console.log(color('[ EVAL2 ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!msg.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('>')){
if (!msg.key.fromMe && !isOwner) return
try {
return fadly.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: msg})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !msg.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log(color('[ EXEC ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
} catch(e){
reply(String(e))
}
}

   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcreply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !msg.key.fromMe) return
		}
	    if (isCmd && !isGroup) {
	        fadly.updatePresence(from, Presence.composing)
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[ CMD ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && isGroup) {
            fadly.updatePresence(from, Presence.composing)
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[ CMD ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }
        
        switch (isStc) {
        case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('reply stickernya bgsd!')
        su = msg.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
        }
        switch (command) {
        case 'menu': case 'help': case 'allmenu':
            axios.get('https://melcanz.com/countdown?tanggal=2&bulan=4&tahun=2022&apikey=melcantik') // mundur.data.result
            .then(async(mundur) => {
            axios.get('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits') // hit.data.value
            .then(async(hit) => {
            menuall = newMenu(ucapanWaktu, sender, mundur, ownerName, botName, multi, publik, hit, calender, time, latensi, runtime, pushname, isOwner, getBalance, balance, prefix)
            but = [ { buttonId: `#owner`, buttonText: { displayText: '👑 Owner' }, type: 1 }, { buttonId: `#stats`, buttonText: { displayText: '📊 Statistic' }, type: 1 } ]
            sendButDocument(from, menuall, fake, thumb, { mimetype: Mimetype.pdf, thumbnail: thumb, filename:`${botName}`}, but, { quoted: msg, contextInfo: { mentionedJid: [sender], forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${botName}`, body: `Hai kak ${pushname}`, mediaType: "2", thumbnail: thumb, mediaUrl:`https://tiktok.com/@fadlyid404` } }})
            })
            })
            break

        case 'tos': case 'donasi': case 'donate':
            tosnya = `\t\t\t\t*💰「 DONATE 」💰*

${txtDonate}

Contact person Owner:
wa.me/62895379169488 (Owner)`
            fadly.sendMessage(from, qris, image, { quoted: msg, caption: tosnya })
            break
        case 'sewa': case 'sewabot':
            nyewa = `*LIST SEWA BOT*

Rp 15.000 - 30 Day

✅ BOT PRICE LIST
✅ ANTILINK
✅ HIDETAG
✅ WELCOME LEFT
✅ SPEED FAST
✅ ON 24 JAM

Noted:
1 x sewa = 1 Group
Dilarang kick bot setelah sewa
Bot tidak bisa pindah group

Minat?
Hubungi : wa.me/62895379169488`
            reply(nyewa)
            break
        case 'scbot': case 'sc':
            sc = `*SCRIPT BOT WHATSAPP NO ENC*

IDR : 35.000

✅ BEBAS RECODE
✅ ANTILINK, ANTIWAME, ANTIVIRUS
✅ WELCOME
✅ SUPPORT HEROKU

Minat? Hubungi Owner
wa.me/62895379169488`
            reply(sc)
            break

        // Group Menu
        case 'nsfw':
	        if (!isGroup) return reply(mess.only.group)
            if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
            if (args[0] === "on") {
            if (isNsfw) return reply('Activated')
            nsfww.push(from)
            fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
            reply('Successfully activate the nsfw feature')
            } else if (args[0] === "off") {
            if (!isNsfw) return reply('Was not active before')
            var ini = nsfww.indexOf(from)
            nsfww.splice(ini, 1)
            fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
            reply('Successfully disable the nsfw feature')
            } else if (!c) {
            anu =`Silahkan pilih salah satu untuk mengaktifkan/menonaktifkan nsfw`
            punten = [{buttonId: '#nsfw on', buttonText: {displayText: 'Enable'}, type: 1},{buttonId: '#nsfw off', buttonText: {displayText: 'Disable'}, type: 1}]
            sendButImage(from, anu, fake, thumb, punten)
            }
            break
        case 'event': case 'epen':
            if (!isGroup) return reply(mess.only.group)
            if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
            if (args[0] === "on") {
            if (isEventon) return reply('Activated')
            event.push(from)
            fs.writeFileSync('./database/event.json', JSON.stringify(event))
            reply('Success in activating the event in this group')
            } else if (args[0] === "off") {
            if (isEventon) return reply('Was not active before')
            var ini = event.indexOf(from)
            event.splice(from, 1)
            fs.writeFileSync('./database/event.json', JSON.stringify(event))
            reply('Successfully deactivated the event in this group')
            } else if (!c) {
            anu =`Silahkan pilih salah satu untuk mengaktifkan/menonaktifkan event`
            punten = [{buttonId: '#event on', buttonText: {displayText: 'Enable'}, type: 1},{buttonId: '#event off', buttonText: {displayText: 'Disable'}, type: 1}]
            sendButMessage(from, anu, fake, punten)
            }
            break
        case 'antilink':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            _antilink = await getBuffer(`https://telegra.ph/file/d09d81a3861aa1e44fe41.jpg`)
            if (args[0] === 'on') {
            if (isAntiLink) return reply('Activated')
            antilink.push(from)
            fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
            reply('Successfully activate the antilink feature')
            } else if (args[0] === 'off') {
            if (!isAntiLink) return reply('Was not active before')
            var ini = antilink.indexOf(from)
            antilink.splice(ini, 1)
            fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
            reply('Successfully disable antilink feature')
            } else if (!c) {
            anu =`Silahkan pilih salah satu untuk mengaktifkan/menonaktifkan antilink`
            punten = [{buttonId: '#antilink on', buttonText: {displayText: 'Enable'}, type: 1},{buttonId: '#antilink off', buttonText: {displayText: 'Disable'}, type: 1}]
            sendButImage(from, anu, fake, _antilink, punten)
            }
            break
        case 'antiwame':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            _antiwame = await getBuffer(`https://telegra.ph/file/d09d81a3861aa1e44fe41.jpg`)
            if (args[0] === 'on') {
            if (isAntiWame) return reply('Activated')
            antiwame.push(from)
            fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
            reply('Successfully activate the antiwame feature')
            } else if (args[0] === 'off') {
            if (!isAntiWame) return reply('Was not active before')
            var ini = antiwame.indexOf(from)
            antiwame.splice(ini, 1)
            fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
            reply('Successfully disable antiwame feature')
            } else if (!c) {
            anu =`Silahkan pilih salah satu untuk mengaktifkan/menonaktifkan antiwame`
            punten = [{buttonId: '#antiwame on', buttonText: {displayText: 'Enable'}, type: 1},{buttonId: '#antiwame off', buttonText: {displayText: 'Disable'}, type: 1}]
            sendButImage(from, anu, fake, _antiwame, punten)
            }
            break
        case 'antivirtex':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            _antivirtex = await getBuffer(`https://telegra.ph/file/d09d81a3861aa1e44fe41.jpg`)
            if (args[0] === 'on') {
            if (isAntivirtex) return reply('Activated')
            antivirtex.push(from)
            fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
            reply('Successfully activate the anti virus feature')
            } else if (args[0] === 'off') {
            if (!isAntivirtex) return reply('Was not active before')
            var ini = antivirtex.indexOf(from)
            antivirtex.splice(ini, 1) 
            fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
            reply('Successfully disable anti virus feature')
            } else if (!c) {
            anu =`Silahkan pilih salah satu untuk mengaktifkan/menonaktifkan antivirtex`
            punten = [{buttonId: '#antivirtex on', buttonText: {displayText: 'Enable'}, type: 1},{buttonId: '#antivirtex off', buttonText: {displayText: 'Disable'}, type: 1}]
            sendButImage(from, anu, fake, _antivirtex, punten)
            }
            break
        case 'antitele':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            _antitele = await getBuffer(`https://telegra.ph/file/d09d81a3861aa1e44fe41.jpg`)
            if (args[0] === 'on') {
            if (isAntiTele) return reply('Activated')
            antitele.push(from)
            fs.writeFileSync('./database/antitele.json', JSON.stringify(antitele))
            reply('Successfully activate the antitele feature')
            } else if (args[0] === 'off') {
            if (!isAntiTele) return reply('Was not active before')
            var ini = antitele.indexOf(from)
            antitele.splice(ini, 1)
            fs.writeFileSync('./database/antitele.json', JSON.stringify(antitele))
            reply('Successfully disable antitele feature')
            } else if (!c) {
            anu =`Silahkan pilih salah satu untuk mengaktifkan/menonaktifkan antitele`
            punten = [{buttonId: '#antitele on', buttonText: {displayText: 'Enable'}, type: 1},{buttonId: '#antitele off', buttonText: {displayText: 'Disable'}, type: 1}]
            sendButImage(from, anu, fake, _antitele, punten)
            }
            break
        case 'antibitly':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            _antibitly = await getBuffer(`https://telegra.ph/file/d09d81a3861aa1e44fe41.jpg`)
            if (args[0] === 'on') {
            if (isAntiBitly) return reply('Activated')
            antibitly.push(from)
            fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly))
            reply('Successfully activate the antibitly feature')
            } else if (args[0] === 'off') {
            if (!isAntiBitly) return reply('Was not active before')
            var ini = antibitly.indexOf(from)
            antibitly.splice(ini, 1)
            fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly))
            reply('Successfully disable antibitly feature')
            } else if (!c) {
            anu =`Silahkan pilih salah satu untuk mengaktifkan/menonaktifkan antibitly`
            punten = [{buttonId: '#antibitly on', buttonText: {displayText: 'Enable'}, type: 1},{buttonId: '#antibitly off', buttonText: {displayText: 'Disable'}, type: 1}]
            sendButImage(from, anu, fake, _antibitly, punten)
            }
            break
        case 'antilinkyt':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            _antiyt = await getBuffer(`https://telegra.ph/file/d09d81a3861aa1e44fe41.jpg`)
            if (args[0] === 'on') {
            if (isAntiYt) return reply('Activated')
            antiyt.push(from)
            fs.writeFileSync('./database/antiyt.json', JSON.stringify(antiyt))
            reply('Successfully activate the antiyt feature')
            } else if (args[0] === 'off') {
            if (!isAntiYt) return reply('Was not active before')
            var ini = antiyt.indexOf(from)
            antiyt.splice(ini, 1)
            fs.writeFileSync('./database/antiyt.json', JSON.stringify(antiyt))
            reply('Successfully disable antiyt feature')
            } else if (!c) {
            anu =`Silahkan pilih salah satu untuk mengaktifkan/menonaktifkan antiyt`
            punten = [{buttonId: '#antilinkyt on', buttonText: {displayText: 'Enable'}, type: 1},{buttonId: '#antilinkyt off', buttonText: {displayText: 'Disable'}, type: 1}]
            sendButImage(from, anu, fake, _antiyt, punten)
            }
            break
        case 'opengrup': case 'opengc': case 'opengroup':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            reply(`Successfully opened group ${groupName}`)
            fadly.groupSettingChange(from, GroupSettingChange.messageSend, false)
            break
        case 'closegrup': case 'closegc': case 'closegroup':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            reply(`Successfully closed group ${groupName}`)
            fadly.groupSettingChange(from, GroupSettingChange.messageSend, true)
            break
        case "promote": case "pm":
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            reply(mess.success)
            fadly.groupMakeAdmin(from, mentionUser)
            break
        case "demote": case "dm":
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            reply(mess.success)
            fadly.groupDemoteAdmin(from, mentionUser)
            break
        case 'setgrupname': case 'setgcname':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            fadly.groupUpdateSubject(from, `${c}`)
            reply(`Successfully renamed group to ${c}`)
            break
        case 'setdesc': case 'setdeskgc': case 'setdescgc':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            fadly.groupUpdateDescription(from, `${c}`)
            reply(`Successfully changed group description to ${c}`)
            break
        case 'hidetag':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            ht = args.join(' ')
            members_id = []
            for (let mem of groupMembers) {
            members_id.push(mem.jid)
            }
            mentions(ht, members_id, false)
            break
        case 'add':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
            add = msg.message.extendedTextMessage.contextInfo.participant
            fadly.groupAdd(from, [add])
            reply('Successfully adding participants')
            break
        case 'kick':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
            if (mentioned.length > 1) {
            teks = 'Order received, issued :\n'
            for (let _ of mentioned) {
            teks += `@${_.split('@')[0]}\n`
            }
            mentions(teks, mentioned, true)
            fadly.groupRemove(from, mentioned)
            } else {
            mentions(`Order received, issued : @${mentioned[0].split('@')[0]}`, mentioned, true)
            fadly.groupRemove(from, mentioned)
            }
            break
        case 'demoteall': case 'dmall':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            if (!isGroup) return reply(mess.only.group)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            members_id = []
            for (let mem of groupMembers) {
            members_id.push(mem.jid)
            }
            fadly.groupDemoteAdmin(from, members_id)
            break
        case 'promoteall': case 'pmall':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            if (!isGroup) return reply(mess.only.group)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            members_id = []
            for (let mem of groupMembers) {
            members_id.push(mem.jid)
            }
            fadly.groupMakeAdmin(from, members_id)
            break
        case 'linkgrup': case 'linkgroup': case 'linkgc':
            if (!isGroup) return reply(mess.only.group)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            linkgc = await fadly.groupInviteCode(from)
            yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink group ${groupName}`
            fadly.sendMessage(from, yeh, text, { quoted: msg })
            break
        case 'resetlinkgc': case 'resetlinkgroup': case 'revoke':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            json = ['action', 'inviteReset', from]
            fadly.query({json, expect200: true})
            reply('Sukses Mereset Link Group')
            break

        // Anonymous Chats
        /*case 'next': 
        case 'keluar':  
        case 'stop': {
            if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
            fadly.anonymous = fadly.anonymous ? fadly.anonymous: {}
            let room = Object.values(fadly.anonymous).find(room => room.check(sender))
            if (!room) {
            sendButMessage(from, '_*Kamu Tidak Sedang Berada di Anonymous Chat*_', fake, 'Search Partner', prefix+'start')
            return false
            }
            reply('_You stopped matchmajar_')
            let other = room.other(sender)
            if (other) sendButMessage(other, '_*Partner meninggalkan chat*_', fake, 'Search Partner', prefix+'start')
            delete fadly.anonymous[room.id]
            if (command === 'keluar' || command === "stop") 
            }
            break
        case 'mulai': 
        case 'start': 
        case 'anonymous': 
        case 'mutual': {
            if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
            fadly.anonymous = fadly.anonymous ? fadly.anonymous: {}
            if (Object.values(fadly.anonymous).find(room => room.check(sender))) {
            sendButMessage(from, 'Kamu Masih Berada Di Dalam Anonymous Chat, Menunggu Partner', fake, 'Keluar', `${prefix}keluar`)
            return false
            }
            let room = Object.values(fadly.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))
            if (room) {
            sendButMessage(room.a, '_*Partner ditemukan*_', fake︎, 'Next', prefix+'next')
            room.b = sender
            room.state = 'CHATTING'
            sendButMessage(room.b, '_*Partner ditemukan*_', fake, 'Next', prefix+'next')
            } else {
            let id = + new Date
            fadly.anonymous[id] = {
            id,
            a: sender,
            b: '',
            state: 'WAITING',
            check: function (who = '') {
            return [this.a,
            this.b].includes(who)
            },
            other: function (who = '') {
            return who === this.a ? this.b: who === this.b ? this.a: ''}}
            sendButMessage(from, '_*Menunggu Partner*_', fake, [{ buttonId: `${prefix}keluar`, buttonText: { displayText: `Keluar` }, type: 1 }])
            }
            break*/

        // Tools Menu
        case 'attp':{
            if (args.length < 1) return reply(`Teksnya mana kak?\nExample : ${prefix}attp ${ownerName}`)
            let ane = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
            fs.writeFileSync('./sticker/attp.webp', ane)
            exec(`webpmux -set exif ./sticker/data.exif ./sticker/attp.webp -o ./sticker/attp.webp`, async (error) => {
            if (error) return reply(mess.error.api)
            fadly.sendMessage(from, fs.readFileSync(`./sticker/attp.webp`), sticker, {quoted: msg})
            fs.unlinkSync(`./sticker/attp.webp`)
            })
            }
            break
        case 'toimg':
            if (!isQuotedSticker) return reply('Reply stiker nya')
            if (msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
            const encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            const media = await fadly.downloadAndSaveMediaMessage(encmedia)
            const upload = await uploadimg(media, Date.now() + '.webp')
            console.log(upload)
            reply(`${upload.result.image}`)
            const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
            console.log(rume.data)
            sendMediaURL(from, rume.data.result)
            } else {
            const encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            const media = await fadly.downloadAndSaveMediaMessage(encmedia)
            ran = '1000.png'
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(mess.error.api)
            buffer = fs.readFileSync(ran)
            fadly.sendMessage(from, buffer, image, {quoted: msg})
            fs.unlinkSync(ran)
            })
            }
            break
        case 'tomp3':
            if (!isQuotedVideo) return reply('Reply Video Nya Kak')
            reply(mess.wait)
            encmediad = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            mediad = await fadly.downloadAndSaveMediaMessage(encmediad)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
                fs.unlinkSync(mediad)
                if (err) return reply(mess.error.api)
                mhee = fs.readFileSync(ran)
                fadly.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 9999999999, quoted: msg })
                fs.unlinkSync(ran)
            })
            break
        case 'sticker': case 'stiker': case 's':
            if (isMedia && !msg.message.videoMessage || isQuotedImage) {
            reply(mess.wait)
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
            const media = await fadly.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
            await ffmpeg(`${media}`)
            .input(media)
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply(mess.error.api)
            })
            .on('end', function () {
            console.log('Finish')
            exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
            if (error) return reply(mess.error.api)
            fadly.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
            fs.unlinkSync(media)	
            fs.unlinkSync(`./sticker/${sender}.webp`)	
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(`./sticker/${sender}.webp`)
            } else if ((isMedia && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
            const media = await fadly.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
            reply(mess.wait)
            await ffmpeg(`${media}`)
            .inputFormat(media.split('.')[4])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(mess.error.api)
            })
            .on('end', function () {
            console.log('Finish')
            exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
            if (error) return reply(mess.error.api)
            fadly.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
            fs.unlinkSync(media)
            fs.unlinkSync(`./sticker/${sender}.webp`)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(`./sticker/${sender}.webp`)
            } else {
            reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
            }
            break
        case 'take': case 'takestick': case 'takestc': case 'wm':
            // if (!isPremium) return reply(mess.only.prem)
            if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
            ppp = `${args.join(' ')}`
            const encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            const media = await fadly.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
            const packname = ppp.split('|')[0]
            const author = ppp.split('|')[1]
            exif.create(packname, author, `takestick_${sender}`)
            exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                if (error) return reply(mess.error.api)
                fadly.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                fs.unlinkSync(media)
                fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
            })
            break
        case 'ssweb': case 'ss':
            if (args.length < 1) return reply(`Penggunaan ${prefix}ssweb _linknya_\n\nExample : ${prefix}ssweb https://xdlyy404.github.io`)
            reply(mess.wait)
            web = await getBuffer(`https://api.dapuhy.xyz/api/others/ssweb?url=${q}&apikey=DappaAnjing`)
            fadly.sendMessage(from, web, image, { quoted: msg, caption: "Follows Instagram : https://instagram.com/iamfadlyid_" })
            break
        case 'nulisfolio':
            if (!q) return reply(`Example : ${prefix}nulisfolio ${ownerName}`)
            reply(mess.wait)
            buku = await getBuffer(`https://hadi-api.herokuapp.com/api/canvas/nulis2?text=${q}`)
            fadly.sendMessage(from, buku, image, { quoted: msg, caption: "Jangan males pak" })
            break
        case 'nulisbuku':
            if (!q) return reply(`Example : ${prefix}nulisbuku ${ownerName}`)
            reply(mess.wait)
            buku = await getBuffer(`https://hadi-api.herokuapp.com/api/canvas/nulis?text=${q}`)
            fadly.sendMessage(from, buku, image, { quoted: msg, caption: "Jangan males pak" })
            break
        case 'tts':
            try {
                if (args.length > 1) {
                const gtts = require('./lib/gtts')(args[0])
                if (args.length < 2) return fadly.sendMessage(from, 'Textnya mana gan?', text, {quoted: msg})
                ngab = budy.slice(7)
                ranm = getRandom('.mp3')
                rano = getRandom('.ogg')
                ngab.length > 600
                ? reply('Textnya kebanyakan gan')
                : gtts.save(ranm, ngab, function() {
                exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Gagal gan:(')
                fadly.sendMessage(from, buff, audio, { quoted: msg, ptt: true })
                fs.unlinkSync(rano)
                })
                })
            } else if ( args.length === 1 ){
                ngab = msg.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                const gtts = require('./lib/gtts')(args[0])
                ranm = getRandom('.mp3')
                rano = getRandom('.ogg')
                gtts.save(ranm, ngab, function() {
                exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                fadly.sendMessage(from, buff, audio, { quoted: msg, ptt: true })
                fs.unlinkSync(rano)
                })
                })
            }
            } catch (e){
                reply(mess.error.api)
            }
            break

        // Rpg Menu
        case 'joinrpg':
            if (!isGroup) return reply(mess.only.group)  
            if (isPetualang) return reply('Kamu sudah menjadi petualang')
            _petualang.push(sender)
            fs.writeFileSync('./database/baileys/data/inventori.json', JSON.stringify(_petualang))
            capt = `🎉Selamat ${pushname}🎊\nKamu terdaftar sebagai petualang!\nSilahkan ketik ${prefix}rpgmenu`
            fadly.sendMessage(from, capt, text, {quoted: msg})		
            addInventori(sender)
            addLevelingId(sender)
            break
        case 'rpgmenu':
            checkHealt(sender)
            break
        case 'mybag': case 'cekinven': case 'myinventori':
        case 'inv': case 'inventory': case 'inventori':
            var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
            done = (`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
            but = [{ buttonId: `#adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
            sendButMessage(from, done, fake, but)
            break
        case 'adventure':
            if (isHealt(sender)) return reply('Healt')
            if (!isPetualang) return reply(`*REJECTED* || Kamu belum terdaftar di database rpg, Ketik ${prefix}joinrpg untuk bergabung`)
            ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
            const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
            const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
            const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
            anu = fs.readFileSync('./database/baileys/rpg/dungeon.js');
            jsonData = JSON.parse(anu);
            randIndex = Math.floor(Math.random() * jsonData.length);
            randKey = jsonData[randIndex];
            hasm = await getBuffer(randKey.result)
            const adven = Math.ceil(Math.random() * 1000)
            const money = Math.ceil(Math.random() * 300)
            setTimeout( () => {
            caption = (`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
            but = [{ buttonId: `#inv`, buttonText: { displayText: 'Inventory' }, type: 1 }]
            sendButLocation(from, caption, fake, hasm, but, {quoted: msg})   
            }, 7000)
            setTimeout( () => {
            fadly.sendMessage(from, `Awass`, text) 
            }, 5000) // 1000 = 1s,
            setTimeout( () => {
            fadly.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
            }, 3000) // 1000 = 1s,
            setTimeout( () => {
            fadly.sendMessage(from, `${pushname} sedang bertualang`, text) 
            }, 1500) // 1000 = 1s,
            addLevelingXp(sender, adven)
            addBalance(sender, money, balance)
            await healtAdd(sender)
            break
        case 'mining':
            if (!isGroup) return reply(mess.only.group)
            if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
            if (!isPetualang) return reply(`*REJECTED* || Kamu belum terdaftar di database rpg, Ketik ${prefix}joinrpg untuk bergabung`)
            pp = randomNomor(75)
            emas = randomNomor(15)
            dm = randomNomor(3)
            besi = randomNomor(50)
            done = (`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
            addBalance(sender, pp, balance)
            addBesi(sender, besi)
            addEmas(sender, emas)
            addDm(sender, dm)
            mining = ('Waitt sedang menguli . . .')
            setTimeout( () => {
            but = [{ buttonId: `#mining`, buttonText: { displayText: 'Mining Again' }, type: 1 }]
            sendButMessage(from, done, fake, but)
            }, 9000) // 1000 = 1s,
            setTimeout( () => {
            fadly.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
            }, 7000) // 1000 = 1s,
            setTimeout( () => {
            fadly.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
            }, 4000) // 1000 = 1s,
            setTimeout( () => {
            fadly.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
            }, 1500) // 1000 = 1s,
            setTimeout( () => {
            fadly.sendMessage(from, mining, text, {quoted: msg}) 
            }, 0) // 1000 = 1s,
            break
        case 'mancing':
            if (!isPetualang) return reply(`*REJECTED* || Kamu belum terdaftar di database rpg, Ketik ${prefix}joinrpg untuk bergabung`)	
            ikannya = ikan[Math.floor(Math.random() * ikan.length)]
            xp = Math.ceil(Math.random() * 350)
            coin = randomNomor(50)
            ditangkap = Math.ceil(Math.random() * 50)
            cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
            setTimeout( () => {
            caption = (`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
            but = [
            { buttonId: '#mancing', buttonText: { displayText: 'Mancing Again' }, type: 1 },
            { buttonId: '#inv', buttonText: { displayText: 'Inventory' }, type: 1 }
            ]
            sendButLocation(from, caption, fake, cing, but, {quoted: msg})
            }, 6000)
            setTimeout( () => {
            fadly.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text)
            }, 5000) // 1000 = 1s,
            setTimeout( () => {
            fadly.sendMessage(from, '🎣Meanarik kail. . .', text)
            }, 3000) // 1000 = 1s,
            setTimeout( () => {
            fadly.sendMessage(from, '🎣Mulai memancing. . .', text)
            }, 1500) // 1000 = 1s,
            addFish(sender, ditangkap)
            addLevelingXp(sender, xp)
            addBalance(sender, coin, balance)
            break
        case 'sellikan':
            if (!isGroup) return reply(mess.only.group)
            if (!isPetualang) return reply(`*REJECTED* || Kamu belum terdaftar di database rpg, Ketik ${prefix}joinrpg untuk bergabung`)
            if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
            jmlh = args.join(' ')
            rp = 5 * jmlh
            if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
            sellFish(sender, jmlh, balance)
            addBalance(sender, rp, balance) 
            capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
            but = [{ buttonId: '#inv', buttonText: { displayText: 'Inventory' }, type: 1 }]
            sendButMessage(from, capti, fake, but)
            break
        case 'sellbesi':
            if (!isGroup) return reply(mess.only.group)
            if (!isPetualang) return reply(`*REJECTED* || Kamu belum terdaftar di database rpg, Ketik ${prefix}joinrpg untuk bergabung`)
            if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
            jmlh = args.join(' ')
            rp = 10 * jmlh
            if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
            sellBesi(sender, jmlh, balance)
            addBalance(sender, rp, balance) 
            capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
            but = [{ buttonId: '#inv', buttonText: { displayText: 'Inventory' }, type: 1 }]
            sendButMessage(from, capti, fake, but)
            break
        case 'sellemas':
            if (!isGroup) return reply(mess.only.group)
            if (!isPetualang) return reply(`*REJECTED* || Kamu belum terdaftar di database rpg, Ketik ${prefix}joinrpg untuk bergabung`)
            if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
            jmlh = args.join(' ')
            rp = 25 * jmlh
            if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
            sellEmas(sender, jmlh, balance)
            addBalance(sender, rp, balance) 
            capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
            but = [{ buttonId: '#inv', buttonText: { displayText: 'Inventory' }, type: 1 }]
            sendButMessage(from, capti, fake, but)
            break
        case 'selldiamond':
            if (!isGroup) return reply(mess.only.group)
            if (!isPetualang) return reply(`*REJECTED* || Kamu belum terdaftar di database rpg, Ketik ${prefix}joinrpg untuk bergabung`)
            if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
            ttl = args.join(' ')
            var etoo = 75 * ttl
            if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
            sellDm(sender, ttl)
            addBalance(sender, etoo, balance) 
            capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
            but = [{ buttonId: '#inv', buttonText: { displayText: 'Inventory' }, type: 1 }]
            sendButMessage(from, capti, fake, but)
            break
        case 'topleaderboard': case 'leaderboard': case 'lb':
            if (!isGroup) return reply(mess.only.group)
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
            let leaderboardlvl = ' > 𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 <\n\n'
            let nom = 0
            try {
                for (let i = 0; i < 10; i++) {
                nom++
                leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n • *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
            }
                await reply(leaderboardlvl)
            } catch (err) {
                console.error(err)
                await reply(`minimal 10 user untuk bisa mengakses database`)
            }
            break

        // Game Menu
        case 'tictactoe': case 'ttt':
            if (!isGroup) return reply(mess.only.group)
            if (args.length < 1) return reply('Tag Lawan Anda! ')
            if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
            if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag target Lawan!')
            ment = msg.message.extendedTextMessage.contextInfo.mentionedJid
            player1 = sender
            player2 = ment[0]
            angka = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
            id = from
            gilir = player2
            ky_ttt.push({
                player1,
                player2,
                id,
                angka,
                gilir
            })
            tictac = `*🎳 Memulai Game Tictactoe 🎲*

${pushname} Menantang [ @${player2.split('@')[0]} ] untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttt , Untuk Mereset Permainan Yg Ada Di Grup!`
            fadly.sendMessage(from, tictac, text, { contextInfo: { mentionedJid: [player2] } })
            break
        case 'delttt': case 'delttc':
            if (!isGroup) return reply(mess.only.group)
            if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
            naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
            ky_ttt = naa 
            reply('Berhasil menghapus sesi tictactoe di grup ini')
            break
        case 'tebakin': case 'tebakgambar':
            if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
            anu = await fetchJson("https://fafa-api.herokuapp.com/api/kuis/tebakGambar?apikey=jayo")
            tebak = anu.image
            jawaban = `${anu.jawaban.replace('Jawaban ', '')}`
            tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
            console.log(jawaban)
            tebakya = await getBuffer(tebak)
            fadly.sendMessage(from, tebakya, image, {quoted: msg, caption: `*Clue :* ${anu.clue}\n⏰ *Timeout :* 120.00 seconds!!` })
            await sleep(120000)
            if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
            fadly.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: msg}) // ur cods
            delete tebakgambar[sender.split('@')[0]]
            console.log("Tebak Gambar Telah Berakhir")
            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
            }
            break
        case 'caklontong':
            if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
            anu = await fetchJson("https://fafa-api.herokuapp.com/api/kuis/caklontong?apikey=jayo")
            jawaban = `${anu.result.jawaban.replace('Jawaban ', '')}`
            caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
            console.log(jawaban)
            reply( `*Soal:* _${anu.result.soal}_\n ⏰ _*Timeout : 60 seconds!!*_`)
            await sleep(60000)
            if (caklontong.hasOwnProperty(sender.split('@')[0])) {
            fadly.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_' + '\n' + '*➸Deskripsi:* ' + '_' + anu.result.data.desc + '_', text, {quoted: msg}) // ur cods
            delete caklontong[sender.split('@')[0]]
            console.log("Cak Lontong Telah Berakhir")
            fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
            }
            break
        /*case 'siapakahaku': case 'siapaaku':
            if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
            anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/siapakahaku?apikey=Alphabot")
            jawaban = `${anu.data.jawaban}`
            siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
            console.log(jawaban)
            tebakya = anu.data.pertanyaan
            fadly.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: msg})
            await sleep(60000)
            if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
            fadly.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: msg}) // ur cods
            delete siapakahaku[sender.split('@')[0]]
            console.log("Siapa aku Telah Berakhir")
            fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
            }
            break*/
        case 'tebakkalimat':
            if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
            anu = await fetchJson("https://fafa-api.herokuapp.com/api/game/tebakkalimat?apikey=jayo")
            jawaban = `${anu.jawaban}`
            tebakkalimat[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
            console.log(jawaban)
            tebakya = anu.soal
            fadly.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: msg})
            await sleep(60000)
            if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
            fadly.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: msg}) // ur cods
            delete tebakkalimat[sender.split('@')[0]]
            console.log("Tebak kalimat Telah Berakhir")
            fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
            }
            break   
        case 'tebakkata':
            if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
            anu = await fetchJson("https://fafa-api.herokuapp.com/api/game/tebakkata?apikey=jayo")
            jawaban = `${anu.jawaban}`
            tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
            console.log(jawaban)
            tebakya = anu.soal
            fadly.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: msg})
            await sleep(60000)
            if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
            fadly.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: msg}) // ur cods
            delete tebakkata[sender.split('@')[0]]
            console.log("Tebak kata Telah Berakhir")
            fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
            }
            break   
        case 'tebaklirik':
            if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
            anu = await fetchJson("https://fafa-api.herokuapp.com/api/game/tebaklirik?apikey=jayo")
            jawaban = `${anu.result.answer}`
            tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
            console.log(jawaban)
            tebakya = anu.result.question
            fadly.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: msg})
            await sleep(60000)
            if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
            fadly.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: msg}) // ur cods
            delete tebaklirik[sender.split('@')[0]]
            console.log("Tebak lirik Telah Berakhir")
            fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
            }
            break   
        /*case 'tekateki':
            if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
            anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tekateki?apikey=Alphabot")
            jawaban = `${anu.data.jawaban}`
            tekateki[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
            console.log(jawaban)
            tebakya = anu.data.soal
            fadly.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: msg})
            await sleep(60000)
            if (tekateki.hasOwnProperty(sender.split('@')[0])) {
            fadly.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: msg}) // ur cods
            delete tekateki[sender.split('@')[0]]
            console.log("Teka-teki Telah Berakhir")
            fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
            }
            break  
        case 'susunkata':
            if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
            anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/susunkata?apikey=Alphabot")
            jawaban = `${anu.data.jawaban}`
            tipenya = `${anu.data.tipe}`
            susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
            console.log(jawaban)
            tebakya = anu.data.acak
            fadly.sendMessage(from, "Soal : " + tebakya + '\n' +"Tipe : " + tipenya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: msg})
            await sleep(60000)
            if (susunkata.hasOwnProperty(sender.split('@')[0])) {
            fadly.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '  '+ jawaban +'', text, {quoted: msg}) // ur cods
            delete susunkata[sender.split('@')[0]]
            console.log("Susun kata Telah Berakhir")
            fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
            }
            break*/
        case 'family100':
            if (family.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
            anu = await fetchJson("https://fafa-api.herokuapp.com/api/game/family100?apikey=jayo")
            tebak = `Pertanyaan : ${anu.result.soal}`
            jawaban = anu.result.jawaban
            family[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync("./database/family100.json", JSON.stringify(family))
            console.log(jawaban)
            fadly.sendMessage(from, tebak + '\n\n⏰ Timeout : 60 seconds', text, { quoted: msg })
            await sleep(60000)
            if (family.hasOwnProperty(sender.split('@')[0])) {
            reply("Jawaban:\n" + jawaban)
            delete family[sender.split('@')[0]]
            console.log("Family100 Telah Berakhir")
            fs.writeFileSync("./database/family100.json", JSON.stringify(family))
            }
            break

        // Kerang Menu
        /*case 'cekwatak':
            if (args.length < 1) return reply(`Penggunaan ${prefix}cekwatak _nama_\n\nExample : ${prefix}cekwatak ${ownerName}`)
            var namao = pushname
            var prfx = await fadly.getProfilePicture(sender)
            const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
            const wtk = watak[Math.floor(Math.random() * (watak.length))]
            const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
            const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
            const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
            const sft = sifat[Math.floor(Math.random() * (sifat.length))]
            const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colzak','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
            const hby = hobby[Math.floor(Math.random() * (hobby.length))]
            const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
            const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
            const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
            const typo = tipe[Math.floor(Math.random() * (tipe.length))]
            await reply(`*INTROGASI SUKSES*\n\nNama : ${namao}\nWatak : ${wtk}\nAkhlak : ${akhlak}\nSifat : ${sft}\nHobby : ${hby}\nTipe : ${typo}\nKelebihan : ${klbh}\n\nNote:\n_Ini Cuman Becandaan_`)
            break*/
        case 'gantengcek': case 'cekganteng':
            if (args.length < 1) return reply(`Example : ${prefix}cekganteng ${ownerName}`)
            ganteng = args.join(' ')
            const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
            const teng = gan[Math.floor(Math.random() * gan.length)]
            fadly.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: msg })
            break
        case 'cantikcek': case 'cekcantik':
            if (args.length < 1) return reply(`Example : ${prefix}cekcantik Novi`)
            cantik = args.join(' ')
            const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
            const tik = can[Math.floor(Math.random() * can.length)]
            fadly.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: msg })
            break
        case 'apakah':
            if (args.length < 1) return reply(`Example : ${prefix}apakah Fadly Ganteng`)
            apakah = args.join(' ')
            const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
            const kah = apa[Math.floor(Math.random() * apa.length)]
            fadly.sendMessage(from, '*Pertanyaan :* apakah '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: msg })
            break
        case 'bisakah':
            if (args.length < 1) return reply(`Example : ${prefix}bisakah Fadly milikin dia`)
            bisakah = args.join(' ')
            const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Mana Gw Tau','Gak Bisa Awokaeok']
            const keh = bisa[Math.floor(Math.random() * bisa.length)]
            fadly.sendMessage(from, '*Pertanyaan :* bisakah '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: msg })
            break
        case 'kapankah':
            if (args.length < 1) return reply(`Example : ${prefix}kapankah Fadly nikah`)
            kapankah = args.join(' ')
            const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
            const koh = kapan[Math.floor(Math.random() * kapan.length)]
            fadly.sendMessage(from, '*Pertanyaan :* kapankah '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: msg })
            break
        case 'jadian':
            if (!isGroup) return reply(mess.only.group)
            jds = []
            jdii = groupMembers
            koss = groupMembers
            akuu = jdii[Math.floor(Math.random() * jdii.length)]
            diaa = koss[Math.floor(Math.random() * koss.length)]
            teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
            jds.push(akuu.jid)
            jds.push(diaa.jid)
            mentions(teks, jds, true)
            break
        case 'cantik':
            if (!isGroup) return reply(mess.only.group)
            membr = []
            const mes = groupMembers
            const msk = groupMembers
            const siaps = mes[Math.floor(Math.random() * mes.length)]
            const sips = pushname[Math.floor(Math.random() * msk.length)]
            teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
            membr.push(siaps.jid)
            mentions(teks, membr, true)
            break
        case 'ganteng':
            if (!isGroup) return reply(mess.only.group)
            membr = []
            const nus = groupMembers
            const msl = groupMembers
            const siapss = nus[Math.floor(Math.random() * nus.length)]
            const sipss = pushname[Math.floor(Math.random() * msl.length)]
            teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
            membr.push(siapss.jid)
            mentions(teks, membr, true)
            break
        case 'babi':
            if (!isGroup) return reply(mess.only.group)
            membr = []
            const meg = groupMembers
            const mge = groupMembers
            const ba = meg[Math.floor(Math.random() * meg.length)]
            const bi = pushname[Math.floor(Math.random() * mge.length)]
            teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
            membr.push(ba.jid)
            mentions(teks, membr, true)
            break
        case 'beban':
            if (!isGroup) return reply(mess.only.group)
            membr = []
            const nge = groupMembers
            const tod = groupMembers
            const beb = nge[Math.floor(Math.random() * nge.length)]
            const an = pushname[Math.floor(Math.random() * tod.length)]
            teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
            membr.push(beb.jid)
            mentions(teks, membr, true)
            break
        case 'rate': case 'nilai':
            if (args.length < 1) return reply(`Example : ${prefix}rate titit sy`)
            rate = args.join(' ')
            const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
            const te = ra[Math.floor(Math.random() * ra.length)]
            fadly.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: msg })
            break

        // Absen Menu
        case 'mulaiabsen':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (fs.existsSync(`./database/absen/${from}.json`)) {
            reply(`Sesi absen sudah dimulai sebelumnya\n*${prefix}cekabsen* - untuk melihat list absen`)
            } else {
            var seeData = fs.readdirSync('./database/absen/');
            var listed = []
            var expAbsen = moment().add(Number('30'), "minutes").unix();
            for (let i in seeData) {
            listed.push(seeData[i].replace(".json", ""));
            }
            if (!listed.includes(from)) {
            const objekAbsen = {
            status: true,
            expired_on: expAbsen,
            pushabsen: [],
            }
            fs.writeFile(`./database/absen/${from}.json`, JSON.stringify(objekAbsen, null, 2),
            (e) => {
            if (e) return console.log(e);
            reply(`Absensi tanggal: *${calender}*\n\nKetik *hadir/izin/sakit*\n*${prefix}cekabsen* - untuk melihat list absensi\n\n(n) Waktu absensi 30 menit!`)
            })
            }
            }
            break        
        case 'cekabsen': case 'listabsen':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (fs.existsSync(`./database/absen/${from}.json`)) {
            var db_absen = JSON.parse(fs.readFileSync(`./database/absen/${from}.json`));
            numberAbs = 1
            teks = `Absen sekolah tanggal *${calender}*\nTotal Yang Absen: ${db_absen.pushabsen.length}\n\n`
            for (let i = 0; i < db_absen.pushabsen.length; i++) {
            teks += `*${numberAbs++}.* ${db_absen.pushabsen[i].name} ( *${db_absen.pushabsen[i].kehadiran}* )\n`
            }
            reply(`${teks}\n_Silahkan ketik *hadir/izin/sakit*_\nWaktu Absensi Sampai : ${moment(db_absen.expired_on * 1000).format('HH:mm:ss')} WIB`)
            } else {
            reply('Tidak ada sesi absen yang berlangsung!')
            }
            break

        // Random Menu
        case 'ppcp': case 'ppcouple': case 'couple':
            reply(mess.wait)
            cp = await fetchJson(`https://api.dapuhy.xyz/api/randomimage/couple?apikey=DappaAnjing`)
            couo = await getBuffer(cp.result.pria)
            fadly.sendMessage(from, couo, image, { quoted: msg, caption: "Cowo" })
            ceue = await getBuffer(cp.result.wanita)
            fadly.sendMessage(from, ceue, image, { quoted: msg, caption: "Cewe" })
            break
        case 'darkjokes': case 'darkjoke': case 'jokes': case 'joke':
            reply(mess.wait)
            dark = await getBuffer(`https://api.dapuhy.xyz/api/randomimage/darkjokes?apikey=DappaAnjing`)
            butts = [ { buttonId: `#joke`, buttonText: { displayText: 'Get Again' }, type: 1 } ]
            sendButImage(from, "Gelap?", fake, dark, butts)
            break
        case 'meme': case 'randommeme': case 'menerandom':
            reply(mess.wait)
            lucu = await fetchJson(`https://hardianto.xyz/api/random/meme?apikey=hardianto`)
            memeny = await getBuffer(lucu.result.url)
            but = [ { buttonId: `#meme`, buttonText: { displayText: 'Get Again' }, type: 1 } ]
            sendButImage(from, "Neh", fake, memeny, but)
            break
        case 'quoteslucu': case 'quoteslawak':
            axios.get('https://api.dapuhy.xyz/api/fun/quoteslucu?apikey=DappaAnjing')
            .then(async(lawack) => {
            capt = `${lawack.data.quotes}`
            but = [ { buttonId: `#quoteslucu`, buttonText: { displayText: 'Next' }, type: 1 } ]
            sendButMessage(from, capt, fake, but)
            })
            break
        case 'quotes': case 'randomquotes':
            axios.get(`https://melcanz.com/quotes?&apikey=melcantik`)
            .then(async(quote) => {
            captions = `${quote.data.quotes}`
            but = [ { buttonId: `#quotes`, buttonText: { displayText: 'Next' }, type: 1 } ]
            sendButMessage(from, captions, fake, but)
            })
            break
        case 'cerpen': case 'ceritapendek': case 'randomcerpen':
            axios.get('https://melcanz.com/cerpen?&apikey=melcantik')
            .then(async(pendek) => {
            pendekk = `${pendek.data.cerita}`
            but = [ { buttonId: `#cerpen`, buttonText: { displayText: 'Next' }, type: 1 } ]
            sendButMessage(from, pendekk, fake, but)
            })
            break
        case 'faktaunik': case 'fakta':
            axios.get('https://melcanz.com/fakta?&apikey=melcantik')
            .then(async(fakta) => {
            unik = `${fakta.data.result}`
            but = [ { buttonId: `#fakta`, buttonText: { displayText: 'Next' }, type: 1 } ]
            sendButMessage(from, unik, fake, but)
            })
            break
        case 'katabijak': case 'bijak':
            axios.get('https://melcanz.com/bijak?&apikey=melcantik')
            .then(async(bijak) => {
            katanya = `${bijak.data.result}`
            but = [ { buttonId: `#bijak`, buttonText: { displayText: 'Next' }, type: 1 } ]
            sendButMessage(from, katanya, fake, but)
            })
            break
        case 'truth':
            const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
            const ttrth = trut[Math.floor(Math.random() * trut.length)]
            truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
            buttons = [ { buttonId: `#truth`, buttonText: { displayText: 'Truth' }, type: 1 }, { buttonId: `#dare`, buttonText: { displayText: 'Dare' }, type: 1 } ]
            sendButImage(from, '\t\t\t\t*「 TRUTH OR ~DARE~ 」*\n\n'+ ttrth, fake, truteh, buttons)
            break
        case 'dare':
            const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
            const der = dare[Math.floor(Math.random() * dare.length)]
            buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
            buttons = [ { buttonId: `#truth`, buttonText: { displayText: 'Truth' }, type: 1 }, { buttonId: `#dare`, buttonText: { displayText: 'Dare' }, type: 1 } ]
            sendButImage(from, '\t\t\t\t*「 ~TRUTH~ OR DARE 」*\n\n'+ der, fake, buff, buttons)
            break

        // Nsfw Menu
        case 'awoo':
            if (!isGroup) return reply(mess.only.group)
            if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw untuk mengaktifkan`)
            reply(mess.wait)
            anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
            buffer = await getBuffer(anu.url)
            but = [ { buttonId: `#awoo`, buttonText: { displayText: 'Get Again' }, type: 1 } ]
            sendButImage(from, "Sange kok sama anime", fake, buffer, but)
            break
        case 'blowjob':
            if (!isGroup) return reply(mess.only.group)
            if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw untuk mengaktifkan`)
            reply(mess.wait)
            anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
            buffer = await getBuffer(anu.url)
            but = [ { buttonId: `#blowjob`, buttonText: { displayText: 'Get Again' }, type: 1 } ]
            sendButImage(from, "Sange kok sama anime", fake, buffer, but)
            break
        case 'hentai':
            if (!isGroup) return reply(mess.only.group)
            if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw untuk mengaktifkan`)
            reply(mess.wait)
            anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
            buffer = await getBuffer(anu.url)
            but = [ { buttonId: `#hentai`, buttonText: { displayText: 'Get Again' }, type: 1 } ]
            sendButImage(from, "Sange kok sama anime", fake, buffer, but)
            break
        case 'megumin':
            if (!isGroup) return reply(mess.only.group)
            if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw untuk mengaktifkan`)
            reply(mess.wait)
            anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
            buffer = await getBuffer(anu.url)
            but = [ { buttonId: `#megumin`, buttonText: { displayText: 'Get Again' }, type: 1 } ]
            sendButImage(from, "Sange kok sama anime", fake, buffer, but)
            break
        case 'neko':
            if (!isGroup) return reply(mess.only.group)
            if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw untuk mengaktifkan`)
            reply(mess.wait)
            anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
            buffer = await getBuffer(anu.url)
            but = [ { buttonId: `#neko`, buttonText: { displayText: 'Get Again' }, type: 1 } ]
            sendButImage(from, "Sange kok sama anime", fake, buffer, but)
            break
        case 'trapnime':
            if (!isGroup) return reply(mess.only.group)
            if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw untuk mengaktifkan`)
            reply(mess.wait)
            anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
            buffer = await getBuffer(anu.url)
            but = [ { buttonId: `#trapnime`, buttonText: { displayText: 'Get Again' }, type: 1 } ]
            sendButImage(from, "Sange kok sama anime", fake, buffer, but)
            break

        // Asupan Menu
        case 'asupan': 
            reply(mess.wait)
            mantap = await getBuffer(`https://api.dapuhy.xyz/api/asupan/asupan?apikey=DappaAnjing`)
            buttonss = [ { buttonId: `#asupan`, buttonText: { displayText: `Get Again` }, type: 1 } ]
            sendButVideo(from, "Nih Asupan", fake, mantap, buttonss)
            break
        case 'santuy': case 'bocil':
        case 'ukhty': case 'rikagusriani': case 'ghea':
            reply(mess.wait)
            mantap = await getBuffer(`https://api.dapuhy.xyz/api/asupan/asupan${command}?apikey=DappaAnjing`)
            buttonss = [ { buttonId: `#${command}`, buttonText: { displayText: `Get Again` }, type: 1 } ]
            sendButVideo(from, "Nih Asupan", fake, mantap, buttonss)
            break

        // Cecan Menu
        case 'china': case 'hijab': case 'indon':
        case 'japan': case 'korea': case 'malay':
            reply(mess.wait)
            cecan = await fetchJson(`https://melcanz.com/${command}?&apikey=melcantik`)
            cecanny = await getBuffer(cecan.result)
            nganu = [ { buttonId: `#${command}`, buttonText: { displayText: 'Get Again' }, type: 1 } ]
            sendButImage(from, "Jangan jadiin bacol om:v", fake, cecanny, nganu)
            break

        // Waifu Menu
        case 'loli': case 'husbu':
        case 'shota': case 'cosplay': case 'wallml':
            let wipu = (await axios.get(`https://raw.githubusercontent.com/xdlyy404/data/main/${command}.json`)).data
            let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
            fs.writeFileSync(`./media/sampah/${sender}.jpeg`, await getBuffer(wipi))
            buttonsss = [ { buttonId: `#${command}`, buttonText: { displayText: `➡️Next` }, type: 1 } ]
            imageMsg = ( await fadly.prepareMessage(from, fs.readFileSync(`./media/sampah/${sender}.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(settings.pathImg)})).message.imageMessage
            buttonsMessage = {
                footerText: fake,
                imageMessage: imageMsg,
                contentText: `Klik next untuk ke gambar selanjut nya`,
                buttons: buttonsss,
                headerType: 4
            }
            prep = await fadly.prepareMessageFromContent(from, { buttonsMessage }, { quoted: msg })
            fadly.relayWAMessage(prep)
            fs.unlinkSync(`./media/sampah/${sender}.jpeg`)
            break

        // Owner Menu
        case 'mode':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            buttonss = [{buttonId: `#public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `#self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
            const buMess = {
                contentText: "SELF/PUBLIC",
                footerText: 'Silahkan Pilih Saah Satu',
                buttons: buttonss,
                headerType: 1
            }
            await fadly.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: msg})
            break
		case 'public':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            publik = true
            reply('Success in changing self mode to public')
            break
        case 'self':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            publik = false
            reply('Success in changing public mode to self')
            break
        case 'exif':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            const exifff = `${args.join(' ')}`
            const namaPack = exifff.split('|')[0]
            const authorPack = exifff.split('|')[1]
            exif.create(namaPack, authorPack)
            await reply('Done gan')
            break
        case 'addcmd': case 'setcmd':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            if (isQuotedSticker) {
            if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
            var kodenya = msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            addCmd(kodenya, c)
            reply("Berhasil!")
            } else {
            reply('tag stickenya!')
            }
            break
        case 'delcmd':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker\nExample : ${command} #menu`)
            var kodenya = msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            scommand.splice(getCommandPosition(kodenya), 1)
            fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
            reply("Berhasil!")
            break
        case 'listcmd':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
            let cemde = [];
            for (let i of scommand) {
            cemde.push(i.id)
            teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
            }
            reply(teksnyee)
            break
        case 'setprefix':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
            if (c === 'multi'){
            multi = true
            reply(`Successfully changed prefix to ${c}`)
            } else if (c === 'nopref'){
                multi = false
                nopref = true
            reply(`Successfully changed prefix to ${c}`)
            } else {
                multi = false
                nopref = false
                prefa = `${c}`
            reply(`Successfully changed prefix to ${c}`)
            }
            break
        case 'bc':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            if (args.length < 1) return reply('Teksnya?')
            anu = await fadly.chats.all()
            if (isMedia && !msg.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
            buff = await fadly.downloadMediaMessage(encmedia)
            for (let _ of anu) {
                fadly.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${q}`})
            }
            reply(`Sukses mengirim Broadcast ${q}`)
            } else if (isMedia && !msg.message.videoMessage || isQuotedVideo) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
            buff = await fadly.downloadMediaMessage(encmedia)
            for (let _ of anu) {
                fadly.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${q}`})
            }
            reply(`Sukses mengirim Broadcast ${q}`)
            } else if (isMedia && !msg.message.videoMessage || isQuotedVideo) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
            buff = await fadly.downloadMediaMessage(encmedia)
            for (let _ of anu) {
                fadly.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${q}` })
            }
            reply(`Sukses mengirim Broadcast ${q}`)
            } else {
            for (let _ of anu) {
            buttons = [{buttonId: `#menu`, buttonText: {displayText: 'Menu'}, type: 1},{buttonId: `#owner`, buttonText: {displayText: 'Owner'}, type: 1}]
            const btnbc = {
                contentText: `${q}`,
                footerText: '*BROADCAST*',
                buttons: buttons,
                headerType: 1
            }
            await fadly.sendMessage(_.jid, btnbc, MessageType.buttonsMessage)
            }
            reply(`Sukses mengirim Broadcast:\n${q}`)
            }
            break
        case 'join':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            try {
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link yang anda berikan tidak valid')
                hen = args[0]
                if (!q) return reply('Link group nya?')
                var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
                if (!codeInvite) return reply('pastikan link sudah benar!')
                var response = await fadly.acceptInvite(codeInvite)
                reply(mess.success)
                } catch {
                reply('Gagal memasuki group. Mungkin link sudah disetel ulang atau bot pernah di kick dari group')
            }
            break
        case 'leave':
            if (!isGroup) return reply(mess.only.group)
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            fadly.groupLeave(from)
            break
        case 'peson':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            fadly.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
            break
        case 'pesoff':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            fadly.toggleDisappearingMessages(from, 0)
            break
        case 'mute':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            fadly.modifyChat(from, ChatModification.mute, 24 * 60 * 60 * 1000)
            reply('succes mute this chat')
            break
        case 'unmute':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            fadly.modifyChat(from, ChatModification.unmute)
            reply('succes unmute this chat')
            break
        case 'return':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            return fadly.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: msg})
            if (err) return fadly.sendMessage(from, `root@fadlyid:~ ${err}`, text, { quoted: msg })
            break
        case 'culik':
            if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
            if (args.length < 1) return reply('ID Groupnya Mana?')
            let pantek = []
            for (let i of groupMembers) {
                pantek.push(i.jid)
            }
            fadly.groupAdd(args[0], pantek)
            break

        // Download Menu
        case 'play': case 'ytplay':
            if (!q) return reply('Example : #play _query/judul_')
            let query = args.join(" ")
            res = await yts(q)
            let thumbInfo = ` 
*Youtube Download*
 *🎄Judul :* ${res.all[0].title}
 *🎉ID Video :* ${res.all[0].videoId}
 *🎋Diupload Pada :* ${res.all[0].ago}
 *🗺Views :* ${res.all[0].views}
 *📻Durasi :* ${res.all[0].timestamp}
 *⛽Channel :* ${res.all[0].author.name}
 *🔗Link Video :* ${res.all[0].url}
`
            buttons = [
            { buttonId: `#ytmp3 ${res.all[0].url}`, buttonText: { displayText: '🎧 Audio' }, type: 1 },
            { buttonId: `#ytmp4 ${res.all[0].url}`, buttonText: { displayText: '🎥 Video' }, type: 1 }
            ]
            imageMessage = (await fadly.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
            buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}
            prep = await fadly.prepareMessageFromContent(from,{buttonsMessage},{})
            fadly.relayWAMessage(prep)
            break
        case 'ytmp3':
            if (args.length === 0) return reply(`Example : ${prefix}ytmp3 _link_`)
            let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return reply(mess.error.Iv)
            try {
                reply(mess.wait)
                yta(args[0])
                    .then((res) => {
                    const { dl_link, thumb, title, filesizeF, filesize } = res
                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                    .then((a) => {
                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `🎧 *YTMP3*\n\n📝 *Title* : ${title}\n▶️ *Ext* : MP3\n🎚️ *Filesize* : ${filesizeF}\n🔗 *Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                    sendFileFromUrl(dl_link, audio, {mimetype: 'audio/mp4', filename: `${title}.mp3`, quoted: msg, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
                })
                })
            } catch (err) {
            reply(mess.error.api)
            }
            break
        case 'ytmp4':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
            let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks2) return reply(mess.error.Iv)
            try {
                reply(mess.wait)
                ytv(args[0])
                .then((res) => {
                    const { dl_link, thumb, title, filesizeF, filesize } = res
                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                    .then((a) => {
                    if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `🎥 *YTMP4*\n\n📝 *Title* : ${title}\n▶️ *Ext* : MP3\n🎚️ *Filesize* : ${filesizeF}\n🔗 *Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                    sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: msg, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
                })
                })
            } catch (err) {
            reply(mess.error.api)
            }
            break
        case 'ig': case 'igdl': case 'instagram':
            if (!c) return reply('Linknya?')
            reply(mess.wait)
            var { igDownloader } = require('./lib/igdown')
            res = await igDownloader(`${c}`).catch(e => {
            reply(mess.error.api)
            })
            console.log(res)
            sendMediaURL(from,`${res.result.link}`,`Follows Instagram : https://instagram.com/iamfadlyid_`)
            break
        case 'tiktokdl': case 'ttdl': case 'tiktok':
        case 'ttnowm': case 'tiktoknowm':
            if (!q) return reply('Linknya?')
            if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
            reply(mess.wait)
            anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
            break
        case 'mediafire': case 'mediafiredl': case 'mfiredl': case 'mfire':
            // if (!isPremium) return reply(mess.only.prem)
            if (args.length < 1) return reply('Linknya?')
            if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
            reply(mess.wait)
            teks = args.join(' ')
            res = await mediafireDl(teks)
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`◧ Nama : ${res[0].nama}\`\`\`
\`\`\`◧ Ukuran : ${res[0].size}\`\`\`
\`\`\`◧ Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
            reply(result)
            sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: msg})
            break

        // Search Menu
        case 'ytsearch': case 'yts':
            if (!args.length) return reply('Judulnya apa kak?')
            try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `┌ ◪ *YOUTUBE SEARCH*
└ *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                hehe += `───────────────\n
┌ ❏ *Judul:* ${items[i].title}
├ ❏ *Id:* ${items[i].id}
├ ❏ *Ditonton:* ${items[i].views}
├ ❏ *Durasi:* ${items[i].duration}
└ ❏ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await fadly.sendMessage(from, thumb, image, {quoted: msg, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link yt] = Audio
└ ${prefix}ytmp4 [link yt] = Video`})
                } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
        case 'pinterest':
            if (!q) return reply("Example : #pinterest _query_")
            pint = await pinterest (q)
            fadly.sendMessage(from, {url: `${pint[Math.floor(Math.random() * pint.length)]}`}, image, {quoted: msg, thumbnail: Buffer.alloc(0), caption: "Follows Instagram : https://instagram.com/iamfadlyid_"})
            break
        /*case 'google': case 'googlesearch': case 'gsearch':
            if (!q) return reply("Example : #google _query_")
            ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f307ca1dc9824ae89caa976435c03178&url=http://www.google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
            reply(mess.wait)
            if (q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
            ggs({ 'query': q }).then(results => {
            vars = `_*Hasil Pencarian : ${q}*_\n`
            for (let i = 0; i < results.length; i++) {
            vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
            } 
            fadly.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : msg})
            }).catch(e => {
            console.log(e)
            reply(`${e}`)
            })
            break*/
        case 'wiki':
            if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
            teks = args.join(' ')
            res = await wikiSearch(teks).catch(e => {
            return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
            }) 
            result = `*Judul :* ${res[0].judul}\n*Wiki :* ${res[0].wiki}`
            sendFileFromUrl(res[0].thumb, image, {quoted: msg, caption: result}).catch(e => {
                reply(result)
            })
            break
        case 'grupwa': case 'searchgrup': case 'searchgc': 
        case 'gcsearch': case 'groupwa': case 'searchgroup':
        case 'grupsearch': case 'groupsearch':
            if (args.length < 1) return reply(`Penggunaan ${prefix + command} _nama gc_\n\nExample : ${prefix + command} Creator Bot WhatsApp`)
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
                res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
        case 'lirik': case 'lyrics':
            if (args.length < 1) return reply('Judulnya?')
            reply(mess.wait)
            teks = args.join(' ')
            lirikLagu(teks).then((res) => {
            let lirik = `${res[0].result}`
            reply(lirik)
            })
            break
        case 'herolist':
            await herolist().then((ress) => {
            let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
            for (var i = 0; i < ress.hero.length; i++) {
            listt += '-  ' + ress.hero[i] + '\n'
            }
            reply(listt)
            })
            break
        case 'herodetail':
            res = await herodetails(body.slice(12))
            her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
            reply(her)
            break

        // Other Menu
        case 'owner': case 'author': case 'developer':
            let ini_list = []
            for (let i of ownerNumber) {
            const vname = fadly.contacts[i] != undefined ? fadly.contacts[i].vname || fadly.contacts[i].notify : undefined
            ini_list.push({
            "displayName": '${ownerName}',
            "vcard": 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `N:Sy;${ownerName};;;\n`
            + `FN:${vname ? `${vname}` : `${fadly.user.name}`}\n`
            + `item1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\n`
            + `item1.X-ABLabel:Contacts\n`
            + 'END:VCARD'
            })
            }
            hehe = await fadly.sendMessage(from, {
            "displayName": `${ini_list.length} kontak`,
            "contacts": ini_list 
            }, 'contactsArrayMessage', { quoted: msg })
            fadly.sendMessage(from, 'Ini kak kontak ownerku', text, { quoted: msg })
            break
        case 'd': case 'del': case 'delete':
            fadly.deleteMessage(from, { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
            break
        case 'status': case 'stats':
            var groups = fadly.chats.array.filter(v => v.jid.endsWith('g.us'))
            var privat = fadly.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
            var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
            uptime = process.uptime();
            const totalChat = await fadly.chats.all()
            var total = math(`${groups.length} ${privat.length}`)
            const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = fadly.user.phone
            stamtus = `「 *STATUS-INFORMATION* 」

*SERVER-STATUS*
• *Host:* ${os.hostname()}
• *Platfrom:* ${os.platform()}
• *Speed:* ${os.cpus()[0].speed} MHz
• *Core:* ${os.cpus().length}
• *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
• *CPU:* ${os.cpus()[0].model}
• *Release:* ${os.release()}

*BOT-STATUS*
• *V. Whatsapp:* ${fadly.user.phone.wa_version}
• *Baterai:* ${baterai.battery}
• *Charge:* ${baterai.isCharge}
• *MCC:* ${mcc}
• *MNC:* ${mnc}
• *Versi OS:* ${fadly.user.phone.os_version}
• *Merk HP:* ${device_manufacturer}
• *Versi HP:* ${fadly.user.phone.device_model}
• *Group Chat:* ${groups.length}
• *Personal Chat:* ${totalchat.length - groups.length}
• *Total Chat:* ${totalchat.length}
• *Speed:* ${latensi.toFixed(4)} Second
• *Runtime:* ${runtime(process.uptime())}`
            but = [
            { buttonId: `#menu`, buttonText: { displayText: '📓 Back To Menu' }, type: 1 }
            ]
            sendButImage(from, "ＷｈａｔｓＡｐｐ - Ｂｏｔ", stamtus, thumb, but)
            break
        case 'ping':
            reply(`*SPEEDTEST : ${latensi.toFixed(4)} Seconds*`)
            break
        case 'runtime':
            reply(`*Aktif selama : ${runtime(process.uptime())}*`)
            break

default:
}
if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  fadly.sendMessage(from, ucapan, text, {quoted: msg, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
fadly.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:msg,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh @${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
fadly.sendMessage(from, ucapan1, text, {quoted:msg, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿??_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 fadly.sendMessage(from, ucapan, text, {quoted: msg, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
fadly.sendMessage(from, ucapan1, text, {quoted:msg, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
fadly.sendMessage(from, ucapan, text, {quoted: msg, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
	} catch (e) {
        e = String(e)
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
    }
}
