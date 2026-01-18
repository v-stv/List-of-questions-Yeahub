import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header'

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Main
