import TodoList from './components/todo-list/TodoList';
import UserList from './components/user-list/UserList';

const App: React.FC = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
};

export default App;
