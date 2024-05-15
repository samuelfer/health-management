import { Box, Image, Link, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "../assets/logo.png";
import { ButtonBase } from "../components/ButtonBase";
import { InputBase } from "../components/InputBase";
import { TitleBase } from "../components/TitleBase";

export default function Login({ navigation}) {

    const sections = [
        {
            id: 1,
            title: 'Faça login para acessar',
            inputText: [
                {
                    id:1,
                    label: 'Nome',
                    placeholder: 'Informe seu nome'
                },
                {
                    id:2,
                    label: 'Email',
                    placeholder: 'Informe seu email'
                }
            ]
        }
    ]

    return (
       <VStack flex={1} alignItems="center" justifyContent='center' p={5}>
            <Image source={Logo} alt="Logo" />

            <TitleBase>Faça login para acessar</TitleBase>

            <Box>
                {
                    sections[0].inputText.map(input => {
                        return <InputBase 
                            label={input.label} 
                            placeholder={input.placeholder} key={input.id}
                        />
                    })
                }
            </Box>
            
            <ButtonBase onPress={() => navigation.navigate('Tabs')}>
                Entrar
            </ButtonBase>

            <Link href="#" mt={2}>
                Esqueceu sua senha?
            </Link>

            <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
                <Text>Ainda não possui cadastro?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text color='green.500'>Faça seu cadastro</Text>
                </TouchableOpacity>
            </Box>
       </VStack>
    )
}
  