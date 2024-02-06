import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Layout from "./layout/Layout"
import { GlobalStyles } from "./globalStyles/globalStyles"

import { Provider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
