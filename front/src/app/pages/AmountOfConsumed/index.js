import Navbar from '../../components/Navbar';

const AmountOfConsumed = async () => {
    return (`
        ${await Navbar()}
    
        #Insert table here (For current month and previous ones)
        
        <div class="container-fluid">
          <div class="row">
          
          </div>
        </div>
    `);
};

export default AmountOfConsumed;
