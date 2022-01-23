import Navbar from '../../components/Navbar';

const Settings = () => {
  return (`
    ${Navbar()}
    
    <div class="container">
        <div class="row">
            <div class="col s12 m10 l10">
              <p>Your data</p>
                <input placeholder="Name" id="first_name" type="text" class="validate" autocomplete="off">
                <label for="first_name">First Name</label>
          
                <input placeholder="Surname" id="surname" type="text" class="validate" autocomplete="off">
                <label for="surname">First Name</label>

                <input id="password" type="password" class="validate" autocomplete="off">
                <label for="password">Password</label>
                
                <input id="email" type="email" class="validate" autocomplete="off">
                <label for="email">Email</label>
                
                <table class="highlight centered responsive-table">
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
                
                <input placeholder="New address" id="address" type="text" class="validate" autocomplete="off">
                <label for="address">New address</label>
                
                <div class="switch">
                  <label>
                    Off
                    <input type="checkbox">
                    <span class="lever"></span>
                    On Electricity
                  </label>
                </div>
                
                <div class="switch">
                  <label>
                    Off
                    <input type="checkbox">
                    <span class="lever"></span>
                    On Water and central heating during winter period
                  </label>
                </div>
                
                <div class="switch">
                  <label>
                    Off
                    <input type="checkbox">
                    <span class="lever"></span>
                    On Rubbish
                  </label>
                </div>
                
                <div class="switch">
                  <label>
                    Off
                    <input type="checkbox">
                    <span class="lever"></span>
                    On Land rent
                  </label>
                </div>
                
                <a class="waves-effect waves-light btn">Submit</a>                
            </div>
        </div>
    </div>
  `);
};

export default Settings;
