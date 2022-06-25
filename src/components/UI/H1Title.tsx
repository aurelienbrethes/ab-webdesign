interface IH1Title {
  title: string
}

const H1Title = ({ title }: IH1Title) => {
  return (
    <h1 className="absolute px-3 text-lg font-bold transition md:text-2xl right-3 top-8 sm:right-8 sm:px-5 md:px-10 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0">
      {title}
    </h1>
  )
}

export default H1Title
