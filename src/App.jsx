import { Provider } from 'react-redux';
import store from './redux/store';
import CounterManager from './components/CounterManager';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <h1>Лічильник що побудований на Stateful та Stateless компонентах</h1>
      <CounterManager />
    </Provider>
  )
}

export default App
