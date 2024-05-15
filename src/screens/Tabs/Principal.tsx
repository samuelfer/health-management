import { Divider, ScrollView, VStack } from "native-base";
import { TitleBase } from "../../components/TitleBase";


export default function Principal() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <TitleBase color="green.500">Home</TitleBase>
               

                <TitleBase color="green.500">Depoimentos</TitleBase>
                

                <Divider mt={5} />

            </VStack>    
        </ScrollView>
    )
}