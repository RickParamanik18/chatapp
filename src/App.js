import {lazy,Suspense} from 'react'
import Loader from './components/Loader';
import Home from './pages/Home';

const Auth = lazy(()=>import('./pages/Auth'))

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      {/* <Auth/> */}
      <Home/>
    </Suspense>
    
  );
}

export default App;
