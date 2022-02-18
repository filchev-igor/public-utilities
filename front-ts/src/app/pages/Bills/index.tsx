import Navbar from '../../components/Navbar';
import React from 'react';
import useDayMode from "../../hooks/useDayMode";
import useLithuanian from "../../hooks/useLithuanian";
import getMonthAndYear from "../../helpers/getMonthAndYear";
import {MORE_INFO_EN, MORE_INFO_LT} from "../../constants/bills";

const Bills = () => {
  const { hasDayMode } = useDayMode();
  const { isLithuanian } = useLithuanian();

  return (
        <>
            <Navbar/>

        <div class="container-fluid ${!hasDayMode ? 'bg-night-mode' : ''} min-vh-100">
            <div class="row">
                <div class="col mt-4">
                    <ul class="list-group">
                      <li class="list-group-item ${!hasDayMode ? 'bg-night-mode border-white text-white' : 'text-dark border-dark'}">
                        <div class="align-items-center d-flex justify-content-between">
                            {getMonthAndYear({isLithuanian})}

                            <button class={`btn btn-outline-${hasDayMode ? 'dark' : 'light'}`} type="button">
                                ${isLithuanian ? MORE_INFO_LT : MORE_INFO_EN}
                            </button>
                        </div>

                        <div class="collapse">
                          <div class="card card-body">
                              <i class="material-icons">filter_drama</i>
                          </div>
                        </div>
                      </li>

                      <li class={`list-group-item ${!hasDayMode ? 'bg-night-mode border-white text-white' : 'text-dark border-dark'}`}>
                        <div class="align-items-center d-flex justify-content-between">
                            ${getMonthAndYear({isLithuanian, monthBack: 1})}

                            <button class={`btn btn-outline-${hasDayMode ? 'dark' : 'light'}`} type="button">
                                ${isLithuanian ? MORE_INFO_LT : MORE_INFO_EN}
                            </a>
                        </div>

                        <div class="collapse">
                          <div class="card card-body">
                              <i class="material-icons">filter_drama</i>
                          </div>
                        </div>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Bills;
