import Image from "next/image";
import Link from "next/link";

export const Card = ({ key, name }) => {
  return (
    <div key={key}>
      <Link href="/">
        <Image src="/vercel.svg" alt="Vercel Logo" width={400} height={800} />
        <h3>{name}</h3>
      </Link>
    </div>
  );
};
