import { useAppSelector } from "../../../../../../hooks/reduxHooks";
import AddNewHighlight from "./AddNewHighlight";
import MainListItem from "./MainListItem";
import TempListItem from "./TempListItem";

const tempList = [{ id: 1 }, { id: 2 }, { id: 3 }];

const HighlightsList = () => {
  const { highlights } = useAppSelector((store) => store.highlights);

  return (
    <ul className={`flex ${highlights.length > 0 ? "flex-row-reverse justify-end" : ""}`}>
      <AddNewHighlight />
      {highlights.length < 1
        ? tempList.map((list) => {
            return <TempListItem key={list.id} />;
          })
        : highlights.map((highlight) => (
            <MainListItem key={highlight.id} highlight={highlight} />
          ))}
    </ul>
  );
};

export default HighlightsList;
