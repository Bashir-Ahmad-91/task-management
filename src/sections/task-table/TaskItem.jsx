import { Table } from "flowbite-react"
import { useState } from "react"
import { createPortal } from "react-dom"
import { TaskModal } from "../../components/Modal"
import { Parmition } from "../../components/Parmition"


function TaskItem(props) {
  let [openModal, setOpenModal] = useState(false)
  const [parmitionModal, setparmitionModal] = useState(false);


  let {id, title, description, assignTo, priority } = props.data

  let editHanler = (task) => {
    props.onEdit(task);
    
  }

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{props.index + 1}</Table.Cell>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>{description}</Table.Cell>
        <Table.Cell>{assignTo}</Table.Cell>
        <Table.Cell>{priority}</Table.Cell>
        <Table.Cell>
          <button onClick={() => setOpenModal(true) } className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3">
            Edit
          </button>
          <button onClick={() => setparmitionModal(true)} className="font-medium text-red-600 hover:underline dark:text-red-600">
          
            Delete
          </button>
        </Table.Cell>

      </Table.Row>

      {createPortal(<TaskModal editToMOdal={props.data} editData={editHanler} onOpenModal={openModal} onCloseModal={() => setOpenModal(false)} />, document.getElementById('modal'))}
        <Parmition parmitionModal={parmitionModal} closeModal={() => setparmitionModal(false)} parmition={() => props.onDelet(id)} />
    </>
  )
}

export default TaskItem