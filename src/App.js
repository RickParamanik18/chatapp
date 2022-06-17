import {lazy,Suspense} from 'react'
import Loader from './components/Loader';

const Auth = lazy(()=>import('./pages/Auth'))

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <Auth/>
    </Suspense>
    
  );
}

export default App;
