import Header from "../../components/header/Header";
import Handlabel from "../../pages/handlabel/Handlabel";
import styles from './MainLayout.module.scss'
function MainLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <Handlabel />
      </div>
    </div>
  );
}

export default MainLayout;
