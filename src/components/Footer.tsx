const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-50 flex items-center justify-between w-full h-10 px-2 sm:px-8">
      <div className="flex items-center">
        <a className="z-50 p-2 text-xs sm:text-sm" href="tel:+330752668535">
          0752668535
        </a>
        <span className="h-4 mx-2 border-l sm:h-5 md:mx-8" />
        <a
          className="z-50 p-2 text-xs cursor-pointer sm:text-sm"
          href="mailto:ab.webdesign.64@gmail.com"
        >
          ab.webdesign.64@gmail.com
        </a>
      </div>
      <p className="hidden text-xs sm:inline-flex sm:text-sm">
        Design et code par Aurélien Brethes
      </p>
    </footer>
  )
}

export default Footer
