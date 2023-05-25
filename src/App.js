// Router.
import Router from './Config/router';
// Redux-Store.
import store from './Store';
import { Provider } from 'react-redux';
// Component.
// import Header from './Component/Header';

const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <Header /> */}
        <Router />
      </Provider>
    </>
  )
}

export default App;