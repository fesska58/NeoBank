import { Navigate, Route, Routes } from 'react-router-dom'
import LoanPage from '../../pages/LoanPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/credit-card" replace />} />

            <Route path="/credit-card" element={<LoanPage />} />

            <Route
                path="*"
                element={<div>404. Page not found</div>}
            />
        </Routes>
    )
}

export default AppRouter