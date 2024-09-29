import Link from 'next/link';

const HomePage = () => {
  const fruits = ['Apple', 'Mango', 'Orange', 'Banana', 'Grapes'];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-300">
      <h1 className="text-4xl font-bold mb-6 text-white">Fruits List</h1>
      <nav className="mb-4">
        <Link href="/" className="mr-4 text-white">Home</Link>
        <Link href="/about" className="text-white">About</Link>
      </nav>
      <ul className="space-y-2">
        {fruits.map((fruit) => (
          <li key={fruit}>
            <Link href={`/fruits/${fruit.toLowerCase()}`} className="text-yellow-400 text-lg font-semibold underline">
              {fruit}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

