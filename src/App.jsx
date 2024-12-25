import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actors = ['sarjis','hasnat','asif','nahid','rafi']
    const singers = [
      {id:1, name :'Moshiur Rahman',quality:'best'},
      {id :2, name :'Motiur Rahman Molik',quality:'Top'},
      {id:3, name :'Rokunuzzan',quality:'better'},
    ];
  return (

    <>
    
    {
      singers.map(singer=><Singer name={singer}></Singer>)
    }
    <Actor name='sofiqul Islam'>
   
    </Actor>
    {
      actors.map(actor=><Actor name={actor}></Actor>)
    }
    <Todo></Todo>
    <Student task='good' isDone={true} ></Student>
    <Student task= 'better' isDone={false}></Student>
    <Student task='best'  isDone={true}></Student>
    
     
    </>
  )
}
function Todo(){
  return(
    <div>
      <h1>conditional rendering with react</h1>
      <li>react :</li>
    </div>
  )
}
export default App
