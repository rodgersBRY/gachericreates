import CTA from '@/components/shared/CTA'
import FAQ from '@/components/shared/FAQ'

export const metadata = {
  title: 'Faq',
}

const FAQPage = () => {
  return (
    <>
      <FAQ bigTitleWithBadge={true} />
      <CTA />
    </>
  )
}

export default FAQPage
