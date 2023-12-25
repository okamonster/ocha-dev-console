import { ReactElement, ReactNode } from 'react'

import styles from './style.module.scss'

type Props = {
  children: ReactNode
}

export const DefaultLayout = ({ children }: Props): ReactElement => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.layout}>{children}</div>
    </div>
  )
}
