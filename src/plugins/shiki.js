const shiki = require('shiki');

export default {
  async getShiki() {
    shiki.setCDN('https://unpkg.com/shiki@0.10.1/');
    let highlighter = await shiki.getHighlighter({
      theme: 'github-dark',
      langs: [
        'vue',
        ...shiki.BUNDLED_LANGUAGES.find(a => a.id === 'vue').embeddedLangs,
      ],
    });
    return highlighter;
  },
};
