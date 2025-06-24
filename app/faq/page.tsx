import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'Faq',
}

const FAQPage = () => {
  return (
    <LayoutOne>
      <FAQ bigTitleWithBadge={true} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/camera.jpg' },
            { id: '2', img: '/images/agent/zebra8.jpg' },
            { id: '3', img: '/images/agent/camera1.jpg' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default FAQPage
