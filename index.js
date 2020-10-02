const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');

const { prefix, token, youtubeapikey } = require('./config.json')
const youtube = new YouTube(youtubeapikey);

client.once('ready', () => {
    console.log(`${client.user.tag} está online!`)
})

constvalido = false

client.on('message', message => {
    if (message.content.startsWith(`${prefix}play`)) {
        if (message.channel.type === 'dm') return;

        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            return message.reply(' entre em um canal de voz primeiro!');
        }
        if (message.content.length < 7) {
            return message.reply(`coloque um link após o ${prefix}play!`);
        } else {
            let urlvideo = message.content.slice(6, message.content.length);
            let valido = validateYouTubeUrl(urlvideo);
            console.log(valido)
            if (valido == true) {
                voiceChannel.join().then(connection => {
                    const stream = ytdl(`${urlvideo}`, { filter: 'audioonly' });
                    const dispatcher = connection.play(stream);

                    dispatcher.on('finish', () => voiceChannel.leave());
                })
            } else if (valido == false) {
                youtube.searchVideos(urlvideo)
                    .then(results => {
                        console.log(`${results[0].url}`);
                        voiceChannel.join().then(connection => {
                            const stream = ytdl(`${results[0].url}`, { filter: 'audioonly' });
                            const dispatcher = connection.play(stream);

                            dispatcher.on('finish', () => voiceChannel.leave());
                        }).catch(console.log);
                    })
            }
        }
    } else if (message.content.startsWith(`${prefix}stop`)) {
        const voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            const stream = ytdl(`https://www.youtube.com/watch?v=jhFDyDgMVUI`, { filter: 'audioonly' });
            const dispatcher = connection.play(stream);

            dispatcher.on('finish', () => voiceChannel.leave());
        })
    } else if (message.content.startsWith(`${prefix}server`)) {
        message.channel.send(`Estou em ${client.guilds.cache.size} servidores`)
    } else if (message.content.startsWith(`${prefix}ajuda`)) {
        message.reply(`${embedajuda}`);
    }
})

function validateYouTubeUrl(urlvideo) {
    var url = urlvideo;
    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return true;
        } else {
            return false;
        }
    }
}

const embedajuda = new Discord.MessageEmbed()
	.setColor('#ff9100')
	.setTitle('Comandos do Lil Music')
	.setAuthor(`${client.user}`)
	.setThumbnail(`https://cdn.discordapp.com/attachments/725112779517722645/759854389212741672/1099a0924dcef6d9a742cd73d671e008_1.jpg`)
    .addField('\u200B', '\u200B', false)
    .addField(`${prefix}play`, 'Irá tocar a música que você deseja, pode usar link ou nome da música.', false)
    .addField(`${prefix}stop`, 'Irá fazer com que o bot pare de tocar música e saia.', false)
    .addField('\u200B', '\u200B', false)
	.setImage('https://cdn.discordapp.com/attachments/725112779517722645/759848919697326110/djpig.gif')
	.setTimestamp()
	.setFooter('Bot criado por: LilHawklto#0777', 'https://cdn.discordapp.com/avatars/284020089131499520/a_7e08cab3d6c8810435554d13a1de6223.gif?size=128');

client.login(token)