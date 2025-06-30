import BlogHero from '@/components/blogpage/BlogHero'
import BlogItems from '@/components/blogpage/BlogItems'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Blog-02',
}

export interface Blog2Type {
  slug: string
  content: string
  [key: string]: any
}

const loadedBlogs: Blog2Type[] = getMarkDownData('data/blogs')

const BlogPage02 = () => {
  return (
    <LayoutOne>
      <BlogHero />
      <BlogItems loadedBlogs={loadedBlogs} />
      <CTA />
    </LayoutOne>
  )
}

export default BlogPage02
