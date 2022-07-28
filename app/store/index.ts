import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AnyAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Config from 'react-native-config';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

import { exampleServices } from '@app/services/example';
import type {
  Dependencies,
  Middlewares,
  Reducers,
  RootState,
} from '@app/store/types';

import { todosReducer } from './example/slice';

const devTools = Config.API_URL === '';

const dependencies: Dependencies = {
  exampleServices,
};

const reducers: Reducers = {
  todos: todosReducer,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: [],
  whitelist: [],
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const preloadedState = {
//   todos: {
//     ids: ['1', '2', '3'],
//     entities: {
//       []: {
//         id: '1',
//         text: 'Some text',
//         completed: true
//       },
//       2: {
//         id: '1',
//         text: 'Some text',
//         completed: true
//       },
//       3: {
//         id: '1',
//         text: 'Some text',
//         completed: true
//       }
//     }
//   }
// }

const store = configureStore<RootState, AnyAction, Middlewares>({
  reducer: persistedReducer,
  devTools,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: dependencies,
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
