//import {getBillsType} from "../../api/example.js";
import Navbar from '../../components/Navbar';
import useDayMode from '../../utils/useDayMode';

const Bills = async () => {
    const {hasDayMode} = await useDayMode();

    setTimeout(() => {
        const collapseButtons = document.querySelectorAll("[data-toggle='bills']");

        const handleCollapse = (button) => {
            const id = button.dataset.id;
            const collapseElement = document.getElementById(id);

            collapseElement.classList.toggle('show');
        };

        collapseButtons.forEach((button) => {
            button.onclick = () => handleCollapse(button);
        });
    }, 100);

    return (`
        ${await Navbar()}
        <div class="container-fluid ${!hasDayMode ? 'bg-night-mode' : ''} min-vh-100">
            <div class="row">
                <div class="col mt-4">
                    <ul class="list-group">
                      <li class="list-group-item ${!hasDayMode ? 'bg-night-mode border-white text-white' : 'text-dark border-dark'}">
                        <div class="align-items-center d-flex justify-content-between">
                            January 2022
                            
                            <button class="btn btn-outline-${hasDayMode ? 'dark' : 'light'}" type="button" data-toggle="bills" data-id="collapseExample1">
                                More info
                            </a>
                        </div>
                        
                        <div class="collapse" id="collapseExample1">
                          <div class="card card-body">
                              <i class="material-icons">filter_drama</i>
                            
    
                          </div>
                        </div>
                      </li>
                      
                      <li class="list-group-item ${!hasDayMode ? 'bg-night-mode border-white text-white' : 'text-dark border-dark'}">
                        <div class="align-items-center d-flex justify-content-between">
                            January 2022
                            
                            <button class="btn btn-outline-${hasDayMode ? 'dark' : 'light'}"" type="button" data-toggle="bills" data-id="collapseExample2">
                                More info
                            </a>
                        </div>
                        
                        <div class="collapse" id="collapseExample2">
                          <div class="card card-body">
                              <i class="material-icons">filter_drama</i>
                            
    
                          </div>
                        </div>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
    `);

    /*
    You can add async/await
     */
    //const billsTypes = getBillsType();

    /*
    return (`
        ${Navbar()}

        <div>Here is the content of the bills page. Fetch url: ${billsTypes}</div>
    `);
     */
};

export default Bills;
