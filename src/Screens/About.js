// Redux.
import { useSelector } from 'react-redux';
// Component.
import Header from '../Component/Header';
import User from '../Component/User';
import Footer from '../Component/Footer';

const About = () => {
    const theme = useSelector(state => state.themeReducer.theme)
    return (
        <>
            <Header />
            <div className='screen-layout' style={{ background: theme }}>
                <h1>About Screen</h1>
                <hr className='w-100' />
                <User />
            </div>
            <Footer />
        </>
    )
}

export default About;