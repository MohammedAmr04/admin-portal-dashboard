import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import '@ant-design/v5-patch-for-react-19'

import App from './App.tsx'
import { ReactQueryProvider } from './services/context/ReactQueryProvider.tsx'
import UiProvider from './services/context/UiProvider.tsx'
import { DrawerSiderProvider } from './services/context/DrawerSiderContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <UiProvider>
        <DrawerSiderProvider>
          <App />
        </DrawerSiderProvider>
      </UiProvider>
    </ReactQueryProvider>
  </StrictMode>
)
