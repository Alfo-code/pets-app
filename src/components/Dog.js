function Dog({dogYears, color, name}) {

    const styles = {
        backgroundColor: color
    }

    function calculateHumanYears(){
        return dogYears * 7
    }
    

    const humanYears = calculateHumanYears(dogYears);


    return (
    <>
        <div style={styles}>
            <h2>I am {name},</h2>
            <p>I am {dogYears}, but {humanYears} in human years!</p>
        </div>
    </>
    )
    
} 

export default Dog;