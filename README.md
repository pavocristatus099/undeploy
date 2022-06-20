# Undeploy

Quickly delete all [slash commands](https://discord.com/developers/docs/interactions/application-commands#application-commands) from a Discord bot &mdash; in the command line, or in a Node program.

```bash
npx undeploy [token] [guild ID]
```

If `[token]` is omitted, the environmental variable `TOKEN`, `BOT_TOKEN`, or `DISCORD_API_TOKEN` will be used instead.

If `[guild ID]` is omitted, application commands will be deleted globally.

You can also use Undeploy in a Node.js program:

```js
const undeploy = require("undeploy"); // CommonJS
import undeploy from "undeploy"; // ES6 modules

undeploy("token", "guildID");
```

## License

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
