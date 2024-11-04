import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {

  const location = useLocation()
  console.log(location)

  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="text-5xl font-bold">Home</h1>
        <p>This is home section</p>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
