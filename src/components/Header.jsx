import Image from 'next/image';
import Table from './Table';

export default function Header() {
  return (
    <header className="shadow-md">
      <nav className="naviagation h-120">
        <Image src="/logo.jpg" width={80} height={80} alt="logo" />
        <Table />
      </nav>
    </header>
  );
}
