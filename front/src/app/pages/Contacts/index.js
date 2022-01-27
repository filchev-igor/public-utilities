import Navbar from '../../components/Navbar';
import useLightMode from '../../utils/useLightMode';

const Contacts = async () => {
    const { hasDayMode } = await useLightMode();

    return (`
      ${await Navbar()}
      
      <div class="container-fluid ${!hasDayMode ? 'bg-night-mode' : ''} min-vh-100">
          <div class="row row-cols-1">    
              <div class="col mt-4">
                <div class="card">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.1284173108193!2d25.285978341455912!3d54.712506619843914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9424f9078fdd%3A0x7b569e1a6c96f924!2sVilniaus%20verslo%20kolegija!5e0!3m2!1slt!2slt!4v1643394553972!5m2!1slt!2slt" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
              </div>
              
              <div class="col-12 cols-sm-10 col-md-6 my-4 mx-auto">
                <div class="card ${!hasDayMode ? 'bg-night-mode border-white text-white' : ''} text-center">
                  <div class="card-body">
                    <h1> Kaip galime padeti?</h1>
                    <h1> Kontaktai </h1>
                    <h4>   Kalvariju g. 129-401</h4>
                    <h4> (+370) 618 482 55</h4>
                    <h4> Vilnius</h4><br>
                  </div>
                </div>
              </div>
          </div>
      </div>
    `);
};

export default Contacts;
