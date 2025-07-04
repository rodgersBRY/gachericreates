import HeroAbout from '@/components/aboutpage/HeroAbout'
import HeroAboutV2 from '@/components/aboutpage/HeroAboutV2'
import ServicesV3 from '@/components/shared/ServicesV3'
import CTA from '@/components/shared/CTA'
import FAQ from '@/components/shared/FAQ'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'About Me | Photographer, Creator & Storyteller',
  description:
    'Discover the story behind the lens. Learn how passion, experience, and creative vision come together in photography that goes beyond the image.',
}

const AboutPage = () => {
  return (
    <>
      <HeroAboutV2 />
      <Video />
      <HeroAbout spacingTop="pt-10 sm:pt-16 md:pt-[100px] mb-10 lg:mb-20" />
      {/* <SkewMarquee /> */}
      <ServicesV3 />
      {/* <TeamGallery /> */}
      {/* <Clients /> */}
      <FAQ />
      <CTA />
    </>
  )
}

export default AboutPage
