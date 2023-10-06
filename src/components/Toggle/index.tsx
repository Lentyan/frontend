import style from './Toggle.module.scss';

export default function Toggle() {
  return (
    <section className={style.toggle}>
      <div className={style.toggle__item}>руб</div>
      <div className={style.toggle__item}>шт/кг</div>
    </section>
  );
}