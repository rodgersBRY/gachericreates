'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
}

const HeroAbout = ({ spacingTop }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3 ref={revealRef} className="reveal-text-2 text-secondary dark:text-backgroundBody">
        GacheriCreates: Every image starts with a story — and every story deserves to be told with clarity and care. I
        believe in photography that informs, inspires, and connects.
      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        Every image starts with a story — and every story deserves to be told with clarity and care. I believe in
        photography that informs, inspires, and connects.
      </h3>
    </RevealWrapper>
  )
}

export default HeroAbout
