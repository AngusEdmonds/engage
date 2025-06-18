/* eslint-disable import/default */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import appConfig from '@/configs/app.config'

// ✅ Attach axiosMock synchronously BEFORE React starts
if (appConfig.enableMock) {
    console.log('✅ enableMock is TRUE — loading axiosMock.ts')
    import('@/mock/axiosMock')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
