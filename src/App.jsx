import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Layout from "./layout/Layout"
import { GlobalStyles } from "./globalStyles/globalStyles"
import store from "./redux/store"
import { Provider } from "react-redux"

function App() {

  return (
    <>

      <GlobalStyles />
      <Provider store={store}>
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </Provider>
    </>
  )
}

export default App
