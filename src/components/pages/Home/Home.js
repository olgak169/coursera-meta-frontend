import Hero from './Hero';
import DishList from './DishCard';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='container'>
      <DishList />
      </div>
    </>
  );
};

export default Home;
