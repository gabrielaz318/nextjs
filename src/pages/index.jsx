import Navegacao from '../components/Navegacao'
import Conteudo from '../components/Conteudo'

import styles from '../styles/Inicio.module.css'

export default function Inicio() {
  return (
    <div className={styles.container}>
      <Navegacao voltar={false}/>

      <Conteudo />
    </div>
  )
}
