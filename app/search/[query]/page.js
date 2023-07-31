
'use client'

import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import './style.css'


export default function Page({ params }) {
  const [pageDetails,setPageDetails] = useState([])
  const [details,setDetails] = useState([])
  const [start,setStart] = useState(true)
  const [page,setPage] = useState(1)

  const search = async() => {
    axios.get(`https://api.jikan.moe/v4/anime?q=${params.query}&page=${page}&limit=18&&sfw=1`).then((data)=>{
      setStart(false)
      setDetails(data.data.data)
      setPageDetails(data.data.pagination)
  }).catch((error)=>{console.log('erro')})
  }
  const nextpage = async()=>{
    setPage(page+1)
  }
  const prevpage = async()=>{
    setPage(page-1)
  }
  useEffect(()=>{search()},[page])
  return (
    <main className='main'>
    <div className='di'>
      {
        start==true?
        <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:
        details.length!=0?
        <>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <button className='navbtns' onClick={prevpage} disabled={page==1?true:false}>
          {page==1?<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="black" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
          }
          </button>
          <h1 className='pages'>{page} page out of {pageDetails.last_visible_page}</h1>

          <button className='navbtns' onClick={nextpage} disabled={pageDetails.last_visible_page==page?true:false}>
            {pageDetails.last_visible_page!=page?<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="black" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>}
            </button>
        </div>
        <div className='cards'>
          {
          details.map((e)=>{return <Link href={'/anime/'+e.mal_id}><div className='card'>
            <div className='image' style={{backgroundImage:`url('${e.images.jpg.large_image_url}')`,}}></div>
            <h4 className='title'>{e.title.length<=15?e.title:e.title.slice(0,15)+'...'}</h4>
            </div></Link>})
          }
          </div>
        </>:
        <h1>no result found</h1>
      }
    </div>
    </main>
  )
}
