import { Box, Checkbox, Image, ScrollView, Text } from "native-base";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { ButtonBase } from "../components/ButtonBase";
import { InputBase } from "../components/InputBase";
import { TitleBase } from "../components/TitleBase";
import { sections } from "../utils/createUserField";

export default function FormUser() {

    
    const [numSection, setNumSection] = useState(0);

    function nextSection() {
        if (numSection < sections.length - 1) {
            setNumSection(numSection + 1);
        }
    }

    function previousSection() {
        if (numSection > 0) {
            setNumSection(numSection - 1);
        }
    }

    return (
       <ScrollView flex={1} p={5}>
            <Image source={Logo} alt="Logo" alignSelf="center" />

            <TitleBase>{sections[numSection].title}</TitleBase>

            <Box>
                <Text fontWeight="bold" fontSize="md" mt={2} mb={2}>Selecione o plano:</Text>
                {
                    sections[numSection].inputText.map(input => {
                        return <InputBase 
                            label={input.label} 
                            placeholder={input.placeholder} key={input.id}
                        />
                    })
                }

            </Box>
            <Box>
                {
                    sections[numSection].checkbox.map(checkbox => {
                        return <Checkbox 
                            key={checkbox.id} 
                            value={checkbox.value}
                        >{checkbox.value}
                        </Checkbox>
                    })
                }

            </Box>
            {
                numSection > 0 && <ButtonBase onPress={() => previousSection()} bgColor='gray.400'>
                Voltar
                </ButtonBase>
            }
            
            <ButtonBase onPress={() => nextSection()} mt={4} mb={20}>
                Avançar
            </ButtonBase>

       </ScrollView>
    )
}
  