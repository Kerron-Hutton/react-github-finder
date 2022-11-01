import spinner from "./assets/loading.gif"

export default function LoadingSpinner() {
  return (
    <div>
      <img
        className="text-center mx-auto"
        alt="Loading..."
        src={spinner}
        width={180}
      />
    </div>
  )
}
