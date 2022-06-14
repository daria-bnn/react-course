import Book from './Book'

const infoBooks = [
  {
    name: 'JS for beginners',
    year: 2018,
    price: 1000,
  },
  {
    name: 'React for beginners',
    year: 2019,
    price: 1200,
  },
  {
    name: 'Vue for beginners',
    year: 2021,
    price: 1500,
  },
]

const App = () => (
  <div>
    <h1>Hello</h1>
    {infoBooks.map((item) => (
      <Book
        key={item.name}
        name={item.name}
        year={item.year}
        price={item.price}
      />
    ))}
  </div>
)

export default App
