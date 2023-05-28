import Main from "../components/Main";
import Row from "../components/Row";
import Footer from "../components/Footer";

import requests from "../api/api";

function Home() {
  return (
    <>
      <Main />
      <Row rowId="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowId="2" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowId="3" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowId="4" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowId="5" title="Horror" fetchURL={requests.requestHorror} />
      <Footer />
    </>
  );
}

export default Home;
