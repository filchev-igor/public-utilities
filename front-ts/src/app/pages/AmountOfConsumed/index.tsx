import React from 'react';
import useLithuanian from '../../hooks/useLithuanian';
import useDayMode from '../../hooks/useDayMode';
import {
  COLD_WATER_EN,
  COLD_WATER_LT,
  COUNTER_MONTH_DIFFERENCE_EN,
  COUNTER_MONTH_DIFFERENCE_LT, COUNTER_READINGS_EN,
  COUNTER_READINGS_LT, HOT_WATER_EN, HOT_WATER_LT, SAVE_CHANGES_EN, SAVE_CHANGES_LT,
} from '../../constants/amountOfConsumed';
import getMonthAndYear from '../../helpers/getMonthAndYear';
import Navbar from '../../components/Navbar';

function AmountOfConsumed() {
  const { hasDayMode } = useDayMode();
  const { isLithuanian = true } = useLithuanian();

  return (
    <>
      <Navbar />

      <div className={`container-fluid ${!hasDayMode ? 'bg-night-mode' : ''} min-vh-100`}>
        <div className="row">
          <table className={`table table-hover ${!hasDayMode ? 'border border-dark' : ''}`} style={!hasDayMode ? 'background-color: #b1b1b1;' : ''}>
            <tbody>
              <tr>
                <th>{getMonthAndYear({ isLithuanian })}</th>
                <th>{isLithuanian ? COUNTER_MONTH_DIFFERENCE_LT : COUNTER_MONTH_DIFFERENCE_EN}</th>
                <th>{isLithuanian ? COUNTER_READINGS_LT : COUNTER_READINGS_EN}</th>
              </tr>

              <tr>
                <th>{isLithuanian ? HOT_WATER_LT : HOT_WATER_EN}</th>
                <td>
                  <span>6</span>
                </td>
                <td>
                  <input type="number" className="form-control w-50" />
                </td>
                <td>
                  <button type="button" className="btn btn-outline-success">{isLithuanian ? SAVE_CHANGES_LT : SAVE_CHANGES_EN}</button>
                </td>
              </tr>

              <tr>
                <th>{isLithuanian ? COLD_WATER_LT : COLD_WATER_EN}</th>
                <td>
                  <span>6</span>
                </td>
                <td>
                  <input type="number" className="form-control w-50" />
                </td>
                <td>
                  <button type="button" className="btn btn-outline-success">{isLithuanian ? SAVE_CHANGES_LT : SAVE_CHANGES_EN}</button>
                </td>
              </tr>

              <tr>
                <th>{getMonthAndYear({ isLithuanian, monthBack: 1 })}</th>
                <th>Skirtumas</th>
                <th>Skaitliuko rodmenys</th>
                <th />
              </tr>

              <tr>
                <th>Karstas vanduo</th>
                <td>
                  <span>6</span>
                </td>
                <td>
                  <span>6</span>
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
              </tr>

              <tr>
                <th>{getMonthAndYear({ isLithuanian, monthBack: 2 })}</th>
                <th>Skirtumas</th>
                <th>Skaitliuko rodmenys</th>
              </tr>

              <tr>
                <th>Karstas vanduo</th>
                <td>
                  <span>6</span>
                </td>
                <td>
                  <span>6</span>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AmountOfConsumed;
