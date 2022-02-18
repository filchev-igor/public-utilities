import { getDataByKey, setDataByKey } from '../indexedDb';
import { IS_LITHUANIAN } from '../constants/languages';

const useLithuanian = () => {
  const key = IS_LITHUANIAN;

  const isLithuanian = getDataByKey(key, true);

  const setIsLithuanian = async (isLithuanianSelected = true) => {
    await setDataByKey(isLithuanianSelected, key);
  };

  return { isLithuanian, setIsLithuanian };
};

export default useLithuanian;
