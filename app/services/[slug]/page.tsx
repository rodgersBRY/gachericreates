import ServiceContent from '@/components/services-page/ServiceContent'
import ServicesHero from '@/components/services-page/ServicesHero'
import CTA from '@/components/shared/CTA'
import FAQ from '@/components/shared/FAQ'
import { ServicesType } from '@/components/shared/ServicesV8'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const services: ServicesType[] = getMarkDownData('data/servicesV3')
  return services.map((service) => ({
    slug: service.slug,
  }))
}

const ServiceDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const service = getMarkDownContent('data/servicesV3/', slug)
  const postServices = service.data

  return (
    <>
      <ServicesHero title={postServices?.title} description={postServices?.description} scale />
      <ServiceContent service={service} />
      {/* <WhyChooseUsV6 /> */}
      <FAQ />
      <CTA />
    </>
  )
}

export default ServiceDetails
