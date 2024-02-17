import Directory from '../../components/directory/directory.component'

import '../../categories.styles.scss'

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://therake.com/media/legacy_images/wp-content/uploads/2021/03/Cromford-Leather-49.jpg"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://media.cnn.com/api/v1/images/stellar/prod/comfy-shoes-nike-new-lead.jpg"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://n.nordstrommedia.com/id/873a83cd-9cef-487a-88eb-20d884d7c5a6.jpeg"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.pinimg.com/736x/e5/a1/7c/e5a17cd2075c7c979960f2f58f071e9f.jpg"
    }
  ]

  return (
    <Directory categories={categories} />
  )
}

export default Home;
