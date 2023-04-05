import Accordion from "../common/accordion/Accordion"


const obj = {
  heading: 'دسته بندی',
  items: [
    { title: 'تست های خانگی', content: [{ subcontent: 'تست های اعتیاد' }, { subcontent: 'تست های بارداری' }] },
  ]
}

export default function library() {
  return (
    <>
      <Accordion obj={obj} />
    </>
  )
}
