//import {getBillsType} from "../../api/example.js";
import Navbar from '../../components/Navbar';
import "./BillStyle.scss";

const Bills = () => {

    const isDarkMode = false;
   return isDarkMode?

       (`

        ${Navbar()}
        

         

        <div class="card dark" style="width: 18rem height=80px;">
            <div class="card-header dark">
                Payed/Unpaid bills 

                <ul class="list-group dark list-group-flush">
                  <li class="list-group-item dark">January 2022<br>
                    <p>
                      <a class="btn dark btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            More info
                      </a>
                    </p>
                     <div class="collapse dark" id="collapseExample">
                      <div class="card dark card-body">
                       <i class="material-icons">filter_drama</i>
                        <br>
                        Date <br>
                        money to pay <br>
                        Info for bill <br>
                        <button type="submit" class="button">Pay <i class="material-icons right">payment</i> </button>

        </div>
            </div>
                 </li>

                <li class="list-group-item dark">February 2022<br>
                    <p>
                        <a class="btn dark btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        More info
                        </a>
                    </p>
                <div class="collapse" id="collapseExample">
                    <div class="card dark card-body">
                        <i class="material-icons">filter_drama</i>
                            <br>
                            Date <br>
                            money to pay <br>
                            Info for bill <br>
                            <button type="submit" class="button">Pay <i class="material-icons right">payment</i> </button>
                 </div>
                    </div>
                </li>

                 <li class="list-group-item dark">March 2022<br>
                    <p>
                        <a class="btn dark btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                         More info
                        </a>
                    </p>
                <div class="collapse" id="collapseExample">
                    <div class="card dark card-body">
                        <i class="material-icons">filter_drama</i>
                            <br>
                            Date <br>
                            money to pay <br>
                            Info for bill <br>
                            <button type="submit" class="button">Pay <i class="material-icons right">payment</i> </button>

                </div>
                    </div>
                </li>

                <li class="list-group-item dark">April 2022<br>
                    <p>
                        <a class="btn dark btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        More info
                        </a>
                    </p>
                        <div class="collapse" id="collapseExample">
                            <div class="card dark card-body">
                                <i class="material-icons">filter_drama</i>
                                  <br>
                                   Date <br>
                                   money to pay <br>
                                   Info for bill <br>
                                    <button type="submit" class="button">Pay <i class="material-icons right">payment</i> </button>

                        </div>
                            </div>
                </li>
               </ul>



    `)
  :

           (`

        ${Navbar()}
        
        <div class="card" style="width: 18rem height=50px;">
            <div class="card-header">
                Payed/Unpaid bills 

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">January 2022<br>
                    <p>
                      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            More info
                      </a>
                    </p>
                     <div class="collapse" id="collapseExample">
                      <div class="card card-body">
                       <i class="material-icons">filter_drama</i>
                        <br>
                        Date <br>
                        money to pay <br>
                        Info for bill <br>
                        <button type="submit" class="button">Pay <i class="material-icons right">payment</i> </button>

        </div>
            </div>
                 </li>

                <li class="list-group-item">February 2022<br>
                    <p>
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        More info
                        </a>
                    </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <i class="material-icons">filter_drama</i>
                            <br>
                            Date <br>
                            money to pay <br>
                            Info for bill <br>
                            <button type="submit" class="button">Pay <i class="material-icons right">payment</i> </button>
                 </div>
                    </div>
                </li>

                 <li class="list-group-item">March 2022<br>
                    <p>
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                         More info
                        </a>
                    </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <i class="material-icons">filter_drama</i>
                            <br>
                            Date <br>
                            money to pay <br>
                            Info for bill <br>
                            <button type="submit" class="button">Pay <i class="material-icons right">payment</i> </button>

                </div>
                    </div>
                </li>

                <li class="list-group-item">April 2022<br>
                    <p>
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        More info
                        </a>
                    </p>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                <i class="material-icons">filter_drama</i>
                                  <br>
                                   Date <br>
                                   money to pay <br>
                                   Info for bill <br>
                                    <button type="submit" class="button">Pay <i class="material-icons right">payment</i> </button>

                        </div>
                            </div>
                </li>
               </ul>



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
