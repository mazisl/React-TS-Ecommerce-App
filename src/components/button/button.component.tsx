import './button.styles.scss'

//we hav to create default, inverted and google-sign-in button types
const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherInputProps}) => {
  return (
    <button 
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} 
      {...otherInputProps}
    >
      {children}
    </button>
  )
}

export default Button;