

const Blockquote = (props) => {
  const { node: { type } } = props
  console.log(type);
  // console.log(props.node.type);
  return (
    <blockquote className="font-modern text-2xl text-center">

    </blockquote>
  )
};
export { Blockquote };
