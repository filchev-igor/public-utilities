"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("../../components/Navbar"));
const useDayMode_1 = __importDefault(require("../../utils/useDayMode"));
const useLithuanian_1 = __importDefault(require("../../utils/useLithuanian"));
const bills_1 = require("../../constants/bills");
const getMonthAndYearDate_1 = __importDefault(require("../../utils/getMonthAndYearDate"));
const Bills = async () => {
    const { hasDayMode } = await (0, useDayMode_1.default)();
    const { isLithuanian } = await (0, useLithuanian_1.default)();
    setTimeout(() => {
        const collapseButtons = document.querySelectorAll("[data-toggle='bills']");
        const handleCollapse = (button) => {
            const { id } = button.dataset;
            const collapseElement = document.getElementById(id);
            collapseElement.classList.toggle('show');
        };
        collapseButtons.forEach((button) => {
            button.onclick = () => handleCollapse(button);
        });
    }, 100);
    return (`
        ${await (0, Navbar_1.default)()}
        <div class="container-fluid ${!hasDayMode ? 'bg-night-mode' : ''} min-vh-100">
            <div class="row">
                <div class="col mt-4">
                    <ul class="list-group">
                      <li class="list-group-item ${!hasDayMode ? 'bg-night-mode border-white text-white' : 'text-dark border-dark'}">
                        <div class="align-items-center d-flex justify-content-between">
                            ${(0, getMonthAndYearDate_1.default)([isLithuanian, 0])}
                            
                            <button class="btn btn-outline-${hasDayMode ? 'dark' : 'light'}" type="button" data-toggle="bills" data-id="collapseExample1">
                                ${isLithuanian ? bills_1.MORE_INFO_LT : bills_1.MORE_INFO_EN}
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
                            ${(0, getMonthAndYearDate_1.default)([isLithuanian, 1])}
                            
                            <button class="btn btn-outline-${hasDayMode ? 'dark' : 'light'}"" type="button" data-toggle="bills" data-id="collapseExample2">
                                ${isLithuanian ? bills_1.MORE_INFO_LT : bills_1.MORE_INFO_EN}
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
};
exports.default = Bills;
