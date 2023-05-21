import "../styles/globals.css"


//INTERNAL IMPORT
import { TrackingProvider } from "../Context/TrackingContext";
import { NavBar, Footer, Table } from "../Components";
import { TrackingContext } from "../Context/TrackingContext";
import { useContext } from "react";
export default function App({ Component, pageProps }) {
  
  return (
    <>
      <TrackingProvider>
        <NavBar />

          <Component {...pageProps} />
      </TrackingProvider>
      
      
      
      <Footer />
    </>
  );
}
