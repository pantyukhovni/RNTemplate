import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Spinner from '@app/components/Spinner';
import RootNavigation from '@app/navigation/RootNavigation';
import { persistor, store } from '@app/store';

const App = () => {
  return (
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

export default App;
