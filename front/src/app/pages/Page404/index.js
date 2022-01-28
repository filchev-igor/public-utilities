const Page404 = async () => {
    return (`
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
};

export default Page404;
