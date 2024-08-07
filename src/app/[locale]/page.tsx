import { IMAGE } from "@/constants/index";
import Products from "@/components/Home/Products";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BBP Music Library | Bonita Basics Productions Music Library",
  description:
    "About BBPMusicLibrary, Sample Curator, Digital download Sample Packs for Hip Hop, Boom Bap music production",
  openGraph: {
    images: IMAGE.IMAGE_SILHOUETTE,
  },
};

export default function Home({ params }) {
  return <Products params={params} />;
}
