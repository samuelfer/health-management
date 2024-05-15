import { Button, ITextProps } from "native-base";
import { ReactNode } from "react";

interface TitleProps extends ITextProps {
    children: ReactNode
}

export function ButtonBase({ children, ...rest }: TitleProps) {
    return (
        <Button
            w='100%'
            bg='green.500'
            mt={10}
            borderRadius='lg'
            {...rest}
        >
        {children}
        </Button>
    )
}