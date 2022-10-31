import Button from './Button';

function Cat(props) {
    
    // const { name, color, lackOfCommonSense } = props;
  
    const styles = {
        backgroundColor: props.color
    }

    return (
        <>
            <div style={styles}>
                <h2>Hi, iam a cat.</h2>
                <p>My name is {props.name}</p>
                {/* 
                this is using ternary statements which are just short hand conditional statements
                condition ? thing to do if conditionTrue : thing to do if false 
                */}
                {
                    props.lackOfCommonSense ? 
                    <p>I have NO common sense</p>
                    :
                    <p>I do have some common sense</p>
                } 
                <Button color="#eb4034" textColor="#def018"/>
            </div>
        </>
        
    )
} 

export default Cat;