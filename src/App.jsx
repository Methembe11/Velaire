import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import RevealObserver from './components/RevealObserver'
import { StoreProvider } from './store/StoreContext'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import WorldOfVELAIRE from './pages/WorldOfVELAIRE'
import SearchResults from './pages/SearchResults'
import BagPage from './pages/BagPage'
import AccountPage from './pages/AccountPage'
import WishlistPage from './pages/WishlistPage'
import ContactPage from './pages/ContactPage'
import SustainabilityPage from './pages/SustainabilityPage'
import BoutiquesPage from './pages/BoutiquesPage'
import GiftCardPage from './pages/GiftCardPage'
import LookbookPage from './pages/LookbookPage'
import VELAIREspherePage from './pages/VELAIREspherePage'
import JournalPage from './pages/JournalPage'
import JournalArticlePage from './pages/JournalArticlePage'
import CirclePage from './pages/CirclePage'
import HousePage from './pages/HousePage'
import CraftsmanshipPage from './pages/CraftsmanshipPage'
import NotFound from './pages/NotFound'
import './App.css'

function Layout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-in" element={<CategoryPage />} />
          <Route path="/women" element={<CategoryPage />} />
          <Route path="/men" element={<CategoryPage />} />
          <Route path="/shoes" element={<CategoryPage />} />
          <Route path="/handbags" element={<Navigate to="/new-in" replace />} />
          <Route path="/accessories" element={<Navigate to="/new-in" replace />} />
          <Route path="/beauty" element={<Navigate to="/new-in" replace />} />
          <Route path="/gifts" element={<Navigate to="/new-in" replace />} />
          <Route path="/fragrance" element={<Navigate to="/new-in" replace />} />
          <Route path="/linea-rossa" element={<Navigate to="/new-in" replace />} />
          <Route path="/fine-jewelry" element={<Navigate to="/new-in" replace />} />
          <Route path="/home-living" element={<Navigate to="/new-in" replace />} />
          <Route path="/world-of-velaire" element={<WorldOfVELAIRE />} />
          <Route path="/lookbook" element={<LookbookPage />} />
          <Route path="/velairesphere" element={<VELAIREspherePage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:id" element={<JournalArticlePage />} />
          <Route path="/circle" element={<CirclePage />} />
          <Route path="/boutiques" element={<BoutiquesPage />} />
          <Route path="/gift-card" element={<GiftCardPage />} />
          <Route path="/house" element={<HousePage />} />
          <Route path="/about" element={<Navigate to="/house" replace />} />
          <Route path="/craftsmanship" element={<CraftsmanshipPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/bag" element={<BagPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <StoreProvider>
        <ScrollToTop />
        <RevealObserver />
        <Layout />
      </StoreProvider>
    </HashRouter>
  )
}

export default App
