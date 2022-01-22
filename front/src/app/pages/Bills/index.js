import {getBillsType} from "../../api/example.js";
import Navbar from '../../components/Navbar';

const Bills = () => {
    /*
    You can add async/await
     */
    const billsTypes = getBillsType();

    return (`
        ${Navbar()}
        
        <div>Here is the content of the bills page. Fetch url: ${billsTypes}</div>
    `);
};

export default Bills;
