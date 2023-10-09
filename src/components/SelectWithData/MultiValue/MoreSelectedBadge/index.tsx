import styles from '../../SelectWithData.module.scss';

interface Props {
  items: string[];
}
export default function MoreSelectedBadge({ items }: Props) {
  const length = items.length;
  const label = `+${length}`;
  return (
    <div className={styles.moreBadge} title={items.join(', ')}>
      {label}
    </div>
  );
}