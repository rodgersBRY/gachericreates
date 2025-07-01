import CTA from '@/components/shared/CTA'
import PageHero from '@/components/shared/PageHero'
import TermsPolicyBody from '@/components/shared/TermsPolicyBody'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Terms & Conditions',
}
export interface TermsDataType {
  slug: string
  content: string
  [key: string]: any
}

const termsData: TermsDataType[] = getMarkDownData('data/policy')

const FAQPage = () => {
  return (
    <>
      <PageHero title="Terms & " italicTitle="Privacy" badgeTitle="Terms" scale />
      <TermsPolicyBody termsData={termsData} />
      <CTA />
    </>
  )
}

export default FAQPage
