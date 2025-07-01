import PricingCard from '@/components/pricingpage/PricingCard'
import CTA from '@/components/shared/CTA'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Pricing',
}

const PricingPage = () => {
  return (
    <>
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
    </>
  )
}

export default PricingPage
