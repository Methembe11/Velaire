export const navLinks = [
  {
    label: 'New In',
    to: '/new-in',
    columns: [
      {
        title: 'Womenswear',
        items: ['Clothing', 'Womens Sport', 'Shoes'],
      },
      {
        title: 'Menswear',
        items: ['Clothing', 'Mens Sport', 'Shoes'],
      },
      {
        title: 'The Edit',
        items: ['Bestsellers', 'Trending', 'Limited Edition'],
      },
    ],
    images: [
      { src: '/assets/img/shop/44.jpg', label: 'New Arrivals' },
      { src: '/assets/img/shop/35.jpg', label: 'The Leather Edit' },
      { src: '/assets/img/shop/50.jpg', label: 'Loungewear' },
    ],
  },
  {
    label: 'Womenswear',
    to: '/women',
    columns: [
      {
        title: 'Categories',
        items: ['Clothing', 'Womens Sport', 'Shoes', 'New In'],
      },
      {
        title: 'Featured',
        items: ['Bestsellers', 'Trending'],
      },
    ],
    images: [
      { src: '/assets/img/shop/3.jpg', label: 'Denim' },
      { src: '/assets/img/shop/6.jpg', label: 'Sport' },
      { src: '/assets/img/shop/9.jpg', label: 'Sets' },
    ],
  },
  {
    label: 'Menswear',
    to: '/men',
    columns: [
      {
        title: 'Categories',
        items: ['Clothing', 'Mens Sport', 'Shoes', 'New In'],
      },
      {
        title: 'Featured',
        items: ['Bestsellers', 'Trending'],
      },
    ],
    images: [
      { src: '/assets/img/shop/8.jpg', label: 'Racing Leathers' },
      { src: '/assets/img/shop/16.jpg', label: 'Moto Jackets' },
      { src: '/assets/img/shop/21.jpg', label: 'Sneakers' },
    ],
  },
  {
    label: 'Shoes',
    to: '/shoes',
    columns: [
      {
        title: 'Sneakers',
        items: [{ label: 'View All Sneakers', to: '/shoes' }],
      },
      {
        title: 'The Edit',
        items: [
          { label: 'Womenswear', to: '/women' },
          { label: 'Menswear', to: '/men' },
          { label: 'Sport', to: '/new-in?cat=Mens%20Sport' },
        ],
      },
    ],
    images: [{ src: '/assets/img/shop/21.jpg', label: 'Sneakers' }],
  },
  {
    label: 'The House',
    to: '/house',
    columns: [
      {
        title: 'The House',
        items: [
          { label: 'The House', to: '/house' },
          { label: 'The VELAIREsphere', to: '/world-of-velaire' },
          { label: 'Craftsmanship', to: '/craftsmanship' },
          { label: 'The Journal', to: '/journal' },
          { label: 'Boutiques', to: '/boutiques' },
          { label: 'Sustainability', to: '/sustainability' },
          { label: 'The VELAIRE Circle', to: '/circle' },
        ],
      },
    ],
    images: [
      { src: '/assets/img/home_decor/Home_decor.jpg', label: 'The VELAIREsphere' },
      { src: '/assets/img/snodo/Vienna_red.jpg', label: 'The Colour Stories' },
    ],
  },
]

export const footerLinks = {
  'Customer Care': [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Boutiques & Store Locator', to: '/boutiques' },
    { label: 'Order Status', to: '/bag' },
    { label: 'Gift Cards', to: '/gift-card' },
    { label: 'Shipping & Delivery', to: '/contact' },
    { label: 'Returns & Exchanges', to: '/contact' },
    { label: 'Payment Methods', to: '/contact' },
    { label: 'FAQs', to: '/contact' },
  ],
  Company: [
    { label: 'The House', to: '/house' },
    { label: 'The VELAIRE Circle', to: '/circle' },
    { label: 'Craftsmanship', to: '/craftsmanship' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'The VELAIREsphere', to: '/velairesphere' },
    { label: 'Journal & Newsroom', to: '/journal' },
    { label: 'World of VELAIRE', to: '/velairesphere' },
    { label: 'Careers', to: '/house' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/contact' },
    { label: 'Cookie Policy', to: '/contact' },
    { label: 'Cookie Settings', to: '/contact' },
    { label: 'Legal Notice', to: '/contact' },
    { label: 'Terms & Conditions', to: '/contact' },
    { label: 'Sitemap', to: '/contact' },
  ],
  Social: [
    { label: 'Instagram', to: '/contact' },
    { label: 'Facebook', to: '/contact' },
    { label: 'X', to: '/contact' },
    { label: 'YouTube', to: '/contact' },
    { label: 'Pinterest', to: '/contact' },
    { label: 'Weibo', to: '/contact' },
    { label: 'WeChat', to: '/contact' },
  ],
}

export const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Klarna', 'Apple Pay', 'WeChat Pay']
