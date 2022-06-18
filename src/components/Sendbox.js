const Sendbox = ()=>{
    return(
        <div className=" ps-5 pb-2 pe-2">
            <form className="d-flex">
            <textarea className="form-control me-2" placeholder="Text here"></textarea>
            <input type="submit" value="send" className="btn btn-secondary"/>
            </form>
        </div>
    )
}

export default Sendbox