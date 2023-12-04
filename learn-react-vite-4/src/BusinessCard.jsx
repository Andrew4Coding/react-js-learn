import './App.css'
import './BusinessCard.css'
import './tail.css'

function AboutContainer({title, description}){
    return<>
        <div className='about-container'>
            <h2>{title}</h2>
            <p className='description'>
                {description}
            </p>
        </div>
    </>
}

function SocialMedia({socialName}){
    return <>
        <button id={socialName}>

        </button>
    </>
}

export default function BusinessCard(){
    return <>
        <div className='card-container'>
            <div className='photo-container'>

            </div>
            <div className='content-container'>
                <div className='name-container'>
                    <h2 className='title'>Andrew Devito Aryo</h2>
                    <p className='subtitle'>Full Stack Developer</p>
                </div>
                <div className='button-container'>
                    <button id='email-button'>
                        Email
                    </button>
                    <button id='linkedin-button'>
                        Linkedin
                    </button>
                </div>
                <div className='description-container'>
                    <AboutContainer title={"About Me"} description={"Lorem Ipsum Dolor Sit Amet"}/>
                    <AboutContainer title={"My Interests"} description={"Lorem Ipsum Dolor Sit Amet"}/>
                </div>
                <div className='social-container'>
                    {[1, 2, 3].map((item) => {
                        return (
                            <SocialMedia socialName={'twitter'}/>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
}
