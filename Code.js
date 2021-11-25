var token = '2113008414:AAH4CbDxNzHnA28I2yS-3uJHyW8LQXTBN-U'
var telegramAppUrl = 'https://api.telegram.org/bot' + token
var webAppUrl =
  'https://script.google.com/macros/s/AKfycbwIKAWH2iqUMG6JA9xVUXuwt5lKtlrBwWTSi8GTiIE8rhz0nevGdA6qZPqLBJZBogoF/exec'

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

  sendMessage(id, 'deployment 8')
  sendMessage(id, text)

  var databaseSheetId = '1FOi7blMjvtZeM7hqWYN_pTp9wiHDr-RzZG8pD3aBgV8'
  var sheet = SpreadsheetApp.openById(databaseSheetId).getSheets()[0]
  sheet.appendRow([text, "second column"])
}
