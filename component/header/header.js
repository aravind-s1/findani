'use client'
import { useRouter } from 'next/navigation'
import './header.css'
import { useEffect, useState } from 'react'

export default function Header(){
    const router = useRouter()
    const [searchText,setSearchText] = useState("")
    const change=async(e)=>{
        setSearchText(e.target.value)
    }
    const [play,setPlay] = useState(false)
    const click =()=>{
        play?document.querySelector('.navbar').style = '':document.querySelector('.navbar').style = 'height:200px'
        setPlay(!play)
    }
    useEffect(()=>{setPlay(false)},[])
    return(
        <div className='navbar'>
            <div className="header">
                <div className="logo"><h1>FINDANI</h1></div>
                <div className='menu'><button onClick={click}>
                {
                play?
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                }
                </button></div>
                <div className="searchbar" >
                    <input className='search' placeholder="Search" onChange={change}/>
                    <button onClick={()=>{
                        router.push('/search/'+searchText)
                        setPlay(!play)
                        document.querySelector('.navbar').style = ''
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg></button>
                </div>
            </div>
        </div>
    )
}