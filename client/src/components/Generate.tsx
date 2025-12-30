import AspectRatio from "./AspectRatio"
import Title from "./Title"


const Generate = () => {
  return (
    <div className="flex flex-col gap-6 justify-between border rounded-md px-5 py-4">
      <div><h2 className="text-2xl font-bold mb-2">Create Your Thumbnail </h2>
      <p className="text-gray-400">Describe your vision and let AI bring it to life</p></div>
      
      <div className="flex flex-col mt-7 gap-2"><label >Title or Topic of Thumbnail</label>
      <Title/></div>
      <div className=""><label >Aspect Ratio</label>
      <AspectRatio/></div>
      <div><span>Thumbnail Style</span></div>
      <div><span>Color Scheme</span></div>
      <div className="flex flex-col gap-4"><span>Additional Prompts(optional)</span>
      <textarea className="border rounded-md placeholder:text-center p-3 text-white" placeholder="Enter additional style thumbnail prompt "  rows={3}></textarea></div>
      <button className="bg-pink-500 text-white w-full px-2 rounded-md font-bold text-md md:text-2xl py-3">Generate Thumbnail</button>
      
    </div>
  )
}

export default Generate
