import { Suspense } from "react";
import Albums from "./Albums";

export default function ArtistPage({ artist }: any) {
  return (
    <>
      {/* <h1>{artist.name}</h1> */}

      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Suspense fallback={<Loading />}>
            <Albums artistId={artist.id} />
          </Suspense>
        </div>
        <div style={{ flex: 1 }}>
          <Suspense fallback={<Loading />}>
            <Albums artistId={artist.id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
