import style from './NotFound.module.scss';
import styleButton from '../Button/Button.module.scss';
import logo from '../../images/NotFoundLogo.svg';
import number from '../../images/4.svg';

export default function NotFound() {
  return (
        <section className={style.notFound}>
            <div className={style.notFound__image}>
                <img src={number} alt='цифра' className={style.notFound__imageItem} />
                <img src={logo} alt='лого' className={style.notFound__imageItem_type_logo} />
                <img src={number} alt='цифра' className={style.notFound__imageItem} />
            </div>
            <h2 className={style.notFound__title}>Кажется, что-то пошло не так</h2>
            <p className={style.notFound__text}> Пожалуйста, перезагрузите страницу или перейдите на основную страницу прогноза</p>
            <button className={`${styleButton.button} ${style.notFound__button}`}>Перейти на прогноз</button>
        </section>
  );
}