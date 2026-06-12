import { Variants } from "framer-motion"

const premiumEase = [0.16, 1, 0.3, 1] as const;
const awwwardsEase = [0.6, 0.01, -0.05, 0.95] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: awwwardsEase } }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } }
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

export const cardHover = {
  rest: { y: 0, boxShadow: 'var(--shadow-md)' },
  hover: { y: -6, boxShadow: 'var(--shadow-xl)', transition: { duration: 0.2 } }
}
