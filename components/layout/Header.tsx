import { profile } from '@/lib/content';
import Logo from '@/components/ui/Logo';
import PillLink from '@/components/ui/PillLink';

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="logo" href="#inicio" aria-label={`${profile.brand}, inicio`}>
          <Logo />
          {profile.brandUpper}
        </a>
        <PillLink href="#contacto">Hablemos</PillLink>
      </div>
    </header>
  );
}
