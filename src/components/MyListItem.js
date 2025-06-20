

const MyListItem = ({ listContent}) => {
  return (
    <>
      <div className="border m-2 w-50 h-50 flex justify-center justify-items-center">
        {listContent}
      </div>
    </>
  )
}

export default MyListItem
