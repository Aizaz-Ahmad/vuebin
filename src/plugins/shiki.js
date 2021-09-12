const shiki = require('shiki');

export default {
  async getShiki() {
    shiki.setCDN('https://unpkg.com/shiki/');
    let highlighter = await shiki.getHighlighter({
      theme: 'github-dark',
      langs: ['vue', 'js', 'vue-html', 'css', 'typescript'],
    });
    return highlighter;
  },
};
