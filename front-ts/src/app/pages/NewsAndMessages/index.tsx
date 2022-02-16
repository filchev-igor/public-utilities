import Navbar from '../../components/Navbar';
import Content from './Content';

const NewsAndMessages = async () => (`
      ${await Navbar()}
      
      ${await Content()}
    `);

export default NewsAndMessages;
