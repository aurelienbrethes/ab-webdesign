interface IH2Title {
  title: string
  className?: string
}

const H2Title = ({ title, className }: IH2Title) => {
  return <h2 className={`${className} text-lg`}>{title}</h2>
}

export default H2Title
