var token = '2113008414:AAH4CbDxNzHnA28I2yS-3uJHyW8LQXTBN-U'
var telegramAppUrl = 'https://api.telegram.org/bot' + token
var webAppUrl =
  'https://script.google.com/macros/s/AKfycbzcFpg2hNfBR7JiZTpqn-9etmDfiE8v-tOFOcTVDRfdfs6xxjC6huhPopssEHDkGzxo/exec'

function setWebhook() {
  var url = telegramAppUrl + '/setWebhook?url=' + webAppUrl
  var response = UrlFetchApp.fetch(url)
  Logger.log(response.getContentText())
}

function sendMessage(id, text) {
  var url = telegramAppUrl + '/sendMessage?chat_id=' + id + '&text=' + text
  UrlFetchApp.fetch(url)
  // var response = UrlFetchApp.fetch(url)
}

function doPost(e) {
  var contents = JSON.parse(e.postData.contents)
  var id = contents.message.from.id
  var text = contents.message.text
  var teleUser = contents.message.from.username

  sendMessage(id, 'deployment 12')
  sendMessage(id, text)

  var databaseSheetId = '1FOi7blMjvtZeM7hqWYN_pTp9wiHDr-RzZG8pD3aBgV8'
  var sheet = SpreadsheetApp.openById(databaseSheetId).getSheets()[0]

  var tempSheetTitle = teleUser + "-hcanoe-temp-input"

  var tempSheet = SpreadsheetApp.create(tempSheetTitle)
  var tempSheetUrl = tempSheet.getUrl()
  var tempSheetId = tempSheet.getId()
  tempSheet.addEditor("nikelyvengun@gmail.com")

  sendMessage(id, "your temporary input sheet url is " + tempSheetUrl)
  sheet.appendRow([timestamp(), text, "second column"])

  /* move the file, specifically to brew4k@gmail.com's
   * `/My Drive/hcanoe/temp` directory
   */
  var source = DriveApp.getFileById(tempSheetId)
  var target = DriveApp.getFolderById("1iQDiZbWZkro--EQy-CyA0Y5SnSIplPkd")
  source.moveTo(target)
}

/* deployment check */
// function doPost(e) {
//   var contents = JSON.parse(e.postData.contents)
//   var id = contents.message.from.id
//   var text = contents.message.text
//   var teleUser = contents.message.from.username
// 
//   sendMessage(id, 'deployment 12')
//   sendMessage(id, text)
// }

function timestamp() {
  var ts = new Date
  Logger.log(ts)
  return ts
}
