const Btn=(props)=>{
    return(
        <div>
            <button className={props.btn} onClick={props.onClick}>{props.btn_name}</button>
        </div>
    )
}
export default Btn;