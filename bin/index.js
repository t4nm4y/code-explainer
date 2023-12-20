#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const OpenAI = require('openai');
require('isomorphic-fetch');

// Load environment variables from .env file
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const argv = yargs
  .usage('Usage: cex [options] <file-name>')
  .option('help', {
    alias: 'h',
    description: 'Show help',
  })
  .demandCommand(1, 'Please provide a file name or the file path.')
  .argv;

if (argv.help) {
  yargs.showHelp();
  process.exit(0);
}

const fileName = argv._[0];
const filePath = argv.dir ? path.resolve(process.cwd(), fileName) : fileName;

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('OpenAI API key not found. Make sure to set it in the .env file.');
  process.exit(1);
}
const openai = new OpenAI({ apiKey });
async function main() {
  const code = fs.readFileSync(filePath, 'utf8');
      // console.log('Code from the file:');
      // console.log(code);
      console.log("The explaination of the code is being loaded...\n")
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are an experienced software developer.",
      },
      {
        role: "user",
        content: `Explain the following code:\n\n${code}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main();