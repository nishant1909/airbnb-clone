import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='card-slide'>
        <Card 
          image = "https://superleaguetriathlon.com/wp-content/uploads/Katie_Zaferes_21.jpg"
          rating = {4.3}
          reviewcount = {6}
          country = "USA"
          title = "Life lessons with Katie Zaferes"
          price = {136}
        />
      </section>
    </div>
  );
}

export default App;
