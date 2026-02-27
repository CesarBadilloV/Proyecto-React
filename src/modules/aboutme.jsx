import MyInfo from "./MyInfo";
import Experience from "./Experience";
import Photo from "./photo";

export default function AboutMe() {
  return (
    <>
    <div className="parent">

      <MyInfo />
      <Experience />
      <Photo />
    </div>
    </>
  );
}