import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
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
        <HowItWorks />
        <Screenshots />
        <Download />
      </main>
      <Footer />
    </>
  );
}