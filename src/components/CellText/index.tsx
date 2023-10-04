import styles from './CellText.module.scss';

interface Props {
  type: string
  children: string | number
  width?: number
  position?: string
}

export default function CellText({ children, type, width, position }: Props) {
  const style = width ? { width: `${width}%` } : {};
  return (
    <div style={style} className={`${styles.cellText} ${type === 'header' ? styles.cellText_type_header : styles.cellText_type_base} ${position && styles.cellText_postiton_right}`}>
      {children}
    </div>
  );
}