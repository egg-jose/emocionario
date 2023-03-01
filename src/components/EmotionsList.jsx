import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import emotionsList from "../assets/emotions";
import EmotionBubble from "./EmotionBubble";
import SearchParamContext from "../context/SearchParamContext";

const EmotionsList = () => {
  const [filteredList, setFilteredList] = useState(emotionsList);
  const [searchParam] = useContext(SearchParamContext);
  useEffect(() => {
    const newList = emotionsList.filter((emotion) =>
      emotion.name.toLowerCase().includes(searchParam.toLowerCase())
    );
    setFilteredList(newList);
  }, [searchParam]);

  return (
    <div className="card-container">
      {filteredList.map((emotion, index) => (
        <EmotionBubble
          name={emotion.name}
          logo={emotion.logo}
          description={emotion.description}
          even={index % 2 == 0}
          imageReference={emotion.imageReference}
          key={uuidv4()}
        />
      ))}
    </div>
  );
};

export default EmotionsList;
