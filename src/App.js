import "./App.css";
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
// import { GalleryDashboard } from "./pages/GalleryDashboard";
import { Gallery } from "./pages/Gallery";
import { Services } from "./pages/Services";
// import Shop from "./pages/Shop";
import ItemDetails from "./pages/ItemDetails";
import { Contact } from "./components/Contact/Contact";
import About from "./components/About/About";
import { NotFound } from "./pages/NotFound";
import { DashboardServices } from "./Dashboard/DashboardServices";
import ComingSoonPage from "./pages/CommingSoon/Soon";
// import AboutHeader from "./components/About/AboutHeader/AboutHeader";
import Checkout from "./pages/Checkout";
// import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { HomeDashboard } from "./Dashboard/HomeDashboard";
import Error from "./pages/Error";
// ============================ADMIN========================
import AdminShop from "./Dashboard/AdminShop";
import UpdateItem from "./Dashboard/UpdateItem";
import AddItem from "./Dashboard/AddItem";
import UserInfo from "./Dashboard/UserInfo";
import { Orders } from "./Dashboard/Orders";
// import { LogoDev } from "@mui/icons-material";
import LogoSlider from "./components/LogoSlider";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/UpScroller/UpScroller";
function App() {

  const isAdmin = localStorage.getItem("role") === " 7";
  const checkAdminAccess = (element) => {
    return isAdmin ? element : <Navigate to="/" replace />;
  };
  console.log("IsAdmin:", isAdmin);

  return (
    <>
      <ToastContainer />
      {/* <Header / > */}
      <div className="app">
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/shop" element={<ComingSoonPage />} />
          <Route path="shop/:itemID" element={<ItemDetails />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/logo" element={<LogoSlider />} />

          <Route
            path="/dashboard/*"
            element={checkAdminAccess(<HomeDashboard />)}
          />
          <Route path="/dashboard/shop" element={checkAdminAccess(<AdminShop />)} />
          <Route
            path="/adminshop/update/:itemID"
            element={checkAdminAccess(<UpdateItem />)}
          />
          <Route
            path="/adminshop/add"
            element={checkAdminAccess(<AddItem />)}
          />
          <Route path="/dashboard/userinfo" element={checkAdminAccess(<UserInfo />)} />
          <Route path="/dashboard/orders" element={checkAdminAccess(<Orders />)} />


          {/* Fatima */}
          {/* <Route exact path="/dashboard/" element={<Home />} /> */}
          <Route exact path="/dashboard/gallery" element={checkAdminAccess(<Gallery />)} />
          <Route
            exact
            path="/dashboard/services"
            element={<DashboardServices />}
          />
          <Route exact path="/dashboard/about" element={<About />} />
          <Route exact path="/dashboard/contact" element={<Contact />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
