import router from 'next/router'

const BackButton = () => {
  return (
    <button
      onClick={() => router.push('/')}
      type="button"
      className="absolute z-50 text-lg tracking-wide duration-200 cursor-pointer md:text-2xl font-stick-no-bills top-7 hover:translate-x-4 focus:translate-y-2 left-8"
    >
      Retour
    </button>
  )
}

export default BackButton
