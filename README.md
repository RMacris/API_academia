
# API Acesso DB Academia Usando SQLITE

Esta é uma API Construída com fins educativos em conjunto a comunidade Resilia.

A Api foi contruida com a intenção da utilização do banco de dados SQLITE para 
armazenamento e gerenciamentos de dados relacionados a uma Academia.

Esta API ainda se encontra em estagio inicial e possuí apenas uma entidade.




## Instalação

Para iniciar utilizando a API basta começar clonando o repositorio.
```bash
git clone https://github.com/RMacris/API_academia.git
```
Após a finalização inicie o instalação dos pacotes necessarios por meio do comando:
```bash
npm install
```

Uma vez que os pacotes estiverem instalados, você pode inciar a aplicação com o comando:
```bash
 npm run dev
```
Ou caso queira rodar testes na API antes de utiliza-la você pode rodar o comando:    

```bash
num test
```

Este Comando porem vem com cavieat, para que não ocorram erros, é necessario que seja testado
utilizando-se de um banco de dados vazio, ou inexistente.
Para garantir que tudo ocorra bem , pode começar excluindo o banco de dados.
O comando irá criar o banco de dados m realizar todas as operações CRUD relacionadas
Bem como a validação dos compos da classe `AcademiaModel`.



## Uso

A forma recomendada de teste da API é por meio da utilização das ferramentas de requisição de API [Insomnia](https://insomnia.rest/) ou
por meio do [Postman](https://www.postman.com/downloads/)

## Avaliação

**GET** - `/avaliacao/:id` 

Nesta, rota basta apenas passar o `id` que quer acessar como parametro de rota.
Esta Rota retorna o objeto com o `id` especificado, ou vazio, caso ele não exista.

**GET** - `/avaliacao/user/:id` 

Esta rota recebe o `id` do usuario e retorna todas as avaliações desse usuario.

**GET** - `/avaliacao/last/:id` 

esta rota recebe como parametro o `id` do usuario e retorna sua ultima avaliação realizada.

**POST** - `/avaliacao` 

Esta rota recebe o seguinte objeto JSON para a inserção de dados.
Campos de medidas faltantes ou nulos ou que não sejam validos, serão preenchidos com `0` ou
delimitados entre um alance entre `0` a `999.99`.


Esta Rota Retorna o objeto inserido.
```json
	{
        "id"             : 1,
        "altura"         : 183.32, 
        "peso"           : 999.32 , 
        "massaMuscular"  : 24.04 ,
        "taxaGordura"    : 18.06 ,
        "tricipalE"      : 9.30  ,
        "tricipalD"      : 9.50  ,
        "peitoral"       : 10.23 ,
        "cintura"        : 32.85 ,
        "quadril"        : 50.65 ,
        "bracoE"       	 : 60.65 ,
        "bracoD"       	 : 70.62 ,
        "pernaE"         : 67.02 ,
        "pernaD"         : 84.34 ,
        "panturrilhaE"   : 63.43 ,
        "panturrilhaD"   : 43.00 ,
        "abdomem"        : 23.00 ,
        "gluteo"       	 : 50.00,
        "user_id"        : null,
        "createdAt"      : "2022-04-21T13:41:05-03:00",
        "updatedAt"      : "2022-04-21T13:46:57-03:00"
	} 
``` 

**PUT** - `/avaliacao/:id`

Para realizar uma atualização em algum dado do banco de dados, basta enviar um objeto JSON
contendo os campos a serem atualizados.
Voce deve informar o `id` a ser atualizado como parametro de rota. 
Esta Rota retorna o objeto atualizado.

Exemplo 1:
```json
    {
        "altura"         : 0.32, 
        "peso"           : 1.32 , 
        "massaMuscular"  : 2.04 ,
        "taxaGordura"    : 3.06
    }
```

Exemplo 2:
```json
    {
        "id"             : 2,
        "altura"         : 999.99 
    }
```
Este rota permite a passagem dinamica de chaves no objeto JSON para atualização.

**DELETE** - `/avaliacao/:id`

O Rota Delete Recebe apenas o id como parametro de rota, e retorna uma lista vaiza

## Usuario


**GET** `/signin`

Esta Rota recebe um objeto JSON que contenha email e senha do Usuario

```json
    {
        email:  "test@test.com",
        senha:  "123456"
    }
```
**GET** `/user/:id`

Esta rota recebe um `id` como parametro de rota e rotorna o objeto do usuario.


**POST** `/signup`

Esta rota registra um novo usuario, o email do usuario registrado não banco de dados.
A rota recebe `nome`, `email` e `senha`

```json
    {
        nome :  "test",
        email:  "test@test.com",
        senha:  "123456"
    }
```



## Autores

- [RMacris](https://github.com/RMacris/API_academia)


## Agradecimentos

    Agradecimentos a comunidade Resilia pela orientação e contribuição no processo de 
    aprendizagem de desolvimento, desta API.