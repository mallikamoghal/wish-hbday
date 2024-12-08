import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import './index.css';
    import GhostPage from './pages/GhostPage';
    import StarsTextPage from './pages/StarsPage';
    import CakePage from './pages/CakePage';
    import TextPage from './pages/TextPage';
    import ThankYouPage from './pages/ThankYouPage';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<GhostPage />} />
            <Route path="/stars" element={<StarsTextPage />} />
            <Route path="/cake" element={<CakePage />} />
            <Route path="/text" element={<TextPage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
          </Routes>
        </Router>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));
