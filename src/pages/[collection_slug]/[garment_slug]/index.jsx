import { useRouter } from "next/dist/client/router";

export const GarmentLP = () => {
  const router = useRouter();
  const { collection_slug, garment_slug } = router.query;

  return (
    <div>
      <h3>{collection_slug}</h3>
      <h3>{garment_slug}</h3>
      <h3>Garment LP</h3>
    </div>
  );
};
