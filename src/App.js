import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'

import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NCakeContainer from './components/NCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer/>
        <ItemContainer cake/>
        <ItemContainer/>
        <NCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>

  );
}

export default App;
