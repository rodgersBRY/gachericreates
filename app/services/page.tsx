import ServicesV14 from '@/components/homepage-16/ServicesV14'
import Process from '@/components/services-page/Process'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Creative Services | Photography, Content & Visual Strategy',
  description:
    'Explore a range of creative services — from professional photography to storytelling, content creation, and digital strategy — crafted to bring your vision to life.',
}

const ServicesPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Creative Services"
        title="Creative Services"
        italicTitle=""
        scale
        description="Whether you're building a brand, documenting moments, or telling a story that matters, I’m here to help you make it unforgettable"
        spacing="max-md:pt-44 max-sm:pb-10 max-md:pb-16 md:py-44 lg:py-[200px] relative overflow-hidden"
      />
      <ServicesV14 />
      <Process />
      <CTA showContactForm={true} />
    </LayoutOne>
  )
}

export default ServicesPage
