import { Provider } from 'react-redux';
import store from './redux/store';
import CounterManager from './components/CounterManager.tsx';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <h1>Інтеграція Redux у існуючий React проект "Лічильник"</h1>
      <CounterManager />
    </Provider>
  )
}

export default App
