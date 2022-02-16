"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("../../components/Navbar"));
const useDayMode_1 = __importDefault(require("../../utils/useDayMode"));
const useLithuanian_1 = __importDefault(require("../../utils/useLithuanian"));
const amountsOfConsumed_1 = require("../../constants/amountsOfConsumed");
const getMonthAndYearDate_1 = __importDefault(require("../../utils/getMonthAndYearDate"));
const AmountOfConsumed = async () => {
    const { hasDayMode } = await (0, useDayMode_1.default)();
    const { isLithuanian } = await (0, useLithuanian_1.default)();
    return (`
        ${await (0, Navbar_1.default)()}

        <div class="container-fluid ${!hasDayMode ? 'bg-night-mode' : ''} min-vh-100">
          <div class="row">
            <table class="table table-hover ${!hasDayMode ? 'border border-dark' : ''}" style="${!hasDayMode ? 'background-color: #b1b1b1;' : ''}">
                <tbody>
                    <tr>
                      <th>${(0, getMonthAndYearDate_1.default)([isLithuanian, 0])}</th>
                      <th>${isLithuanian ? amountsOfConsumed_1.COUNTER_MONTH_DIFFERENCE_LT : amountsOfConsumed_1.COUNTER_MONTH_DIFFERENCE_EN}</th>
                      <th>${isLithuanian ? amountsOfConsumed_1.COUNTER_READINGS_LT : amountsOfConsumed_1.COUNTER_READINGS_EN}</th>
                      <th></th>
                    </tr>
  
                    <tr>
                      <th>${isLithuanian ? amountsOfConsumed_1.HOT_WATER_LT : amountsOfConsumed_1.HOT_WATER_EN}</th>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        <input type="number" class="form-control w-50">
                      </td>
                      <td>
                        <button type="button" class="btn btn-outline-success">${isLithuanian ? amountsOfConsumed_1.SAVE_CHANGES_LT : amountsOfConsumed_1.SAVE_CHANGES_EN}</button>
                      </td>
                    </tr>
                    
                    <tr>
                      <th>${isLithuanian ? amountsOfConsumed_1.COLD_WATER_LT : amountsOfConsumed_1.COLD_WATER_EN}</th>
                      <td>
                        <span>6</span>
                      </td>
                      <td>
                        <input type="number" class="form-control w-50">
                      </td>
                      <td>
                        <button type="button" class="btn btn-outline-success">${isLithuanian ? amountsOfConsumed_1.SAVE_CHANGES_LT : amountsOfConsumed_1.SAVE_CHANGES_EN}</button>
                      </td>
                    </tr>
    
                    <tr>
                      <th>${(0, getMonthAndYearDate_1.default)([isLithuanian, 1])}</th>
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
                      <th>${(0, getMonthAndYearDate_1.default)([isLithuanian, 2])}</th>
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
exports.default = AmountOfConsumed;
