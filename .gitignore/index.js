const Discord = require('discord.js');
const client = new Discord.Client();

client.login("NjE1ODIyNDQ4MTc2MjY3MjY1.XeVDsQ.a4VYf9Rr_f4hem-1KtzTfU1y6To");

client.on('guildMemberAdd', member =>{
    member.guild.channels.get('632844709248892947').send('**Bienvenue sur le serveur de Gothan City !** ' + member.user + ' **Nous sommes désormais ! ** ' + member.guild.memberCount);
    member.addRole('610148648973631675')
    console.log(+1)
})


client.on('guildMemberRemove', member =>{
    member.guild.channels.get('632935684872863754').send('**Merci à toi, et bonne chance !** ' + member.user);
    console.log(-1)

})
