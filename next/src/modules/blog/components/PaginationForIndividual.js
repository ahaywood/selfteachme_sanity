const PaginationForIndividual = ({ blogPagination }) => {
  return (
    <div className="flex">
      {/* next post */}
      {blogPagination?.nextPost && (
        <div className="flex-1">
          Next Post
        </div>
      )}

      {/* previous post */}
      {blogPagination?.previousPost && (
        <div className="flex-1">
          Previous Post
        </div>
      )}
    </div>
  )
}

export { PaginationForIndividual }
