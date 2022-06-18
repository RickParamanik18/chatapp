
import MsgBox from './MsgBox'
import Sendbox from './Sendbox'

const Body = ()=>{
    return (
        <>
        <div className="abc d-flex flex-column justify-content-between">
            <div className="body bg-info p-3">
                
                
                <MsgBox/>
                <MsgBox/>
                <MsgBox/>
            </div>
            <Sendbox/>
        </div>
        <style>{`
            .abc{
                height:90vh
            }
            .body{
                height:75vh;
                overflow:scroll;
            }
        `}</style>
        </>
    )
}

export default Body