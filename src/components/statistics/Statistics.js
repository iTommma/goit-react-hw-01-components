import PropTypes from 'prop-types';
import style from 'components/statistics/Statistics.module.css';
console.log(style);

export const Statistics = ({ title, stats }) => {
  // console.log(title);
  // console.log(stats);
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={style.item}>
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
