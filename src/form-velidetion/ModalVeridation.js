
import * as yup from "yup";


export const ModalVelidation = yup.object({
    title: yup.string().required().min(5),
    description: yup.string().required().min(5),
    assignTo: yup.string(),
    priority : yup.string()
}).required();