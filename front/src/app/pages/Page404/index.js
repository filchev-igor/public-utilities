import Navbar from '../../components/Navbar';

const Page404 = () => {
  return (`
    ${Navbar()}
    
    <div>Page does not exist.</div>
    
    <div>
        <a href="/home">Go home</a>
    </div>
  `);
};

export default Page404;
