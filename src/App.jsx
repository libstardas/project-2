import "./App.css";
import ContactForm from "./Component/ContactForm/ContactForm";
import ContactHader from "./Component/Navigation/ContactHeader/ContactHader";
import Navgtion from "./Component/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navgtion />
      <main className="main_container">
        <ContactHader />
        <ContactForm />
      </main>
    </div>
  );
}
export default App;
