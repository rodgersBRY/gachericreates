import { ProjectsDataType } from '@/components/projectpage-02/PortfolioItems'
import ProjectDetails02BodyContent from '@/components/projectpage-02/ProjectDetails02BodyContent'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'

import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const projects: ProjectsDataType[] = getMarkDownData('data/digital-agency/project')
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const ProjectDetails02 = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const project02 = getMarkDownContent('data/digital-agency/project/', slug)

  return (
    <LayoutOne>
      <ProjectDetails02BodyContent project={project02} />
      <CTA />
    </LayoutOne>
  )
}

export default ProjectDetails02
