require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async (member) => {
    try {
        await member.roles.add(member.guild.roles.cache.get(process.env.ROLE_ID));
        console.log(`Assigned role to ${member.user.tag}`);
    } catch (error) {
        console.error(`Failed to assign role:`, error);
    }
});

client.login(process.env.DISCORD_TOKEN);
