import styles from '../../SelectWithData.module.scss';

export default function MoreSelectedBadge({ items }) {
  const length = items.length;
  const label = `+${length}`;
  return (
    <div className={styles.moreBadge} title={items.join(', ')}>
      {label}
    </div>
  );
}