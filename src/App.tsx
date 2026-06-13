import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CounterTutorial from './components/CounterTutorial'
import TodoTutorial from './components/TodoTutorial'
import ReduxToolkitGuide from './pages/ReduxToolkitGuide'
import ReduxPatternsGuide from './pages/ReduxPatternsGuide'
import TypeScriptGuide from './pages/TypeScriptGuide'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="counter" element={<CounterTutorial />} />
          <Route path="todo" element={<TodoTutorial />} />
          <Route path="redux-guide">
            <Route path="toolkit" element={<ReduxToolkitGuide />} />
            <Route path="patterns" element={<ReduxPatternsGuide />} />
          </Route>
          <Route path="typescript" element={<TypeScriptGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
