import Navbar from '../../components/Navbar';
import useDayMode from '../../utils/useDayMode';

const AmountOfConsumed = async () => {
    const { hasDayMode } = await useDayMode();

    return (`
        ${await Navbar()}

        <div class="container-fluid ${!hasDayMode ? 'bg-night-mode' : ''} min-vh-100">
          <div class="row">
            <table class="table table-hover ${!hasDayMode ? 'border border-dark' : ''}" style="${!hasDayMode ? 'background-color: #b1b1b1;' : ''}">
                <tbody>
                    <tr>
                      <th>Sausis 2022</th>
                      <th>Skirtumas</th>
                      <th>Skaitliuko rodmenys</th>
                      <th></th>
                    </tr>
  
                    <tr>
                      <th>Karstas vanduo</th>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        <input type="number" style="width: 100px;">
                      </td>
                      <td>
                        <button type="button" class="btn btn-outline-success">Irasyti pakeitimus</button>
                      </td>
                    </tr>
                    
                    <tr>
                      <th>Saltas vanduo</th>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        <input type="number" style="width: 100px;">
                      </td>
                      <td>
                        <button type="button" class="btn btn-outline-success">Irasyti pakeitimus</button>
                      </td>
                    </tr>
    
                    <tr>
                      <th>Gruodis 2021</th>
                      <th>Skirtumas</th>
                      <th>Skaitliuko rodmenys</th>
                      <th></th>
                    </tr>
                 
                    <tr>
                      <th>Karstas vanduo</th>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        
                      </td>
                    </tr>
                    
                    <tr>
                      <th>Saltas vanduo</th>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        
                      </td>
                    </tr>
    
                    <tr>
                      <th>Lapkritis 2021</th>
                      <th>Skirtumas</th>
                      <th>Skaitliuko rodmenys</th>
                      <th></th>
                    </tr>
                
                    <tr>
                      <th>Karstas vanduo</th>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        
                      </td>
                    </tr>
                    
                    <tr>
                      <th>Saltas vanduo</th>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        
                      </td>
                    </tr>
                </tbody>
            </table>            
          </div>
        </div>
    `);

};

export default AmountOfConsumed;
