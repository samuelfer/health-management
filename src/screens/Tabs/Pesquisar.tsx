import { Avatar, ScrollView, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native";
import { ButtonBase } from "../../components/ButtonBase";
import { InputBase } from "../../components/InputBase";
import { TitleBase } from "../../components/TitleBase";


export default function Pesquisar() {
    return (
        <SafeAreaView>
            <ScrollView p={5} mt={50} mb={5}>
                <VStack w="100%" bg='white' 
                p="5" borderRadius="lg" shadow={2} mb={3}>
                    <TitleBase color="green.500">Pesquisar por especialidade</TitleBase>
                    <VStack flexDirection="row">
                        <VStack pl="4"  w="100%">
                            <InputBase label="" placeholder="Digite a especialidade" /> 
                            <ButtonBase mt={4}>
                            Buscar
                            </ButtonBase>
                        </VStack>
                    </VStack>   
                    </VStack>  
                    <TitleBase color="green.500">Resultado da busca</TitleBase>

                    <VStack w="100%" bg='white' 
                        p="5" borderRadius="lg" shadow={2} mb={5}>
                    
                        <VStack flexDirection="row" alignSelf="center" mt={5}>
                            <Avatar size="lg" source={{uri: "https://github.com/samuelfer.png"}} />
                            <VStack pl="4">
                                <Text fontSize="md" fontWeight="bold">Elaine</Text>
                                <Text>Psicóloga</Text>
                                <Text>14/05/2024</Text>
                            </VStack>
                        </VStack>    
                        <ButtonBase mt={4}>
                            Agendar consulta
                        </ButtonBase>
                    </VStack>
                
                    <VStack w="100%" bg='white' 
                        p="5" borderRadius="lg" shadow={2} mb={5}>
                        
                        <VStack flexDirection="row" alignSelf="center" mt={5}>
                            <Avatar size="lg" source={{uri: "https://github.com/samuelfer.png"}} />
                            <VStack pl="4">
                                <Text fontSize="md" fontWeight="bold">Elaine</Text>
                                <Text>Psicóloga</Text>
                                <Text>14/05/2024</Text>
                            </VStack>
                        </VStack>    
                        <ButtonBase mt={4}>
                            Agendar consulta
                        </ButtonBase>
                    </VStack>
                    <VStack w="100%" bg='white' 
                        p="5" borderRadius="lg" shadow={2} mb={5}>
                        <VStack flexDirection="row" alignSelf="center" mt={5}>
                            <Avatar size="lg" source={{uri: "https://github.com/samuelfer.png"}} />
                            <VStack pl="4">
                                <Text fontSize="md" fontWeight="bold">Elaine</Text>
                                <Text>Psicóloga</Text>
                                <Text>14/05/2024</Text>
                            </VStack>
                        </VStack>    
                        <ButtonBase mt={4}>
                            Agendar consulta
                        </ButtonBase>
                    </VStack>
                    <VStack w="100%" bg='white' 
                        p="5" borderRadius="lg" shadow={2} mb={5}>
                        <VStack flexDirection="row" alignSelf="center" mt={5}>
                            <Avatar size="lg" source={{uri: "https://github.com/samuelfer.png"}} />
                            <VStack pl="4">
                                <Text fontSize="md" fontWeight="bold">Elaine</Text>
                                <Text>Psicóloga</Text>
                                <Text>14/05/2024</Text>
                            </VStack>
                        </VStack>    
                        <ButtonBase mt={4}>
                            Agendar consulta
                        </ButtonBase>
                    </VStack>
                    <VStack w="100%" bg='white' 
                        p="5" borderRadius="lg" shadow={2} mb={5}>
                        <VStack flexDirection="row" alignSelf="center" mt={5}>
                            <Avatar size="lg" source={{uri: "https://github.com/samuelfer.png"}} />
                            <VStack pl="4">
                                <Text fontSize="md" fontWeight="bold">Elaine</Text>
                                <Text>Psicóloga</Text>
                                <Text>14/05/2024</Text>
                            </VStack>
                        </VStack>    
                        <ButtonBase mt={4}>
                            Agendar consulta
                        </ButtonBase>
                    </VStack>
                    <VStack w="100%" bg='white' 
                        p="5" borderRadius="lg" shadow={2} mb={5}>
                        <VStack flexDirection="row" alignSelf="center" mt={5}>
                            <Avatar size="lg" source={{uri: "https://github.com/samuelfer.png"}} />
                            <VStack pl="4">
                                <Text fontSize="md" fontWeight="bold">Elaine</Text>
                                <Text>Psicóloga</Text>
                                <Text>14/05/2024</Text>
                            </VStack>
                        </VStack>    
                        <ButtonBase mt={4}>
                            Agendar consulta
                        </ButtonBase>
                    </VStack>

            </ScrollView>
        </SafeAreaView>
    )
}