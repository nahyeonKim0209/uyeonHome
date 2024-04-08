import Image from 'next/image';
import bg from '@/images/background.png';

export default function Home() {
  return (
    <main>
      <Image src={bg} alt="main background image" fill={true} object-fit="cover" object-position="top" />
    </main>
  );
}
