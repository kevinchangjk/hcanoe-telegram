## Requirements

- `node.js`
  - `yarn` package manager
    - Google's [`clasp`](https://github.com/google/clasp)
- `git`
- editing rights to the [Google Apps Script
  project](https://script.google.com/home/projects/1V0CzP2zK8MfYGOfJwXX4xJqwIu1CXvzH0UzhBdv3S2yz-mmG_nOMX0gn/edit)

## Setting up development environment

### Google

Open the [Google Apps Script
project](https://script.google.com/home/projects/1V0CzP2zK8MfYGOfJwXX4xJqwIu1CXvzH0UzhBdv3S2yz-mmG_nOMX0gn/edit).

Navigate to `webhook.gs`.  
Before clicking "Run", check that the selected function is "setWebhook".  
Click "Run".

You will be prompted to give certain Google-related permissions to
this project.

### Github

Go to the [hcanoe-telegram github repository](https://github.com/hcanoe/hcanoe-telegram).

Fork the repository.

![get-started-fork](https://raw.githubusercontent.com/hcanoe/hcanoe-telegram/master/images/get-started-fork.png)

The instructions from this point on will vary for different operating
systems.

- [macOS/Linux](#macOS/Linux)

### macOS/Linux

Run the setup script:

```
curl -fLo setup.sh https://raw.githubusercontent.com/hcanoe/hcanoe-telegram/master/setup.sh
chmod +x setup.sh
./setup.sh
```

## Deploying

First, get into the `google-apps-script` directory:
```
cd google-apps-script
```

Then simply run
```
./bot --deploy
```

Or, if you only want to push files from your local machine up to the
Google App Script project without deploying to the Telegram bot, you
can run

```
./bot --push
```
