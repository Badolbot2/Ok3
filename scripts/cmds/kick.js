const { GoatWrapper } = require("fca-liane-utils");
module.exports = {
	config: {
		name: "🤬",
		version: "1.2",
		author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "Kick thành viên",
			en: "Kick member"
		},
		longDescription: {
			vi: "Kick thành viên khỏi box chat",
			en: "Kick member out of chat box"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} @tags: dùng để kick những người được tag",
			en: "   {pn} @tags: use to kick members who are tagged"
		}
	},
 
	langs: {
		vi: {
			needAdmin: "Vui lòng thêm quản trị viên cho bot trước khi sử dụng tính năng này"
		},
		en: {
			needAdmin: "Please add admin for bot before using this feature"
		}
	},

	langs: {
		vi: {
			needAdmin: "Vui lòng thêm quản trị viên cho bot trước khi sử dụng tính năng này"
		},
		en: {
			needAdmin: "😞বস ওর পুটকিতে লাথি মারতে হলে😦\n🫤আমাকে এডমিন করতে হবে🙂"
		}
	},

	onStart: async function ({ message, event, args, threadsData, api, getLang }) {
		const adminIDs = await threadsData.get(event.threadID, "adminIDs");
		if (!adminIDs.includes(api.getCurrentUserID()))
			return message.reply(getLang("needAdmin"));
		async function kickAndCheckError(uid) {
			try {
				await api.removeUserFromGroup(uid, event.threadID);
			}
			catch (e) {
				message.reply(getLang("needAdmin"));
				return "ERROR";
			}
		}
		if (!args[0]) {
			if (!event.messageReply)
				return message.SyntaxError();
			await kickAndCheckError(event.messageReply.senderID);
await api.sendMessage({ 

  body: `🤬তোর মত আবাল চুদারে গ্রুপে রাখিনা ওখে🤬\n🫡 এখন এটা বাজাও👉🎸 বসে বসে🧐`, 

  attachment: await global.utils.getStreamFromURL("https://i.imgur.com/x1vrVOg.mp4")},event.threadID,event.messageReply.messageID)
		}
		else {
			const uids = Object.keys(event.mentions);
			if (uids.length === 0)
				return message.SyntaxError();
			if (await kickAndCheckError(uids.shift()) === "ERROR")
				return;
			for (const uid of uids)
				api.removeUserFromGroup(uid, event.threadID);
		}
	}
};
 const wrapper = new GoatWrapper(module.exports); wrapper.applyNoPrefix({ allowPrefix: true });