# interactive-cli-helper / file suggestor

Allow to auto-suggest one file name as a command suggestion for [interactive-cli-helper package](https://www.npmjs.com/package/interactive-cli-helper).

## Getting started

```bash
npm i @interactive-cli-helper/file-suggestor
```

## Usage

Give the default export of package as `onSuggest` value in command options.

```ts
import CliHelper from 'interactive-cli-helper';
import cliFileSuggestor from '@interactive-cli-helper/file-suggestor';
import fs from 'fs';

// Assuming cli is a CliHelper/CliListener instance

// Declare it
cli.command('read', filename => {
  console.log(fs.readFileSync(filename, 'utf-8'));
}, {
  onSuggest: cliFileSuggestor,
});

cli.listen();
```
