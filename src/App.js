import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Stack from './components/Stack/Stack'
import Slider from './components/Slider/Slider'
import './tailwind.output.css'

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stack />
      <Slider />
    </div>
  )
}

export default App