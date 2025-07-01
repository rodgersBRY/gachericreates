import BlogContent from '@/components/blogpage/BlogContent'
import CTA from '@/components/shared/CTA'
import PageHero from '@/components/shared/PageHero'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import { Blog2Type } from '../page'

export async function generateStaticParams() {
  const blogs: Blog2Type[] = getMarkDownData('data/blogs')

  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

const BlogDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const blog = getMarkDownContent('data/blogs/', slug)
  const postBlog = blog.data

  return (
    <>
      <PageHero
        badgeTitle="Blog Details"
        title={postBlog.title}
        description={postBlog.description}
        spacing="pt-32 md:pt-44 lg:pt-[200px] pb-10 md:pb-16 lg:pb-[88px] xl:pb-[100px] relative overflow-hidden"
      />
      <BlogContent blog={blog} />
      <CTA />
    </>
  )
}

export default BlogDetails
