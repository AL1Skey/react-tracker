import PropTypes from 'prop-types';
import Button from './Button'
//React arrow component
const Header = ({title,onClick,id,parentId}) =>{
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color="#aaaaaa" text="Add" onClick={()=>{onClick(parentId,id)}}/>
            
        </header>
    )
}

Header.defaultProps = {
    title:'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
    onToggle: PropTypes.func
}

export default Header;