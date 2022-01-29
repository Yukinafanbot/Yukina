import DiscordJS, { Intents } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import 'dotenv/config';

const client = new DiscordJS.Client({
   intents: new Intents(32767),
});

client.on('ready', async () => {
   new WOKCommands(client, {
      commandsDir: path.join(__dirname, 'commands'),
      typeScript: true,
      testServers: ['930786309352587316'],
      botOwners: ['643116087919116298', '789371145018277898'],
      //mongoUri: process.env.MONGO_URI,
   });

   console.log('SineSok Bot - 어쩔티비');
});

client.login(process.env.TOKEN);