import ArtistPage from "@/components.server/Artist";

export default function App() {
  return (
    <>
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    </>
  );
}
