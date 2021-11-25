const bot = {
  create: function (id, tempFolderId) {
    const t = SpreadsheetApp.create(id + '-hcanoe-temp-input')
    const tempSheetId = t.getId()
    const tempSheetUrl = t.getUrl()
    t.addEditor('nikelyvengun@gmail.com')

    /* move the file, specifically to brew4k@gmail.com's
     * `/My Drive/hcanoe/temp` directory
     */
    const source = DriveApp.getFileById(tempSheetId)
    const target = DriveApp.getFolderById(tempFolderId)
    source.moveTo(target)

    return tempSheetUrl
  },
  list: function (id, tempFolderId) {
    const drive = DriveApp.getFolderById(tempFolderId)
    const results = drive.searchFolders("title contains '"+id+"'")
    return results
  }
}
