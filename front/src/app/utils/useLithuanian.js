import { getDataByKey, setDataByKey } from '../IndexedDb';
import App from '../../index';

const useLithuanian = async () => {
    const key = 'isLithuanian';

    const isLithuanian = await getDataByKey(key, true);

    const setIsLithuanian = (isLithuanianSelected = true) => async () => {
        await setDataByKey(isLithuanianSelected, key);

        new App(true);
    };

    return {isLithuanian, setIsLithuanian};
};

export default useLithuanian;
