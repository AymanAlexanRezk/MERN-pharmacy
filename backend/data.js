const data = {
  products: [
    {
      name: 'BOBAI Sunscreen Cream SPF80 50gm',
      slug: 'bobai-sunscreen-cream-spf-80',
      description:
        'Rich Texture, Antioxidant, Invisible Texture, Hypoallergenic',
      category: 'Sunscreen',
      //* Don't use './images/image.jpg' => current folder is changeable.
      imgUrl: '/images/bobai-sunscreen-cream-spf80.png',
      brand: 'Parkville',
      countInStock: 5,
      price: 80,
      rating: 4.9,
      numReviews: 5,
    },
    {
      name: 'MONDO Cream 50gm',
      slug: 'mondo-cream',
      description: 'Topical cream for skin care, repair and protection',
      category: 'Moisturizer',
      imgUrl: '/images/mondo-cream.png',
      brand: 'MACRO',
      countInStock: 5,
      price: 55,
      rating: 4.9,
      numReviews: 5,
    },
    {
      name: 'Macro Panthenol Cream 50gm',
      slug: 'macro-panthenol-cream',
      description: 'Skin cream for softening, repair & protection',
      category: 'Moisturizer',
      imgUrl: '/images/macro-panthenol-cream.png',
      brand: 'MACRO',
      countInStock: 5,
      price: 35,
      rating: 4.9,
      numReviews: 5,
    },
  ],
};

export default data;
