import { Button } from '@/components/ui/button';
import React from 'react'

const Home = () => {
  return (
    <div className='mt-9 p-4 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>
        <Button className='text-white-1 bg-orange-1 p-2 hover:transition-opacity hover:cursor-pointer w-20 rounded-full position-center '>Button</Button>
      </section>
    </div>
  )
}

export default Home;