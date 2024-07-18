
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './redux/Store';

const reduxWrapper = () => (
    <Provider store={store}>
        <App />
    </Provider>
)



AppRegistry.registerComponent(appName, () => reduxWrapper);
