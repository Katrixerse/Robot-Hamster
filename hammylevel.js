const Discord = require("discord.js");
const util = require('util'); // Loads the util module.
const bot = new Discord.Client();
const fs = require('fs');
let XP = JSON.parse(fs.readFileSync('./XP.json', 'utf8'));
const lynx = "336331925612396547";
const guild2 = "319509297056841728";
const maxlevel = "500";
const DopplerID = "130515926117253122";
const LawlietID = "201848192357236736";
const DarwinID = "307472480627326987";
const sql = require("sqlite");
sql.open("./score.sqlite");

var cooldownUsers = [];
var cooldownUsers2 = [];

const checkCooldown = ((userId) => {
  if(cooldownUsers.indexOf(userId) > -1) {
    return true;
  } else {
    return false;
  }
});

const checkCooldown2 = ((userId) => {
  if(cooldownUsers2.indexOf(userId) > -1) {
    return true;
  } else {
    return false;
  }
});

const removeCooldown = ((userId, timeInSeconds) => {
  let index = cooldownUsers.indexOf(userId);
  if(index > -1) { 
    setTimeout(() => {
      cooldownUsers = cooldownUsers.splice(index, 0);
    }, timeInSeconds * 1000)
  }
});

const removeCooldown2 = ((userId, timeInSeconds) => {
  let index = cooldownUsers2.indexOf(userId);
  if(index > -1) { 
    setTimeout(() => {
      cooldownUsers2 = cooldownUsers2.splice(index, 0);
    }, timeInSeconds * 1000)
  }
});

bot.on('ready', () => {
  console.log("Hamsters level system is online ");
});

bot.on('error', console.error);

bot.on('warn', console.warn);

bot.on('disconnect', event => {
	console.log(`[DISCONNECT] Shard ${bot.shard.id}.`);
});

