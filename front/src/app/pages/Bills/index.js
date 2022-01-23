//import {getBillsType} from "../../api/example.js";
import Navbar from '../../components/Navbar';
import { v4 as uuidv4 } from 'uuid';

const Bills = () => {
    const collapsibleId = uuidv4();

    document.addEventListener('DOMContentLoaded', function() {
        window.onload = () => {
            const element = document.getElementById(collapsibleId);

        }
    });

    return (`
        ${Navbar()}
        
        <div class="container-fluid">
            <div class="row">
              <div class="col s12">
                <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                          <span class="card-title">January 2022</span>
                          <p>VM123456/45678</p>
                          <p>140$</p>
                          <p>Payment for gas, communal utilities and electricity</p>
                        </div>
                        <div class="card-action">
                          <button class="btn waves-effect waves-light" type="submit" name="action">
                        Pay
                        
                        <i class="material-icons right">payment</i>
                    </button>
                        </div>
                      </div>
                      
                      <ul class="collapsible" id=${collapsibleId}>
                    <li>
                      <div class="collapsible-header"><i class="material-icons">filter_drama</i>December 2021</div>
                      <div class="collapsible-body">
                          <span>
                          VM123456/56776
                          <br>
                          <p>90$</p>
                          <br>
                          <p>Payment for gas, communal utilities and electricity</p>
                          </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header"><i class="material-icons">filter_drama</i>Novermber 2021</div>
                      <div class="collapsible-body">
                          <span>
                          VM123456/5678
                          <br>
                          <p>78$</p>
                          <br>
                          <p>Payment for gas, communal utilities and electricity</p>
                          </span>
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
