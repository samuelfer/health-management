import { FormControl, Input } from "native-base";

interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
  }

export function InputBase({ label, placeholder, secureTextEntry = false }: InputProps) : JSX.Element  {
    return (
        <FormControl mt={2}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input 
                placeholder={placeholder}
                size='lg'
                w='100%'
                borderRadius='lg'
                bgColor='green.100'
                secureTextEntry={secureTextEntry}
                shadow={3}
            />
        </FormControl>
    )
}