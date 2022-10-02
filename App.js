import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './src/navigator/drawerNavigation';
import { store } from './src/context/store';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation/>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
