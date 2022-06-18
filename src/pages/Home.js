import Body from "../components/Body"
import Result from "../components/Results"
import Topbar from "../components/Topbar"

const Home = ()=>{
    return(
        <>
            <div className="container-fluid"  style={{height:'100vh'}}>
                <div className="row">
                    <div className="left bg-light col-4" style={{height:'100vh'}}>
                        <div className="search mt-3 mb-5">
                            <input className="form-control" type="search" name="search" placeholder="Search"/>
                        </div>
                        <div className="results">
                            <Result/>
                            <Result/>
                            <Result/>
                            <Result/>
                        </div>
                    </div>
                    <div className="right p-0 bg-warning col-8"  style={{height:'100vh'}}>
                        <Topbar/>
                        <Body/>
                    </div>
                </div>
            </div>
            <style jsx>{`
                div{
                    // border:1px solid black;
                }
            `}</style>
        </>
    )
}

export default Home