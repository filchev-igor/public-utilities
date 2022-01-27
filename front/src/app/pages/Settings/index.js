import Navbar from '../../components/Navbar';

const Settings = () => {
  return (`
    ${Navbar()}
    
    <div class="container-fluid">
        <div class="row">
            <div class="col s12 m10 l10">
              <p>Your data</p>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="firstName" placeholder="Name" autocomplete="off">
                  <label for="firstName">Name</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="surname" placeholder="Surname" autocomplete="off">
                  <label for="surname">Surname</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="password" placeholder="Password" autocomplete="off">
                  <label for="password">Password</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="passwordRepeat" placeholder="Repeat password" autocomplete="off">
                  <label for="passwordRepeat">Repeat password</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="email" placeholder="E-mail" autocomplete="off">
                  <label for="email">E-mail</label>
                </div>
                
                <table class="table table-hover">
                  <thead>
                    <tr>
                        <th>Address in Vilnius</th>
                        <th>Information</th>
                        <th></th>
                    </tr>
                  </thead>
          
                  <tbody>
                    <tr>
                      <td>Rygos g. 40-50</td>
                      <td>Water <br>rubbish</td>
                      <td>
                        <a class="waves-effect waves-light btn btn-small">
                            <i class="material-icons">delete</i>
                        </a>
                      </td>
                    </tr>
                    
                    <tr>
                      <td>Rygos g. 55-50</td>
                      <td>All services</td>
                      <td>
                        <a class="waves-effect waves-light btn btn-small">
                            <i class="material-icons">delete</i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="newAddress" placeholder="New address" autocomplete="off">
                  <label for="newAddress">New address</label>
                </div>
                
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="electricity">
                  <label class="form-check-label" for="electricity">Maintenance services.</label>
                </div>
                
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="water">
                  <label class="form-check-label" for="water">Cleaning of the communal areas</label>
                </div>
                
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="rubbish">
                  <label class="form-check-label" for="rubbish">Electricity of the communal areas</label>
                </div>
                
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="gas">
                  <label class="form-check-label" for="gas">Maintenance of the heating system and hot water supply system </label>
                </div>
                
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="gas">
                  <label class="form-check-label" for="gas">Contribution to the fund of renovation </label>
                </div>
                
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="gas">
                  <label class="form-check-label" for="gas">Maintanance of the intercom</label>
                </div>
                
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="gas">
                  <label class="form-check-label" for="gas">Householders association's properties administration</label>
                </div>
                
                <button type="button" class="btn btn-success">Add new address</button>               
            </div>
        </div>
    </div>
  `);
};

export default Settings;
