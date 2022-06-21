interface IH1Title {
  title: string
}

const H1Title = ({ title }: IH1Title) => {
  return <h1 className="absolute top-8 right-8">{title}</h1>
}

export default H1Title
