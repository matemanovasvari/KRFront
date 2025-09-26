import { Link } from "react-router-dom"

function Home(){
    return(
        
        <>
            <Link to="/temperature"><button>Hőmérséklet átváltó</button></Link>
            <Link to="/calculator"><button>Számológép</button></Link>
            <Link to="/bmi"><button>BMI kalkulátor</button></Link>
            <Link to="/currency"><button>Pénzváltó</button></Link>
        </>
    )
}
export default Home