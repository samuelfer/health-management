import { Divider, ScrollView } from "native-base";
import { ButtonBase } from "../../components/ButtonBase";
import { CardConsulta } from "../../components/CardConsulta";
import { TitleBase } from "../../components/TitleBase";


export default function Consultas() {
    return (
        <ScrollView p={5}>
            <TitleBase color="green.500">Minhas Consultas</TitleBase>

            <ButtonBase mt={5} mb={5}>Agendar consulta</ButtonBase>

            <TitleBase color="green.500" fontSize="lg" 
             alignSelf="flex-start" mb={2}>Consultas agendadas</TitleBase>
            <CardConsulta 
                name="Elaine Fernandes" 
                especialidade="Psicóloga" 
                image="https://github.com/samuelfer.png"
                data="14/05/2024"
                foiAgendado
            />

            <Divider mt={5}/>

            <TitleBase color="green.500" fontSize="lg" 
             alignSelf="flex-start" mb={2}>Consultas realizadas</TitleBase>
            <CardConsulta 
                name="Elaine Fernandes" 
                especialidade="Psicóloga" 
                image="https://github.com/samuelfer.png"
                data="14/05/2024"
                foiAtendido
            />
            <CardConsulta 
                name="Elaine Fernandes" 
                especialidade="Psicóloga" 
                image="https://github.com/samuelfer.png"
                data="14/05/2024"
                foiAtendido
            />
            <CardConsulta 
                name="Elaine Fernandes" 
                especialidade="Psicóloga" 
                image="https://github.com/samuelfer.png"
                data="14/05/2024"
                foiAtendido
            />
            <CardConsulta 
                name="Elaine Fernandes" 
                especialidade="Psicóloga" 
                image="https://github.com/samuelfer.png"
                data="14/05/2024"
                foiAtendido
            />
        </ScrollView>
    )
}