import React, {
  ComponentRef,
  MouseEvent,
  useCallback,
  useRef,
  useState,
} from "react";

import PrismaZoom from "react-prismazoom";
import { Link } from "react-router-dom";
// import witcherMap from "../assets/Witcherx4.jpeg";
import witcherMapt9 from "../assets/WitcherMapX4T9.jpg";
import "./Map.css";

const Map = () => {
  const prismaZoom = useRef(PrismaZoom);
  const zoomCounterRef = useRef(HTMLSpanElement);
  console.log(prismaZoom);
  // const [allowZoom, setAllowZoom] = useState(true);
  // const [allowPan, setAllowPan] = useState(true);

  const onZoomChange = useCallback((zoom) => {
    if (!zoomCounterRef.current) return;
    zoomCounterRef.current.innerText = `${Math.round(zoom * 100)}%`;
  }, []);

  return (
    <>
      <div className="map-global">
        <PrismaZoom
          className="map-zoom"
          onZoomChange={onZoomChange}
          maxZoom={8}
          minZoom={1}
          ref={prismaZoom}
        >
          <img
            src={witcherMapt9}
            className="map-image"
            style={{
              backgroundImage: `url(${witcherMapt9})`,
              height: "100vh",
              width: "100vw",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="map-point">
            {" "}
            <Link
              to="/cities/poulet"
              style={{ textDecoration: "none", color: "white" }}
            >
              poulet
            </Link>
          </div>
          <div className="map-point2">
            <Link
              to="/regions/cintra"
              style={{ textDecoration: "none", color: "white" }}
            >
              Cintra
            </Link>
          </div>
          {/* <div className="map-image">
            <div className="map-point">poulet</div>
            <div className="map-point2">Cintra</div>
          </div> */}

          {/* <article className="App-card" onDoubleClick={onDoubleClickOnCard}>
            <header className="App-cardHeader">
              <h3>The Raft of the Medusa</h3>
              <span>Théodore Géricault</span>
            </header>
            <p>
              The Raft of the Medusa (French: Le Radeau de la Méduse) –
              originally titled Scène de Naufrage (Shipwreck Scene) – is an oil
              painting of 1818–19 by the French Romantic painter and
              lithographer Théodore Géricault (1791–1824). Completed when the
              artist was 27, the work has become an icon of French Romanticism.
            </p>
            <p>
              <a
                href="https://en.wikipedia.org/wiki/The_Raft_of_the_Medusa"
                target="_blank"
                rel="noreferrer"
              >
                Go to Wikipedia.
              </a>
            </p>
            <footer>
              <strong>Tip: </strong>double-click on this card to zoom. 😉
            </footer>
          </article> */}
        </PrismaZoom>
      </div>
    </>
  );
};
export default Map;
