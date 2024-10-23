

import { Button, Modal } from "flowbite-react";
import { Label, TextInput, Textarea, Select } from "flowbite-react";
import { useState } from "react";
import { MdDescription } from "react-icons/md";


export function TaskModal({ onOpenModal, onCloseModal }) {
    let [data, setData] = useState({
        title : '',
        description : '',
        assignTo : '',
        priority : ''
    })

    
    

    let [errors, seterrors] = useState({
        title : null,
        description : null,
        assignTo : null,
        priority : null   
    })

    let chengHandler = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value,

        })

        seterrors({
            title : null,
            description : null,
            assignTo : null,
            priority : null   
        })

    }


     

    let submitHandler = (event) => {
        event.preventDefault();
        // let title = event.target.querySelector('[name="Title"]').value;
        // console.log(title);

        let error = '';

        if (data.title == "") {
            seterrors({
                ...errors,
                title : 'pleas you have to filling the Title box'
            })
        } 
        else if (data.title.length < 6) {
            seterrors({
                ...errors,
                title : 'pleas you have to right min 6 letter'
            })  
        }
        else if (data.title.length > 20) {
            seterrors({
                ...errors,
                title : 'pleas you have to right max 10 letter'
            })  
        }
        else if (typeof data.title !=  typeof data.title) {
            seterrors({
                ...errors,
                title : 'pleas you have to Type from alphabet'
            })  
        }


        else if (data.description == "") {
            seterrors({
                ...errors,
                description : 'pleas you have to filling the description box'
            })
        }
        else if (data.assignTo == "") {
            seterrors({
                ...errors,
                assignTo : 'pleas you have to filling the assignTo box'
            })
        }
        else if (data.priority == "") {
            seterrors({
                ...errors,
                priority : 'pleas you have to filling the priority box'
            })
        }
        
            
        
    }

    console.log(typeof data.title);


    return (
        <>
            <Modal dismissible show={onOpenModal} onClose={onCloseModal}>
                <Modal.Header>Add New Task</Modal.Header>
                <Modal.Body>
                    <div className=" border p-4 rounded-md">
                        <form className="space-y-4" action=""  onSubmit={submitHandler}>
                            <div>
                                <div className="mb-1 block">
                                    <Label htmlFor="small" value="Title" />
                                </div>
                                <TextInput onChange={chengHandler} name="title" id="Title" type="text" sizing="md" />
                                {errors.title && <span className="text-red-600">{errors.title}</span>}
                            </div>

                            <div className="w-full">
                                <div className="mb-1 block">
                                    <Label htmlFor="comment" value="Description " />
                                </div>
                                <Textarea onChange={chengHandler} name="description" id="Description" rows={3} />
                                {errors.description && <span className="text-red-600">{errors.description}</span>}

                            </div>

                            <div className="sm:flex">
                                <div className="sm:w-2/3 w-full pr-3">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries" value="Assigned To" />
                                    </div>
                                    <Select onChange={chengHandler} name="assignTo" id="parson-one" required>
                                        <option value={'parson-one'}>Parson-one</option>
                                        <option value={'parson-tow'}>Parson-tow</option>
                                        <option value={'parson-three'}>Parson-three</option>
                                    </Select>
                                    {errors.assignTo && <span className="text-red-600">{errors.assignTo}</span>}
    

                                </div>

                                <div className="sm:w-1/3 w-full">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries" value="Priority " />
                                    </div>
                                    <Select onChange={chengHandler} name="priority" id="Priority" required>
                                        <option value={'high'}>high</option>
                                        <option value={'midem'}>mideam</option>
                                        <option value={'low'}>low</option>
                                    </Select>


                                    {errors.priority && <span className="text-red-600">{errors.priority}</span>}


                                </div>

                            </div>
                            <Button type="submit">Add Task</Button>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}


