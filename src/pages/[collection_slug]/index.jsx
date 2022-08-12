import { useRouter } from "next/router";
import { Layout } from "../../Components/Layout";
import { Grid } from "../../Components/Product/Grid";

export const CollectionLP = ({ gridItems }) => {
  const router = useRouter();
  const { collection_slug, garment_slug } = router.query;

  return (
    <Layout>
      <h1>{collection_slug}</h1>
    </Layout>
  );
};
