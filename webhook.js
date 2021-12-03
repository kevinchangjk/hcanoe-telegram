function setWebhook() {
  const url = telegramAppUrl + '/setWebhook?url=' + webAppUrl
  UrlFetchApp.fetch(url)
}