import styles from './page.module.css'
import Topanime from '@/component/top10s/top10s'
export default function Home() {
  return (
    <main className={styles.main}>
    <section id='hero'>
      <div className='top'>
          <div className='box'>
            <div className='herotext'>
            <h1>FINDANI</h1>
            <h2 style={{textAlign:'center'}}>Find, watch, and enjoy the best anime shows and movies from across the world</h2>
            </div>
          <div className='heroban'>
          <img src='./aot.jpg' id='p1' height={200} width={350}/>
          <img src='./r.jpeg'  id='p2' height={200} width={350} />
          </div>
        </div>
      </div>
    </section>
    <section>
    <Topanime />
    </section>
    </main>
  )
}

