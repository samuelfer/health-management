import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";

interface TitleProps extends ITextProps {
    children: ReactNode
}

export function TitleBase({ children, ...rest }: TitleProps) {
    return (
        <Text 
            fontSize='xl'
            fontWeight='bold' 
            color='green.800'
            textAlign='center'
            mt={5}
            {...rest}
        >
            {children}
        </Text>
    )
}