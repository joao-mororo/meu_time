const teams = [
    {
        "team": {
            "id": 120,
            "name": "Botafogo",
            "code": "BOT",
            "country": "Brazil",
            "founded": 1904,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/120.png"
        },
        "venue": {
            "id": 218,
            "name": "Estádio Nilton Santos",
            "address": "Rua Arquias Cordeiro, Engenho de Dentro",
            "city": "Rio de Janeiro",
            "capacity": 46931,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/218.png"
        }
    },
    {
        "team": {
            "id": 133,
            "name": "Vasco DA Gama",
            "code": "VAS",
            "country": "Brazil",
            "founded": 1898,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/133.png"
        },
        "venue": {
            "id": 19377,
            "name": "Estádio São Januário",
            "address": "Rua Gal Almério de Moura 131, Bairro Vasco da Gama",
            "city": "Rio de Janeiro, Rio de Janeiro",
            "capacity": 24584,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/19377.png"
        }
    },
    {
        "team": {
            "id": 135,
            "name": "Cruzeiro",
            "code": "CRU",
            "country": "Brazil",
            "founded": 1921,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/135.png"
        },
        "venue": {
            "id": 234,
            "name": "Estádio Governador Magalhães Pinto",
            "address": "Avenida Antonio Abrahão Carã 1001, Pampulhas",
            "city": "Belo Horizonte, Minas Gerais",
            "capacity": 62170,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/234.png"
        }
    },
    {
        "team": {
            "id": 136,
            "name": "Vitoria",
            "code": "VIT",
            "country": "Brazil",
            "founded": 1899,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/136.png"
        },
        "venue": {
            "id": 281,
            "name": "Estádio Manoel Barradas",
            "address": "Rua Artêmio Castro Valente 1, Bairro Nossa Senhora da Vitória",
            "city": "Salvador, Bahia",
            "capacity": 35980,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/281.png"
        }
    },
    {
        "team": {
            "id": 138,
            "name": "Guarani Campinas",
            "code": "GUA",
            "country": "Brazil",
            "founded": 1911,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/138.png"
        },
        "venue": {
            "id": 242,
            "name": "Estádio Brinco de Ouro da Princesa",
            "address": "Avenida Imperatriz Tereza Cristina 11, Bairro Jardim Paraíso",
            "city": "Campinas, São Paulo",
            "capacity": 29130,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/242.png"
        }
    },
    {
        "team": {
            "id": 139,
            "name": "Ponte Preta",
            "code": "PON",
            "country": "Brazil",
            "founded": 1900,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/139.png"
        },
        "venue": {
            "id": 261,
            "name": "Estádio Moisés Lucarelli",
            "address": "Praça Dr. Francisco Ursaia 1900 / Rua Proença, Jardim Proença",
            "city": "Campinas, São Paulo",
            "capacity": 17728,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/261.png"
        }
    },
    {
        "team": {
            "id": 141,
            "name": "Brasil DE Pelotas",
            "code": "GEB",
            "country": "Brazil",
            "founded": 1911,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/141.png"
        },
        "venue": {
            "id": 2797,
            "name": "Estádio Bento da Silva Freitas",
            "address": "Rua João Pessoa 694, Bairro Centro",
            "city": "Pelotas, Rio Grande do Sul",
            "capacity": 18000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/2797.png"
        }
    },
    {
        "team": {
            "id": 142,
            "name": "Vila Nova",
            "code": "VIL",
            "country": "Brazil",
            "founded": 1943,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/142.png"
        },
        "venue": {
            "id": 280,
            "name": "Estádio Onésio Brasileiro Alvarenga",
            "address": "Rua 256 354, Setor Universitário, Bairro Centro",
            "city": "Goiânia, Goiás",
            "capacity": 11788,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/280.png"
        }
    },
    {
        "team": {
            "id": 145,
            "name": "Avai",
            "code": "AVA",
            "country": "Brazil",
            "founded": 1923,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/145.png"
        },
        "venue": {
            "id": 214,
            "name": "Estádio Aderbal Ramos da Silva",
            "address": "Avenida Deputado Diomício Freitas 1000, Bairro Carianos",
            "city": "Florianópolis, Santa Catarina",
            "capacity": 19000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/214.png"
        }
    },
    {
        "team": {
            "id": 146,
            "name": "CRB",
            "code": "CRB",
            "country": "Brazil",
            "founded": 1912,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/146.png"
        },
        "venue": {
            "id": 232,
            "name": "Estádio Rei Pelé",
            "address": "Avenida Siqueira Campos, Bairro Trapiche da Barra",
            "city": "Maceió, Alagoas",
            "capacity": 20801,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/232.png"
        }
    },
    {
        "team": {
            "id": 147,
            "name": "Coritiba",
            "code": "COR",
            "country": "Brazil",
            "founded": 1909,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/147.png"
        },
        "venue": {
            "id": 230,
            "name": "Estádio Major Antônio Couto Pereira",
            "address": "Rua Ubaldino do Amaral 37, Bairro Alto da Glória",
            "city": "Curitiba, Paraná",
            "capacity": 45563,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/230.png"
        }
    },
    {
        "team": {
            "id": 148,
            "name": "Londrina",
            "code": "LON",
            "country": "Brazil",
            "founded": 1956,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/148.png"
        },
        "venue": {
            "id": 249,
            "name": "Estádio Municipal Jacy Scaff",
            "address": "Avenida Henrique Mansano",
            "city": "Londrina, Paraná",
            "capacity": 31019,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/249.png"
        }
    },
    {
        "team": {
            "id": 150,
            "name": "CSA",
            "code": "CSA",
            "country": "Brazil",
            "founded": 1913,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/150.png"
        },
        "venue": {
            "id": 232,
            "name": "Estádio Rei Pelé",
            "address": "Avenida Siqueira Campos, Bairro Trapiche da Barra",
            "city": "Maceió, Alagoas",
            "capacity": 20801,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/232.png"
        }
    },
    {
        "team": {
            "id": 151,
            "name": "Goias",
            "code": "GOI",
            "country": "Brazil",
            "founded": 1943,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/151.png"
        },
        "venue": {
            "id": 240,
            "name": "Estádio de Hailé Pinheiro",
            "address": "Avenida Edmundo Pinheiro de Abreu 721, Setor Bela Vista",
            "city": "Goiânia, Goiás",
            "capacity": 14525,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/240.png"
        }
    },
    {
        "team": {
            "id": 155,
            "name": "Sampaio Correa",
            "code": "SAM",
            "country": "Brazil",
            "founded": 1923,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/155.png"
        },
        "venue": {
            "id": 265,
            "name": "Estádio Governador João Castelo",
            "address": "Complexo Esportivo Castelão, Travessa Guaxenduba",
            "city": "São Luís, Maranhão",
            "capacity": 75263,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/265.png"
        }
    },
    {
        "team": {
            "id": 755,
            "name": "Nautico Recife",
            "code": "NAU",
            "country": "Brazil",
            "founded": 1901,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/755.png"
        },
        "venue": {
            "id": 12670,
            "name": "Estádio Eládio de Barros Carvalho",
            "address": "Avenida Conselheiro Rosa e Silva 1085, Bairro dos Afiltos",
            "city": "Recife, Pernambuco",
            "capacity": 22856,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12670.png"
        }
    },
    {
        "team": {
            "id": 1198,
            "name": "remo",
            "code": "REM",
            "country": "Brazil",
            "founded": 1905,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1198.png"
        },
        "venue": {
            "id": 262,
            "name": "Estádio Estadual Jornalista Edgar Augusto Proença",
            "address": "Rodovia Augusto Montenegro 3101, Mangueirão",
            "city": "Belém, Pará",
            "capacity": 45007,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/262.png"
        }
    },
    {
        "team": {
            "id": 1211,
            "name": "Brusque",
            "code": "BRU",
            "country": "Brazil",
            "founded": 1987,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1211.png"
        },
        "venue": {
            "id": 223,
            "name": "Estádio Augusto Bauer",
            "address": "Avenida Lauro Muller 13",
            "city": "Brusque, Santa Catarina",
            "capacity": 5603,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/223.png"
        }
    },
    {
        "team": {
            "id": 1223,
            "name": "Operario-PR",
            "code": null,
            "country": "Brazil",
            "founded": 1912,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1223.png"
        },
        "venue": {
            "id": 256,
            "name": "Estádio Germano Krüger",
            "address": "Rua Padre Nóbrega 265, Bairro Vila Oficinas",
            "city": "Ponta Grossa, Paraná",
            "capacity": 8679,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/256.png"
        }
    },
    {
        "team": {
            "id": 7772,
            "name": "Confiança",
            "code": "CON",
            "country": "Brazil",
            "founded": 1936,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/7772.png"
        },
        "venue": {
            "id": 273,
            "name": "Estádio Estadual Lourival Baptista",
            "address": "Rua Cedro, Bairro Treze de Julho",
            "city": "Aracaju, Sergipe",
            "capacity": 15575,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/273.png"
        }
    }
]

export default teams