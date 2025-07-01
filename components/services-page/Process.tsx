import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const Process = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <TextAppearAnimation>
          <h3 className="text-appear lg:text[56px] mb-20 text-center max-md:text-3xl md:text-6xl lg:leading-[1.2] lg:tracking-[-1.68px]">
            How do We do it?
          </h3>
        </TextAppearAnimation>

        <RevealWrapper className="relative after:absolute after:-z-10 after:block after:h-[1px] after:w-full after:bg-[#e5e5e5] after:content-[''] dark:after:bg-white/10 max-lg:before:absolute max-lg:before:bottom-[157px] max-lg:before:-z-10 max-lg:before:block max-lg:before:h-[1px] max-lg:before:w-full max-lg:before:bg-[#e5e5e5] max-lg:before:content-[''] dark:max-lg:before:bg-white/10 max-md:bottom-5 max-md:before:bottom-[137px] max-md:after:top-16 md:after:top-[105px]">
          <div className="grid grid-cols-1 items-center justify-between gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <RevealWrapper className="text-center">
              <span className="relative after:absolute after:-bottom-[37px] after:left-[50%] after:z-50 after:h-5 after:w-5 after:-translate-x-[50%] after:rounded-full after:bg-secondary after:content-[''] dark:after:bg-backgroundBody max-md:text-3xl md:text-[64px] md:leading-[1.2] md:tracking-[-1.92px]">
                01
              </span>
              <h3 className="mb-5 mt-16 max-md:text-3xl md:leading-[1.2] md:tracking-[-1.68px] md:text-[56PX]">
                Connect
              </h3>
              <p className="text-base leading-[1.4] tracking-[0.32px]">
                We start with a conversation. You share your vision, goals, and the kind of impact you're looking to
                make.
              </p>
            </RevealWrapper>

            <RevealWrapper className="text-center">
              <span className="relative after:absolute after:-bottom-[37px] after:left-[50%] after:z-10 after:h-5 after:w-5 after:-translate-x-[50%] after:rounded-full after:bg-secondary after:content-[''] dark:after:bg-backgroundBody max-md:text-3xl md:text-[64px] md:leading-[1.2] md:tracking-[-1.92px]">
                02
              </span>
              <h3 className="mb-5 mt-16 max-md:text-3xl md:leading-[1.2] md:tracking-[-1.68px] md:text-[56PX]">Plan</h3>
              <p className="text-base leading-[1.4] tracking-[0.32px]">
                Based on your needs, we build a creative roadmap that best fits your project.{' '}
              </p>
            </RevealWrapper>

            <RevealWrapper className="text-center">
              <span className="relative after:absolute after:-bottom-[37px] after:left-[50%] after:z-10 after:h-5 after:w-5 after:-translate-x-[50%] after:rounded-full after:bg-secondary after:content-[''] dark:after:bg-backgroundBody max-md:text-3xl md:text-[64px] md:leading-[1.2] md:tracking-[-1.92px]">
                03
              </span>
              <h3 className="mb-5 mt-16 max-md:text-3xl md:leading-[1.2] md:tracking-[-1.68px] md:text-[56PX]">
                Create
              </h3>
              <p className="text-base leading-[1.4] tracking-[0.32px]">
                This is where the work begins. Expect a mix of professionalism, flexibility, and creative magic{' '}
              </p>
            </RevealWrapper>

            <RevealWrapper className="text-center">
              <span className="relative after:absolute after:-bottom-[37px] after:left-[50%] after:z-10 after:h-5 after:w-5 after:-translate-x-[50%] after:rounded-full after:bg-secondary after:content-[''] dark:after:bg-backgroundBody max-md:text-3xl md:text-[64px] md:leading-[1.2] md:tracking-[-1.92px]">
                04
              </span>
              <h3 className="mb-5 mt-16 max-md:text-3xl md:leading-[1.2] md:tracking-[-1.68px] md:text-[56PX]">
                Deliver
              </h3>
              <p className="text-base leading-[1.4] tracking-[0.32px]">
                You receive your polished visuals — edited, organized, and ready for use.{' '}
              </p>
            </RevealWrapper>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Process
