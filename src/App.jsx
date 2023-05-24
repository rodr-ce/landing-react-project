import { BrowserRouter as Router} from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Layout from "./layout/Layout"
import { GlobalStyles } from "./globalStyles/globalStyles"

function App() {
  

  return (
    <Router>
      <Layout>
        <AppRoutes/>
        <GlobalStyles/>
      </Layout>
    </Router>
  )
}

export default App
