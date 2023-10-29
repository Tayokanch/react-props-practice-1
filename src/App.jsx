import { useState } from 'react'
import { reverse } from './helpers'
import Title from './components/Title'
import NameLength from './components/NameLength'
import NameReversed from './components/NameReverse'


function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title username={name}></Title>
      <NameLength username= {name}></NameLength>
      <NameReversed username = {name}></NameReversed>
    
    </div>
  )
}

export default App
