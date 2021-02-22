

const Header = ({ title }) => {

    return (
        <div>
            <h1>Task Tracker {title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: ""
}

export default Header