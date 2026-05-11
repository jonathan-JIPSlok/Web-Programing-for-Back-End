//Simulando o resultado de uma API
var listaDeEstados = {
    pais: 'Brasil',
    estados: [
        {
            sigla: 'SP',
            nome: 'São Paulo',
            capital: 'São Paulo',
            regiao: 'Sudeste',
            cidades: [
                {
                    "nome":"São Paulo",
                    "id":"3829"
                },
                {
                    "nome":"Adamantina",
                    "id":"3267"
                },
                {
                    "nome":"Campinas",
                    "id":"3809"
                },
                {
                    "nome":"Santos",
                    "id":"3548"
                },
                {
                    "nome":"Sorocaba",
                    "id":"3652"
                }
            ]
        },
        {
            sigla: 'RJ',
            nome: 'Rio de Janeiro',
            capital: 'Rio de Janeiro',
            regiao: 'Sudeste',
            cidades: [
                {
                    "nome":"Rio de Janeiro",
                    "id":"3304"
                },
                {
                    "nome":"Niterói",
                    "id":"3303"
                },
                {
                    "nome":"Duque de Caxias",
                    "id":"3302"
                },
                {
                    "nome":"Nova Iguaçu",
                    "id":"3305"
                }
            ]
        },
        {
            sigla: 'MG',
            nome: 'Minas Gerais',
            capital: 'Belo Horizonte',
            regiao: 'Sudeste',
            cidades: [
                {
                    "nome":"Belo Horizonte",
                    "id":"3106"
                },
                {
                    "nome":"Uberlândia",
                    "id":"3170"
                },
                {
                    "nome":"Contagem",
                    "id":"3112"
                },
                {
                    "nome":"Betim",
                    "id":"3104"
                }
            ]
        },
        {
            sigla: 'ES',
            nome: 'Espírito Santo',
            capital: 'Vitória',
            regiao: 'Sudeste',
            cidades: [
                {
                    "nome":"Vitória",
                    "id":"3205"
                },
                {
                    "nome":"Vila Velha",
                    "id":"3209"
                },
                {
                    "nome":"Serra",
                    "id":"3207"
                },
                {
                    "nome":"Cariacica",
                    "id":"3202"
                }
            ]
        },
        {
            sigla: 'BA',
            nome: 'Bahia',
            capital: 'Salvador',
            regiao: 'Nordeste',
            cidades: [
                {
                    "nome":"Salvador",
                    "id":"2927"
                },
                {
                    "nome":"Feira de Santana",
                    "id":"2910"
                },
                {
                    "nome":"Vitória da Conquista",
                    "id":"2933"
                },
                {
                    "nome":"Ilhéus",
                    "id":"2915"
                }
            ]
        },
        {
            sigla: 'PE',
            nome: 'Pernambuco',
            capital: 'Recife',
            regiao: 'Nordeste',
            cidades: [
                {
                    "nome":"Recife",
                    "id":"2671"
                },
                {
                    "nome":"Jaboatão dos Guararapes",
                    "id":"2670"
                },
                {
                    "nome":"Olinda",
                    "id":"2672"
                },
                {
                    "nome":"Caruaru",
                    "id":"2668"
                }
            ]
        },
        {
            sigla: 'CE',
            nome: 'Ceará',
            capital: 'Fortaleza',
            regiao: 'Nordeste',
            cidades: [
                {
                    "nome":"Fortaleza",
                    "id":"2304"
                },
                {
                    "nome":"Caucaia",
                    "id":"2303"
                },
                {
                    "nome":"Juazeiro do Norte",
                    "id":"2305"
                },
                {
                    "nome":"Maracanaú",
                    "id":"2306"
                }
            ]
        },
        {
            sigla: 'SC',
            nome: 'Santa Catarina',
            capital: 'Florianópolis',
            regiao: 'Sul',
            cidades: [
                {
                    "nome":"Florianópolis",
                    "id":"4203"
                },
                {
                    "nome":"Joinville",
                    "id":"4204"
                },
                {
                    "nome":"Blumenau",
                    "id":"4202"
                },
                {
                    "nome":"Chapecó",
                    "id":"4205"
                }
            ]
        },
        {
            sigla: 'RS',
            nome: 'Rio Grande do Sul',
            capital: 'Porto Alegre',
            regiao: 'Sul',
            cidades: [
                {
                    "nome":"Porto Alegre",
                    "id":"4314"
                },
                {
                    "nome":"Caxias do Sul",
                    "id":"4305"
                },
                {
                    "nome":"Pelotas",
                    "id":"4313"
                },
                {
                    "nome":"Santa Maria",
                    "id":"4316"
                }
            ]
        },
        {
            sigla: 'PR',
            nome: 'Paraná',
            capital: 'Curitiba',
            regiao: 'Sul',
            cidades: [
                {
                    "nome":"Curitiba",
                    "id":"4106"
                },
                {
                    "nome":"Londrina",
                    "id":"4115"
                },
                {
                    "nome":"Maringá",
                    "id":"4120"
                },
                {
                    "nome":"Ponta Grossa",
                    "id":"4129"
                }
            ]
        },
        {
            sigla: 'MT',
            nome: 'Mato Grosso',
            capital: 'Cuiabá',
            regiao: 'Centro-Oeste',
            cidades: [
                {
                    "nome":"Cuiabá",
                    "id":"5003"
                },
                {
                    "nome":"Várzea Grande",
                    "id":"5004"
                },
                {
                    "nome":"Rondonópolis",
                    "id":"5005"
                },
                {
                    "nome":"Sinop",
                    "id":"5006"
                }
            ]
        },
        {
            sigla: 'MS',
            nome: 'Mato Grosso do Sul',
            capital: 'Campo Grande',
            regiao: 'Centro-Oeste',
            cidades: [
                {
                    "nome":"Campo Grande",
                    "id":"5002"
                },
                {
                    "nome":"Dourados",
                    "id":"5003"
                },
                {
                    "nome":"Três Lagoas",
                    "id":"5004"
                },
                {
                    "nome":"Corumbá",
                    "id":"5005"
                }
            ]
        },
        {
            sigla: 'GO',
            nome: 'Goiás',
            capital: 'Goiânia',
            regiao: 'Centro-Oeste',
            cidades: [
                {
                    "nome":"Goiânia",
                    "id":"5103"
                },
                {
                    "nome":"Aparecida de Goiânia",
                    "id":"5102"
                },
                {
                    "nome":"Anápolis",
                    "id":"5104"
                },
                {
                    "nome":"Rio Verde",
                    "id":"5105"
                }
            ]
        },
        {
            sigla: 'DF',
            nome: 'Distrito Federal',
            capital: 'Brasília',
            regiao: 'Centro-Oeste',
            cidades: [
                {
                    "nome":"Brasília",
                    "id":"5300"
                }
            ]
        },
        {
            sigla: 'PA',
            nome: 'Pará',
            capital: 'Belém',
            regiao: 'Norte',
            cidades: [
                {
                    "nome":"Belém",
                    "id":"1505"
                },
                {
                    "nome":"Ananindeua",
                    "id":"1501"
                },
                {
                    "nome":"Santarém",
                    "id":"1506"
                },
                {
                    "nome":"Marabá",
                    "id":"1504"
                }
            ]
        },
        {
            sigla: 'AM',
            nome: 'Amazonas',
            capital: 'Manaus',
            regiao: 'Norte',
            cidades: [
                {
                    "nome":"Manaus",
                    "id":"1302"
                },
                {
                    "nome":"Parintins",
                    "id":"1303"
                },
                {
                    "nome":"Itacoatiara",
                    "id":"1304"
                },
                {
                    "nome":"Coari",
                    "id":"1305"
                }
            ]
        },
        {
            sigla: 'AP',
            nome: 'Amapá',
            capital: 'Macapá',
            regiao: 'Norte',
            cidades: [
                {
                    "nome":"Macapá",
                    "id":"1600"
                },
                {
                    "nome":"Santana",
                    "id":"1601"
                },
                {
                    "nome":"Oiapoque",
                    "id":"1602"
                }
            ]
        },
        {
            sigla: 'RR',
            nome: 'Roraima',
            capital: 'Boa Vista',
            regiao: 'Norte',
            cidades: [
                {
                    "nome":"Boa Vista",
                    "id":"1400"
                },
                {
                    "nome":"Rorainópolis",
                    "id":"1401"
                }
            ]
        },
        {
            sigla: 'TO',
            nome: 'Tocantins',
            capital: 'Palmas',
            regiao: 'Norte',
            cidades: [
                {
                    "nome":"Palmas",
                    "id":"2704"
                },
                {
                    "nome":"Araguaína",
                    "id":"2700"
                },
                {
                    "nome":"Gurupi",
                    "id":"2705"
                }
            ]
        },
        {
            sigla: 'MA',
            nome: 'Maranhão',
            capital: 'São Luís',
            regiao: 'Nordeste',
            cidades: [
                {
                    "nome":"São Luís",
                    "id":"2111"
                },
                {
                    "nome":"Imperatriz",
                    "id":"2109"
                },
                {
                    "nome":"Timon",
                    "id":"2112"
                },
                {
                    "nome":"Caxias",
                    "id":"2108"
                }
            ]
        },
        {
            sigla: 'PI',
            nome: 'Piauí',
            capital: 'Teresina',
            regiao: 'Nordeste',
            cidades: [
                {
                    "nome":"Teresina",
                    "id":"2408"
                },
                {
                    "nome":"Parnaíba",
                    "id":"2409"
                },
                {
                    "nome":"Picos",
                    "id":"2410"
                },
                {
                    "nome":"Oeiras",
                    "id":"2411"
                }
            ]
        },
        {
            sigla: 'RN',
            nome: 'Rio Grande do Norte',
            capital: 'Natal',
            regiao: 'Nordeste',
            cidades: [
                {
                    "nome":"Natal",
                    "id":"2507"
                },
                {
                    "nome":"Mossoró",
                    "id":"2508"
                },
                {
                    "nome":"Parnamirim",
                    "id":"2509"
                },
                {
                    "nome":"Caicó",
                    "id":"2510"
                }
            ]
        },
        {
            sigla: 'PB',
            nome: 'Paraíba',
            capital: 'João Pessoa',
            regiao: 'Nordeste',
            cidades: [
                {
                    "nome":"João Pessoa",
                    "id":"2507"
                },
                {
                    "nome":"Campina Grande",
                    "id":"2508"
                },
                {
                    "nome":"Patos",
                    "id":"2509"
                },
                {
                    "nome":"Sousa",
                    "id":"2510"
                }
            ]
        },
        {
            sigla: 'AL',
            nome: 'Alagoas',
            capital: 'Maceió',
            regiao: 'Nordeste',
            cidades: [
                {
                    "nome":"Maceió",
                    "id":"2704"
                },
                {
                    "nome":"Arapiraca",
                    "id":"2705"
                },
                {
                    "nome":"Rio Largo",
                    "id":"2706"
                },
                {
                    "nome":"Palmeira dos Índios",
                    "id":"2707"
                }
            ]
        },
        {
            sigla: 'SE',
            nome: 'Sergipe',
            capital: 'Aracaju',
            regiao: 'Nordeste',
            cidades: [
                {
                    "nome":"Aracaju",
                    "id":"2801"
                },
                {
                    "nome":"Nossa Senhora do Socorro",
                    "id":"2802"
                },
                {
                    "nome":"Lagarto",
                    "id":"2803"
                },
                {
                    "nome":"São Cristóvão",
                    "id":"2804"
                }
            ]
        },
        {
            sigla: 'AC',
            nome: 'Acre',
            capital: 'Rio Branco',
            regiao: 'Norte',
            cidades: [
                {
                    "nome":"Rio Branco",
                    "id":"1200"
                },
                {
                    "nome":"Cruzeiro do Sul",
                    "id":"1201"
                },
                {
                    "nome":"Tarauacá",
                    "id":"1202"
                }
            ]
        },
        {
            sigla: 'RO',
            nome: 'Rondônia',
            capital: 'Porto Velho',
            regiao: 'Norte',
            cidades: [
                {
                    "nome":"Porto Velho",
                    "id":"1100"
                },
                {
                    "nome":"Ariquemes",
                    "id":"1101"
                },
                {
                    "nome":"Vilhena",
                    "id":"1102"
                },
                {
                    "nome":"Jaru",
                    "id":"1103"
                }
            ]
        }
    ]
};

module.exports = {
    listaDeEstados
}