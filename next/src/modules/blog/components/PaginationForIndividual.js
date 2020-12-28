const PaginationForIndividual = ({ previousPost, nextPost }) => {
  return (
    <div>
      {/* next post */}
      {nextPost && (
        <div>
          Next Post
        </div>
      )}

      {/* previous post */}
      {previousPost && (
        <div>
          Previous Post
        </div>
      )}
    </div>
  )
}

export { PaginationForIndividual }
