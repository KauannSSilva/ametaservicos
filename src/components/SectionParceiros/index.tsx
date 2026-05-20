import styles from './sectionParceiros.module.scss';

export function SectionParceiros() {
  return (
    <section id="servicos" className={styles.parcerias}>
      <h1 className={styles.parceriasTitle}>Nossos Parceiros</h1>

      <p className={styles.parceriasDescription}>
        A Ericsson / Nokia hoje são os nossos maiores clientes e que acreditam em nosso 
        trabalho com qualidade. Através deles prestamos serviços para as 
        maiores redes de telecomunicações do Brasil!
      </p>

      <img 
        src="images/logo-parcerias.png" 
        alt="Parcerias"
        className={styles.parceriasImage}
      />
    </section>
  )
}