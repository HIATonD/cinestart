import Main from "../components/Main";
import Row from "../components/Row";

import requests from "../api/api";

function Home() {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
}

export default Home;
