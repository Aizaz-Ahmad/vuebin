import usePrettier from './usePrettier';
import useCaretPos from './useCaretPos';
import { watch } from 'vue';

function useFormatCode(textarea, code, emit) {
  const formatCode = () => {
    const { getCaretPos, setCaretPos } = useCaretPos(textarea.value);
    const { formattedCodeWithCursorOffset } = usePrettier(getCaretPos(), code);
    const codeAndOffset = formattedCodeWithCursorOffset();
    emit('update:code', codeAndOffset.formatted);
    const unwatch = watch(
      code,
      () => {
        setCaretPos(codeAndOffset.cursorOffset), unwatch();
      },
      { flush: 'post' }
    );
  };
  return {
    formatCode,
  };
}

export default useFormatCode;
