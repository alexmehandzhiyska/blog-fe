import Articles from '../Articles/Articles';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Newsletter from './Newsletter/Newsletter';

import './Home.css'

const Home = () => {
    return (
        <div className="home-wrapper">
            <Banner></Banner>
            <Categories></Categories>
            <Articles></Articles>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;