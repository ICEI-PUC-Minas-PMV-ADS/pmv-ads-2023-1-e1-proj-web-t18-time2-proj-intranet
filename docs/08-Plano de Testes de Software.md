# Plano de Testes de Software

Os requisitos para realização dos testes de software são: 

Site publicado na Internet 

Navegador da Internet - Chrome, Firefox ou Edge 

Conectividade de Internet para acesso às plataformas (APISs) 

 

Os testes funcionais a serem realizados no aplicativo são descritos a seguir. 

 

Caso de Teste 

CT-01 - Visualizar home-page 

Requisitos Associados 

RF-01 - O site deve apresentar na página principal no formato de "feed" com as notícias postadas 

RF-03 - O site precisará ter um calendário para gestão de eventos da empresa 

RF-05 - O site deve permitir a criação de um lembrete do dia que aparecerá na tela do usuário 

RF-07 - O site deve permitir a setorização de informações 

RF-08 - O site precisará ter um local para que possam ser inclusos informações de ausência na empresa 

Objetivo do Teste 

Verificar se a carga de notícias está acontecendo corretamente 

Passos 

1) Acessar o Navegador 

2) Informar o endereço do Site 

3) Acessar com login 

4) Visualizar página inicial 

Critérios de Êxito 

Deve haver uma requisição AJAX no painel NETWORK das ferramentas do Desenvolvedor (recurso do Navegador). 

As notícias devem ser exibidas corretamente no site, sendo necessárias pelo menos 3 notícias sendo apresentadas 

O calendário deverá estar operacional 

Deverão aparecer os lembretes na tela  

Deverá contar as informações setorizadas com diferentes acessos 

 

 

Caso de Teste 

CT-02 – Acesso a funcionalidades 

Requisitos Associados 

RF-02 - O site deve permitir a personalização de cores e logo 

Objetivo do Teste 

Verificar se existe a possibilidade de personalização do site 

Passos 

1) Acessar o Navegador 

2) Informar o endereço do Site 

3) Acessar com login 

4) Visualizar página inicial 

5) Acessar a aba “Configurações 

 

Critérios de Êxito 

Deverá ser possível realizar a personalização da Logo. 

