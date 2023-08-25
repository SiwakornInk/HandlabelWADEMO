import logo from "./../../assets/NULOGO.png";
import styles from "./Header.module.scss";
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <div className={styles.text}>Hand-label Web Application</div>
        <img src={logo} alt="" style={{ width: "45px" }} />
      </div>
    </div>
  );
}
export default Header;
