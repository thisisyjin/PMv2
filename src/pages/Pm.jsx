import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

// /pm/:city

const Pm = () => {
  const { city } = useParams();

  console.log(city);
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Pm;
