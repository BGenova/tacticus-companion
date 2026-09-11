import { RouterProvider } from 'react-router-dom';
import './nocturne.css';
import { router } from './app/router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
