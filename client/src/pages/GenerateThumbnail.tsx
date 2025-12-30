import Generate from "../components/Generate";
import Preview from "../components/Preview";

const GenerateThumbnail = () => {
  return (
    <>
      <div className="pt-24 m-4  grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <Generate />
        </div>
        <div className="">
          <Preview />
        </div>
      </div>
    </>
  );
};

export default GenerateThumbnail;
