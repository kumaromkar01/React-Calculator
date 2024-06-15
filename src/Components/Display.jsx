import styles from "./Display.module.css";
const Display = ({calVal})=>{
      return <input type="text" className={styles.display} value={calVal} placeholder="CALCULATOR"readOnly/>
}
export default Display;