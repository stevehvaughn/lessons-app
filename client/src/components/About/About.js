import headerPhoto from './music-bkgd.jpeg'
import headshot from './Headshot3.jpeg'
import './About.css'

const About = () => { 
    return (
        <div>
            <div>
                <h1 className='about-header-text'>About<br/>LessonsApp</h1>
                <img className='about-header-photo' src={headerPhoto} alt="music-background"></img>
            </div>
            <div className='about-div'>
                <h1 className='about-title about-text'>My Story</h1>
                <p className='about-text'>The idea for this app came to me while teaching lessons to my students at the University of Northern Colorado. I remember having teachers that would keep a notebook to track their students' progress in lessons, their assignments, the repertoire they've played, etc. LessonsApp is a tool to move applied studio teaching in higher education into the digital world!</p>
                <h2 className='about-title about-text'>Mission</h2>
                <p className='about-text'>To provide an easy to use tool for applied studio professors in higher education or for freelance lesson instructors to manage their students' progress, and to create a platform where students can easily access lesson materials from their instructors or professors.</p><br/>
                <h1 className='about-title about-text'>The Developer</h1><br/>
                <h2 className='about-text'>Steve Vaughn</h2><br/>
                <img className='developer-photo' src={headshot} alt="steve-vaughn-headshot"></img>
                <p className='about-text'>Steve is a full-stack software engineer and professional musician living in Denver, Colorado. Steve is an adjunct professor at the University of Northern Colorado where he teaches the euphonium studio and uses LessonApp daily! He performs with the Fort Collins Symphony as principal tubist and is a performing artist with the S.E. Shires company. Steve graduated from the Flatiron School with a certificate in Software Engineering in 2021 and is actively searching for jobs while maintaining an active teaching and performing schedule.</p><br/>
                <p className='about-text'>To learn more about Steve, <a className='about-link'href="https://stevehvaughn.medium.com/">check out his blog!</a></p>
            </div>
        </div>
    )
}

export default About
