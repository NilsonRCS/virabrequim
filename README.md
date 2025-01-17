# Virabrequim

Este é um aplicativo simples desenvolvido em React Native com Expo, que permite visualizar marcas de carros e seus respectivos modelos usando dados de uma API.

## Instalação

Para começar, clone este repositório em sua máquina local:

 https: git clone https://github.com/NilsonRCS/virabrequim.git \
 sh: git clone git@github.com:NilsonRCS/virabrequim.git \
 gitHUB CLI: gh repo clone NilsonRCS/virabrequim 

 Após clonar o repositório, navegue até a pasta do projeto e instale as dependências com o npm:

 cd virabrequim
 npm install

 Iniciar o projeto 
 Para iniciar o aplicativo, execute o seguinte comando:
 npx expo start
 Isso abrirá a interface do Expo no seu navegador. A partir daí, você pode escanear o código QR usando o aplicativo Expo Go no seu dispositivo móvel, ou iniciar o projeto em um emulador.

 Sobre o Projeto

 Este é um aplicativo simples que consome uma API para exibir marcas de carros e seus modelos. O fluxo do app é:

   Ao iniciar o aplicativo, o usuário será direcionado à página de login. \
   O usuário deve utilizar as seguintes credenciais para acessar o app: \
       Usuário: teste \
       Senha: 123 
       
   Após o login, o usuário verá uma lista de marcas de carros.
   Ao clicar em uma marca, um modal será exibido com os modelos dessa marca.

  Tecnologias utilizadas: \
    React Native: Framework para construção de aplicativos móveis. \
    Expo: Ferramenta para facilitar o desenvolvimento com React Native. \
    Axios: Biblioteca para facilitar as requisições HTTP. \
    Styled-Components: Biblioteca para estilização dos componentes de forma modular e reutilizável. \
    TypeScript: Superset do JavaScript, que adiciona tipagem estática e outros recursos para melhorar a produtividade e a manutenção do código.
