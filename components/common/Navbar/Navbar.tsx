import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo, Container } from '@components/ui';
import cn from 'classnames';
import throttle from 'lodash.throttle';
import s from './Navbar.module.css';

const Navbar: FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const offset = 0;
    const { scrollTop } = document.documentElement;
    const scrolled = scrollTop > offset;
    setHasScrolled(scrolled);
  };

  useEffect(() => {
    document.addEventListener('scroll', throttle(handleScroll, 200));
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={cn(s.root, { 'shadow-magical': hasScrolled })}>
      <Container>
        <div className="flex justify-between align-center flex-row">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
