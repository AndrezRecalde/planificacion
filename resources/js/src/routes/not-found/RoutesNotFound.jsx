import { Route, Routes } from "react-router-dom"
import { ErrorNotFound } from "../../pages"

export const RoutesNotFound = () => {
  return (
    <Routes>
        { children }
        <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  )
}
