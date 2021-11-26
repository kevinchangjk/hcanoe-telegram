const bot = {
  create: function (id, tempFolderId, reply) {
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

    reply('your temporary input sheet url is ' + tempSheetUrl)
  },
  list: function (tempFolderId, reply) {
    const folder = DriveApp.getFolderById(tempFolderId)
    var ls = []
    var files = folder.getFiles()
    while (files.hasNext()) {
      var file = files.next()
      var line = file.getName() + ' → ' + file.getUrl()
      ls.push(line)
    }
    ls.length === 0
      ? reply('you have no temp files')
      : ls.forEach((e) => {
          reply(e)
        })
  },
}
