import Link from 'next/link'
import styles from '../styles/Navegacao.module.css'

export default function Navegacao(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Fundamentos</h1>

      {
        props.voltar 
        ??
        <Link href="/">
          <span className={styles.linkVoltar}>Voltar</span>
        </Link>
      }
    </div>
  )
}
