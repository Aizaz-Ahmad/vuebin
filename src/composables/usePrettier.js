import prettier from 'prettier';
import parserHTML from 'prettier/parser-html';
import parserBABEL from 'prettier/parser-babel';
import parserPOSTCSS from 'prettier/parser-postcss';
import parserTypescript from 'prettier/parser-typescript';
function usePrettier(textarea, code, emit) {
  const formatCode = () => {
    const formattedCode = prettier.format(code.value, {
      parser: 'vue',
      plugins: [parserHTML, parserBABEL, parserPOSTCSS, parserTypescript],
      arrowParens: 'avoid',
      jsxSingleQuote: true,
      singleQuote: true,
      useTabs: false,
      vueIndentScriptAndStyle: true,
    });
    emit('update:code', formattedCode);
  };
  return {
    formatCode,
  };
}

export default usePrettier;
