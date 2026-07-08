import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import BackgroundSystem from './components/BackgroundSystem';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-[var(--color-text-primary)] relative overflow-x-hidden selection:bg-blue-500/30">
        <BackgroundSystem />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
