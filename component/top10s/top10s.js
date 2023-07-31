import axios from "axios"
import './style.css'

export default async function topanime(){
    const top10 = await axios.get('https://api.jikan.moe/v4/top/anime?swr=1&limit=10').then((data)=>{
        return data.data.data
    }).catch((error)=>{console.log('erro')})

    const top10p = await axios.get('https://api.jikan.moe/v4/anime?limit=10&order_by=popularity&sort=desc').then((data)=>{
        return data.data.data
    }).catch((error)=>{console.log('erro')})

    return(<>
    <div className="top10">
    <div className='top10tab' id="alltime">
            <h1>Top 10 Anime</h1>
            {top10.map((a,i)=>{return <a href={'/anime/'+a.mal_id}><div className="tab"><img src={a.images.jpg.image_url} width={100} height={160}/><h2 style={{width:300}}>{
                a.title
            }</h2><h2>#{i+1}</h2></div></a>})}
        </div>
        <div className='top10tab' id="pouplar">
            <h1>Top 10 Popular Anime</h1>
            {top10p.map((a,i)=>{return <a href={'/anime/'+a.mal_id}>
                <div className="tab"><img src={a.images.jpg.image_url} width={100} height={160}/><h2 style={{width:300}}>{
                a.title
            }</h2><h2>#{i+1}</h2></div>
            </a>})}
        </div>
    </div>
    </>)
}