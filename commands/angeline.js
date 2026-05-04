const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("angeline")
    .setDescription("angeline cp"),

  async execute(interaction) {
    const message = `
_ _
 　　 𓏼    ۪     𑄹    :rabbit:   **Angeline**   won't   you     ୨୧﹒
             to   me   please  ⑅         ⁔̫
_ _
`;

    await interaction.reply({
      content: message
    });
  }
};
