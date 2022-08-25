import FoundItem from "./FoundItem";
const FoundList = (props) => {
  return (
    <ul className={" " + props.className}>
      {props.found.map((item) => {
        return <FoundItem item={item} key={item.id}/>;
      })}

      {console.log(props.found)}
    </ul>
  );
};

export default FoundList;
