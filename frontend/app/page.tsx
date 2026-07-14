import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/hero/Hero'
import SmoothScroll from '@/components/common/SmoothScroll'
import FeaturedCards from '@/components/cards/FeaturedCards'
import Faqs from '@/components/common/fags'
import InquiryForm from '@/components/forms/InquiryForm'
import PricingCard from '@/components/cards/PricingCard'
import Testimonials from '@/components/testimonials/Testimonials'

const page = () => {
  return (
    <>
      <SmoothScroll>
        <Navbar/>
        <Hero/>
        <FeaturedCards/>
        <Faqs/>
        <InquiryForm/>
        <PricingCard/>
        <Testimonials/>
        <Footer/>
      </SmoothScroll>
    </>
  )
}

export default page