import MyInfo from "./MyInfo";
import Objective from "./Objective";
import Photo from "./photo";
import Timeline from "./TimeLine";
import Education from "./Education";

export default function AboutMe() {
  return (
    <>
    <div className="parent">
      <MyInfo />
      <Objective />
      <Photo />
    </div>
      <Timeline />
      <Education />
    </>
  );
}