import { SparklesIcon } from '@heroicons/react/24/solid'

const SparklesIconClick = () => {
  alert('SparklesIcon Clicked!');
}

function MySparklesIcon() {
  return (
    <div onClick={SparklesIconClick}>
      <SparklesIcon className="h-12 w-12 p-3 text-white" />
    </div>
  )
}

export default MySparklesIcon;