import s from './Favorite.module.css';
const Favorite = (props) => {
  const state = props.InfoFavorite;
  let a = state.map((f) => (
    <>
      <div key={f.id} className={s.Font}>
        <img src={f.img} alt="#" />
        <span>{f.name}</span>
      </div>
    </>
  ));
  return (
    <div className={s.FavoriteNav}>
      <div class={s.Favorite}>
        <div className={s.yourFavorite}>YOUR FAVORITE</div>
        {a}
      </div>
    </div>
  );
};

export default Favorite;
