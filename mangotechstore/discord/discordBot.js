const { REST, Routes } = require('@discordjs/rest');

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        console.log('Started refeshing application (/) commands.');

        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
        
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login(TOKEN);