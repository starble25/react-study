
function ColorBox( props ) {

    return (
        <div className="box" style={{backgroundColor:props.bgColor}}>
            <button onClick={()=>{
                let temp = [...props.boxes];
                temp.splice(props.idx, 1);
                props.setBoxes(temp);
            }}>X</button>
        </div>
    )
}

export default ColorBox;