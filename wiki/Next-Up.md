Immediate next-step tasks

-----

- [ ] allow telegram users to add their own email

add a new `/config` command to telegram bot  
then return a menu, one of the options being add/change email  
next message that the user sends will be written into the user
database

-----

- [ ] create an attendance list

initialize a google sheet for attendance  
final usage:
1. secretary sends a private message of `/weektraining` to telegram bot
2. bot will get necessary training information from secretary
3. bot will send a receipt for confirmation
4. once confirmed by secretary, bot will send the attendance sheet
   into the group chat
5. there will be a menu underneath the group message
6. to indicate intention to attend a training, user will click on the
   buttons below the attendance sheet
7. user's name will be added to the list
8. user's name will be added to a temporary attendance sheet
9. 2h after end of training, secretary will be notified by the bot to
   confirm attendace
10. once attendance is confirmed, contents of the temporary
    spreadsheet will be written to the main spreadsheet of attendance.

-----

- [ ] create a log

in the form of a google sheet
intent is to log every single transaction that occurs on the telegram
bot:
* timestamp
* user
* transaction description

This google sheet must not be editable by anyone, if possible, other
than the code writing the logs.
