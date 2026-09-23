import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/technologies.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load technologies');
        return response.json();
      })
      .then(setTechnologies)
      .catch(() => toast.error('Could not load technologies.'))
      .finally(() => setLoading(false));
  }, []);

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }
    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (technology) => {
    setStack((current) => current.filter((item) => item.id !== technology.id));
    toast.info(`${technology.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (!stack.length) return;
    setStack([]);
    toast.info('All technologies removed from your stack.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <section id="technologies" className="mx-auto max-w-[1248px] px-6 pb-[82px] lg:px-0">
          <div className="mb-[40px]">
            <h2 className="text-[31px] font-extrabold tracking-[-1.2px] text-[#101828]">Explore the <span className="bg-brand-gradient bg-clip-text text-transparent">Technologies</span></h2>
            <p className="mt-[7px] text-[14px] text-[#8795AA]">Pick one technology per category to build your ideal stack.</p>
          </div>

          {loading ? (
            <div className="flex min-h-[600px] items-center justify-center text-sm text-[#8795AA]">Loading technologies...</div>
          ) : (
            <div className="grid items-start gap-[30px] lg:grid-cols-[1fr_284px]">
              <div className="grid gap-[20px] sm:grid-cols-2 xl:grid-cols-3">
                {technologies.map((technology) => (
                  <TechnologyCard key={technology.id} technology={technology} isAdded={stack.some((item) => item.id === technology.id)} onAdd={addToStack} />
                ))}
              </div>
              <YourStack stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
            </div>
          )}
        </section>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={1800} hideProgressBar theme="light" />
    </div>
  );
}
export default App;
