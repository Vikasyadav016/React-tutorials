import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CounterTutorial from './components/CounterTutorial'
import TodoTutorial from './components/TodoTutorial'
import ReduxToolkitGuide from './pages/ReduxToolkitGuide'
import ReduxPatternsGuide from './pages/ReduxPatternsGuide'
import TypeScriptGuide from './pages/TypeScriptGuide'
import ReactIntroDuction from './pages/React js/WhatIsReact'
import FeaturesofReactJs from './pages/React js/FeaturesofReactJs'
import ComparisonPage from './pages/ComparisonPage'
import AdvantagesandDisadvantagesOfReactJs from './pages/React js/ProsAndConsOfReactJs'
import VirtualDom from './pages/React js/FeaturesOfReact/VirtualDom'
import JSX from './pages/React js/FeaturesOfReact/JSX'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="counter" element={<CounterTutorial />} />
          <Route path="todo" element={<TodoTutorial />} />
          <Route path="react">
            <Route index element={<ReactIntroDuction />} />
            <Route path="features">
              <Route index element={<FeaturesofReactJs />} />
              <Route path="virtual-dom" element={<VirtualDom />} />
              <Route path="jsx" element={<JSX />} />
            </Route>
            <Route path="proscons" element={<AdvantagesandDisadvantagesOfReactJs />} />
          </Route>
          <Route path="redux-guide">
            <Route path="toolkit" element={<ReduxToolkitGuide />} />
            <Route path="patterns" element={<ReduxPatternsGuide />} />
          </Route>
          <Route path="typescript" element={<TypeScriptGuide />} />
          <Route path="comparison" element={<ComparisonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
