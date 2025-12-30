import { RectangleHorizontal, RectangleVertical, Square } from "lucide-react";

const AspectRatio = () => {
  return (
    <div className="flex gap-5 cursor-pointer">
      <div className="flex items-center gap-1 hover:bg-gray-600 border-gray-400 border rounded-md p-2">
        <RectangleHorizontal />
        <span>16:9</span>
      </div>
      <div className="flex items-center hover:bg-gray-500 gap-1 border-gray-400 border rounded-md p-2">
        <Square />
        <span>1:1</span>
      </div>
      <div className="flex items-center hover:bg-gray-600 gap-1 border-gray-400 border rounded-md p-2">
        <RectangleVertical />
        <span>9:16</span>
      </div>
    </div>
  );
};

export default AspectRatio;
