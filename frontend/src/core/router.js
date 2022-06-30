import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Error404 } from '../pages/Error404'
import { Screenshot } from '../pages/Screenshot'

const RouterApp = () => (
  <Router basename='/beatiful-screenshot'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/image' element={<Screenshot />} />
      <Route path='/*' element={<Error404 />} />
    </Routes>
  </Router>
)

export { RouterApp }
