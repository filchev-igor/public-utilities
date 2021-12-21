import {getBillsType} from "../../api/example.js";

const Bills = () => {
    /*
    You can add async/await
     */
    const billsTypes = getBillsType();

    return (`
        <div>Here is the content of the bills page. Fetch url: ${billsTypes}</div>
    `);
};

export default Bills;