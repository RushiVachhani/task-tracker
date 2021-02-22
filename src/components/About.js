import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className='about'>
            <h4 className='version'>
                Version 1.0.0
            </h4>
            <Link to='/' className='goback'>Go Back</Link>
        </div>
    )
}

export default About