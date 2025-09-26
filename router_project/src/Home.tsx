import { Link } from "react-router-dom"

function Home(){
    return(
        
        <>
            <Link to="/temperature"><button>Hőmérséklet átváltó</button></Link>
            <button>Számológép</button>
            <button>BMI kalkulátor</button>
            <button>Pénzváltó</button>
        </>
    )
}
export default Home