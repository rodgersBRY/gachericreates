import ContactForm from '@/components/contactpage/ContactForm'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Contact | Let’s Work Together',
  description:
    'Have a project in mind? Reach out to collaborate on photography, content, or creative direction. I’d love to hear from you',
}

const ContactPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Let's Work Together"
        badgeTitle="Contact"
        description="Whether it’s photography, content creation, or creative direction — I’d love to hear from you."
        scale
        spacing="pt-[130px] md:pt-[180px] pb-20 sm:pb-32 md:pb-36 lg:pb-36 xl:pb-[100px] relative overflow-hidden"
      />
      <ContactForm />
      <CTA />
    </LayoutOne>
  )
}

export default ContactPage
