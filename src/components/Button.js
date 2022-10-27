function Button(props){
    const{color, textColor} = props;
    const ButtonStyle = {
        color:textColor,
        backgroundColor:color
    }



    return (
        <button style={ButtonStyle}>Change</button>
    )
}
export default Button;