import Banner from './Banner/page'
import Card from './Card/page'
import Experiencia from './Experiência/page'
import Menu from './Menu/page'

export default function Home() {
  return (
    <>


      <div className="w-[1440px] h-[2467px] relative bg-slate-600 display: inline-flex">

        
          <Menu />
        

        <div className='ml-96 mt-16'>


          <Banner />

          <div className='mt-16'>
            <Card /></div>

          <div className='mt-16'>
            <Experiencia /></div>

        </div>



      </div>


    </>
  )
}
