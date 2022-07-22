import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import { CustomThemeProvider } from './contexts/theme';
import { HashRouter, Routes, Route } from "react-router-dom"
import Dashboards from './routes/Dashboards'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<React.StrictMode>
<CustomThemeProvider>
              <HashRouter>
                  <Routes>
                    <Route exact path="/" element={<App />} />
                    
                    <Route path="/dashboards" element={<Dashboards />} />
                  </Routes>
              </HashRouter>
              </CustomThemeProvider>
            </React.StrictMode>
);