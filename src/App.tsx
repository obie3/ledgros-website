import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Screens } from '@/components/Screens';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Privacy } from '@/components/Privacy';
import { DeleteAccount } from '@/components/DeleteAccount';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Screens />
        <Services />
        <Pricing />
        <FAQ />
        <Privacy />
        <DeleteAccount />
        <Footer />
      </main>
    </>
  );
}
