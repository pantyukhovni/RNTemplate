import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Spinner from '@app/components/Spinner';
import WIPComponent from '@app/components/WIPSComponent';
import { persistor, store } from '@app/store';

const App = () => {
  return (
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <Provider store={store}>
        <SafeAreaView>
          <ScrollView>
            <WIPComponent />
          </ScrollView>
        </SafeAreaView>
      </Provider>
    </PersistGate>
  );
};

export default App;
