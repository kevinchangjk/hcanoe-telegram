const deploymentNumber = 1;
// comment comment
const tempFolderId = "1iQDiZbWZkro--EQy-CyA0Y5SnSIplPkd";
const userDB = "1ELVWByWDsxMfZ3RwSz-fRSrrLsD0JIndlqab-J_0PkI";
const token = "2113008414:AAH4CbDxNzHnA28I2yS-3uJHyW8LQXTBN-U";
const telegramAppUrl = "https://api.telegram.org/bot" + token;
const deploymentId =
  "AKfycbzGPrT3kZ8h7MiDPE5os1e7Mo-r_Fb_oIR-6Fqq05Mjwjk-yueUogpFZ8R4wc6GnzQh";
const webAppUrl =
  "https://script.google.com/macros/s/" + deploymentId + "/exec";
const dbId = "1FOi7blMjvtZeM7hqWYN_pTp9wiHDr-RzZG8pD3aBgV8";

const telegram = {
  /* sends the user a prompt message */
  sendMessage: function (id, text) {
    const data = {
      method: "post",
      payload: {
        method: "sendMessage",
        chat_id: String(id),
        text: text,
        disable_web_page_preview: true,
      },
    };
    UrlFetchApp.fetch(telegramAppUrl + "/", data);
  },
  /* sends the user a prompt message with a menu
   * [https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating]
   */
  sendMenu: function (id, text, menu) {
    const data = {
      method: "post",
      payload: {
        method: "sendMessage",
        chat_id: String(id),
        text: text,
        parse_mode: "HTML",
        reply_markup: JSON.stringify(menu),
      },
    };
    UrlFetchApp.fetch(telegramAppUrl + "/", data);
  },
};

/*
 * appends row to a spreadsheet given its id
 */
// const sheet = SpreadsheetApp.openById(dbId).getSheets()[0]
// sheet.appendRow([timestamp(), 'next column text'])

function doPost(e) {
  /* starting point */
  const contents = JSON.parse(e.postData.contents);

  /* splits handling based on if the input is
   * a command message,
   * or a button press from a menu
   * [https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating]
   */
  if (contents.message) {
    handle_message(contents);
  } else if (contents.callback_query) {
    handle_callback(contents);
  }
}

/* for handling telegram messages sent to the bot directly */
function handle_message(contents) {
  const id = contents.message.from.id;
  const text = contents.message.text;
  // const user = contents.message.from.username

  telegram.sendMessage(id, "deployment " + deploymentNumber);

  /* commands list
   * create - make a new temporary google sheet for data entry
   * list - show all current google sheets
   * delete - remove existing google sheet
   * whoami - see your own profile
   * test - for devs
   */
  switch (text) {
    case "/create":
      bot.create(id, tempFolderId);
      break;
    case "/list":
      bot.list(id, tempFolderId);
      break;
    case "/remove":
      bot.remove(id, tempFolderId);
      break;
    case "/whoami":
      bot.whoami(id, tempFolderId, userDB);
      break;
    case "/test":
      const menu = {
        inline_keyboard: [
          [{ text: "budget", callback_data: "budget" }],
          [{ text: "expenses", callback_data: "expenses" }],
          [{ text: "savings", callback_data: "savings" }],
        ],
      };
      telegram.sendMenu(id, "something", menu);
      break;
    default:
      telegram.sendMessage(
        id,
        "that is not a recognized command. have a nice day!"
      );
  }
}

/* for handling inline keyboard (telegram menu) inputs */
function handle_callback(contents) {
  const id = contents.callback_query.from.id;

  /* expected format: String
   * "/<command>/<arguments>"
   *
   * e.g.: "/remove/1iGNDVqK_9f8nUHMksFbsEhsgsrI1cnqDerzkm9MkhuQ"
   */
  const data = contents.callback_query.data;
  const split = data.split("/");
  const command = split[1];
  const args = split[2];

  switch (command) {
    case "remove":
      callback.remove(id, args);
      break;
  }
}

/* returns a string containing a custom timestamp
 * example: "Sat, 27 Nov 2021, 08:52"
 */
function timestamp() {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const ts = new Date();
  return ts.toLocaleDateString("en-SG", options);
}

/* documentation: https://core.telegram.org/bots/api
 * vim:tw=70
 */
