import { Avatar, Divider, ScrollView, Text, VStack } from "native-base";
import { TitleBase } from "../../components/TitleBase";


export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <TitleBase color="green.500">Meu Perfil</TitleBase>
                <Avatar size="xl" source={{uri:"https://github.com/samuelfer.png"}} mt={5} />

                <TitleBase color="green.500">Informações pessoais</TitleBase>
                <TitleBase fontSize="lg" mt={1}>Samuel Fernandes dos Santos</TitleBase>
                <Text>04/02/1987</Text>
                <Text>Paraíba</Text>

                <Divider mt={5} />

                <TitleBase color="green.500">Histórico médico</TitleBase>
                <Text>Dor de cabeça</Text>
                <Text>Preguiça</Text>
            </VStack>    
        </ScrollView>
    )
}