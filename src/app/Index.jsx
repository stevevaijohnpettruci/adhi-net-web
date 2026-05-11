import { AppLayout } from "./AppLayout";
import { Home } from "./section/Home";
import { Portfolio } from "./section/Portfolio";
import { Services } from "./section/Services";
import { FAQ } from "./section/FAQ";
import { Contact } from "./section/Contact";
export const Index = () => {
  return (
    <AppLayout>
      <Home />
      <Services />
      <Portfolio />
      <FAQ />
      <Contact/>
    </AppLayout>
  );
};
