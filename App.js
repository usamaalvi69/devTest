import MainStack from './src/MainStack';
import {Provider} from 'react-redux';
import React from 'react';
import store from './src/redux/storeConfig';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;