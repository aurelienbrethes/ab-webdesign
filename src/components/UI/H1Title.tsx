interface IH1Title {
  title: string
}

const H1Title = ({ title }: IH1Title) => {
  return (
    <h1 className="absolute text-lg font-bold md:text-2xl top-8 right-8">
      {title}
    </h1>
  )
}

export default H1Title
