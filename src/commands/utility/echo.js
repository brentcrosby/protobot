const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Does a bunch of stuff')
    .addStringOption(option =>
      option.setName('input')
        .setDescription('The input to echo back')
        .setRequired(true) // If you want to make this option required
      )
      .addBooleanOption( option => 
        option.setName('ephemeral')
        .setDescription('Whether or not echo should be ephemeral')
        // .setRequired(true)
      ),

  // Add the execute function here
  async execute(interaction) {
    // Get the input from the interaction options
    const input = interaction.options.getString('input');
    const ephemeral = interaction.options.getBoolean('ephemeral') || false; // Default to false if not provided


    // Respond to the interaction with the input
    await interaction.reply({
      content:`You said: ${input}`,
      ephemeral: ephemeral
    });
  },
};