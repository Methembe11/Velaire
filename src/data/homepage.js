import { products } from './products'

export const heroSlides = [
  {
    id: 'ss26-her',
    type: 'video',
    src: '/assets/video/for_her_2_loop.mp4',
    poster: '/assets/img/her/soft_bags.jpg',
    eyebrow: 'Spring Summer 2026',
    title: 'New Arrivals',
    subtitle: 'Fresh pieces across womenswear and menswear.',
    cta: 'Shop New In',
    ctaTo: '/new-in',
  },
  {
    id: 'ss26-him',
    type: 'video',
    src: '/assets/video/for_him_2_loop.mp4',
    poster: '/assets/img/Speedrock/speedrock_2.jpg',
    eyebrow: 'The Edit',
    title: 'Womenswear',
    subtitle: 'Sport, tailoring and denim.',
    cta: 'Shop Womenswear',
    ctaTo: '/women',
  },
  {
    id: 'menswear',
    type: 'image',
    src: '/assets/img/shop/16.jpg',
    eyebrow: 'The Edit',
    title: 'Menswear',
    subtitle: 'Racing leathers and everyday staples.',
    cta: 'Shop Menswear',
    ctaTo: '/men',
  },
]

export const philosophy = {
  eyebrow: 'The Philosophy',
  title: 'Luxury is not excess. Luxury is intention.',
  lines: [
    'Fewer things, made deliberately.',
    'Quiet over loud.',
    'Lasting over new.',
    'Built slowly. Owned for years.',
  ],
}

export const campaign = [
  { src: '/assets/img/her/soft_bags.jpg', caption: 'Spring / Summer 2026' },
  { src: '/assets/img/Speedrock/speedrock_2.jpg', caption: 'The Soft Collection' },
]

export const featuredCollection = {
  eyebrow: 'The Selection',
  title: 'Featured Collection',
  link: '/handbags',
  productIds: ['soft-bag-checkerboard', 'speedrock-sneaker', 'eternal-gold-bow'],
}

export const collections = [
  { src: '/assets/img/shop/35.jpg', title: 'New In', to: '/new-in', size: 'large' },
  { src: '/assets/img/shop/6.jpg', title: 'Womenswear', to: '/women', size: 'small' },
  { src: '/assets/img/shop/16.jpg', title: 'Menswear', to: '/men', size: 'small' },
  { src: '/assets/img/shop/21.jpg', title: 'Sneakers', to: '/shoes', size: 'small' },
]

export const carousels = [
  {
    id: 'new-in',
    eyebrow: 'Fashion',
    title: 'New In',
    link: '/new-in',
    linkLabel: 'Shop New In',
    productIds: products.filter((p) => p.isNew).slice(0, 10).map((p) => p.id),
  },
  {
    id: 'bestsellers',
    eyebrow: 'The Edit',
    title: 'Bestsellers',
    link: '/new-in?cat=Bestsellers',
    linkLabel: 'Shop Bestsellers',
    productIds: products.filter((p) => p.badge === 'Bestseller').slice(0, 10).map((p) => p.id),
  },
]

export const fragranceCarousel = {
  eyebrow: 'Fragrance',
  title: 'The First Scents',
  link: '/fragrance',
  linkLabel: 'Discover Fragrance',
  productIds: ['velaire-no-1', 'velaire-noir', 'velaire-ambre', 'velaire-vert'],
}

export const colorStories = [
  { src: '/assets/img/snodo/Checkerboard.jpg', label: 'Obsidian' },
  { src: '/assets/img/snodo/Celadon.jpg', label: 'Bone' },
  { src: '/assets/img/snodo/Vienna_green.jpg', label: 'Forest' },
  { src: '/assets/img/snodo/Stripes.jpg', label: 'Stone' },
  { src: '/assets/img/snodo/Vienna_red.jpg', label: 'Silver' },
]

export const worldOfVELAIRE = [
  {
    src: '/assets/img/home_decor/Home_decor.jpg',
    eyebrow: 'The VELAIREsphere',
    title: 'Inside the VELAIREsphere',
    text: 'Where fashion, art and architecture meet.',
  },
  {
    src: '/assets/img/snodo/Vienna_red.jpg',
    eyebrow: 'Materials',
    title: 'The Colour Stories',
    text: 'A restrained palette, worn through the seasons.',
  },
]
