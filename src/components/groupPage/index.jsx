import React from "react";
import { CoursesList } from "../../utils/courses";
import CardSubject from "../genericComponents/cardSubject";
import StatusBar from "../genericComponents/statusBar";
import { ContentCourse, GroupDiv } from "./style";

const GroupPage = () => {
  return (
    <div>
      <StatusBar />
      <GroupDiv>
        <div className="header">
          <h1>Guruhlar</h1>
          <p>Oktabr, 27</p>
        </div>
        <div className="below__header">
            <div>
                <h1>7</h1>
                <p>Faol Guruhlar</p>
            </div>
            <div>
                <h1>2</h1>
                <p>Tugatdan guruh</p>
            </div>
            <div>
                <h1>9</h1>
                <p>Umumiy guruh</p>
            </div>
        </div>
        <ContentCourse>
        {CoursesList.map(item=>(
            <CardSubject key={item?.id} data={item}/>
            ))}
        </ContentCourse>
      </GroupDiv>
    </div>
  );
};
export default GroupPage;
