import Navbar from '../../components/Navbar';
import Content from './Content';

const NewsAndMessages = async () => {
    return (`
      ${await Navbar()}
      
      ${await Content()}
    `);
};

export default NewsAndMessages;
