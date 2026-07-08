import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Architecture from '../components/Architecture';
import Learning from '../components/Learning';
import Leadership from '../components/Leadership';
import ResumePreview from '../components/ResumePreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="content-layer max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 space-y-32">
        <Hero />
        <About />
        <TechStack />
        <Timeline />
        <Projects />
        <Architecture />
        <Learning />
        <Leadership />
        <ResumePreview />
      </main>
      <Footer />
    </div>
  );
}
