import router from 'next/router'

const BackButton = () => {
  return (
    <button
      onClick={() => router.push('/')}
      type="button"
      className="absolute z-50 cursor-pointer top-7 left-8"
    >
      Retour
    </button>
  )
}

export default BackButton
