import ChangelogBody from '@/components/changelogPage/ChangelogBody'
import PageHero from '@/components/shared/PageHero'

const ChangelogPage = () => {
  return (
    <>
      <PageHero
        title="Changelog"
        badgeTitle="Changelog"
        description="This page is password protected.
Unlock a world of discovery and secrets within!"
        scale
      />
      <ChangelogBody />
      {/* <CTA /> */}
    </>
  )
}

export default ChangelogPage
