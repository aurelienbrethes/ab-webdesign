import H2Title from './UI/H2Title'

interface ISupportCard {
  title: string
  content: string
  supportClass: string
}

const SupportCard = ({ title, supportClass, content }: ISupportCard) => {
  return (
    <div className={`w-1/5 h-40 p-8 bg-red-500 opacity-30 ${supportClass} `}>
      <H2Title title={title} />
      <p>{content}</p>
    </div>
  )
}

export default SupportCard
