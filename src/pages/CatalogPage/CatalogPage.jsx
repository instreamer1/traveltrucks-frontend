import css from './CatalogPage.module.css'
import CarSection from '../../components/CarSection/CarSection';
import SaidBar from '../../components/SaidBar/SaidBar';

const CatalogPage = () => {
  return (
    <main className={css.catalogPage}>
        <div className={css.container}>
      <SaidBar />
      <CarSection />
      </div>
    </main>
  );
};

export default CatalogPage;
