import MyListItem from "./MyListItem";

const MyList = ({listThese}) => {

  const listMovies = listThese.map(movie =>
    <MyListItem key={movie.id} listContent={movie.title} listContentTwo={movie.name}/>
  )

  return (
    <div>
      MyComponent
      {listMovies}
    </div>
  )
}

export default MyList;
