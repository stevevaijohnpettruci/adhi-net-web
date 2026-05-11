import BannerInfo from '../components/ui/BannerInfo';
import { Navbar } from '../components/ui/Navbar';
import { ThemeProvider } from '../context/useTheme';
import { Footer } from './section/Footer';

export const AppLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <BannerInfo />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};
