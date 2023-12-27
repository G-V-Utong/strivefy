// Importing necessary dependencies and components
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importing Redux store and Provider
import { store } from './redux/store';
import { Provider } from 'react-redux';

// Using React 18's createRoot and render to render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  // Providing the Redux store to the entire application using the Provider
  <Provider store={store}>
    {/* Rendering the main App component */}
    <App />
  </Provider>
);

