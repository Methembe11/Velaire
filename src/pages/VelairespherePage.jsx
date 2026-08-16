import Breadcrumbs from '../components/Breadcrumbs'
import ImageTextBlock from '../components/ImageTextBlock'
import ColorStories from '../components/ColorStories'
import SectionHeader from '../components/SectionHeader'
import CampaignTiles from '../components/CampaignTiles'
import { worldOfVELAIRE, colorStories } from '../data/homepage'

const velairesphereTiles = [
  { src: '/assets/img/her/soft_bags.jpg', title: 'Soft Bags', to: '/handbags' },
  { src: '/assets/img/eternal_gold_2/Bow.jpg', title: 'Eternal Gold', to: '/fine-jewelry' },
  { src: '/assets/img/menu/beauty.jpg', title: 'VELAIRE Beauty', to: '/beauty' },
  { src: '/assets/img/home_decor/Home_decor.jpg', title: 'Home & Living', to: '/home-living' },
]

export default function VELAIREspherePage() {
  return (
    <div className="world-page">
      <section className="category-hero">
        <img src="/assets/img/home_decor/Home_decor.jpg" alt="VELAIREsphere" />
        <div className="category-hero-content">
          <p className="hero-eyebrow">VELAIREsphere</p>
          <h1 className="category-hero-title">The VELAIREsphere</h1>
        </div>
      </section>

      <div className="world-body">
        <Breadcrumbs current="VELAIREsphere" />
        <div className="prose intro-block">
          <p>
            The VELAIREsphere is VELAIRE&apos;s own universe — a space where fashion, art, architecture,
            cinema and ideas converge. From the travelling exhibition to the digital archive, it
            tells the story of a house built on curiosity.
          </p>
        </div>

        {worldOfVELAIRE.map((w, i) => (
          <ImageTextBlock
            key={w.title}
            src={w.src}
            eyebrow={w.eyebrow}
            title={w.title}
            text={w.text}
            cta="Explore"
            ctaTo="/world-of-velaire"
            reverse={i % 2 === 1}
          />
        ))}

        <ColorStories items={colorStories} />

        <SectionHeader eyebrow="VELAIREsphere" title="Explore the Worlds" />
        <CampaignTiles tiles={velairesphereTiles} />
      </div>
    </div>
  )
}
