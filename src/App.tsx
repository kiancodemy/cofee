import Hero from "./components/Hero";
import Main from "./components/Main";
import Order from "./components/Order";
import Footer from "./components/Footer";
import Download from "./components/Download";
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero></Hero>
      <Main></Main>
      <Order></Order>

      <Download></Download>
      <Footer></Footer>
    </div>
  );
}
