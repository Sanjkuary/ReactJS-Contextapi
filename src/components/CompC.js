import React, {useContext} from 'react'
import { AppState } from '../App'

const CompC = () => {
  const appData = useContext(AppState)
  return (
    <div className='compc'>
      <div>CompC</div>
      <h1>{appData.data}</h1>
      <h1>name: {appData.name.name}</h1>
      <h1>age: {appData.name.age}</h1>
    </div>
  )
}

export default CompC
