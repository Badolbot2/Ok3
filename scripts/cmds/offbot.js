module.exports = {
	config: {
		name: "off",
		version: "1.0",
		author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
		countDown: 45,
		role: 2,
		shortDescription: "Turn off bot",
		longDescription: "Turn off bot",
		category: "owner",
		guide: "{p}{n}"
	},
	onStart: async function ({event, api}) {
		api.sendMessage("╔════ஜ𝐁𝟒𝐃𝟗𝐋-𝐁𝟗𝐓___//𝟎𝟎𝟕ஜ═══╗\n\n📴𝐁𝐎𝐓•𝐎𝐅𝐅•𝐒𝐔𝐂𝐂𝐑𝐒𝐒𝐅𝐔𝐋𝐋𝐘✅\n\n╚════ஜ𝐁𝟒𝐃𝟗𝐋-𝐁𝟗𝐓___//𝟎𝟎𝟕ஜ═══╝",event.threadID, () =>process.exit(0))}
};
