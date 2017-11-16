const Discord = require("discord.js");
const util = require('util'); // Loads the util module.
const bot = new Discord.Client();
const fs = require('fs');
const ms = require('ms');
let PREF = JSON.parse(fs.readFileSync('./Automod.json', 'utf8'));

bot.on('ready', () => {
  console.log("Online!");
});

bot.on('error', console.error);

bot.on('warn', console.warn);

bot.on("message", async (msg) => {
    if (msg.channel.type === 'dm') return;
    if (msg.guild.id === "264445053596991498") return;
		if (msg.guild.id === "110373943822540800") return;
    let prefix = "";
    if(!msg.content.startsWith(prefix)) return;

    let args = msg.content.split(" ").slice(1);
    let argsz = msg.content.split(" ").slice(0);
     
	let userData = PREF[msg.guild.id];
	if (!userData) userData = {Automod: "off", Antiinvite: "off", Antiswear: "off", Antilinks: "off"};

  if (msg.content.startsWith(" ")) {
        if (msg.author.bot) return; 
        if (!userData) userData = {Automod: "off", Antiinvite: "off", Antiswear: "off", Antilinks: "off"};
  }

  let botcode = "h!";

  if (!PREF[msg.guild.id]) PREF[msg.guild.id] = {Automod: "off", Antiinvite: "off", Antiswear: "off", Antilinks: "off"}

  if (msg.content.includes(botcode + "memelord")) {
   // do nothing
   msg.channel.send("meme1")
  }

  if (msg.content.toLowerCase().includes("discord.gg")) {
   if (userData.Automod === "off") return;
   if (userData.Antiinvite === "off") return;
   if (msg.channel.type !== 'text') return;
   if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
    //let modlog = msg.guild.channels.find("name", "logs").then(msg.delete());
    //if(!modlog) return; 
    const embed = new Discord.RichEmbed()
    .setColor(0xE69A49)
    .addField("Auto Moderation", ":hamster: Robot Hamster :hamster:")
    .addField('Moderated User: ', `${msg.member.user.username}#${msg.author.discriminator} (${msg.author.id})`)
    .addField('Reason: ', 'Posted invite link')
    .setFooter('Time: ' + new Date().toDateString());
    let modlog = msg.guild.channels.find('name', 'logs');
    //bot.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    if (!modlog) return msg.channel.send(embed).then(msg.delete());
    msg.delete();
    bot.channels.get(modlog.id).send(embed);
    }
   
  // anti swear start

    if (msg.content.toLowerCase().includes("fuck")) {
      if (userData.Automod === "off") return;
      if (userData.Antiswear === "off") return;
      if (msg.channel.type !== 'text') return;
      if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
       msg.delete();
       msg.reply(" Please watch your language")
       }

       if (msg.content.toLowerCase().includes("cking")) {
        if (userData.Automod === "off") return;
        if (userData.Antiswear === "off") return;
        if (msg.channel.type !== 'text') return;
        if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
         msg.delete();
         msg.reply(" Please watch your language")
         }

       if (msg.content.toLowerCase().includes("bitch")) {
        if (userData.Automod === "off") return;
        if (userData.Antiswear === "off") return;
        if (msg.channel.type !== 'text') return;
        if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
         msg.delete();
         msg.reply(" Please watch your language")
         }

         if (msg.content.toLowerCase().includes("fag")) {
          if (userData.Automod === "off") return;
          if (userData.Antiswear === "off") return;
          if (msg.channel.type !== 'text') return;
          if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
           msg.delete();
           msg.reply(" Please watch your language")
           }

           if (msg.content.toLowerCase().includes("faggot")) {
            if (userData.Automod === "off") return;
            if (userData.Antiswear === "off") return;
            if (msg.channel.type !== 'text') return;
            if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
             msg.delete();
             msg.reply(" Please watch your language")
             }

             if (msg.content.toLowerCase().includes("nibb")) {
              if (userData.Automod === "off") return;
              if (userData.Antiswear === "off") return;
              if (msg.channel.type !== 'text') return;
              if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
               msg.delete();
               msg.reply(" Please watch your language")
               }

               if (msg.content.toLowerCase().includes("nigg")) {
                if (userData.Automod === "off") return;
                if (userData.Antiswear === "off") return;
                if (msg.channel.type !== 'text') return;
                if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                 msg.delete();
                 msg.reply(" Please watch your language")
                 }

                 if (msg.content.toLowerCase().includes("gay")) {
                  if (userData.Automod === "off") return;
                  if (userData.Antiswear === "off") return;
                  if (msg.channel.type !== 'text') return;
                  if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                   msg.delete();
                   msg.reply(" Please watch your language")
                   }

                   if (msg.content.toLowerCase().includes("porn")) {
                    if (userData.Automod === "off") return;
                    if (userData.Antiswear === "off") return;
                    if (msg.channel.type !== 'text') return;
                    if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                     msg.delete();
                     msg.reply(" Please watch your language")
                     }

                     if (msg.content.toLowerCase().includes("xxx")) {
                      if (userData.Automod === "off") return;
                      if (userData.Antiswear === "off") return;
                      if (msg.channel.type !== 'text') return;
                      if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                       msg.delete();
                       msg.reply(" Please watch your language")
                       }

                       if (msg.content.toLowerCase().includes("wanker")) {
                        if (userData.Automod === "off") return;
                        if (userData.Antiswear === "off") return;
                        if (msg.channel.type !== 'text') return;
                        if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                         msg.delete();
                         msg.reply(" Please watch your language")
                         }

                         if (msg.content.toLowerCase().includes("cock")) {
                          if (userData.Automod === "off") return;
                          if (userData.Antiswear === "off") return;
                          if (msg.channel.type !== 'text') return;
                          if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                           msg.delete();
                           msg.reply(" Please watch your language")
                           }

                           if (msg.content.toLowerCase().includes("cum")) {
                            if (userData.Automod === "off") return;
                            if (userData.Antiswear === "off") return;
                            if (msg.channel.type !== 'text') return;
                            if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                             msg.delete();
                             msg.reply(" Please watch your language")
                             }

                             if (msg.content.toLowerCase().includes("jizz")) {
                              if (userData.Automod === "off") return;
                              if (userData.Antiswear === "off") return;
                              if (msg.channel.type !== 'text') return;
                              if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                               msg.delete();
                               msg.reply(" Please watch your language")
                               }

                               if (msg.content.toLowerCase().includes("sex")) {
                                if (userData.Automod === "off") return;
                                if (userData.Antiswear === "off") return;
                                if (msg.channel.type !== 'text') return;
                                if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                                 msg.delete();
                                 msg.reply(" Please watch your language")
                                 }

                                 if (msg.content.toLowerCase().includes("cunt")) {
                                  if (userData.Automod === "off") return;
                                  if (userData.Antiswear === "off") return;
                                  if (msg.channel.type !== 'text') return;
                                  if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                                   msg.delete();
                                   msg.reply(" Please watch your language")
                                   }
   
                                   if (msg.content.toLowerCase().includes("twat")) {
                                    if (userData.Automod === "off") return;
                                    if (userData.Antiswear === "off") return;
                                    if (msg.channel.type !== 'text') return;
                                    if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                                     msg.delete();
                                     msg.reply(" Please watch your language")
                                     }
  
                                     if (msg.content.toLowerCase().includes("slut")) {
                                      if (userData.Automod === "off") return;
                                      if (userData.Antiswear === "off") return;
                                      if (msg.channel.type !== 'text') return;
                                      if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                                       msg.delete();
                                       msg.reply(" Please watch your language")
                                       }

                                     if (msg.content.toLowerCase().includes("dick")) {
                                      if (userData.Automod === "off") return;
                                      if (userData.Antiswear === "off") return;
                                      if (msg.channel.type !== 'text') return;
                                      if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                                       msg.delete();
                                       msg.reply(" Please watch your language")
                                       }
                                       
                                     if (msg.content.toLowerCase().includes("pussy")) {
                                      if (userData.Automod === "off") return;
                                      if (userData.Antiswear === "off") return;
                                      if (msg.channel.type !== 'text') return;
                                      if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                                       msg.delete();
                                       msg.reply(" Please watch your language")
                                       }

                                       if (msg.content.toLowerCase().includes("wank")) {
                                        if (userData.Automod === "off") return;
                                        if (userData.Antiswear === "off") return;
                                        if (msg.channel.type !== 'text') return;
                                        if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                                         msg.delete();
                                         msg.reply(" Please watch your language")
                                         }

                                           if (msg.content.toLowerCase().includes("gger")) {
                                            if (userData.Automod === "off") return;
                                            if (userData.Antiswear === "off") return;
                                            if (msg.channel.type !== 'text') return;
                                            if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                                             msg.delete();
                                             msg.reply(" Please watch your language")
                                             /*setTimeout(function() {
                                               msg.channel.send("test")
                                             }, ms(1000)); */
                                             }

                                             if (msg.content.toLowerCase().includes("hoe")) {
                                              if (userData.Automod === "off") return;
                                              if (userData.Antiswear === "off") return;
                                              if (msg.channel.type !== 'text') return;
                                              if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
                                               msg.delete();
                                               msg.reply(" Please watch your language")
                                               /*setTimeout(function() {
                                                 msg.channel.send("test")
                                               }, ms(1000)); */
                                               }
      

       // anti swear end

       // anti links start

       if (msg.content.toLowerCase().includes("http://")) {
        if (userData.Automod === "off") return;
        if (userData.Antilinks === "off") return;
        if (msg.channel.type !== 'text') return;
        if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
        let modlog = msg.guild.channels.find('name', 'logs');
         //let modlog = msg.guild.channels.find("name", "logs").then(msg.delete());
         //if(!modlog) return; 
         const embed = new Discord.RichEmbed()
         .setColor(0xE69A49)
         .addField("Auto Moderation", ":hamster: Robot Hamster :hamster:")
         .addField('Moderated User: ', `${msg.member.user.username}#${msg.author.discriminator} (${msg.author.id})`)
         .addField('Reason: ', 'Website Link')
         .setFooter('Time: ' + new Date().toDateString());
         if (!modlog) return msg.channel.send(embed).then(msg.delete());
         msg.delete();
         bot.channels.get(modlog.id).send(embed);
         }

         if (msg.content.toLowerCase().includes("www.")) {
          if (userData.Automod === "off") return;
          if (userData.Antilinks === "off") return;
          if (msg.channel.type !== 'text') return;
          if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
          let modlog = msg.guild.channels.find('name', 'logs');
           //let modlog = msg.guild.channels.find("name", "logs").then(msg.delete());
           //if(!modlog) return; 
           const embed = new Discord.RichEmbed()
           .setColor(0xE69A49)
           .addField("Auto Moderation", ":hamster: Robot Hamster :hamster:")
           .addField('Moderated User: ', `${msg.member.user.username}#${msg.author.discriminator} (${msg.author.id})`)
           .addField('Reason: ', 'Website Link')
           .setFooter('Time: ' + new Date().toDateString());
           if (!modlog) return msg.channel.send(embed).then(msg.delete());
           msg.delete();
           bot.channels.get(modlog.id).send(embed);
           }
	
	         if (msg.content.toLowerCase().includes(".com")) {
          if (userData.Automod === "off") return;
          if (userData.Antilinks === "off") return;
          if (msg.channel.type !== 'text') return;
          if (msg.member.hasPermission("MANAGE_CHANNELS")) return;
          let modlog = msg.guild.channels.find('name', 'logs');
           //let modlog = msg.guild.channels.find("name", "logs").then(msg.delete());
           //if(!modlog) return; 
           const embed = new Discord.RichEmbed()
           .setColor(0xE69A49)
           .addField("Auto Moderation", ":hamster: Robot Hamster :hamster:")
           .addField('Moderated User: ', `${msg.member.user.username}#${msg.author.discriminator} (${msg.author.id})`)
           .addField('Reason: ', 'Website Link')
           .setFooter('Time: ' + new Date().toDateString());
           if (!modlog) return msg.channel.send(embed).then(msg.delete());
           msg.delete();
           bot.channels.get(modlog.id).send(embed);
           }

           // anti links end

         if (msg.content.includes(botcode + "enableauto")) {
          if (!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send("Sorry, you do not have permission to enable auto moderation.");
          if (msg.author.bot) return; 
          userData.Automod = "on"
          userData.Antiinvite = "on"
          userData.Antilinks = "on"
          userData.Antiswear = "on"
          msg.reply(" i have enabled auto moderation for this guild: " + msg.guild.name)
           }

           if (msg.content.includes(botcode + "disableauto")) {
            if (!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send("Sorry, you do not have permission to disable auto moderation.");
            if (msg.author.bot) return; 
            userData.Automod = "off"
            userData.Antiinvite = "off"
            userData.Antilinks = "off"
            userData.Antiswear = "off"
            msg.reply(" i have disabled auto moderation for this guild: " + msg.guild.name)
             }

           if (msg.content.includes(botcode + "enablelink")) {
            if (!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send("Sorry, you do not have permission to enable anti links.");
            if (msg.author.bot) return; 
            userData.Antilinks = "on"
            msg.reply(" i have enabled auto anti link moderation for this guild: " + msg.guild.name)
             }

             if (msg.content.includes(botcode + "disablelink")) {
              if (!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send("Sorry, you do not have permission to disable anti links.");
              if (msg.author.bot) return; 
              userData.Antilinks = "off"
              msg.reply(" i have disabled auto anti link moderation for this guild: " + msg.guild.name)
               }

               if (msg.content.includes(botcode + "enableinvite")) {
                if (!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send("Sorry, you do not have permission to enable anti invites.");
                if (msg.author.bot) return; 
                userData.Antiinvite = "on"
                msg.reply(" i have enabled auto anti invite moderation for this guild: " + msg.guild.name)
                 }

                 if (msg.content.includes(botcode + "disableinvite")) {
                  if (!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send("Sorry, you do not have permission to disable anti invite.");
                  if (msg.author.bot) return; 
                  userData.Antiinvite = "off"
                  msg.reply(" i have disabled auto anti invite moderation for this guild: " + msg.guild.name)
                   }

                   if (msg.content.includes(botcode + "enableswear")) {
                    if (!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send("Sorry, you do not have permission to enable anti swear.");
                    if (msg.author.bot) return; 
                    userData.Antiswear = "on"
                    msg.reply(" i have enabled auto anti swear moderation for this guild: " + msg.guild.name)
                     }

                     if (msg.content.includes(botcode + "disableswear")) {
                      if (!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send("Sorry, you do not have permission to disable anti swear.");
                      if (msg.author.bot) return; 
                      userData.Antiswear = "off"
                      msg.reply(" i have disabled auto anti swear moderation for this guild: " + msg.guild.name)
                       }

	
  console.log("Data Writing")
  fs.writeFileSync('./Automod.json', JSON.stringify(PREF), console.error);
  console.log("Data Writen")

});
bot.login("Your token")
