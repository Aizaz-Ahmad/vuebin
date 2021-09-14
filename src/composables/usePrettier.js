import prettier from 'prettier';
import parserHTML from 'prettier/parser-html';
import parserBABEL from 'prettier/parser-babel';
import parserPOSTCSS from 'prettier/parser-postcss';
import parserTypescript from 'prettier/parser-typescript';

function usePrettier(cursorOffset, code) {
  const formattedCodeWithCursorOffset = () => {
    const formattedCode = prettier.formatWithCursor(code.value, {
      parser: 'vue',
      plugins: [parserHTML, parserBABEL, parserPOSTCSS, parserTypescript],
      arrowParens: 'avoid',
      jsxSingleQuote: true,
      singleQuote: true,
      useTabs: false,
      vueIndentScriptAndStyle: true,
      cursorOffset,
    });
    return formattedCode;
  };
  return {
    formattedCodeWithCursorOffset,
  };
}

export default usePrettier;
