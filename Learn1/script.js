function MyApp({name}) {
    const [num, setNum] = React.useState(0)

    function Add(){
        setNum(num + 1)
    }
    function Min(){
        setNum(num - 1)
    }
    function Reset(){
        setNum(0)
    }

    return(
        <div className='mainContainer'>
            <div className='topContainer'>
                <button className='button' onClick={Min}>-</button>
                <h2>{num}</h2>
                <button className='button' onClick={Add}>+</button>
            </div>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}


function HomePage(){
    return <>
        <div>
            <MyApp />
        </div>
    </>
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<HomePage/>);