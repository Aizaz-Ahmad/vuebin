const { generateSlug } = require('random-word-slugs');

function getSlug() {
  return generateSlug(2, {
    categories: {
      noun: ['technology', 'profession', 'science', 'thing', 'time'],
    },
    partsOfSpeech: ['adjective', 'noun'],
  });
}

module.exports = getSlug;
