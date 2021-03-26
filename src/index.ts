import glob from 'glob';
import type { CliSuggestor } from 'interactive-cli-helper';

export const cliFileSuggestor: CliSuggestor = (rest: string) => {
  // If path is relative, add ./ to help glob
  const filepath = rest.startsWith('/') ? rest : ('./' + rest);
  // Get all items beginning by input string
  const results = glob.sync(filepath + '*', {
    dot: true,
    mark: true,
  });

  // Slice the possible ./ at the beginning of the string
  return results.map(path => path.startsWith('./') ? path.slice('./'.length) : path);
};

export default cliFileSuggestor;
