function handler(m) {
const PhoneNumber = require('awesome-phonenumber')
let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6287760550924-1604595598@g.us"}, "message": {orderMessage: {itemCount: 1,status: 200, surface: 200, message: `                   「 MY OWNER 」            `, orderTitle: 'Centauri', sellerJid: '0@s.whatsapp.net'}}}
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:; Leon;;;'
                    + 'FN: LeonOfc\n' // full name
                    + 'ORG:Leon;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6287760550924:+628-776-055-0924\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Leon', contacts: [{ vcard }] } }, { quoted: ftroli })
m.reply(m.chat,'*Tuh nomor pacar ku🤭*\n*Chat jika PENTING*', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
