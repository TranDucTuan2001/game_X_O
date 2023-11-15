
import './App.css';
import { MyButton } from './components/MyButton';
import Profile from './components/Proflie';
import ShoppingList from './components/ShoppingList';
import MyApp from './components/MyApp';
import ConditionRender from './components/ConditionRender';
import SetState from './components/SetState';
import Game from './components/game/Game';
function App() {
  return (
    <div>
    <h1>Welcome to my app</h1>
    <MyButton />
    <Profile/>
    <ShoppingList/>
    <MyApp/>
    <ConditionRender/>
    <SetState/> 
    <Game/> 

    
  </div>
    
    
  );
  
}
    
export default App;
