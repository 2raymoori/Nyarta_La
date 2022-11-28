import React from 'react'
import {Route } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'

export default function AppRouter() {
  return (
    <>
        <Route element={<FourOFour />} path="*" />
        <Route element={<Home />} path="/" />
        <Route element={<CompTwo />} path="/two" />
        <Route element={<CompThree />} path="/three" />
        <Route element={<CompThree />} path="/three" />
    </>
  )
}
