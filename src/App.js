// import logo from './logo.svg';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import Todotemplate from './components/TodoTemplate';

function App() {
  return (
    <div>
      <Todotemplate>
        <TodoInsert />
        <TodoList />
      </Todotemplate>
    </div>
  );
}

export default App;
