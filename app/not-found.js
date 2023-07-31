import Link from "next/link";

export default function PageNotFound(){
    return <div className="main"> 
    <div className="notfound">
        <h1>404 Not Found</h1>
        <img src="./404.png"/>
        <Link href='./'><h1>Go Back</h1></Link>
    </div>
    </div>
}