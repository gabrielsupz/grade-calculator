import { useContext } from 'react'
import { TabsContext } from '.'

export const useTabs = () => {
  const context = useContext(TabsContext)
  return context
}
