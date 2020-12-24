const fullWidthImage = (props) => {
  const { alignment, alt, imageUrl, fullWidth, retina } = props.node;
  return (
    <div className={`mb-10 ${fullWidth ? "w-full" : "col-start-4 col-span-6"}`}>
      <img
        src={imageUrl?.url && imageUrl.url}
        className={`${retina && "retina"} ${alignment == 'center' && "mx-auto"}`}
        alt={alt && alt} />
    </div>);
};
export { fullWidthImage };
