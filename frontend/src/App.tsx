import Header from "./components/Header"
import SalesCard from "./components/SalesCard";
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
            <div className="git">
            Committed in:
            <a href="https://github.com/CaioZReis/dsmeta">github.com/CaioZReis</a>
          </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
