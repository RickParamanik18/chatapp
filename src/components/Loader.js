const Loader = ()=>{
    return(
        <>
        <div className="container d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
            <div className="spinner_wrapper d-flex align-items-center justify-content-center">
                <div className="spinner">
                    <div className="inner_spinner"></div>
                    <div className="sq"></div>
                </div>
            </div>
        </div>
        <style>{`
            
            .spinner,.inner_spinner{
                border-radius:50%;
                padding:7px;
                
            }
            .spinner{
               background-color:dodgerblue;
               animation-name: rotate;
               animation-duration: 1s;
               animation-iteration-count:infinite;
               animation-timing-function: linear;
            }
            .inner_spinner{
                background-color:white;
                padding:25px
            }
            .sq{
                position:absolute;
                height:50px;
                width:50px;
                background-color:white;
                transform:rotate(45deg)
            }
            @keyframes rotate {
                from {transform:rotate(0deg);}
                to {transform:rotate(360deg);}
              }
              
        `}</style>
        </>
    )
}

export default Loader