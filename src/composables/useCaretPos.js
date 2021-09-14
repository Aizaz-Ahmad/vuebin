import { position } from 'caret-pos';

function useCaretPos(textarea) {
  const getCaretPos = () => {
    return position(textarea).pos;
  };
  const setCaretPos = pos => {
    return position(textarea, pos);
  };

  return {
    getCaretPos,
    setCaretPos,
  };
}

export default useCaretPos;
