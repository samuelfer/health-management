const sections = [
    {
        id: 1,
        title: 'Informe alguns dados básicos',
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
        ],
        checkbox: []
    },
    {
        id: 2,
        title: 'Informe seu Endereço',
        inputText: [
            {
                id:1,
                label: 'Rua',
                placeholder: 'Informe o nome da rua'
            },
            {
                id:2,
                label: 'CEP',
                placeholder: 'Informe seu cep'
            }
        ],
        checkbox: []
    },
    {
        id: 3,
        title: 'Quais planos você possui?',
        inputText: [],
        checkbox: [
            {
                id: 1,
                value: 'Medial saúde'
            },
            {
                id: 2,
                value: 'Unimed'
            }
        ]

    }
]
export { sections }

