import React from 'react'
import { RouterDom } from './router/index'
import { Routes, Route } from 'react-router-dom'

function AppRouter() {
  return (
    <>
        <Routes>
            <Route>
                {RouterDom.map(routes => 
                    <Route
                        path={routes.path}
                        element={routes.element}
                        exact = {routes.exact}
                        key={routes.path}
                    />
                )}
            </Route>
        </Routes>
    </>
  )
}

export default AppRouter