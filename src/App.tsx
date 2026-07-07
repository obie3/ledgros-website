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
  // Lightweight path routing — Google Play requires privacy policy and
  // account-deletion pages at dedicated URLs (no #fragments).
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/privacy' || path === '/delete-account') {
    return (
      <>
        <Nav />
        <main>{path === '/privacy' ? <Privacy /> : <DeleteAccount />}</main>
        <Footer />
      </>
    );
  }

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
      </main>
      <Footer />
    </>
  );
}
