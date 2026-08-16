import HeroCarousel from '../components/HeroCarousel'
import CampaignTiles from '../components/CampaignTiles'
import ProductCarousel from '../components/ProductCarousel'
import { collections, carousels } from '../data/homepage'

export default function HomePage() {
  const newIn = carousels.find((c) => c.id === 'new-in')
  const bestsellers = carousels.find((c) => c.id === 'bestsellers')

  return (
    <>
      <HeroCarousel />
      <div id="collections">
        <CampaignTiles tiles={collections} eyebrow="Explore" title="The Collections" />
      </div>
      <ProductCarousel {...newIn} />
      <ProductCarousel {...bestsellers} />
    </>
  )
}
