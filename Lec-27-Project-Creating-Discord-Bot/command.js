const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Creates a new short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTI2MDkwMDc3MzExMDQ4NTAyMg.GPuusi.irxN05isASFMCeZTUZ_RU9eKesZYpjB4enrhAA"
);
try {
  console.log("Started refreshing application (/) commands.");

  rest.put(Routes.applicationCommands("1260900773110485022"), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
