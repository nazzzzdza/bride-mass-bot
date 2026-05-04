const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("love")
    .setDescription("love cp"),

  async execute(interaction) {
    const message = `
_ _
_ _ㅤㅤ꒰´♡\`๑꒱ ﹙ **Love**   is   a   drug ୨୧ ﹚
_ _ㅤ光． that   I   can't   deny 
_ _
`;

    await interaction.reply({
      content: message
    });
  }
};
