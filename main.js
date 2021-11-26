const deploymentNumber = 86
const tempFolderId = '1iQDiZbWZkro--EQy-CyA0Y5SnSIplPkd'
const token = '2113008414:AAH4CbDxNzHnA28I2yS-3uJHyW8LQXTBN-U'
const telegramAppUrl = 'https://api.telegram.org/bot' + token
const deploymentId =
  'AKfycbzcFpg2hNfBR7JiZTpqn-9etmDfiE8v-tOFOcTVDRfdfs6xxjC6huhPopssEHDkGzxo'
const webAppUrl = 'https://script.google.com/macros/s/' + deploymentId + '/exec'
const dbId = '1FOi7blMjvtZeM7hqWYN_pTp9wiHDr-RzZG8pD3aBgV8'

function setWebhook() {
  const url = telegramAppUrl + '/setWebhook?url=' + webAppUrl
  UrlFetchApp.fetch(url)
  // const response = UrlFetchApp.fetch(url)
  // Logger.log(response.getContentText())
}

const telegram = {
  sendMessage: function (id, text) {
    const url =
      telegramAppUrl +
      '/sendMessage?chat_id=' +
      id +
      '&text=' +
      text +
      '&disable_web_page_preview=true'
    UrlFetchApp.fetch(url)
  },
}

/*
 * appends row to a spreadsheet given its id
 */
// const sheet = SpreadsheetApp.openById(dbId).getSheets()[0]
// sheet.appendRow([timestamp(), 'next column text'])

function doPost(e) {
  const contents = JSON.parse(e.postData.contents)

  /* incoming info */
  const id = contents.message.from.id
  const text = contents.message.text
  // const user = contents.message.from.username
  function reply(t) {
    telegram.sendMessage(id, t)
  }

  reply('deployment ' + deploymentNumber)

  switch (text) {
    case '/create':
      reply('creating a temporary spreadsheet...')
      bot.create(id, tempFolderId, reply)
      break
    case '/list':
      reply('listing existing spreadsheets...')
      bot.list(tempFolderId, reply)
      break
    case '/delete':
      reply('deleting spreadsheet...')
      break
    default:
      reply('that is not a recognized command. have a nice day!')
  }
}

// commands list
// create - make a new temporary google sheet for data entry
// list - show all current google sheets
// delete - remove existing google sheet

function timestamp() {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }
  const ts = new Date()
  Logger.log(ts)
  return ts.toLocaleDateString('en-SG', options)
}
