const help = (prefix) => {
	return `> *Sticker Commands* <
Comando : *${prefix}sticker* ou *${prefix}stiker*
desc : converter imagem/gif/video Em Figurinha
usar pra : responder imagem/gif/vídeo ou enviar imagem/gif/vídeo com legenda\n

comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
desc : converte imagem para adesivo ao remover o fundo
usar pra : responder imagem ou enviar imagem com legenda\n

comando : *${prefix}toimg*
desc : converter adesivo em imagem
usar pra : reply sticker\n

comando : *${prefix}tsticker* ou *${prefix}tstiker*
desc : converter texto em adesivo
usar pra : *${prefix}texto do adesivo aqui*\n

> *Meme Comandos* <

comando : *${prefix}meme*
desc : imagens aleatórias de meme [english]
usar pra : apenas envie o comando\n

comando : *${prefix}memeindo*
desc : imagem meme aleatória [indo]
usa pra : apenas envie o comando\n

> *Outros Comandos* <
comando : *${prefix}gtts*
desc : converter texto em fala/áudio
usa pra : *${prefix}gtts [cc] [text]*\exemplo : *${prefix}gtts ja On2-chan*\n

comando : *${prefix}loli*
desc : imagens aleatórias de loli
usa pra : apenas envie o comando\n

command : *${prefix}nsfwloli*
desc : random nsfw loli images
usage : just send the command\n

command : *${prefix}url2img*
desc : take web screenshots
usage : *${prefix}url2img [tipe] [url]*\n

command : *${prefix}simi*
desc : your message will be replied to by simi
usage : *${prefix}simi yourmessage*\n

command : *${prefix}ocr*
desc : pegue o texto na foto
usage : responder imagem ou enviar imagem com legenda\n

command : *${prefix}wait*
desc : search anime with image [ What Anime Is This/That ]
usage : reply image, or send image with caption\n

comando : *${prefix}setprefix*
desc : substitua o prefixo
usa pra : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*

nota: este comando só pode ser usado pelo proprietário do bot\n
> *Group Comands* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
usado : *${prefix}add 62813xxxxx*\n

note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
comado : *${prefix}kick*
desc : chutar membros do grupo
usage : *${prefix}kick @tagmember*\n

note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
usage : *${prefix}promote @tagmember*\n

note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}demote*
desc : make the group admin as group member
usage : *${prefix}demote @tagmember*\n

note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}linkgroup*
desc : take the group link
usage : just send the command

note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}leave*
desc : Make bot leave the group
usage : just send the command

note : Can only be used by Group admins and Bot owner\n
command : *${prefix}tagall*
desc : tags all group members including admins too
usage : just send the command

note : This command can be used if you are a group admin\n
command : *${prefix}simih*
desc : activate simi mode in the group
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : This command can be used if you are a group admin\n`
}

exports.help = help
