import Banner from './Banner/page'
import Card from './Card/page'
import Experiencia from './Experiência/page'
import Menu from './Menu/page'

export default function Home() {
  return (
    <>


    <div className="w-[1440px] h-[2467px] relative bg-black display: inline-flex">
      
    <div>
    <Menu />
    </div>

    <div className='m-24'>


    <Banner/> 
    
    <div className='mt-10'>
    <Card /></div>

    <div className='mt-10'>
    <Experiencia /></div>

    </div>



    </div>


    </>
  )
}
