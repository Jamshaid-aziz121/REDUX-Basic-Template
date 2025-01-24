import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Bank from './navbar/Bank';
import MyNav from './navbar/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <MyNav />
        <Bank />
      </div>
    </>
  );
}

export default App;
