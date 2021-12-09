`v1.0.0` will be the first version able to cover all tasks listed in
Core Business.

`v0.1.0` will be able to let secretaries collate and confirm
attendance using telegram alone.

### Road to v0.1

✅ `v0.0.1`
- create, list (user-specific), and delete Google Spreadsheets
- read the role of the user from a Spreadsheet (whether or not he is
  secretary)
- automatically format code
- deploy to bots depending on current branch

`v0.0.2`
- talk in group chats
- recognize who sent data from a group chat

`v0.0.3 and on`
- read and write data to attendance Spreadsheet
- logged movements (each edit, each indication of attendance)
- prompt secretary for confirmation 2h after training ends
- user interface for secretary to create new week's schedule
  - training metadata: day, start time, end time/duration
    (configurable per-secretary!), athlete group, coach present,
    teacher present, type, location
- sends secretary a receipt of what the week would look like
  (confirmation before sending to group chat)
- allows secretary to make real-time edits to training schedule if
  necessary

### v0.2 and on

`v0.2`
- auto-generates a human-readable Google Spreadsheet summarizing
  week's training (and maybe even take a screenshot and export as png)
