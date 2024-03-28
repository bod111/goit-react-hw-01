import styles from "./Profile.module.css";
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.avatarImg} src={avatar} alt="User avatar" />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.statistics}>
        {Object.entries(stats).map((stat) => {
          return (
            <li className={styles.statsItem} key={stat[0]}>
              <span className={styles.label}>{stat[0]}</span>
              <span className={styles.quantity}>{stat[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
