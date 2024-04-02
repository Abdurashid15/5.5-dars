import { Link } from 'react-router-dom'
import './Zero2.css'
function Zero2() {


  return (
    <>
      <div className='container'>
        <div className="flex items-center mb-4 container mx-auto">
          <input
            id="default-checkbox"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
            Самозанятый
          </label>
        </div>
        <div className="flex items-center container mx-auto mb-11">
          <input
            defaultChecked=""
            id="checked-checkbox"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 text-blue-600 bg-black-100 border-black-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
            Индивидуальный предприниматель
          </label>
        </div>
        <div className="flex items-center container mx-auto mb-11">
          <input
            defaultChecked=""
            id="checked-checkbox"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 text-blue-600 bg-black-100 border-black-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
            Общество с ограниченной ответственностью
          </label>
        </div><div className="flex items-center container mx-auto mb-11">
          <input
            defaultChecked=""
            id="checked-checkbox"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 text-blue-600 bg-black-100 border-black-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
            Акционерное общество
          </label>
        </div><div className="flex items-center container mx-auto mb-11">
          <input
            defaultChecked=""
            id="checked-checkbox"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 text-blue-600 bg-black-100 border-black-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
            Гражданин РФ или стран ЕАЭС (Беларусь, Киргизия, Казахстан, Армения)
          </label>
        </div><div className="flex items-center container mx-auto mb-11">
          <input
            defaultChecked=""
            id="checked-checkbox"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 text-blue-600 bg-black-100 border-black-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
            Иностранный гражданин из стран СНГ (Украина, Молдова, Таджикистан, Узбекистан, Азербайджан)
          </label>
        </div>
        <div className="binput">
          <p>Описание</p>
          <input className='zero2-input' type="number" />
        </div>
        <Link to='Zero3'>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-20'>Следующий шаг</button>
        </Link>
      </div>

    </>
  )
}

export default Zero2
