// Note: this component is written using an experimental API
// that's not yet available in stable versions of React.

import { use } from "react";
import { fetchData } from "../util/fetch";

// For a realistic example you can follow today, try a framework
// that's integrated with Suspense, like Relay or Next.js.

export default function Albums({ artistId }: any) {
  const albums = use(fetchData(`/${artistId}/albums`)) as any[];
  return (
    <ul>
      {albums.map((album: any) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
