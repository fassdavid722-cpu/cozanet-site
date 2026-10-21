import { motion } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

/**
 * Premium masked headline reveal: every word rises out of its own overflow
 * mask with a small stagger — the signature motion of high-end brand sites.
 * Wrapping stays natural (words break across lines) and descenders are not
 * clipped thanks to the padding/negative-margin compensation on the mask.
 * Respects reduced motion via the global MotionConfig in App.
 */
export default function RevealText({
  text,
  className = '',
  delay = 0,
  stagger = 0.045,
  duration = 0.8,
}: RevealTextProps) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </span>
  );
}
