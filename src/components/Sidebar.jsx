const Sidebar = () => {
  return (
    <div style={{width: "30%", height: "100vh"}}>
      <ul style={{display: "flex", flexDirection: "column", gap: "4px"}}>
        <li>
            <a href="/dashboard">Landing</a>
            <a href="/dashboard/home">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/Blog">Blog</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
