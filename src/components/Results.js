const Result = ()=>{
    return (
        <>
            <div className="item p-2">
                <div className="d-flex justify-content-between">
                    <div className="pic" style={{height:'65px',width:'65px',borderRadius:'50%'}}>
                        <img src="data:image/jpeg;base64,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" 
                        alt="Not available" style={{height:'100%',width:'100%',borderRadius:'50%'}} />
                    </div>
                    <div className="">
                        <div className="h6">Name</div>
                        <p className="">Description</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .item:hover{
                    background-color:aqua;
                }
                .item{
                    border-top:.5px solid gray;
                    border-bottom:.5px solid gray;
                }
            `}</style>
        </>
    )
}

export default Result