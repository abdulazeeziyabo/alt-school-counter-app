import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Home.module.css'
console.log(styles)

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to my counter App </h1>
      <div className={styles["home-link"]}>
        <Link
          to='/count'
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "hsl(20.5 90.2% 48.2%)",
          }}
        >
          Go to Counter App
        </Link>
        <Link
          to='*'
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "hsl(20.5 90.2% 48.2%)",
          }}
        >
          PageNotFound
        </Link>
        <Link
          to='/error-test'
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "hsl(20.5 90.2% 48.2%)",
          }}
        >
          Error Testing Page
        </Link>
      </div>
    </div>
  );
}

export default Home