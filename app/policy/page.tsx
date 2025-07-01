import CTA from '@/components/shared/CTA'
import PageHero from '@/components/shared/PageHero'
import TermsPolicyBody from '@/components/shared/TermsPolicyBody'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Privacy & Policy',
}
export interface TermsDataType {
  slug: string
  content: string
  [key: string]: any
}

const termsData: TermsDataType[] = getMarkDownData('data/terms')

const FAQPage = () => {
  return (
    <>
      <PageHero title="Privacy & " italicTitle="Policy" badgeTitle="Policy" scale />
      <TermsPolicyBody termsData={termsData} heading={true} />
      <CTA />
    </>
  )
}

export default FAQPage
