import PropTypes from 'prop-types'

import Button from './button'

const Header = ({ title }) => {

    const onClick = (event) => {
        console.log(event);
    }

    return (
        <div className="header">
            <h1>Task Tracker {title}</h1>
            <Button color='green' text='Add' onCLick={onClick}/>
        </div>
    )
}

Header.defaultProps = {
    title: ""
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}   

export default Header