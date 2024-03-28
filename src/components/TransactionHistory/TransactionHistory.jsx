import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={styles.transactionsTable}>
      <thead>
        <tr className={styles.head}>
          <th className={styles.headElement}>Type</th>
          <th className={styles.headElement}>Amount</th>
          <th className={styles.headElement}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr className={styles.transactionRow} key={id}>
              <td className={styles.rowElement}>{type}</td>
              <td className={styles.rowElement}>{amount}</td>
              <td className={styles.rowElement}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
