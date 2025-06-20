import MyListItem from './MyListItem'

const MyList = ({ listThese }) => {
  const listMovies = listThese.map(movie =>
    <MyListItem
      key={movie.id}
      listContent={movie.title || movie.name}
      image={movie.image}
    />
  )
  return <div className="flex flex-wrap">{listMovies}</div>
}

export default MyList;
