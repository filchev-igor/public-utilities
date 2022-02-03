import { getDataByKey, setDataByKey } from '../IndexedDb';
import App from '../../index';
import { IS_LITHUANIAN } from '../constants/language';

const useLithuanian = async () => {
    const key = IS_LITHUANIAN;

    const isLithuanian = await getDataByKey(key, true);

    const setIsLithuanian = (isLithuanianSelected = true) => async () => {
        await setDataByKey(isLithuanianSelected, key);

        new App(true);
    };

    return {isLithuanian, setIsLithuanian};
};

export default useLithuanian;
