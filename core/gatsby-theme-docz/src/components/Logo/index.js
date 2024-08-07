/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link, useConfig } from '@ak/docz'

import * as styles from './styles'

export const Logo = () => {
  const config = useConfig()
  return (
    <Flex alignItems="center" sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
        {config.title}
      </Link>
    </Flex>
  )
}
