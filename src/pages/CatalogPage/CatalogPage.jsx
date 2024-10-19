import css from './CatalogPage.module.css';
import CampersList from '../../components/CampersList/CampersList';
import SaidBar from '../../components/SaidBar/SaidBar';


const CatalogPage = () => {
// 

  return (
    <main className={css.catalogPage}>
      <div className={css.container}>
        <SaidBar />
        <CampersList />
      </div>
    </main>
  );
};

export default CatalogPage;
