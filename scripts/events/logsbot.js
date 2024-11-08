const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "logsbot",
		isBot: true,
		version: "1.4",
		author: "NTKhang | A simple Modified By RUBISH",
		envConfig: {
			allow: true
		},
		category: "events"
	},

	langs: {
		en: {
			title: "🔔| 𝐁𝐨𝐭-𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 |🔔\n▬▬▬▬▬▬▬▬▬▬▬▬",
			added: "\n ✅ | বট একটি নতুন গ্রুপ এড করা হয়েছে\n ■ 𝐀𝐝𝐝-𝐛𝐲 ➾%1",
			kicked: "\n ❌ | 😐বটকে কিক দেওয়া হয়েছে🙄 | ❌\n\n ■ 𝐊𝐢𝐜𝐤-𝐛𝐲 ➾%1",
			footer: "\n ■ 𝐔𝐢𝐝 ➾%1\n ■ 𝐆𝐫𝐨𝐮𝐩 ➾%2\n ■ 𝐓𝐢𝐝 ➾%3\n ■ 𝐓𝐢𝐦𝐞 ➾%4\n ■ 𝐃𝐚𝐭𝐞 ➾%5"
		}
	},

	onStart: async ({ usersData, threadsData, event, api, getLang }) => {
		if (
			(event.logMessageType == "log:subscribe" && event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
			|| (event.logMessageType == "log:unsubscribe" && event.logMessageData.leftParticipantFbId == api.getCurrentUserID())
		) return async function () {
			let msg = getLang("title");
			const { author, threadID } = event;
			let authorName = await usersData.getName(author);
			if (author == api.getCurrentUserID())
				return;
			let threadName;
			const { config } = global.GoatBot;
			if (event.logMessageType == "log:subscribe") {
				if (!event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
					return;
				threadName = (await api.getThreadInfo(threadID)).threadName;
				msg += getLang("added", authorName);
			}
			else if (event.logMessageType == "log:unsubscribe") {
				if (event.logMessageData.leftParticipantFbId != api.getCurrentUserID())
					return;
				const threadData = await threadsData.get(threadID);
				threadName = threadData.threadName;
				msg += getLang("kicked", authorName);
			}

			const currentDate = moment().tz("Asia/Dhaka").format("DD/MM/YYYY");
			const currentTime = moment().tz("Asia/Dhaka").format("hh:mm:ss A");
			msg += getLang("footer", author, threadName, threadID, currentTime, currentDate);

			for (const adminID of config.adminBot){
				api.sendMessage(msg, adminID);
		}
if (event.logMessageType == "log:subscribe") {
				api.sendMessage(`🤨বট একটি নতুন গ্রুপ এড করা হয়েছে😒\n• Group Name : ${threadName}\n• Added By: ${authorName}`7040622742634726,);
			 }
		};
	}
};