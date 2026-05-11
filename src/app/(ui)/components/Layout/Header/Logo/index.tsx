import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src="/images/logo/soult-it-logo.png"
        alt="logo"
        width={160}
        height={50}
        quality={100}
        className='sm:w-28 w-16'
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
