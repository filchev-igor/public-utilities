import useDayMode from '../../utils/useDayMode';

const Content = async () => {
    const { hasDayMode } = await useDayMode();

    return (`
        <div class="container-fluid ${hasDayMode ? '' : 'bg-night-mode'} min-vh-100">
          <div class="row gy-3 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-3">
              <div class="col mx-auto">
                  <div class="card ${hasDayMode ? 'border-dark' : 'border-secondary text-secondary'}  border-3 text-center">
                      <div class="card-body">
                        <h3 class="card-title">News box 1</h3>
                        
                        <p class="card-text fs-5 text-start">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel veCurabitur arcu diam, pulvinar venenatis ipsum et, vestibulum  Donec vel veCurabitur arcu diam, pulvinar venenatis ipsum et, vestiblandit ipsum. Maecenas non leo ligula.
                        </p>
                        
                        <button class="btn btn-outline-dark" type="button">Read more</button>
                      </div>
                  </div>
              </div>
            
              <div class="col mx-auto">
                  <div class="card ${hasDayMode ? 'border-dark' : 'border-secondary text-secondary'}  border-3 text-center">
                      <div class="card-body">
                        <h3 class="card-title">News box 1</h3>
                        
                        <p class="card-text fs-5 text-start">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel veCurabitur arcu diam, pulvinar venenatis ipsum et, vestibulum  Donec vel veCurabitur arcu diam, pulvinar venenatis ipsum et, vestiblandit ipsum. Maecenas non leo ligula.
                        </p>
                        
                        <button class="btn btn-outline-dark" type="button">Read more</button>
                      </div>
                  </div>
              </div>
              
              <div class="col mx-auto">
                  <div class="card ${hasDayMode ? 'border-dark' : 'border-secondary text-secondary'}  border-3 text-center">
                      <div class="card-body">
                        <h3 class="card-title">News box 1</h3>
                        
                        <p class="card-text fs-5 text-start">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel veCurabitur arcu diam, pulvinar venenatis ipsum et, vestibulum  Donec vel veCurabitur arcu diam, pulvinar venenatis ipsum et, vestiblandit ipsum. Maecenas non leo ligula.
                        </p>
                        
                        <button class="btn btn-outline-dark" type="button">Read more</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `);
};

export default Content;
