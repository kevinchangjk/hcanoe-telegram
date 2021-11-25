var token = '2113008414:AAH4CbDxNzHnA28I2yS-3uJHyW8LQXTBN-U'
var telegramAppUrl = 'https://api.telegram.org/bot' + token
var webAppUrl =
  'https://script.google.com/macros/s/AKfycby2JwR2ZYlbIAC-w9UExzMX2XLpgEDIVL35NIm-hg2pB1lxlBfKql0Aj2rHmGePxGEN/exec'

function setWebhook() {
  var url = telegramAppUrl + '/setWebhook?url=' + webAppUrl
  var response = UrlFetchApp.fetch(url)
  Logger.log(response.getContentText())
}

function sendMessage(id, text) {
  var url = telegramAppUrl + '/sendMessage?chat_id=' + id + '&text=' + text
  var response = UrlFetchApp.fetch(url)
}

function doPost(e) {
  var contents = JSON.parse(e.postData.contents)
  var id = contents.message.from.id
  sendMessage(id, "hello there, khang")
}

function doGet(e) {}
