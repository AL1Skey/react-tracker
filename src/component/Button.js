import PropTypes from 'prop-types'

const Button = ({color,text,onClick,onToggle}) => {

  return (
    <button className={text} 
    onClick={onClick} 
    // style={{backgroundColor:color}}
    onToggle={onToggle}
    >{text}</button>
  )
}


Button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func,
    onToggle:PropTypes.func
}

export default Button