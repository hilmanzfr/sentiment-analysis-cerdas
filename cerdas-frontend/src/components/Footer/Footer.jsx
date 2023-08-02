import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='py-2 text-center text-xs sm:text-sm border-t border-gray-700'>
      Made by{' '}
      <Link href='https://hilmanzfr.com' passHref>
        <span className='text-green-300 hover:underline'>
          Hilmanzfr
        </span>
      </Link>{' '}
      |{' '}
      <Link href='https://github.com/hilmanzfr/sentiment-analysis-cerdas' passHref>
        <span className='text-green-300 hover:underline'>
          GitHub Repo Link
        </span>
      </Link>
    </footer>
  );
}
