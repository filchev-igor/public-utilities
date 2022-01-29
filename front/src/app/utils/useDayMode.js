import App from '../../index';
import { getDataByKey, setDataByKey } from '../IndexedDb';

const useDayMode = async () => {
    const key = 'hasDayMode';

    const hasDayMode = await getDataByKey(key, true);

    const setHasDayMode = (isLightModeSelected = true) => async () => {
        await setDataByKey(isLightModeSelected, key);

        new App(true);
    };

    return {hasDayMode, setHasDayMode};

};

export default useDayMode;
