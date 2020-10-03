# musicdiscordbot
This is a bot for Discord, where you can listen to music while you are in a voice room on Discord, its operation is simple, if you have any difficulty using it, or if there is an error, you can call me via email : dionathan2002@gmail.com, or via Discord Lil Hawklto # 0777, below you will have all the explanations about this Bot.

This bot documentation is available in [English](https://github.com/DionathanSehnem/musicdiscordbot/blob/main/README.md) and [Portuguese](https://github.com/DionathanSehnem/musicdiscordbot/blob/main/README.pt-br.md).

## Installing the bot for you to use

### Select a folder to place the files in this repository and follow the steps below in the terminal

`npm init`

`npm install discord.js --save`

`npm install node-opus --save`

`npm install opusscript --save`

`npm install simple-youtube-api --save`

`npm install ytdl --save`

### After that, access the config.json file using your code editor.
- `prefix`: there you will put some signal that will be recognized by your bot, it will always go before the command. If I use `?` As a prefix, the play command will be used in this way `?play`. If you are going to use this bot on a server with other bots, be careful not to have a prefix conflict.

- `token`: this part is very important, as the token will be your bot's identity document, it is it that tells which bot will use this script. Never spread this to anyone. To access this token just go to [Discord Developers] (https://discord.com/developers/applications) create an application, and get your token in the bot section, paste it in config.json and one more step to your bot will be complete.

- `youtubeapikey`: maybe this part is a little more complicated for beginners, however [you can click here] (https://blog.difluir.com/2016/10/como-criar-uma-chave-de-api-para-youtube/#:~:text=Criando%20o%20Projeto%20e%20a%20Chave%20de%20API&text=Em%20seguida%20v%C3%A1%20em%20Biblioteca,a%20op%C3%A7%C3%A3o%20Chave%20de%20API.) And you will be redirected to a link where you will better explain how to get your youtube key. After getting it, just paste it in the config.json file.

## Passos finais
- From now on you need to have the terminal in the directory where your files are located, run in the terminal: `node index.js`.
- If there is an error or have any questions on how to modify the code, contact me by email and I will help you.
