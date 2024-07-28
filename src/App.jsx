import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-16">
        {" "}
        {/* Header'ın altında boşluk bırakmak için */}
        <AnimatedRoutes />
      </main>
    </Router>
  );
}

export default App;
