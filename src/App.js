 import './App.css';
import Header from './Header/index';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
function App() {
  return (
    <div className="App">
        <Header />
        <hr />
       <div className="main-section">
         <LeftSection />
         <RightSection />
       </div>
    </div>
  );
}

export default App;
