# create a telegram bot

https://core.telegram.org/bots#3-how-do-i-create-a-bot

# setup and link google apps script to telegram bot

https://www.youtube.com/watch?v=pV1Jt3fjcq8
https://www.youtube.com/watch?v=_VwmNRDjHwc
https://www.youtube.com/watch?v=1xr2dZk0vKQ

If there's insufficient permissions (commands which involve google
drive/sheets doesn't work), then copy the code over to a new google
apps script file and run it. It should prompt you for permission
access.

# setup deletion permissions on Google Drive

In order to be able to remotely permanently delete files, you need to
enable Advanced Drive Service on the Google Apps Script file.

https://developers.google.com/apps-script/advanced/drive

To do this, go to the Google Apps Script file on your web browser,
and go Editor > Services, click the "+" sign and choose "Drive"

---------
vim:tw=70
