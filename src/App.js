import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data/data';

function App() {
  const cards = data.map(item => {
    return (
      <Card
        // image={item.image}
        // title={item.title}
        // rating={item.rating}
        // reviewcount={item.reviewcount}
        // location={item.location}
        // price={item.price}
        // openspots={item.openspots}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='card-slide'>
        {cards}
      </section>
    </div>
  );
}

export default App;
