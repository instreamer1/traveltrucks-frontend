import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <main>
      <section className={css.hero}>
        <div className={css.container}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.text}>
            You can find everything you want in our catalog
          </h2>
          <button className={css.btn} type="button">View Now</button>
        </div>
      </section>
    </main>
  );
};



export default HomePage;
