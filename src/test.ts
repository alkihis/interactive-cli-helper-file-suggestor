import CliHelper from 'interactive-cli-helper';
import fs from 'fs';
import { cliFileSuggestor } from './index';

const cli = new CliHelper({
  onNoMatch: 'No command matches'
});

// Declare it
cli.command('read', filename => {
  console.log(fs.readFileSync(filename, 'utf-8'));
}, {
  onSuggest: cliFileSuggestor,
});

cli.listen();
