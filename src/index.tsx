import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';

// Redux
import { store, persistor } from './Store';
import RootNavigation from './Route/index.jsx';

import './index.css';

ReactDOM.render(
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <Provider store={store} >
      <PersistGate persistor={persistor} loading={null} >
        <BrowserRouter>
          <RootNavigation />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </LocalizationProvider>,
  document.getElementById('root')
);