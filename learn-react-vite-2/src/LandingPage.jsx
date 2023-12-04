import './App.css'
import './style/LandingPage.css'
import './style/TicTac.css'
import TicTacToe from './TicTacToe'

import { ReactDOM } from 'react'

function CaraouselItem(){
    return <>
        <div className="caraousel-item">
        </div>
    </>
}

function EducationItem({schoolName, description, id}){
    return <>
        <div className='education-item' id={id}>
            <div className='image-container'>
                
            </div>
            <h2>{schoolName}</h2>
            <p>{description}</p>
        </div>
    </>
}
export default function LandingPage(){
    return <>
        <div className='landing-page-walpaper'>
            <div className='profile'>
                <div className='profile-picture'></div>
                <div className='profile-title'>
                    <h2>Andrew Devito Aryo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
        </div>
        <div className="wrapper">
            <h2 className='subtitles'>Education</h2>
            <div className='education-container'>
                <EducationItem schoolName={'Universitas Indonesia'} description={'Lorem Ipsum Dolor Sit Amet'} id={'ui'}/>
                <EducationItem schoolName={'SMAN 1 Sumbawa Besar'} description={'Lorem Ipsum Dolor Sit Amet'} id={'smanika'}/>
            </div>
            <div className="caraousel-container">
                <CaraouselItem />
                <CaraouselItem />
                <CaraouselItem />
                <CaraouselItem />
            </div>
            <h2 className='subtitles'>Projects</h2>
            <div className='projects-container'>
                <h2>Click Me</h2>
            </div>
        </div>
    </>
}