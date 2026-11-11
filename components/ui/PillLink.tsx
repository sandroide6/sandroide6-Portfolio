import Arrow from './Arrow';

type Props = { href: string; children: React.ReactNode; solid?: boolean; external?: boolean; className?: string };

export default function PillLink({ href, children, solid, external, className = '' }: Props) {
  return (
    <a
      href={href}
      className={`pill ${solid ? 'solid' : ''} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <span className="dot">
        <Arrow />
      </span>
    </a>
  );
}
