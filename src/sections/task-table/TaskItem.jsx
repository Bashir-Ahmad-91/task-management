import { Table } from "flowbite-react"


function TaskItem(props) {
  let {title, description, assignTo, priority} = props.data
  
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{props.index + 1}</Table.Cell>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>{description}</Table.Cell>
        <Table.Cell>{assignTo}</Table.Cell>
        <Table.Cell>{priority}</Table.Cell>
        <Table.Cell>
            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3">
                Edit
            </a>
            <a href="#" className="font-medium text-red-600 hover:underline dark:text-red-600">
            Delete
            </a>
        </Table.Cell>

    </Table.Row>
  )
}

export default TaskItem