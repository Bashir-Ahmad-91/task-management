
import {TextInput } from "flowbite-react"
import { IoSearch } from "react-icons/io5";


function TaskTableHeader() {
  return (
    <div className="sm:flex justify-between">
        <h2 className="text-2xl text-red-500 font-bold pl-2 pt-2 text-center sm:text-left sm:m-0 mb-3 ">Your Task</h2>
        <div className="max-w-md">
            <TextInput id="email4" type="text" rightIcon={IoSearch}  required />
        </div>
    </div>
  )
}

export default TaskTableHeader