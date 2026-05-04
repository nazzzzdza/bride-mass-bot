const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mass")
    .setDescription("mass response message"),

  async execute(interaction) {
    const message = `
_ _
　||　𓏼ᥥ ݂ 　__Mass__　˖ .
　⎯⎯⎯⎯　**mention   skips**
　꒰　　join   access   [server](https://discord.gg/R7HqCgmxC)　!!   2d   to   post　꒱ 
_ _
`;

    await interaction.reply({
      content: message
    });
  }
};
