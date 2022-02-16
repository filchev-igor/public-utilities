import Navbar from '../../components/Navbar';
import useDayMode from '../../utils/useDayMode';
import useLithuanian from '../../utils/useLithuanian';
import {
  COLD_WATER_EN,
  COLD_WATER_LT,
  COUNTER_MONTH_DIFFERENCE_EN,
  COUNTER_MONTH_DIFFERENCE_LT,
  COUNTER_READINGS_EN,
  COUNTER_READINGS_LT, HOT_WATER_EN,
  HOT_WATER_LT, SAVE_CHANGES_EN, SAVE_CHANGES_LT,
} from '../../constants/amountsOfConsumed';
import getMonthAndYearDate from '../../utils/getMonthAndYearDate';

const AmountOfConsumed = async () => {
  const { hasDayMode } = await useDayMode();

  const { isLithuanian } = await useLithuanian();

  return (`
        ${await Navbar()}

        <div class="container-fluid ${!hasDayMode ? 'bg-night-mode' : ''} min-vh-100">
          <div class="row">
            <table class="table table-hover ${!hasDayMode ? 'border border-dark' : ''}" style="${!hasDayMode ? 'background-color: #b1b1b1;' : ''}">
                <tbody>
                    <tr>
                      <th>${getMonthAndYearDate([isLithuanian, 0])}</th>
                      <th>${isLithuanian ? COUNTER_MONTH_DIFFERENCE_LT : COUNTER_MONTH_DIFFERENCE_EN}</th>
                      <th>${isLithuanian ? COUNTER_READINGS_LT : COUNTER_READINGS_EN}</th>
                      <th></th>
                    </tr>
  
                    <tr>
                      <th>${isLithuanian ? HOT_WATER_LT : HOT_WATER_EN}</th>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        <input type="number" class="form-control w-50">
                      </td>
                      <td>
                        <button type="button" class="btn btn-outline-success">${isLithuanian ? SAVE_CHANGES_LT : SAVE_CHANGES_EN}</button>
                      </td>
                    </tr>
                    
                    <tr>
                      <th>${isLithuanian ? COLD_WATER_LT : COLD_WATER_EN}</th>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        <input type="number" class="form-control w-50">
                      </td>
                      <td>
                        <button type="button" class="btn btn-outline-success">${isLithuanian ? SAVE_CHANGES_LT : SAVE_CHANGES_EN}</button>
                      </td>
                    </tr>
    
                    <tr>
                      <th>${getMonthAndYearDate([isLithuanian, 1])}</th>
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
                      <th>${getMonthAndYearDate([isLithuanian, 2])}</th>
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
