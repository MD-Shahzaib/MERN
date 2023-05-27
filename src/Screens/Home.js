import { useSelector } from 'react-redux';
// Component.
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Counter from '../Component/Counter';

const Home = () => {
    const theme = useSelector(state => state.themeReducer.theme)
    return (
        <>
            <Header />
            <div className='screen-layout' style={{ background: theme }}>
                <h1>Home Screen</h1>
                <hr className='w-100'/>
                <Counter />
            </div>
            <Footer />
        </>
    )
}

export default Home;