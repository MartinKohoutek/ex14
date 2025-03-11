import './App.css';
import { publicRoutes } from './router/routes/publicRoutes';
import { Router } from './router/Router';

function App() {
  return <Router allRoutes={publicRoutes} />;
}

export default App;
