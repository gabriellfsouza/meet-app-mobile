# MeetApp

![](https://img.shields.io/github/issues/gabriellfsouza/meet-app-mobile.svg) ![](https://img.shields.io/github/forks/gabriellfsouza/meet-app-mobile.svg) ![](https://img.shields.io/github/stars/gabriellfsouza/meet-app-mobile.svg) ![]()

### Introdução

Esta aplicação faz parte do deafio para o bootcamp da RocketSeact (fullstack javascript developer com ReactJS, React Native e NodeJS).
A ideia deste projeto é o desenvolvimento de uma aplicação para agendamento e
gerencimaento de Meetups.

A parte mobile deste projeto não foi testado para IOS, somente apara Android.`

## Pré requisitos

Para a execução deste projeto, é necessário ter o Docker instalado e para a parte do projeto Mobile deve-se configurar o ambiente conforme link abaixo:
https://docs.rocketseat.dev/ambiente-react-native/introducao
É possível também executar o projeto sem o docker, basta apontar o arquivo de configuração para o Redis e Postgres externo.

### Instancia dos conteineres

```
docker run --name mongo -p 27017:27017 -d -t mongo
docker run --name redis -p 6379:6379 -d -t redis:alpine
```

## Instalação

Baixe os 3 projetos (Back, Front e Mobile) e instale conforme abaixo:

### Back

```
git clone https://github.com/gabriellfsouza/meet-app-back
cd meet-app-back
yarn

```

### Front

```
git clone https://github.com/gabriellfsouza/meet-app-font
cd meet-app-font
yarn
```

### Mobile

```
git clone https://github.com/gabriellfsouza/meet-app-mobile
cd meet-app-mobile
yarn
```

### Arquivo .env

Todos os projetos possuem um arquivo ".env.example", que devem ser renomeados e utilizados como arquivo de configuração para as variáveis de ambiente, como conexão com a base, caminho da chamada http, etc.

### Execução

Tanto para a parte web quanto para a front, basta executar o comando abaixo:

```
yarn start
```

Para a versão Mobile, será necessário executar o comando abaixo:

```
react-native run-android
```

dica: para executar localmente (mobile), basta executar o comando abaixo

```
adb reverse tcp:3333 tcp:3333
```

Qualquer dúvida, pode entrar em contato comigo no e-mail gabriellfsouza@gmail.com
