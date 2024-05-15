import { FormControl, Input } from "native-base";


export function InputBase({ label, placeholder }) {
    return (
        <FormControl mt={2}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input 
                placeholder={placeholder}
                size='lg'
                w='100%'
                borderRadius='lg'
                bgColor='green.100'
                shadow={3}
            />
        </FormControl>
    )
}