import ServicesV3 from '@/components/shared/ServicesV3'
import AboutV4 from '@/components/homepage/AboutV4'
import HeroV11 from '@/components/homepage/HeroV11'
import ImageMarque from '@/components/homepage/ImageMarque'
import ProjectServices from '@/components/homepage/ProjectServices'
import ClientsV3 from '@/components/shared/ClientsV3'
import CTA from '@/components/shared/CTA'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'GacheriCreates | | Photographer & Visual Storyteller',
  description:
    'Authentic photography and creative storytelling that captures emotion, purpose, and beauty — from the wild to meaningful events. Let’s create visuals that connect',
}

const homepage = () => {
  return (
    <>
      <HeroV11 />
      <AboutV4 />
      <ProjectServices />
      <ClientsV3 />
      <ServicesV3 />
      {/* <Clients /> */}
      {/* <TestimonialV5 /> */}
      <ImageMarque />
      <CTA />
    </>
  )
}

export default homepage
