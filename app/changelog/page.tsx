import ChangelogBody from '@/components/changelogPage/ChangelogBody'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

const ChangelogPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Changelog"
        badgeTitle="Changelog"
        description="This page is password protected.
Unlock a world of discovery and secrets within!"
        scale
      />
      <ChangelogBody />
      <CTA />
    </LayoutOne>
  )
}

export default ChangelogPage
