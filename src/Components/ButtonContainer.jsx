import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({digits,setCalVal}) => {
      return <>

            <div className={styles.buttonContainer}>
                  {digits.map((digit)=>(
                        <button key ={digit} className={styles.button} onClick={()=> setCalVal(digit)}>{digit}</button>
                  ))}
            </div>

      </>
}
export default ButtonContainer;