bot.on("message", async (msg) => {
	if (msg.channel.type === 'dm') return;
	if (msg.author.bot) return;
	const fs = require('fs');
	let PREF = JSON.parse(fs.readFileSync('./prefix.json', 'utf8'));
	if (PREF === undefined) return botcode = "h!"
  let prefix = "";
  const defaultprefix = "h!";
  if (!PREF[msg.guild.id]) PREF[msg.guild.id] = {prefix: defaultprefix}
	let botcode = PREF[msg.guild.id].prefix || defaultprefix;

	if(!msg.content.startsWith(prefix)) return;

	let args = msg.content.split(" ").slice(1);
	const Username = msg.author.tag;

  /*sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, userName, points, level) VALUES (?, ?, ?, ?)", [msg.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level}, userName = ${msg.author.username} WHERE userId = ${msg.author.id}`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${msg.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, userName TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, userName, points, level) VALUES (?, ?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});  */

	let userData = XP[msg.author.id];
	if (!userData) userData = {XP: 0, level: 0, Messagecount: 0, User: 0};
	//if (Messagecount ) userData = {XP: 0, level: 0, Messagecount: 0};
	
	let userXP = XP[msg.author.id] ? XP[msg.author.id].XP : 0;
	let curLevel = Math.floor(0.1 * Math.sqrt(userXP));
	if (curLevel > userData.level) {
		if (maxlevel < userData.level) return;
		userData.level = curLevel;
		const embed = new Discord.RichEmbed()
		.setColor(0xE69A49) 
		.setThumbnail("https://vgy.me/3Ge3fL.png")
		.setDescription("GG " + msg.author.username + ", you leveled up to **" + curLevel + "**!");
		if (msg.guild.id === lynx) return;
		if (msg.guild.id === guild2) return;
		if (msg.guild.id === "264445053596991498") return;
		if (msg.guild.id === "110373943822540800") return;
		if (msg.guild.id === "335393678145093642") return;
		msg.author.send({embed})
		console.log(msg.author.username + "has leveled up to: " + curLevel)
	}

	if (msg.content.startsWith(botcode + "level")) {
		if (msg.guild.id === "335393678145093642") return;
    const embed = new Discord.RichEmbed()
		.setColor(0xE69A49) 
		.setTitle(" :hamster: Level Info For: " + msg.author.username + " :hamster: ")
		.setThumbnail(msg.author.avatarURL)
		.addField("Your Current Level: ", userData.level)
		.addField("Total Amount of XP: ", userData.XP + " XP")
		.addField("Messages sent: ", userData.Messagecount)
		.addField("Awards: ", "None");
    let user = msg.mentions.users.first();
    if (msg.mentions.users.size < 1) return msg.channel.sendEmbed(embed).catch(console.error);
		const embed2 = new Discord.RichEmbed()
		.setColor(0xE69A49) 
		.setTitle(" :hamster: Level Info For: " + user.username + " :hamster: ")
		.setThumbnail(user.avatarURL)
		.addField(user.username + "'s" + " Current Level: ", XP[user.id].level)
		.addField("Total Amount of XP: ", XP[user.id].XP + " XP")
		.addField("Messages sent: ", XP[user.id].Messagecount)
		.addField("Awards: ", "None");
		msg.channel.sendEmbed(embed2)
	}

	if (msg.content.startsWith(botcode + "awardslevel")) {
		const embed2 = new Discord.RichEmbed()
		.setColor(0xE69A49) 
		.setTitle(" :hamster: Awards Info :hamster: ")
		.addField(`:tada: - Reach level 50`, "\u200b", true)
		.addField(":medal: - Reach level 80", "\u200b", true)
		.addField(`:military_medal: - Reach level 250`, "\u200b", true)
		.addField(`:trophy: - Reach level 500 (max)`, "\u200b", true)
		.addField(`:iphone: - Send a total of 5000 messages`, "\u200b", true)
		.addField(`:first_place: - Reach #1 on the leaderboard`, "\u200b", true)
		.addField(`:spy::skin-tone-1: - Secret Award`, "\u200b", true)
		.addField(`:tophat: - Secret Award`, "\u200b", true)
		.addField(`:watch: - Secret Award`, "\u200b", true)
		msg.channel.sendEmbed(embed2) 
}

if (msg.content.startsWith(botcode + "leaderboard" || botcode + "lb")) { 
	const embed = new Discord.RichEmbed()
	.setColor(0xE69A49)
	.setThumbnail(bot.user.avatarURL)
	.setTitle(":hamster: Hammys level leaderboard :hamster:")
	.addField("#1: ", "Gamer2Master#4879 | level: 64")
	.addField("#2: ", "[AquariumFishes] Darwin#0307 | level: 60")
	.addField("#3: ", "Ovyerus#2211 | level: 57")
	.addField("#4: ", "kek#7783 | level: 55")
	.addField("#5: ", "PassTheMayo#1281 | level: 54")
	.addField("#6: ", "TripingPC#2094 | level: 53")
	.addField("#7: ", "Tolic#5049 | level: 53")
	.addField("#8: ", "Roadcrosser#3657 | level: 52")
	.addField("#9: ", "[YumiBoat] August#1793 | level: 49")
	.addField("#10: ", "ry00001#3487 | level: 49");
	msg.channel.send({embed})
}


	if (msg.content.startsWith(botcode + "userlevel4534354")) {
		  let user = message.mentions.users.first();
		 if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone to ban them. :x:').catch(console.error);
		 const ID = `${user.id}`
		const embed = new Discord.RichEmbed()
		.setColor(0xE69A49) 
		.setTitle(" :hamster: Level Info For: " + user.username + " :hamster: ")
		.setThumbnail(user.avatarURL)
		.addField("Your Current Level: ", ID.userData.level)
		.addField("Total Amount of XP: ", ID.userData.XP + " XP");
		//msg.channel.send({embed})
		client.users.get(user.id).send(userData.level);
	} 
	
	if (!XP[msg.author.id]) XP[msg.author.id] = {XP: 0, level: 0, Messagecount: 0, User: 0}

	if (msg.content.startsWith("")) {
		if(checkCooldown(msg.author.id)) {
      return;
     }
  cooldownUsers.push(msg.author.id);
  removeCooldown(msg.author.id, 30);
				if (msg.author.bot) return; 
				if (msg.guild.id === lynx) return;
				if (msg.guild.id === guild2) return;
				if (msg.guild.id === "264445053596991498") return;
				if (msg.guild.id === "110373943822540800") return;
				if (msg.guild.id === "335393678145093642") return;
				var xpgained = Math.floor(Math.random() * 15) + 1;
				userData.XP += xpgained
				if (!userData.Messagecount === undefined) userData = {XP: userData.XP, level: userData.level, Messagecount: 0, User: 0}
				if (!userData.User === undefined) userData = {XP: userData.XP, level: userData.level, Messagecount: 0, User: 0}
				userData.Messagecount += 1
				userData.User = msg.author.tag
				console.log(msg.author.username + " has gained " + xpgained + "XP");
	}

  	/* if (msg.content.startsWith(botcode + "givexp")) {
			if (msg.author.id !== LawlietID || msg.author.id !== DopplerID || msg.author.id !== DarwinID) {
		//let user = msg.mentions.users.first();
		var xpamount = args.join(' ');
		//if (msg.mentions.users.size < 1) return msg.reply(':x: You must mention someone to give xp to them. :x:').catch(console.error);
		if (xpamount.length > 5) return msg.channel.send("Can not use more then 5 numbers")
		const xpgive = (Math.round(xpamount))
		userData.XP += xpgive
		msg.channel.send("I have given xp to: " + msg.author.username + " " + xpamount + "XP");
    } else { 
		 msg.channel.send("You're not whitelisted to use this cmd")
    }
	} else

	if (msg.content.startsWith(botcode + "takexp")) {
		if (msg.author.id === LawlietID) return;
		if (msg.author.id === DopplerID) return;
		if (!msg.member.hasPermission("ADMINISTRATOR"))  {
		 msg.channel.send("You do not have permission to use this cmd")
	 } else {
	 let user = msg.mentions.users.first();
	 var xpamount2 = args.join(' ');
	 if (msg.mentions.users.size < 1) return msg.reply(':x: You must mention someone to give xp to them. :x:').catch(console.error);
	 if (xpamount2.length > 5) return msg.channel.send("Can not use more then 5 numbers")
	 const xpgive = (Math.round(xpamount2))
	 XP[user.id] -= xpgive
	 msg.channel.send("I have given xp to: " + msg.author.username + " " + xpamount2 + "XP");
	 }
 } */

		if (msg.content.startsWith(botcode + "dailyxp")) {
		if(checkCooldown2(msg.author.id)) {
         msg.channel.send("Sorry! You have already claimed your daily free xp please wait 24 hours to claim again.");
         return;
        }
		 cooldownUsers2.push(msg.author.id);
		 removeCooldown2(msg.author.id, 1440);
        if (msg.author.bot) return; 
		userData.XP += 250
		msg.channel.send("You have recived your free daily 250 xp, wait another 24 hours to claim!");
	} 
	

  /* if(msg.content.startsWith(antiinvite)) {
	  msg.delete();
  //const swearWords = ["darn", "shucks", "frak", "shite"];
  const embed = new Discord.RichEmbed()
   .setColor(0xE69A49)
  .addField('Moderated User:', 'Automated violation')
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Actions Taken:', 'Invite Block')
  .addField('Reason Provided:', 'Sending invites is not allowed in guild')
  msg.channel.send({embed})
} */

	
	console.log("Data Writing")
	fs.writeFileSync('./XP.json', JSON.stringify(XP), console.error);
	console.log("Data Writen")
	
});
bot.login("MzMwMDQ0ODA5NjUxODE0NDEy.DDmHWg.i4S2L86t-ovA4sMHYJx5_vGPdhw")