const bot = {
  create: function (id, tempFolderId) {
    telegram.sendMessage(id, 'creating a temporary spreadsheet...')

    const t = SpreadsheetApp.create(id + ' ' + timestamp())
    const tempSheetId = t.getId()
    const tempSheetUrl = t.getUrl()
    t.addEditor('nikelyvengun@gmail.com')

    /* move the file, specifically to brew4k@gmail.com's
     * `/My Drive/hcanoe/temp` directory
     */
    const source = DriveApp.getFileById(tempSheetId)
    const target = DriveApp.getFolderById(tempFolderId)
    source.moveTo(target)

    telegram.sendMessage(
      id,
      'your temporary input sheet url is ' + tempSheetUrl
    )
  },
  list: function (id, tempFolderId) {
    telegram.sendMessage(id, 'listing existing spreadsheets...')

    const folder = DriveApp.getFolderById(tempFolderId)
    var ls = []
    var files = folder.getFiles()
    while (files.hasNext()) {
      var file = files.next()
      var line = file.getName() + ' → ' + file.getUrl()
      ls.push(line)
    }
    if (ls.length == 0) {
      telegram.sendMessage(id, 'you have no temp files')
      return
    }
    ls.forEach((e) => {
      telegram.sendMessage(id, e)
    })
  },
  remove: function (id, tempFolderId) {
    telegram.sendMessage(id, 'looking for existing spreadsheets...')

    const folder = DriveApp.getFolderById(tempFolderId)

    /* gets an array of files under the temp folder
     * each element is { name, url, id }
     */
    var ls = []
    var files = folder.getFiles()
    while (files.hasNext()) {
      var file = files.next()
      var data = {
        name: file.getName(),
        url: file.getUrl(),
        id: file.getId(),
      }
      ls.push(data)
    }

    /* tells if user has no current temp files */
    if (ls.length == 0) {
      telegram.sendMessage(id, 'you have no temp files')
      return
    }

    /* reply with a keyboard of spreadsheet names
     * (pick one to delete it permanently)
     */
    const options = ls.map((file) => [
      {
        text: file.name,
        callback_data: '/remove/' + file.id,
      },
    ])
    const menu = { inline_keyboard: options }
    telegram.sendMenu(id, 'chose one to delete:', menu)
  },
}
