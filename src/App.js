
import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
       <Card
       img="https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
       <Card 
       img="https://images.pexels.com/photos/1065030/pexels-photo-1065030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
       />
       <Card
       img="https://images.pexels.com/photos/1456262/pexels-photo-1456262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
       />
    </div>
  );
}

export default App;
