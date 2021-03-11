const help = (prefix) => {
	return `> *Sticker Commands* <
Comando : *${prefix}sticker* ou *${prefix}stiker*
desc : converter imagem/gif/video Em Figurinha
usado para : responder imagem/gif/vídeo ou enviar imagem/gif/vídeo com legenda\n

comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
desc : converte imagem para adesivo ao remover o fundo
usado para : responder imagem ou enviar imagem com legenda\n

comando : *${prefix}toimg*
desc : converter adesivo em imagem
usado para : reply sticker\n

comando : *${prefix}tsticker* ou *${prefix}tstiker*
desc : converter texto em adesivo
usado para : *${prefix}texto do adesivo aqui*\n

> *Meme Comandos* <

comando : *${prefix}meme*
desc : imagens aleatórias de meme [english]
usado pra : apenas envie o comando\n

comando : *${prefix}memeindo*
desc : imagem meme aleatória [indo]
usado para : apenas envie o comando\n

> *Outros Comandos* <
comando : *${prefix}gtts*
desc : converter texto em fala/áudio
usado para : *${prefix}gtts [cc] [text]*\exemplo : *${prefix}gtts ja On2-chan*\n

comando : *${prefix}loli*
desc : imagens aleatórias de loli
usado para : apenas envie o comando\n

comando : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
usado para : apenas envie o comando\n

comando: *${prefix}url2img*
desc : tirar capturas de tela da web
usado para : *${prefix}url2img [tipe] [url]*\n

comando : *${prefix}simi*
desc : sua mensagem será respondida por simi
usado para : *${prefix}simi sua mensagem*\n

comando : *${prefix}ocr*
desc : pegue o texto na foto
usado para : responder imagem ou enviar imagem com legenda\n

command : *${prefix}wait*
desc : procure anime com imagem [ O que anime é isso / aquilo ]
usado para : responder imagem ou enviar imagem com legenda\n

comando : *${prefix}setprefix*
desc : substitua o prefixo
usado pra : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*

nota: este comando só pode ser usado pelo proprietário do bot\n
> *Group Comands* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
usado para : *${prefix}add 62813xxxxx*\n

nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comado : *${prefix}kick*
desc : chutar membros do grupo
usado para : *${prefix}kick @tagmember*\n

nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
usado para : *${prefix}promote @tagmember*\n

nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
usado para : *${prefix}demote @tagmember*\n

nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}linkgroup*
desc : pegue o link do grupo
usado para : apenas envie o comando

nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}leave*
desc : Faça o bot sair do grupo
usado para : apenas envie o comando

nota : Só pode ser usado por administradores de grupo e proprietário do bot\n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usado para : apenas envie o comando

nota : Este comando pode ser usado se você for um administrador de grupo\n
comando : *${prefix}simih*
desc : activate simi mode in the group
usado para : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
nota : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
