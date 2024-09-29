import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-yellow-300">
      <h1 className="text-4xl font-bold mb-6 text-white">About Us</h1>
      <nav className="mb-4">
        <Link href="/" className="mr-4 text-white">Home</Link>
        <Link href="/about" className="text-white">About</Link>
      </nav>
      <p className="text-lg text-white">This project demonstrates dynamic routing in Next.js.</p>
    </div>
  );
};

export default AboutPage;
