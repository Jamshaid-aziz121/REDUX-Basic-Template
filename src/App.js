import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Bank from './Bank';
import MyNav from './navbar/Navbar';

function App() {
  return (
    <>
      <MyNav />
      <br />
      <div className="App">
        <Bank />
      </div>
    </>
  );
}

export default App;
