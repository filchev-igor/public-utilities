import Navbar from '../../components/Navbar';

const ContentAdding = async () => {
    return (`
      ${await Navbar()}
      
      <div class="container-fluid">
        <div class="row">
          
        </div>
      </div>
    `);
};

export default ContentAdding;
