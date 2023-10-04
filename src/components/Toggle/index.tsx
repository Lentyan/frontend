import style from './Toggle.module.scss';

export default function Toggle() {
  console.log('statistics component');
  return (
    <section className={style.toggle}>
      <div className={style.toggle__item}>руб</div>
      <div className={style.toggle__item}>шт/кг</div>
    </section>
  );
}