import React from 'react'
import styles from "./NotFoundBlock.module.scss"

export default function NotFoundBlock() {
    console.log(styles)
  return (
    <div className={styles.root}  >
        
        <h1 className={styles.title}>
            <span className={styles.smile}>:(</span><br/>
            Ничего не было найдено</h1>
        <p className={styles.description}>К сожаление данная страница не была найдена в нашем интернет магазине</p>
    </div>
  )
}
