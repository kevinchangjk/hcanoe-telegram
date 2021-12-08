## Creating a Telegram bot

See the [Telegram
documentation](https://core.telegram.org/bots#3-how-do-i-create-a-bot).

## Setting up and linking Google Apps Script to Telegram

Tutorial [part 1](https://www.youtube.com/watch?v=pV1Jt3fjcq8),
[part 2](https://www.youtube.com/watch?v=_VwmNRDjHwc),
[part 3](https://www.youtube.com/watch?v=1xr2dZk0vKQ).

If there's insufficient permissions (commands which involve Google
Drive/Sheets doesn't work), then go to Google Apps Script > Editor >
appsscript.json. Under `oauthScopes`, append the required permission.

## Setup deletion permissions on Google Drive

In order to be able to remotely permanently delete files, you need to
enable
[Advanced Drive Service](https://developers.google.com/apps-script/advanced/drive)
on the Google Apps Script file.

To do this, go to the Google Apps Script file on your web browser,
and go Editor > Services, click the "+" sign and choose "Drive"

## Adding a new developer

Share the Google Apps Script with new developer on Google Drive.

Get the new developer to open the Script in web browser,
go to `main.gs`,
and run the `setWebhook()` function.

This will prompt Google to ask for certain permissions from the developer,
to which he will agree.
