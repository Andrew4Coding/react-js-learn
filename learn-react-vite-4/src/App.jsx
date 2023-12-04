import { useState } from 'react'
import './App.css'
import Carousel from "react-multi-carousel";
import BusinessCard from './BusinessCard';
import "react-multi-carousel/lib/styles.css";

import { TiArrowDownThick } from "react-icons/ti";
import { TiArrowUpThick } from "react-icons/ti";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const list = [
  {nama: 'Dasar-dasar Pemrograman 1', age: 16, id: 1},
  {nama: 'Pengantar Sistem Digital', age: 17, id: 2},
  {nama: 'Kalkulus 1', age: 18, id: 3},
  {nama: 'MPK Agama', age: 19, id: 4},
  {nama: 'Matematika Diskret 1', age: 20, id: 5},
]

function CaraouselItem({item}){
  return <>
    <div className='caraousel-item'>
      {item.nama + item.age}
    </div>
  </>
}

function DropDown(){
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  function clickItem(props){
    document.getElementById('drop-button').classList.toggle('active')
    document.getElementById('arrow').classList.toggle('arrow-active')
    
    setOpen(!open)
    // console.log(props)
    setIndex(props - 1)
  }

  function openDropDown(){
    document.getElementById('drop-button').classList.toggle('active')
    document.getElementById('arrow').classList.toggle('arrow-active')
    setOpen(!open)
  }
  return <>
    <div className='dropdown-container'>
      <div className='dropdown-item-container'>
        <div className='dropdown-header'>
          <p>{list[index].nama}</p>
          <button className='drop-button' onClick={openDropDown} id='drop-button'>
            <TiArrowDownThick className='arrow' id='arrow'/>
          </button>
        </div>

        {open && 
        <div className='dropdown-content'>
          <ul>
            {list.map((item) => {
              return (
                <li key={item.id} className='dropdown-content-item' onClick={() => clickItem(item.id)}><p>{item.id}. {item.nama}</p></li>
              )
            })}
          </ul>
        </div>}
        
      </div>
    </div>
  </>
}

function App() {
  const [hover, setHover] = useState(false)
  return (
    <>
    <div className='caraousel-container' >
      <Carousel responsive={responsive}>
        {list.map((item) => {
          return (
            <CaraouselItem item={item} key={item.nama}/>
          )
        })}

      </Carousel>
    </div>
    <div className='pop-container' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {hover && (
      <div className='blur-container'>
        Hello World, Explore Hello World
      </div>
      )}
    </div>
    <DropDown />
    <BusinessCard />
    </>
  )
}

export default App
