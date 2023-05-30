import { Header, Routing, Sprite } from 'components';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Sprite />

      <div className="content">
        
          <Header />

          <Routing />
  
      </div>
    </div>
  );
}

export default App;
