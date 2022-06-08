import router from 'next/router'

const BackButton = () => {
  return (
    <button
      onClick={() => router.push('/')}
      type="button"
      className="absolute z-50 cursor-pointer"
    >
      Retour
    </button>
  )
}

export default BackButton
