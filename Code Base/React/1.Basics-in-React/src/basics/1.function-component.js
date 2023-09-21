function FunctionComponent(){
    const myStyles = {
        fontSize: '100px',
        color: 'blue'
    }
    
    return (
        // also, style={myStyles}
        <h1 style={{fontSize: '100px', color: 'blue'}}>Hello world!</h1>
    )
}

export default FunctionComponent;