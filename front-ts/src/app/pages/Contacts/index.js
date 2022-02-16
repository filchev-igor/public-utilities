"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("../../components/Navbar"));
const useDayMode_1 = __importDefault(require("../../utils/useDayMode"));
const useLithuanian_1 = __importDefault(require("../../utils/useLithuanian"));
const Contacts = async () => {
    const { hasDayMode } = await (0, useDayMode_1.default)();
    const { isLithuanian } = await (0, useLithuanian_1.default)();
    return (`
      ${await (0, Navbar_1.default)()}
      
      <div class="container-fluid ${!hasDayMode ? 'bg-night-mode' : ''} min-vh-100">
          <div class="row row-cols-1">    
              <div class="col mt-4">
                <div class="card">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.1284173108193!2d25.285978341455912!3d54.712506619843914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9424f9078fdd%3A0x7b569e1a6c96f924!2sVilniaus%20verslo%20kolegija!5e0!3m2!1slt!2slt!4v1643394553972!5m2!1slt!2slt" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
              </div>
              
              <div class="col-12 cols-sm-10 col-md-6 my-4 mx-auto">
                <div class="card ${!hasDayMode ? 'bg-night-mode border-white text-white' : ''} text-center h-100">
                  <div class="card-body">
                    <h5 class="card-title">${isLithuanian ? 'VšĮ „Public utilities“' : 'Public  institution „Public-utilities“'}</h5>
                    <p class="card-text">
                      Kalvariju g. 129-401
                    </p>
                      
                    <p class="card-text">
                      <a href="tel:+370555555555555">+370-555-555-555-555</a>
                    </p>
                      
                    <p class="card-text">                      
                      <a href="mailto:info@public-utilities.lt">info@public-utilities.lt</a>
                    </p>
                  
                  </div>
                </div>
              </div>
              
              <div class="col-12 cols-sm-10 col-md-6 my-4 mx-auto">
                <div class="card ${!hasDayMode ? 'bg-night-mode border-white text-white' : ''} text-center h-100">
                  <div class="card-body">
                    <h5 class="card-title"> ${isLithuanian ? 'Darbo laikas' : 'Work hours'}</h5>
                      
                    <p class="card-text">
                      I-IV 8:00 – 12:00 12:30 – 16:45
                    </p>
                      
                    <p class="card-text">                      
                      V 08:00 – 12:00 12:30 – 15:30
                    </p>
                    
                    <p class="card-text">                      
                       ${isLithuanian ? 'VI – VII nedirbame' : 'VI – VII closed'}
                    </p>                  
                  </div>
                </div>
              </div>
              
              <div class="col-12 cols-sm-10 col-md-6 my-4 mx-auto">
                <div class="card ${!hasDayMode ? 'bg-night-mode border-white text-white' : ''} text-center h-100">
                  <div class="card-body">
                    <h5 class="card-title">${isLithuanian ? 'Įmonės kodas 301847774' : 'Company code 301847774'}</h5>
                    <p class="card-text">
                      ${isLithuanian ? 'Registro Nr. 127597' : 'Registry Num. 127597'}
                    </p>
                      
                    <p class="card-text">
                      ${isLithuanian ? 'Įreg. 2008 m. rugsėjo mėn. 04 d.' : 'Reg. 2008 m. Semptember 04 th.'}
                    </p>
                      
                    <p class="card-text">                      
                      ${isLithuanian ? 'PVM mokėtojo kodas: LT104594286913' : 'VAT code: LT104594286913'}
                    </p>
                    
                    <p class="card-text">                      
                     ${isLithuanian ? 'VĮ Registrų centro Kauno fil.' : 'SE Center of Registers Kaunas branch'} 
                    </p>                  
                  </div>
                </div>
              </div>
          </div>
      </div>
    `);
};
exports.default = Contacts;
