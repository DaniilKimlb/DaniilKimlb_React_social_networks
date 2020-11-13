// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Profile/Profile';
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Content />
    </div>
  );
};

export default App;
