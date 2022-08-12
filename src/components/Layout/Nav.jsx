import Link from "next/link";

import styles from "./_layout.module.sass";

export const Nav = () => {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav-list"]}>
        {navItems.map((item, ind) => (
          <li key={ind}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Collection",
    path: "/collection",
  },
  {
    label: "lookbook",
    path: "/lookbook",
  },
  {
    label: "Story",
    path: "/story",
  },
  {
    label: "Shop",
    path: "/all",
  },
];
