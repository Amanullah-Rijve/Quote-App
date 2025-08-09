import React from 'react'
import { getQuote } from './API/api'
import { useEffect,useState } from 'react'
import Quote from './components/quote'
import './App.css'

function App() {

  const [quote,setQuote]=useState(null)

  useEffect(()=>{
    getQuote().then(post=>setQuote(post))
  },[])

  
  function handleRefresh(){
    getQuote().then(post=>setQuote(post))
  }

  return (
    <>
      {
        quote?quote.map((e)=>{
          return(
          <Quote 
            key = {e.id}
            quote= {e.quote}
            author= {e.author}
            category = {e.category}
            onRefresh={handleRefresh}
          />)
        }):<p>Loading....</p>
      }
    </>
  )
}

export default App
