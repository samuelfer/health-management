import { Avatar, Text, VStack } from 'native-base';
import { ButtonBase } from './ButtonBase';

interface CardProps {
    name: string;
    image: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean
}

export function CardConsulta({name, image, data, especialidade, foiAgendado, foiAtendido
    }: CardProps){
    return (
        <VStack w="100%" bg={foiAtendido ? 'green.100' : 'white'} 
            p="5" borderRadius="lg" shadow={2} mb={5}>
            <VStack flexDirection="row">
                <Avatar size="lg" source={{uri:image}} />
                <VStack pl="4">
                    <Text fontSize="md" fontWeight="bold">{name}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>    
            <ButtonBase mt={4}>
                { foiAgendado ? 'Cancelar consulta' : 'Agendar consulta' }
            </ButtonBase>
        </VStack>
    )
}