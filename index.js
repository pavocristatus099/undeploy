/*
MIT License

Copyright (c) 2022 Nicholas Christopher

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

import fetch from "node-fetch";
import url from "url";

const API_URI = "https://discord.com/api/v9";

function getApplicationIDFromToken(token) {
	const b64 = token.split(".")[0];
	const buffer = Buffer.from(b64, "base64");
	return buffer.toString("utf-8");
}

/**
 * Undeploy application commands from a Discord bot.
 * @param {string} token Authorization token used to interact with the Discord API.
 * @param {string} [guildID] The ID of the guild to undeploy commands from.
 */
export default async function undeploy(token, guildID) {
	if (!token) throw "You need to specify a token to undeploy commands.";

	const applicationID = getApplicationIDFromToken(token);
	const url = guildID
		? `${API_URI}/applications/guilds/${guildID}/${applicationID}/commands`
		: `${API_URI}/applications/${applicationID}/commands`;

	const response = await fetch(url, {
		method: "PUT",
		body: "{[]}",
		headers: {
			"Content-Type": "application/json",
		},
	});

	return response;
}

// CLI
if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
	const args = process.argv.slice(2);
	let token;
	let guildID;

	for (const arg of args) {
		if (arg.length === 18) {
			// Discord IDs are 18 characters long
			guildID = arg;
		} else {
			token = arg;
		}
	}

	token ||=
		process.env.TOKEN ||
		process.env.BOT_TOKEN ||
		process.env.DISCORD_API_TOKEN;
	guildID ||= process.env.GUILD_ID;

	undeploy(token, guildID);
}
