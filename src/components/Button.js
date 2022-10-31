import { useState } from "react";

function Button(props){
    const{color, textColor} = props;
    const ButtonStyle = {
        color:textColor,
        backgroundColor:color
    }

    function Change(){
        const [color, textColor] = useState('');
    }



    return (
        <button onClick={() =>{
            textColor(color);
        }} style={ButtonStyle}>Change</button>
    )
}
export default Button;