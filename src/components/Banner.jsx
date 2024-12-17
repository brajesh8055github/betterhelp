import secure from '../Photos/ssl-secure-bw-logo.png'

const Banner = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 my-4 gap-6">
      <div>
        <p className="text-gray-600 mb-6">If you are in a crisis or any other person may be in danger - do not use this site.<br/>
        These resources can provide you with immediate help.
        </p>
      </div>
      <div>
        <img src={secure} className="w-full h-auto"></img>
      </div>
    </div>
    </div>
  )
}

export default Banner