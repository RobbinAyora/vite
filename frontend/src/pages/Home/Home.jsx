import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ShoeDisplay from '../../components/ShoeDisplay/ShoeDisplay'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'


const Home = () => {

const [category,setCategory] = useState('All')

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <ShoeDisplay category={category}/>
      
      <WhatsAppButton
        phoneNumber="+254729906487"
        message="Hello, I would like to chat with you"
      />
    </div>
  )
}

export default Home
