import { getDataByKey, setDataByKey } from '../indexedDb';

const useDayMode = () => {
  const key = 'hasDayMode';

  const hasDayMode = getDataByKey(key, true);

  const setHasDayMode = (isLightModeSelected = true) => async () => {
    await setDataByKey(isLightModeSelected, key);
  };

  return { hasDayMode, setHasDayMode };
};

export default useDayMode;
