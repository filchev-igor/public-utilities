"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Page404 = async () => (`
      <div class="container-fluid">
          <div class="row">
            <div class="col-6 text-center mx-auto mt-5">
              <div>Page does not exist.</div>
              
              <div>
                  <a href="/">Go home</a>
              </div>
            </div>
          </div>
      </div>
    `);
exports.default = Page404;
