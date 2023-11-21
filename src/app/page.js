import Image from 'next/image'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Solution from './components/Solution'
import Testimonials from './components/Testimonials'
import RecentBlog from './components/RecentBlog'

export default function Home() {
  return (
    <>
    <Hero/>
    <Stats/>
    <Services/>
    <Solution/>
    <Testimonials/>
    <RecentBlog/>
    </>
  )
}
