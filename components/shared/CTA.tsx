import ContactForm from '@/components/shared/ContactForm'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { FC } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import CtaImageSlider from './CtaImageSlider'

interface CTAProps {
  showContactForm?: boolean
  headingClass?: string
  buttonText?: string
}

const CTA: FC<CTAProps> = ({ showContactForm = false, headingClass = '', buttonText = 'Reach Out' }) => {
  return (
    <section className="relative pb-[70px] pt-14 md:pt-16 lg:pb-[140px] lg:pt-[88px] xl:pt-[100px]">
      <div className="container">
        <RevealWrapper>
          <h2
            className={cn(
              'text-center font-normal xl:text-[96px] xl:leading-[1.1] xl:tracking-[-2.88px]',
              headingClass,
            )}>
            Let's chat!
            <CtaImageSlider
              slides={[
                { id: '1', img: '/images/agent/camera.jpg' },
                { id: '2', img: '/images/agent/zebra8.jpg' },
                { id: '3', img: '/images/agent/camera1.jpg' },
              ]}
            />
            with us.
            <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
          </h2>
        </RevealWrapper>
        <RevealWrapper as="ul" className="mt-14 flex list-none items-center justify-center">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>{buttonText}</span>
              </div>
              <div className="rv-button-bottom">
                <span className="whitespace-nowrap">{buttonText}</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
        {showContactForm && <ContactForm />}
      </div>
    </section>
  )
}

export default CTA
