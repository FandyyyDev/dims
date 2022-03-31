const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor, XNoneLog } = require('./lib/color')
const fs = require("fs-extra")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const figlet = require('figlet')
const { getBuffer, info, start, success} = require('./lib/myfuncx')
const moment = require("moment-timezone")
const gcdetect = JSON.parse(fs.readFileSync('./database/gcdetect.json'))
const brightcolor  = require('colors');
const encodeUrl = require('encodeurl')
const chalk = require('chalk')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const { location } = MessageType
const settings = JSON.parse(fs.readFileSync('./config.json'))
let session = `./${settings.sessionName}.json`
baterai = 'unknown'
charging = 'unknown'

require('./message/help.js')
require('./fadly.js')
nocache('./message/help.js', module => console.log(color('| UPDATED |'), color(`${module} Updated!`, 'cyan')))
nocache('./fadly.js', module => console.log(color('| UPDATED |'), color(`${module} Updated!`, 'cyan')))

const starts = async (fadly = new WAConnection()) => {
    fadly.logger.level = 'warn'
    fadly.version = [2, 2208, 14]
    console.log(color(figlet.textSync('X-None Bot', {
        font: 'Standard',
        horizontalLayout: 'default',
        vertivalLayout: 'default',
        width: 80,
        whitespaceBreak: false
    }), 'cyan'))
    console.log(color('[ CREATED BY X-NONE TEAM ]'))
    fadly.browserDescription = [ 'X-None Team', 'Safari', '3.0' ]
    fadly.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan Scan Kode Qr Nya...!'))
    })

    fadly.on('credentials-updated', () => {
        fs.writeFileSync(`./${settings.sessionName}.json`, JSON.stringify(fadly.base64EncodedAuthInfo(), null, '\t'))
        console.log(XNoneLog('Connecting'))
    })

    fs.existsSync(session) && fadly.loadAuthInfo(session)
    fadly.on('connecting', () => {
        console.log(XNoneLog('Connecting...'))
    })

    fadly.on('open', () => {
        console.log(XNoneLog('Connect, Welcome Owner'))
    })

    await fadly.connect({ timeoutMs: 30 * 1000 })
        fs.writeFileSync(`./${settings.sessionName}.json`, JSON.stringify(fadly.base64EncodedAuthInfo(), null, '\t'))            
    
    fadly.on('ws-close', () => {
        console.log(XNoneLog('Koneksi terputus, mencoba menghubungkan kembali..'))
    })

    fadly.on('close', async ({ reason, isReconnecting }) => {
        console.log(XNoneLog('Terputus, Alasan :' + reason))
        console.log(XNoneLog('Mencoba mengkoneksi ulang :' + isReconnecting))
        if (!isReconnecting) {
            console.log(XNoneLog('Connect To Phone Rejected and Shutting Down.'))
        }
    })
    
    fadly.on('CB:action,,battery', json => {
        global.batteryLevelStr = json[2][0][1].value
        global.batterylevel = parseInt(batteryLevelStr)
        baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
        if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
        console.log('Baterai : ' + batterylevel + '%')
    })
    global.batrei = global.batrei ? global.batrei : []
    fadly.on('CB:action,,battery', json => {
        const batteryLevelStr = json[2][0][1].value
        const batterylevel = parseInt(batteryLevelStr)
        global.batrei.push(batterylevel)
    })
    
    const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
        kma = gam1;
        mhan = await fadly.prepareMessage(id, kma, MessageType.image);
        buttonMessages = {
             imageMessage: mhan.message.imageMessage,
             contentText: text1,
             footerText: desc1,
             buttons: but,
             headerType: 4,
        }
        fadly.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

    fadly.on("CB:Call", json => {
        let call;
        calling = JSON.parse(JSON.stringify(json))
        call = calling[1].from
        fadly.sendMessage(call, `*Sorry No Anda Di Block Karna Menelpon/Vc Bot!*`, MessageType.text)
        .then(() => fadly.blockUser(call, "add"))
        })

    fadly.on("group-update", async (anu) => {
        metdata = await fadly.groupMetadata(anu.jid);
        if (anu.announce == "false") {
        teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;
        fadly.sendMessage(metdata.id, teks, MessageType.text);
        console.log(`- [ Group Opened ] - In ${metdata.subject}`);
        } else if (anu.announce == "true") {
        teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;
        fadly.sendMessage(metdata.id, teks, MessageType.text);
        console.log(`- [ Group Closed ] - In ${metdata.subject}`);
        } else if (!anu.desc == "") {
        tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
        teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${
        anu.descOwner.split("@")[0]
        }\n Deskripsi Baru : ${anu.desc}`;
        fadly.sendMessage(metdata.id, teks, MessageType.text, { contextInfo: { mentionedJid: [tag] },
        });
        console.log(`- [ Group Description Change ] - In ${metdata.subject}`);
        } else if (anu.restrict == "false") {
        teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
        fadly.sendMessage(metdata.id, teks, MessageType.text);
        console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
        } else if (anu.restrict == "true") {
        teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
        fadly.sendMessage(metdata.id, teks, MessageType.text);
        console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
        }
    });

    fadly.on('group-participants-update', async (anu) => {
    try {
        mdata = await fadly.groupMetadata(anu.jid)
        console.log(anu)
        if (anu.action == 'add') {
            num = anu.participants[0]
            try {
                ppUrl = await fadly.getProfilePicture(num)
                } catch {
                ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                }
                img = await getBuffer(ppUrl)
                teks = ` Hii kak @${num.split('@')[0]}\nWelcome To Group ${mdata.subject}\nDont forget to read the description`
                sendButImage(anu.jid, teks, `*Created By X-None Team*`, img, but = [ { buttonId: `apaaja`, buttonText: { displayText: 'Welcome'}, type: 1 } ], options = { contextInfo: { mentionedJid: [num] } })
            } else if (anu.action == 'remove') {
            num = anu.participants[0]
            try {
                ppUrl = await fadly.getProfilePicture(num)
                } catch {
                ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                }
                img = await getBuffer(ppUrl)
                teks = `Sayonara @${num.split('@')[0]}\nKalo balik lagi bawa makanan yaa`
                sendButImage(anu.jid, teks, `*Created By X-None Team*`, img, but = [ { buttonId: `Hello World!`, buttonText: { displayText: `Sayonara` }, type: 1 } ], options = { contextInfo: { mentionedJid: [num] }})
            } else if (anu.action == 'promote') {
            num = anu.participants[0]
            try {
                ppUrl = await fadly.getProfilePicture(num)
                } catch {
                ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                }
                img = await getBuffer(ppUrl)
                teks = `「 PROMOTE - DETECTED 」\n\nNama : @${num.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${mdata.subject}`
                sendButImage(anu.jid, teks, `*Created By X-None Team*`, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `Congrats`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})
            } else if (anu.action == 'demote') {
            num = anu.participants[0]
            try {
                ppUrl = await fadly.getProfilePicture(num)
                } catch {
                ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                }
                img = await getBuffer(ppUrl)
                teks = `「 DEMOTE - DETECTED 」\n\nNama : @${num.split("@")[0]}\nStatus : Admin -> Member\nGroup : ${mdata.subject}`
                sendButImage(anu.jid, teks, `*Created By X-None Team*`, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `Kasian`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})
            }
    } catch (e) {
    console.log(e)
    }
    })

    fadly.on('chat-update', async (message) => {
        require('./fadly.js')(fadly, message)
    })  
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'di pantau oleh Fadly Ganteng:v')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
