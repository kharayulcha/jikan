import Sidebar from "../components/Sidebar"
import MainDashboardComponent from "../components/MainDashboardComponent"

const MainLayout = () => {
    return (
        <>
      <div style={{height: "100%", width: "100%"}}>
        <Sidebar/>
        <MainDashboardComponent/>
      </div>
    </>
  )
}

export default MainLayout
