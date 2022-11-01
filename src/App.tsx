import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Alert from "./components/layout/Alert"

import Footer from "./components/layout/Footer"
import NavBar from "./components/layout/Navbar"
import { AppStore } from "./context/AppStore"

import About from "./pages/About"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import UserDetail from "./pages/UserDetail"

function App() {
  return (
    <Provider store={AppStore}>
      <BrowserRouter>
        <div className="flex flex-col justify-between h-screen">
          <NavBar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/not_found" element={<PageNotFound />} />
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<UserDetail />} />

              <Route
                path="/"
                element={
                  <>
                    <Alert />
                    <Home />
                  </>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
