import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './views/Home';
import Curriculum from './views/Curriculum';
import Recruit from './views/Recruit';
import FAQ from './views/Faq';
import AppContainer from './style';

const App = () => {
  return (
    <AppContainer>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
