# musicdiscordbot
Este é um bot para Discord, onde você pode escutar músicas enquanto está em uma sala de voz no Discord, o funcionamento dele é simples, caso você tenha alguma dificulade em usa-lo, ou houver algum erro, pode me chamar via e-mail: dionathan2002@gmail.com, ou via Discord Lil Hawklto#0777, abaixo terá todas as explicações sobre este Bot.

## Instalando o bot para que você utilize

### Selecione uma pasta para colocar os arquivos deste respositório, e siga os passos a seguir no terminal


`npm init`

`npm install discord.js --save`

`npm install node-opus --save`

`npm install opusscript --save`

`npm install simple-youtube-api --save`

`npm install ytdl --save`


### Após isso acesse o arquivo config.json utilizando seu editor de código.
- `prefix`: ali você irá colocar algum sinal que será reconhecido pelo seu bot, ele sempre irá antes do comando. Caso eu utilize `?` como prefixo o comando de play será usado desta forma `?play`. Se for utilizar este bot em um servidor com outros bots, cuide para não haver conflito de prefixos.

- `token`: esta parte é muito importante, pois o token será o documento de indentidade do seu bot, é ele que diz qual bot usara este script. Nunca espalhe para ninguem este. Para ter acesso a este token bastA acessar o [Discord Developers](https://discord.com/developers/applications) criar uma aplicação, e pegar teu token na seção bot, cole-o no config.json e mais um passo para seu bot estara completo.

- `youtubeapikey`: talvez esta parte seja um pouco mais complicada para iniciantes, porém [você pode clicar aqui](https://blog.difluir.com/2016/10/como-criar-uma-chave-de-api-para-youtube/#:~:text=Criando%20o%20Projeto%20e%20a%20Chave%20de%20API&text=Em%20seguida%20v%C3%A1%20em%20Biblioteca,a%20op%C3%A7%C3%A3o%20Chave%20de%20API.) e será redirecionado a um link onde explicara melhor como conseguir sua key do youtube. Após consegui-lá, somente a cole no arquivo config.json.

## Passos finais
- A partir de agora você precisa estar com o terminal no diretorio onde se encontra seus arquivos, execute no console `node index.js`.
- Caso ocorra algum erro entre em contato comigo por e-mail que irei lhe ajudar.
- Caso tenha dúvida de como modificar alguma parte do código pode entrar em contato comigo pelo e-mail tambem. Estarei a disposição de todos par ajudar.
