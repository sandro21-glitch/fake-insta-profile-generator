import AddNewHighlight from "./AddNewHighlight";
import TempListItem from "./TempListItem";

const tempList = [{ id: 1 }, { id: 2 }, { id: 3 }];

const HighlightsList = () => {
  return (
    <ul className="flex justify-between">
      <AddNewHighlight />
      {tempList.map((list) => {
        return <TempListItem key={list.id} />;
      })}
    </ul>
  );
};

export default HighlightsList;
