const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "m",
    version: "1.0",
    author: "RB-BADOL-KHAN",
    role: 0,
    category: "SystemRB-KING",
    guide: {
      en: "{pn}  (To see the available commands)"
    }
  },

  onStart: async function ({ api, message, args }) {
    try {
      const commandsDir = path.join(__dirname, '..', 'cmds');
      const commands = await getCommandsFromDir(commandsDir);

      let B4D9LHelp = "";
      let currentCategory = "";

      for (const commandName in commands) {
        const command = commands[commandName];

        if (command.config.category !== currentCategory) {
        currentCategory = command.config.category;
        B4D9LHelp += `━❮●❯━━━━━❪❤️💙💚❫━━━━━❮●❯━\n\n`;
        }

        B4D9LHelp += `★ 𝐂𝐌𝐃-𝐍𝐀𝐌𝐄• ${command.config.name}\n\n`;
      }

       const fullHelp = `${B4D9LHelp}`;

      message.reply({body:fullHelp,attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?id=1OeLOXs_NtncRmv7_9rI8NQTW1P8_Pkyc")})

    } catch (error) {
      console.error('[HELPCOMMAND] Error:', error);
      message.reply("An error occurred while fetching command information. Please try again.");
    }
  },
};

async function getCommandsFromDir(dir) {
  const commands = {};
  const files = await fs.promises.readdir(dir);

  for (const file of files) {
    if (file.endsWith('.js') && file !== 'help.js') {
      const filePath = path.join(dir, file);
      const command = require(filePath);
      commands[command.config.name] = command;
    }
  }

  return commands;
}
