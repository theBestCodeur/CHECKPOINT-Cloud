import './App.css';
import GoogleMapReact from './GoogleMapReact'

function App() {
  return (
    <div>
      <div className='main--part--map'>
        <h1>integration of google maps</h1>
        <div className='main--part--map--content'>
       <GoogleMapReact/>
        </div>
      </div>
    </div>
  );
}

export default App;
