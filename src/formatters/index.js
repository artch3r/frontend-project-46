import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const format = (tree, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return formatStylish(tree);
    case 'plain':
      return formatPlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`${outputFormat} is unknown format`);
  }
};

export default format;
