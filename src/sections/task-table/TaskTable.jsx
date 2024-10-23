
import { Button, Table } from "flowbite-react"
import Container from "../../components/Container"
import TaskTableHeader from "./TaskTableHeader"
import TaskItem from "./TaskItem"
import { createPortal } from "react-dom"
import { TaskModal } from "../../components/Modal"
import { useState } from "react"


function EmptyData() {
    return (
        <Table.Row >
            <Table.Cell colSpan={6} className="text-center">No Data Found</Table.Cell>

        </Table.Row>
    )
}


function TaskTable() {
    let [openModal, setOpenModal] = useState(false)
    let [tasks, setTasks] = useState([])

    let creaHandler = (item) => {
        let updateData = [
            ...tasks,
            {
                ...item,
                id: tasks.length + 1
            },
        ]

        setTasks(updateData.reverse())
        
    }

    return (
        <Container >
            <div className="flex sm:justify-end justify-center sm:mt-4 mt-8">
                <Button onClick={() => setOpenModal(true)} className="mr-3" color="failure">Add Task</Button>
                <Button onClick={() => setTasks([])} color="success">Clear Tasks</Button>
            </div>
            <div className=" p-4 border mt-4 rounded-md dark:border-[#666]">
                <TaskTableHeader />

                <div className="overflow-x-auto mt-8">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>#</Table.HeadCell>
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Description</Table.HeadCell>
                            <Table.HeadCell>Assigned To</Table.HeadCell>
                            <Table.HeadCell>Priority </Table.HeadCell>
                            <Table.HeadCell>Action </Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {tasks.length === 0 ? <EmptyData /> : tasks.map((item, index) => <TaskItem data={item} index={index} key={item.id}/>)}




                        </Table.Body>
                    </Table>
                </div>

            </div>
            {createPortal(<TaskModal creatData={creaHandler} onOpenModal={openModal} onCloseModal={() => setOpenModal(false)} />, document.getElementById('modal'))}

        </Container>
    )
}

export default TaskTable