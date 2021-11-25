const depNo = 40
const token = '2113008414:AAH4CbDxNzHnA28I2yS-3uJHyW8LQXTBN-U'
const telegramAppUrl = 'https://api.telegram.org/bot' + token
const webAppUrl =
  'https://script.google.com/macros/s/AKfycbzcFpg2hNfBR7JiZTpqn-9etmDfiE8v-tOFOcTVDRfdfs6xxjC6huhPopssEHDkGzxo/exec'

function setWebhook() {
  const url = telegramAppUrl + '/setWebhook?url=' + webAppUrl
  const response = UrlFetchApp.fetch(url)
  Logger.log(response.getContentText())
}

function sendMessage(id, text) {
  const url =
    telegramAppUrl +
    '/sendMessage?chat_id=' +
    id +
    '&text=' +
    text +
    '&disable_web_page_preview=true'
  UrlFetchApp.fetch(url)
  // const response = UrlFetchApp.fetch(url)
}

const bot = {
  create: function (teleUser, id) {
    const databaseSheetId = '1FOi7blMjvtZeM7hqWYN_pTp9wiHDr-RzZG8pD3aBgV8'
    const sheet = SpreadsheetApp.openById(databaseSheetId).getSheets()[0]

    const tempSheet = SpreadsheetApp.create(teleUser + '-hcanoe-temp-input')
    const tempSheetId = tempSheet.getId()
    const tempSheetUrl = tempSheet.getUrl()
    tempSheet.addEditor('nikelyvengun@gmail.com')

    sheet.appendRow([timestamp(), 'next column text'])

    /* move the file, specifically to brew4k@gmail.com's
     * `/My Drive/hcanoe/temp` directory
     */
    const source = DriveApp.getFileById(tempSheetId)
    const target = DriveApp.getFolderById('1iQDiZbWZkro--EQy-CyA0Y5SnSIplPkd')
    source.moveTo(target)

    return tempSheetUrl
  },
}

function doPost(e) {
  const contents = JSON.parse(e.postData.contents)
  const incoming = {
    id: contents.message.from.id,
  }
  const id = contents.message.from.id
  const text = contents.message.text
  const teleUser = contents.message.from.username

  sendMessage(id, 'deployment ' + depNo)

  switch (text) {
    case '/create':
      sendMessage(id, 'you chose to create!')
      const url = bot.create(teleUser, id)
      sendMessage(id, 'your temporary input sheet url is ' + url)
      break
    case '/list':
      sendMessage(id, 'you chose to list!')
      break
    case '/delete':
      sendMessage(id, 'you chose to delete!')
      break
    default:
      sendMessage(id, 'that is not a recognized command. have a nice day!')
  }
}

// commands list
// create - make a new temporary google sheet for data entry
// list - show all current google sheets
// delete - remove existing google sheet

function timestamp() {
  const ts = new Date()
  Logger.log(ts)
  return ts
}
