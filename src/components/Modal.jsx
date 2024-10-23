

import { Button, Modal } from "flowbite-react";
import { Label, TextInput, Textarea, Select } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ModalVelidation } from "../form-velidetion/ModalVeridation";




export function TaskModal({ onOpenModal, onCloseModal, creatData }) {

  

    const { register, handleSubmit, formState: { errors }, reset, } = useForm({
        resolver: yupResolver(ModalVelidation)
    });

    
    
    const onSubmit = (data) => {
        creatData(data);
        reset();
        onCloseModal()
    }
    return (
        <>
            <Modal dismissible show={onOpenModal} onClose={onCloseModal}>
                <Modal.Header>Add New Task</Modal.Header>
                <Modal.Body>
                    <div className=" border p-4 rounded-md">
                        <form className="space-y-4" action="" onSubmit={handleSubmit(onSubmit)} >
                            <div>
                                <div className="mb-1 block">
                                    <Label htmlFor="small" value="Title" />
                                </div>
                                <TextInput {...register("title",)} id="Title" type="text" sizing="md" />
                                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                            </div>
                            <div className="w-full">
                                <div className="mb-1 block">
                                    <Label htmlFor="comment" value="Description " />
                                </div>
                                <Textarea {...register("description")}  id="Description" rows={3} />
                                {errors.description && <span className="text-red-500">{errors.description.message}</span>}
                               
                               
                            </div>
                            <div className="sm:flex">
                                <div className="sm:w-2/3 w-full pr-3">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries" value="Assigned To" />
                                    </div>
                                    <Select {...register("assignTo")}  id="parson-one" required>
                                        <option value={'parson-one'}>Parson-one</option>
                                        <option value={'parson-tow'}>Parson-tow</option>
                                        <option value={'parson-three'}>Parson-three</option>
                                    </Select>
                                    {errors.assignTo && <span className="text-red-500">{errors.assignTo.message}</span>}

                                </div>
                                <div className="sm:w-1/3 w-full">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries" value="Priority " />
                                    </div>
                                    <Select {...register("priority")} id="Priority" required>
                                        <option value={'high'}>high</option>
                                        <option value={'midem'}>mideam</option>
                                        <option value={'low'}>low</option>
                                    </Select>
                                    {errors.priority && <span className="text-red-500">{errors.priority.message}</span>}

                                </div>
                            </div>
                            <Button  type="submit">Add Task</Button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

