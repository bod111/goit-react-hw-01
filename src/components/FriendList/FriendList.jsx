import FriendListItem from "./FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => {
        return (
          <li className={styles.riendCard} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
