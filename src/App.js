// Router.
import Router from './Config/router';
// Redux-Store.
import { store, persistor } from './Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App;