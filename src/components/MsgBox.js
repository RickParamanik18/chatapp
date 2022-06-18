const RMsgBox=()=>{
    return(
        <>
            <div className="d-flex justify-content-end my-2">
                <div className="msg bg-warning p-2">msg</div>
            </div>
            <style jsx>{`
                .msg{
                    border-radius:8px;
                    width:300px;
                    position:relative;
                }
            `}</style>
        </>
    )
}

export default RMsgBox