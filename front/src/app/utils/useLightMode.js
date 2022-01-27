import App from '../../index';
import { getDataByKey, setDataByKey } from '../IndexedDb';

const useLightMode = async () => {
    const key = 'hasDayMode';

    const hasDayMode = await getDataByKey(key, true);

    const sethasDayMode = (isLightModeSelected = true) => async () => {
        await setDataByKey(isLightModeSelected, key);

        new App(true);
    };

    return {hasDayMode, sethasDayMode};

};

export default useLightMode;
