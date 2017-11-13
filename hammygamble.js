const Discord = require("discord.js");
const util = require('util'); // Loads the util module.
const bot = new Discord.Client();
const fs = require('fs');
let XP = JSON.parse(fs.readFileSync('./Currency.json', 'utf8'));
const lynx = "336331925612396547";
const DopplerID = "130515926117253122";
const LawlietID = "201848192357236736";
const DarwinID = "307472480627326987";
const Cryptic = "314496458915315713"
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;

clbot.configure({botapi: "CC4g9xpThz_o9f8ZHK4-00lwnvw"});

bot.on('ready', () => {
  console.log("Hamsters gamble system is online ");
});

bot.on('disconnect', event => {
  console.log(`[DISCONNECT] Shard ${bot.shard.id}.`);
});

var cooldownUsers = [];

//bot.on('error', console.error);

//bot.on('warn', console.warn);

// Cooldown Check Function
const checkCooldown = ((userId) => {
  if(cooldownUsers.indexOf(userId) > -1) {
    return true;
  } else {
    return false;
  }
});

// Cooldown Removal Function
const removeCooldown = ((userId, timeInSeconds) => {
  let index = cooldownUsers.indexOf(userId);
  if(index > -1) { 
    setTimeout(() => {
      cooldownUsers = cooldownUsers.splice(index, 0);
    }, timeInSeconds * 1000)
  }
});

var cooldownUsers2 = [];

//bot.on('error', console.error);

//bot.on('warn', console.warn);

// Cooldown Check Function
const checkCooldown2 = ((userId) => {
  if(cooldownUsers2.indexOf(userId) > -1) {
    return true;
  } else {
    return false;
  }
});

// Cooldown Removal Function
const removeCooldown2 = ((userId, timeInSeconds) => {
  let index = cooldownUsers2.indexOf(userId);
  if(index > -1) { 
    setTimeout(() => {
      cooldownUsers2 = cooldownUsers2.splice(index, 0);
    }, timeInSeconds * 1000)
  }
});

var cooldownUsers3 = [];

const checkCooldown3 = ((userId) => {
  if(cooldownUsers3.indexOf(userId) > -1) {
    return true;
  } else {
    return false;
  }
});

// Cooldown Removal Function
const removeCooldown3 = ((userId, timeInSeconds) => {
  let index = cooldownUsers3.indexOf(userId);
  if(index > -1) { 
    setTimeout(() => {
      cooldownUsers3 = cooldownUsers3.splice(index, 0);
    }, timeInSeconds * 1000)
  }
});

