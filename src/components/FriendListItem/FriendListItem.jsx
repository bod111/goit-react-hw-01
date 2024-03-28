import clsx from "clsx";

import styles from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <img className={styles.icon} src={avatar} alt="Avatar" width="70" />
      <p className={styles.name}>{name}</p>
      {/* Option 1 */}
      {/* {isOnline ? (
        <p className={styles.online}>Online</p>
      ) : (
        <p className={styles.offline}>Offline</p>
      )} */}

      {/* Option 2 */}
      <p
        className={clsx(
          styles.isOnline,
          isOnline ? styles.online : styles.offline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
