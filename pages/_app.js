import "../styles/globals.css"


//INTERNAL IMPORT
import { TrackingProvider } from "../Context/TrackingContext";
import { NavBar, Footer, Table } from "../Components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        

          <Component {...pageProps} />
      </TrackingProvider>
      
      
      <Table />
      <NavBar />
      <Footer />
    </>
  );
}
