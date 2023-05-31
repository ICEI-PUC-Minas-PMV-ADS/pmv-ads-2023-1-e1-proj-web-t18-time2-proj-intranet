# Programação de Funcionalidades

 

Serão apresentadas as telas produzidas em relação a cada funcionalidade. Estarão disponíveis o endereço URL e as instruções de acesso. 

O site deve apresentar na página principal no formato de "feed" com as notícias postadas   (RF-01) 

A tela inicial “Home-page” apresenta todas as notícias e avisos da empresas armezenadas em uma trstutura de dados em JSON: 

 
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/36fb41ab-743c-4476-a6f9-1cdd0621620f)

Requisitos atendidos 

RF-01 -  

 

Artefatos da funcionalidade 

Home-page.html 

Base.js 

style.css 

Logo.png 

 

Estrutura de Dados 

 

var db = { 

    dados: [ 

        { 

            titulo: 'Inauguração de nova filial', 

            descricao: 'Nova sede da empresa é inaugurada em Caratinga-MG no dia 21/05/2023', 

 
 

        } 

} 

 Instruções de acesso 

Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/  

Realize o login  

A tela de notícias é a primeira funcionalidade exibida pelo aplicativo. 

 

 O site deve permitir a personalização de cores e logo   (RF-02) 

Acessando a aba “configurações” o usuário poderá alterar a Logo a ser exibida, e também o tema em cores. 

 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/95f34622-aaa2-4413-a8f7-3e7ecf7604c8)


Artefatos da funcionalidade 

configurações.html 

Script.js 

style.css 

Logo.png 

 

Instruções de acesso 

Acesse a aba “Configurações 

Selecione o tema desejado e clieque em “Aplicar” 

Selecione a imagem desejada como nova logo em “Escolher imagem”, depois clique em “Alterar imagem” 
 

 

O site deve permitir a personalização de cores e logo   (RF-02) 

Acessando a aba “configurações” o usuário poderá alterar a Logo a ser exibida, e também o tema em cores. 

 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/48a54a10-2e78-451c-b6e6-baf09da325bd)


Artefatos da funcionalidade 

configurações.html 

Script.js 

style.css 

Logo.png 

 

Instruções de acesso 

Acesse a aba “Configurações 

Selecione o tema desejado e clieque em “Aplicar” 

Selecione a imagem desejada como nova logo em “Escolher imagem”, depois clique em “Alterar imagem” 

 

O site precisará ter um calendário para gestão de eventos da empresa     (RF-03) 

Acessando a aba “home-page” ou “Inicio” o usuário terá logo abaixo a aplicação 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/dad60288-f443-4b6b-b551-54ce2807385a)


Artefatos da funcionalidade 

Home-page.html 

Script.js 

style.css 

Logo.png 

 

Instruções de acesso 

Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/  

Realize o login  

Rolar o cursor abaixo 

Estará disponível o calendário 

 
 O site deve oferecer um local para depositório de arquivos (RF-04) 

Acessando a aba “downloads” o usuário terá acesso ao repositório de arquivos 

 
 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/ad0f98e4-2325-4352-b2fa-bc880a97aa38)


Artefatos da funcionalidade 

download.html 

style.css 

Logo.png 

 

Instruções de acesso 

Acesse a aba “Downloads” 

Logo abaixo já estara disponível o repositório de arquivos 

Basta clicar no arquivo desejado para realizar o acesso 

 

O site deve permitir a criação de um lembrete do dia que aparecerá na tela do usuário (RF-05) 

Acessando a aba “inicio” o usuário poderá terám ao lado esquerdo os lembretes: 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/0e827abf-143d-46f5-a09c-298d68580eb6)


Artefatos da funcionalidade 

Home-page.html 

Script.js 

style.css 

Logo.png 

 

Instruções de acesso 

Acesse a aba “início” 

Logo ao lado esquerdo estará disponível os lembretes 

 

O site deverá ter um local para acesso e pesquisa de colaboradores no modelo de uma agenda eletronica (RF-06) 

Acessando a aba “Gestão de pessoas” o usuário poderá realizar consultas, cadastros e alterações 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/3a969548-dceb-4945-bf0d-25aabec79323)


Artefatos da funcionalidade 

Gestao-de-pessoas.html 

Db.js 

contatos.html 

Lista_contatos.html 

Script.js 

style.css 

Logo.png 

 

Instruções de acesso 

Acesse a aba “Gestão de Pessoas” 

Será permitido incluir, alterar e excluir colaboradroes 

Acesse a opção “Pesquisar colaborador” para ser direcionado para a tela de consulta individual 

Acesse a aba “contatos” para ter acesso aos contatos das sedes e endereços da empresa, também acesso as redes sociais 

 

 

O site deve permitir a setorização de informações (RF-07) 

Conforme disponível nos menus, como no setor “Financeiro” todas as informações são exibidas setorizadas e inidividuais: 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/bd5fcdda-9d63-4757-b0b7-7ccd1bf20fb2)


Artefatos da funcionalidade 

Home-page.html 

Financeiro.html 

Script.js 

style.css 

Logo.png 

 

Instruções de acesso 

Acesse a aba “início” 

Acesse as informações setorizadas pelos menus disponíveis 

 

 

O site precisará ter um local para que possam ser inclusos informações de ausência na empresa (RF-08) 

Acessando a aba “início” o usuário poderá acessar a gestão de ausências logo abaixo, descendo o cursor. 

 
 
 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/6a2a0530-34bb-4dc2-b2e1-4bf38dec3910)


Artefatos da funcionalidade 

Home-page.html 

Script.js 

style.css 

Logo.png 

 

Instruções de acesso 

Acesse a aba “início” 

Logo aabaixo estará disponível a aplicação 

 

 

O site deve permitir a criação de um lembrete do dia que aparecerá na tela do usuário (RF-05) 

Acessando a aba “inicio” o usuário poderá terám ao lado esquerdo os lembretes: 
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/38242145-a537-4550-a043-3e0b5b6ad60f)


 

Artefatos da funcionalidade 

Home-page.html 

Script.js 

style.css 

Logo.png 

 

Instruções de acesso 

Acesse a aba “início” 

Logo ao lado esquerdo estará disponível os lembretes 

 

O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); (RN-01) 

O site está publicado utilizando o GitHub pages 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/29e5d4c7-6735-49db-87e6-513d739ce7d7)


 

Artefatos da funcionalidade 

GitHub pages 

 

Instruções de acesso 

Acesse o link: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/  

 

O site deverá ser responsivo permitindo a visualização em um celular de forma adequada (RN-02) 

A aplicação foi desenvolvida para suportar diferentes tipos de dispositivos, e atender responsiva mente a cada particularidade:  

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/e34eac99-de26-454e-84e0-984515d56b74)


 

Artefatos da funcionalidade 

GitHub pages 

Navegador Web – Google Chrome 

 

Instruções de acesso 

Acesse o link: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/  

 

 

 

O site deve ter bom nível de contraste entre os elementos da tela em conformidade (RN-03) 

A aplicação foi desenvolvida com as melhores praticas de aplicação de cores para melhorar a visualização do usuário	 
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/4f1e73ca-e8ad-4d30-8892-8f0874bda4cb)


 

Artefatos da funcionalidade 

GitHub pages 

Navegador Web – Google Chrome 

 

Instruções de acesso 

Acesse o link: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/  

 

O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  (RN-04) 

A aplicação foi desenvolvida com as melhores praticas de aplicação de cores para melhorar a visualização do usuário	 

 
 
 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/128554958/1c1a8f84-e853-4ec6-8fd7-54fdc819eb8a)

 
 
 
