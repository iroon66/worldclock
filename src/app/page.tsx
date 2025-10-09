import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Screenshots } from '../components/Screenshots';
import { Download } from '../components/Download';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Download />
      </main>
      <Footer />
    </>
  );
}