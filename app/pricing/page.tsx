import PricingCard from '@/components/homepage-07/PricingCard'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Pricing',
}

const PricingPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Pricing"
        italicTitle="Plan"
        badgeTitle="Pricing"
        description=" There are many variations of available have suffered alteration in some form by
injected words which don't look even slightly believable."
        scale
      />
      <PricingCard />
      <CTA />
    </LayoutOne>
  )
}

export default PricingPage
