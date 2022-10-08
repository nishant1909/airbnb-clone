import herogrid from '../assets/hero-grid.png';

export default function Hero() {
    return (
        <section className='hero'>
            <img src={herogrid} />
            <h1><b>Online Experiences</b></h1>
            <p> Join unique interactive activities
                one of a kind hosts-all without
                leaving your home.
            </p>
        </section>
    );
}