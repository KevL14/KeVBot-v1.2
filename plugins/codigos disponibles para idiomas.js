let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
鈿欙笍 *FORMATOS DE USOS* 

馃挮 *Para crear Audios:*
#tts (c贸digo) (texto)

鈿★笍 *Ejemplo:*
#tts es Hola mundo 


馃挮 *Para traducir:*
#traducir (c贸digo) (texto) 

鈿★笍 *Ejemplo:*
#traducir es Hello world
*Resultado:* Hola mundo

馃憞 *隆M谩s C贸digos de idiomas!*

鈿欙笍 *LISTA DE C脫DIGOS:* 
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /C脫DIGOS PARA AUDIOS|Codigos para audios|codigos para audios|codigosparaaudios|c贸digos para audios|C贸digos para audios/i
handler.command = new RegExp

module.exports = handler
