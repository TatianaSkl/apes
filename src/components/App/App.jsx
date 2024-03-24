import { ToastContainer } from 'react-toastify';
import { About, Arts, ContactUs, FAQ, Footer, Header, Hero, MindMap } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MindMap />
        <FAQ />
        <Arts />
        <ContactUs />
      </main>
      <Footer />
      <ToastContainer autoClose={2500} />
    </>
  );
};
