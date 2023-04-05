import { useState } from "react"
import { Plus } from '../icons/Plus'
import { Minus } from '../icons/Minus'

interface Props {
  heading: string;
  items: {
    title: string;
    content: {
      subcontent: string;
    }[];
  }[];
}


export default function Accordion({ obj }: { obj: Props }) {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded((current) => !current)

  return (
    <div className="w-1/4 mx-auto">
      <div className="bg-white rounded-xl p-10 shadow-sm ">
        <h3 className="text-fs-18 text-gray-800">{obj.heading}</h3>
        <div className="h-1 w-full mx-auto border-b my-5 border-pale"></div>
        {obj.items.map((k) => (
          <div className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white" onClick={toggleExpanded}>
            <div className="px-6 items-center h-20 select-none flex justify-between flex-row">
              <h5 className="flex-1 text-fs-14 text-right">
                {k.title}
              </h5>
              <div className="flex-none pl-2">{expanded ? <Minus /> : <Plus />}</div>
            </div>
            <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-300 ease-in ${expanded ? "max-h-40" : "max-h-0"}`}>
              <div className="pb-4 text-right">
                {k.content.map(v => (<p className="my-4 text-fs-12">{v.subcontent}</p>))}
              </div>
            </div>
          </div>))}
      </div>
    </div>
  )
}
