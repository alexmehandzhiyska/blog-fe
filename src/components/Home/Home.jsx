import Banner from './Banner/Banner';
import Categories from './Categories/Categories';

import './Home.css'

const Home = () => {
    return (
        <div className="home-wrapper">
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;