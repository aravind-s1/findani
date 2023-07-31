
'use client'

import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './style.css'
import Link from 'next/link'

export default function Page({ params }) {
  const [animeDetails,setAnimeDetails] = useState([])
  const [animeCharDetails,setAnimeCharDetails] = useState([])
  const [boolChar,setBoolChar] = useState(true)
  const [boolStre,setBoolStre] = useState(false)
  const [boolExtr,setBoolExtr] = useState(false)
  const [start,setStart] = useState(true)

  const changeChar = () =>{
    setBoolChar(true)
    setBoolStre(false)
    setBoolExtr(false)
  }
  const changeStre = () =>{
    setBoolChar(false)
    setBoolStre(true)
    setBoolExtr(false)
  }
  const changeExtr = () =>{
    setBoolChar(false)
    setBoolStre(false)
    setBoolExtr(true)
  }

  const search = async() => {
    axios.get(`https://api.jikan.moe/v4/anime/${params.id}/full`).then((data)=>{
      setAnimeDetails(data.data.data)
      setStart(false)
  }).catch((error)=>{console.log('erro')})
  axios.get(`https://api.jikan.moe/v4/anime/${params.id}/characters`).then((data)=>{
      setAnimeCharDetails(data.data.data)
  }).catch((error)=>{console.log('erro')})

  }
  useEffect(()=>{search()},[])
  return (
    <main className='main'>
    <div>
      {
        start==true?
        <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:
        <>
        <div>
          <div className='maincard'>
            <div className='left'>
            <img 
            className='bannerimage'
            src={animeDetails.images.jpg.large_image_url} 
            height={500}
            width={360}
            />
            <div className='content'>
              <h1>{animeDetails.title}</h1>
              <p>{animeDetails.synopsis}</p>
              <p>{animeDetails.background}</p>
            </div>
            </div>
            <div className='right'>
            <div className='info'>
              <h2>Statistics</h2>
              <h3>Type : {animeDetails.type}</h3>
              <h3>Year : {animeDetails.year}</h3>
              <h3>Duration : {animeDetails.duration}</h3>
              <h3>Rating : {animeDetails.rating}</h3>
              <h3>Score : {animeDetails.score} /10</h3>
              <h3>Rank : {animeDetails.rank}</h3>
              <h3>Aired : {animeDetails.aired.string}</h3>
              <h3>Status : {animeDetails.status}</h3>
            </div>
            <div className='yt_embd'>
            <iframe width="350" height="250"
            src={animeDetails.trailer.embed_url}>
            </iframe>
            </div>
            </div>
          </div>
          <div className='bottom'>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
              <button className='opts' onClick={changeChar} id={boolChar?'active':''}><h2>Characters</h2></button>
              <button className='opts' onClick={changeStre} id={boolStre?'active':''}><h2>Stream Links</h2></button>
              <button className='opts' onClick={changeExtr} id={boolExtr?'active':''}><h2>Stream Links</h2></button>
            </div>
            <div className='charcards' id={boolChar?'':'inactive'}>
            {
              animeCharDetails.length==0?<h1>loading</h1>:
              animeCharDetails.map((e)=>{
                return <Link href={e.character.url}><div className='charcard'><img className='charimg' src={e.character.images.jpg.image_url.split('?')[0].slice(-3)=='gif'?"https://curatedceramics.com/wp-content/uploads/2017/10/blank-profile-picture.jpg":e.character.images.jpg.image_url}/><h4>{e.character.name.length<15?e.character.name:e.character.name.slice(0,13)+'...'}</h4></div></Link>
              })
            }
            </div>
            <div className='stream' id={boolStre?'':'inactive'}>
            {
              animeDetails.streaming.map((l)=>{
                return <a href={l.url}><div className='streamcard'><h1>{l.name}</h1></div></a>
              })
            }
            </div>
            <div className='stream' id={boolStre?'':'inactive'}>
            {
              animeDetails.external.map((l)=>{
                return <a href={l.url}><div className='streamcard'><h1>{l.name}</h1></div></a>
              })
            }
            </div>
          </div>
          </div>
        </>
      }
    </div>
    </main>
  )
}
