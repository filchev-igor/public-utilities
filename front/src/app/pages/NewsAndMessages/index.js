import Navbar from '../../components/Navbar';

const NewsAndMessages = () => {
  return (`
    ${Navbar()}
    
    <div class="container-fluid">
        <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Water supply halt</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
              
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Electricity supply halt</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  `);
};

export default NewsAndMessages;