bot.on("message", async (msg) => {
  if (msg.channel.type === 'dm') return;
  if (msg.author.bot) return;
  const fs = require('fs');
  let PREF = JSON.parse(fs.readFileSync('./prefix.json', 'utf8'));
  let prefix = "";
  const defaultprefix = "h!";
  if (!PREF[msg.guild.id]) PREF[msg.guild.id] = {prefix: defaultprefix}
  let botcode = PREF[msg.guild.id].prefix; 

	if(!msg.content.startsWith(prefix)) return;

    let args = msg.content.split(" ").slice(1);
    //const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    //let command = msg.content.split(" ")[0]
    //command = command.slice(prefix.length)
     
	let userData = XP[msg.author.id];
  if (!userData) userData = {XP: 0};

	if (msg.content.startsWith(botcode + "bank")) {
    const embed = new Discord.RichEmbed()
		.setColor(0xE69A49) 
		.setTitle(" :hamster: Bank Info For: " + msg.author.username + " :hamster: ")
		.setThumbnail(msg.author.avatarURL)
    .setDescription("Currency: $" + userData.XP)
    .addField("Awards: ", "None");
    let user = msg.mentions.users.first();
    if (msg.mentions.users.size < 1) return msg.channel.sendEmbed(embed).catch(console.error);
		const embed2 = new Discord.RichEmbed()
		.setColor(0xE69A49) 
		.setTitle(" :hamster: Bank Info For: " + user.username + " :hamster: ")
		.setThumbnail(user.avatarURL)
    .setDescription("Currency: $" + XP[user.id].XP)
    .addField("Awards: ", "None");
		msg.channel.sendEmbed(embed2)
	}

if (msg.content.startsWith(botcode + "leaderboard")) { 

}
	
  if (!XP[msg.author.id]) XP[msg.author.id] = {XP: 0}


	if (msg.content.startsWith("")) {
    if(checkCooldown(msg.author.id)) {
      return;
     }
  cooldownUsers.push(msg.author.id);
  removeCooldown(msg.author.id, 20);
        if (msg.author.bot) return; 

        var xpgained = Math.floor(Math.random() * 15) + 1;
        console.log(msg.author.username + " has gained $" + xpgained)
		  userData.XP += xpgained
  }

  if (msg.content.startsWith(botcode + "payday")) {
    if(checkCooldown2(msg.author.id)) {
      msg.channel.send("Sorry! You have already claimed your daily paycheck please wait 24 hours to claim again.");
      return;
    }
    cooldownUsers2.push(msg.author.id);
    // remove cooldown after 5 seconds
    removeCooldown2(msg.author.id, 1440);
    msg.channel.send("You have recived your free daily $1000, wait another 24 hours to claim!");
    userData.XP += 1000
	}

    if (msg.content.startsWith(botcode + "transfer")) {
      if (msg.channel.type !== 'text') return msg.channel.send("Can not transfer someone money in dms ")
      const usage = new Discord.RichEmbed()
      .setColor(0xE69A49)
      .setThumbnail(bot.user.avatarURL)
      .addField("Usage: ", "h!transfer @Someone <amount>")
      .addField("Example: ", "h!transfer @Someone for 10000");
      if (msg.mentions.users.size < 1) return msg.channel.sendEmbed(usage).catch(console.error);
      const user = msg.mentions.users.first();
      let transferamount = parseInt(args.slice(1).join(' '));
      let taxtransfer = (transferamount / 100) * 80;
      let taxtransferz = (transferamount / 100) * 20;
      console.log(taxtransfer)
      console.log(transferamount)
      if (transferamount < 0) return msg.channel.send("You can't give anything below 0");
      if (transferamount > 6) return msg.channel.send("You can't transfer more then 6 digits at a time");
      if (isNaN(transferamount)) return msg.channel.send("Not a valid number");
      if (userData.XP < transferamount) return msg.channel.send("You dont have enough money to transfer that much, you have: $" + userData.XP);
      if (user.id === msg.author.id) return msg.channel.send("Can't transfer money to yourself")
      //if (!XP[user.id].XP !== 'undefined') return msg.channel.send("You need to talk more to start earning money before you can transfer any")
      console.log(msg.author.username + "Has transfered: $" + transferamount + " to: " + user.username)
                 userData.XP -= transferamount
                 XP[user.id].XP += taxtransfer
                 msg.channel.send("I have successfully transfered $" + taxtransfer + ", to " + user.username + ". Transaction fee: $" + taxtransferz + ". New balance: $" + userData.XP + ".")
    }

  	if (msg.content.startsWith(botcode + "givemoney")) {
			if (msg.author.id !== LawlietID && msg.author.id !== DopplerID && msg.author.id !== DarwinID && msg.author.id !== Cryptic) return msg.channel.send("Not whitelisted to use this command");
		//let user = msg.mentions.users.first();
		var xpamount = args.join(' ');
		//if (msg.mentions.users.size < 1) return msg.reply(':x: You must mention someone to give xp to them. :x:').catch(console.error);
    if (xpamount.length > 8) return msg.channel.send("Can not use more then 8 numbers")
    if (isNaN(xpamount)) return msg.channel.send("Not a valid number")
		const xpgive = (Math.round(xpamount))
    userData.XP += xpgive
		msg.channel.send("I have given money to: " + msg.author.username + " $" + xpamount);
   }

   if (msg.content.startsWith(botcode + "shop")) {
    const embed = new Discord.RichEmbed()
    .setColor(0xE69A49)
    .setThumbnail(bot.user.avatarURL)
    .setTitle(":hamster: Robot Hamster Shop :hamster:")
    .setDescription("Upgrades")
    .addField("Upgrades", 'Winning chance +5% | price: 100k | h!buy chance5', true)
    .addField('\u200b', "Winning chance +10% | price: 180k | h!buy chance10", true)
    .addField('\u200b', "Gold digger rank | price: 500k | h!buy rankgold", true)
    .addField("Packages", 'Bronze +100k | price: $1 | h!buy bronze', true)
    .addField('\u200b', "Gold +500k | price: $3 | h!buy gold", true)
    .addField('\u200b', "Diamond +1million | price: $5 | h!buy diamond", true)
    .setFooter('Time: ' + new Date().toDateString());
    //bot.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    msg.channel.sendEmbed(embed).then(msg.delete())
   }

if (msg.content.startsWith(botcode + "slots")) { 
  var betamount = args.join('');
  const wonamount = (Math.round(betamount * 2))
    if (userData.XP < betamount) return msg.channel.send("You dont have enough money to bet that much, you have: $" + userData.XP);
    if (betamount < -0) return msg.channel.send("You can't bet anything below 0: you bet $" + betamount);
    if (betamount.length > 9) return msg.channel.send("Can not bet more then 9 numbers at a time")
    if (isNaN(betamount)) return msg.channel.send("Not a valid number")
    if (betamount.length < 1) return msg.channel.send("Did not set a bet amount")
const slots = [':grapes:', ':cherries:', ':lemon:'];
const slotOne = slots[Math.floor(Math.random() * slots.length)];
const slotTwo = slots[Math.floor(Math.random() * slots.length)];
const slotThree = slots[Math.floor(Math.random() * slots.length)];
const slotfour = slots[Math.floor(Math.random() * slots.length)];
const slotfive = slots[Math.floor(Math.random() * slots.length)];
const slotsix = slots[Math.floor(Math.random() * slots.length)];
const slotseven = slots[Math.floor(Math.random() * slots.length)];
const sloteight = slots[Math.floor(Math.random() * slots.length)];
const slotnine = slots[Math.floor(Math.random() * slots.length)];
if (slotOne === slotTwo && slotOne === slotThree || slotfour === slotfive && slotfour === slotsix || slotseven === sloteight && slotseven === slotnine) {
  const embed = new Discord.RichEmbed()
  .setColor(0xE69A49)
  .addField("Line 1", `${slotfour}|${slotfive}|${slotsix}`)
  .addField("Line 2", `${slotOne}|${slotTwo}|${slotThree}`)
  .addField("Line 3", `${slotseven}|${sloteight}|${slotnine}`)
  .setFooter("Wow! " + msg.author.username + " won " + wonamount + " Great job!");
  msg.channel.sendEmbed(embed)
  var x = betamount * 1.5;
         userData.XP  += wonamount
         console.log("User Won slots")
} else {
   const embed2 = new Discord.RichEmbed()
   .setColor(0xE69A49)
   .addField("Line 1", `${slotfour}|${slotfive}|${slotsix}`)
   .addField("Line 2", `${slotOne}|${slotTwo}|${slotThree}`)
   .addField("Line 3", `${slotseven}|${sloteight}|${slotnine}`)
   .setFooter("Awww " + msg.author.username + " lost " + betamount + " that sucks!");
   msg.channel.sendEmbed(embed2)
             userData.XP -= betamount
             console.log("User Lost slots")
}
}

    /* if (msg.content.startsWith(botcode + "roll")) { 
      const usage = new Discord.RichEmbed()
      .setColor(0xE69A49)
      .setThumbnail(bot.user.avatarURL)
      .addField("Usage: ", "h!roll <number> <amount/bet>")
      .addField("Example: ", "h!roll 50 1000");
      var dice = Math.floor(Math.random() * 100) + 1;
      let number = args.slice(0).join(" ");
      let amount = args.slice(1).join(" ");
      if (amount.length < 1) return msg.channel.sendEmbed(usage);
      if (number.length < 1) return msg.channel.sendEmbed(usage);
      if (userData.XP < amount) return msg.channel.send("You dont have enough money to bet that much, you have: $" + userData.XP)
      const gambleamount = (Math.round(amount))
      const numberval = (Math.round(number))
      console.log("tEST1")
        const embed = new Discord.RichEmbed()
        .setColor(0xE69A49)
        .setTimestamp()
        .setTitle("The dice has rolled: " + dice)
        .setDescription("You have won!")
        .setThumbnail("http://www.pngall.com/wp-content/uploads/2016/04/Dice-Free-Download-PNG.png")
        userData.XP += gambleamount
        const embed2 = new Discord.RichEmbed()
        .setColor(0xE69A49)
        .setTimestamp()
        .setTitle("The dice has rolled: " + dice)
        .setDescription("You have lost!")
        .setThumbnail("http://www.pngall.com/wp-content/uploads/2016/04/Dice-Free-Download-PNG.png")
        userData.XP -= gambleamount
        // embeds end
        if (numberval > dice) return msg.channel.sendEmbed(embed)
        if (numberval < dice) return msg.channel.sendEmbed(embed2)
    } */

    if (msg.content.startsWith(botcode + "awardsgamble")) {
      const embed2 = new Discord.RichEmbed()
      .setColor(0xE69A49) 
      .setTitle(" :hamster: Awards Info :hamster: ")
      .addField(`:ring: - Earn up to $5000`, "\u200b", true)
      .addField(":credit_card: - Earn up to $20,000", "\u200b", true)
      .addField(`:moneybag: - Earn up to $50,000`, "\u200b", true)
      .addField(`:gem: - Earn up to $100,000`, "\u200b", true)
      .addField(`:money_with_wings:  - Secret Award`, "\u200b", true)
      .addField(`:wrench: - Secret Award`, "\u200b", true)
      msg.channel.sendEmbed(embed2) 
  }

        if (msg.content.startsWith(botcode + "25")) {
          if(checkCooldown3(msg.author.id)) {
            msg.channel.send("Need to wait 5 seconds before gambling again!")
            return;
           }
        cooldownUsers3.push(msg.author.id);
        removeCooldown3(msg.author.id, 5);
          const usage = new Discord.RichEmbed()
          .setColor(0xE69A49)
          .setThumbnail(bot.user.avatarURL)
          .addField("Usage: ", "h!roll <number> <amount/bet>")
          .addField("Example: ", "h!roll 50 1000");
          var dice = Math.floor(Math.random() * 47.99 + 1);
          var number = args.join(' ');
          const wonamount = (Math.round(number * 1.25))
          if (number.length < 1) return msg.channel.sendEmbed(usage);
          if (userData.XP < number) return msg.channel.send("You dont have enough money to bet that much, you have: $" + userData.XP);
          if (number < -0) return msg.channel.send("You can't bet anything below 0: you bet $" + number)
          if (number.includes("e" || "inf")) return message.channel.send("is not a valid number to bet")
          if (isNaN(number)) return msg.channel.send(number + "is not a valid number to bet");
          if (number.length > 6) return msg.channel.send("Can not bet more then 6 numbers at a time")
          if (dice >= "25") {
            const embed = new Discord.RichEmbed()
            .setColor(0xE69A49)
            .setTimestamp()
            .setTitle("The dice has rolled: " + dice)
            .setDescription("You have won $" + wonamount + "!")
            .setThumbnail("http://www.pngall.com/wp-content/uploads/2016/04/Dice-Free-Download-PNG.png")
            userData.XP += wonamount
            msg.channel.send(embed)
              } else {
              const embed2 = new Discord.RichEmbed()
              .setColor(0xE69A49)
              .setTimestamp()
              .setTitle("The dice has rolled: " + dice)
              .setDescription("You have lost $" + number + "!")
              .setThumbnail("http://www.pngall.com/wp-content/uploads/2016/04/Dice-Free-Download-PNG.png")
              userData.XP -= number
              msg.channel.send(embed2)
        }
      }

          if (msg.content.startsWith(botcode + "50")) {
            if(checkCooldown3(msg.author.id)) {
              msg.channel.send("Need to wait 5 seconds before gambling again!")
              return;
             }
          cooldownUsers3.push(msg.author.id);
          removeCooldown3(msg.author.id, 5);
            const usage = new Discord.RichEmbed()
            .setColor(0xE69A49)
            .setThumbnail(bot.user.avatarURL)
            .addField("Usage: ", "h!roll <number> <amount/bet>")
            .addField("Example: ", "h!roll 50 1000");
            var dice = Math.floor(Math.random() * 75.99 + 1);
            var number = args.join('');
            const wonamount = (Math.round(number * 1.50))
            if (number.length < 1) return msg.channel.sendEmbed(usage);
            if (userData.XP < number) return msg.channel.send("You dont have enough money to bet that much, you have: $" + userData.XP);
            if (number.includes("e" || "inf")) return message.channel.send("is not a valid number to bet")
            if (number < -0) return msg.channel.send("You can't bet anything below 0: you bet $" + number)
            if (isNaN(number)) return msg.channel.send(number + "is not a valid number to bet");
            if (number.length > 6) return msg.channel.send("Can not bet more then 6 numbers at a time")
            if (dice >= "50") {
              const embed = new Discord.RichEmbed()
              .setColor(0xE69A49)
              .setTimestamp()
              .setTitle("The dice has rolled: " + dice)
              .setDescription("You have won $" + wonamount + "!")
              .setThumbnail("http://www.pngall.com/wp-content/uploads/2016/04/Dice-Free-Download-PNG.png")
              userData.XP += wonamount
              msg.channel.send(embed)
                } else {
                const embed2 = new Discord.RichEmbed()
                .setColor(0xE69A49)
                .setTimestamp()
                .setTitle("The dice has rolled: " + dice)
                .setDescription("You have lost $" + number + "!")
                .setThumbnail("http://www.pngall.com/wp-content/uploads/2016/04/Dice-Free-Download-PNG.png")
                userData.XP -= number
                msg.channel.send(embed2)
          }
        }

            if (msg.content.startsWith(botcode + "75")) {
              if(checkCooldown3(msg.author.id)) {
                msg.channel.send("Need to wait 5 seconds before gambling again!")
                return;
               }
            cooldownUsers3.push(msg.author.id);
            removeCooldown3(msg.author.id, 5);
              const usage = new Discord.RichEmbed()
              .setColor(0xE69A49)
              .setThumbnail(bot.user.avatarURL)
              .addField("Usage: ", "h!roll <number> <amount/bet>")
              .addField("Example: ", "h!roll 50 1000");
              var dice = Math.floor(Math.random() * 85.99 + 1);
              var number = args.join('');
              const wonamount = (Math.round(number * 1.75))
              if (number.length < 1) return msg.channel.sendEmbed(usage);
              if (userData.XP < number) return msg.channel.send("You dont have enough money to bet that much, you have: $" + userData.XP)
              if (number < -0) return msg.channel.send("You can't bet anything below 0: you bet $" + number)
              if (number.includes("e" || "inf")) return message.channel.send("is not a valid number to bet")
              if (isNaN(number)) return msg.channel.send(number + "is not a valid number to bet");
              if (number.length > 6) return msg.channel.send("Can not bet more then 6 numbers at a time")
              if (dice >= "75") {
                const embed = new Discord.RichEmbed()
                .setColor(0xE69A49)
                .setTimestamp()
                .setTitle("The dice has rolled: " + dice)
                .setDescription("You have won $" + wonamount + "!")
                .setThumbnail("http://www.pngall.com/wp-content/uploads/2016/04/Dice-Free-Download-PNG.png")
                userData.XP += wonamount
                msg.channel.send(embed)
                  } else {
                  const embed2 = new Discord.RichEmbed()
                  .setColor(0xE69A49)
                  .setTimestamp()
                  .setTitle("The dice has rolled: " + dice)
                  .setDescription("You have lost $" + number + "!")
                  .setThumbnail("http://www.pngall.com/wp-content/uploads/2016/04/Dice-Free-Download-PNG.png")
                  userData.XP -= number
                  msg.channel.send(embed2)
            }
          }

          if (msg.content.startsWith(botcode + "99")) {
            if(checkCooldown3(msg.author.id)) {
              msg.channel.send("Need to wait 5 seconds before gambling again!")
              return;
             }
          cooldownUsers3.push(msg.author.id);
          removeCooldown3(msg.author.id, 5);
            const usage = new Discord.RichEmbed()
            .setColor(0xE69A49)
            .setThumbnail(bot.user.avatarURL)
            .addField("Usage: ", "h!roll <number> <amount/bet>")
            .addField("Example: ", "h!roll 50 1000");
            var dice = Math.floor(Math.random() * 115.99 + 1);
            var number = args.join('');
            const wonamount = (Math.round(number * 2))
            if (number.length < 1) return msg.channel.sendEmbed(usage);
            if (userData.XP < number) return msg.channel.send("You dont have enough money to bet that much, you have: $" + userData.XP);
            if (number < -0) return msg.channel.send("You can't bet anything below 0: you bet $" + number)
            if (number.includes("e" || "inf")) return message.channel.send("is not a valid number to bet")
            if (isNaN(number)) return msg.channel.send(number + "is not a valid number to bet");
            if (number.length > 6) return msg.channel.send("Can not bet more then 6 numbers at a time")
            if (dice >= "99") {
              const embed = new Discord.RichEmbed()
              .setColor(0xE69A49)
              .setTimestamp()
              .setTitle("The dice has rolled: " + dice)
              .setDescription("You have won $" + wonamount + "!")
              .setThumbnail("http://www.pngall.com/wp-content/uploads/2016/04/Dice-Free-Download-PNG.png")
              userData.XP += wonamount
              msg.channel.send(embed)
                } else {
                const embed2 = new Discord.RichEmbed()
                .setColor(0xE69A49)
                .setTimestamp()
                .setTitle("The dice has rolled: " + dice)
                .setDescription("You have lost $" + number + "!")
                .setThumbnail("http://www.pngall.com/wp-content/uploads/2016/04/Dice-Free-Download-PNG.png")
                userData.XP -= number
                msg.channel.send(embed2)
          }
        }

	
	console.log("Data Writing")
  fs.writeFileSync('./Currency.json', JSON.stringify(XP), console.error);
  console.log("Data Writen")

});
bot.login("MzMwMDQ0ODA5NjUxODE0NDEy.DDmHWg.i4S2L86t-ovA4sMHYJx5_vGPdhw")