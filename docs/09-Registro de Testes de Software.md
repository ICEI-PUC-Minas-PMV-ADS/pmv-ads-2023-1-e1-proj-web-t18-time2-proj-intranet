# Registro de Testes de Software


















| Caso de Teste	| Requisito Associado	| Objetivo |	Passos |	Critério de Êxito	|
|---------------|---------------------|----------|---------|--------------------|
|CT01	| RF-01 |	Aplicação deve conter sistema de login |	<li> 1. Abra a aplicação. <li> 2. Tente acessar uma área restrita sem fazer login. <li> 3. Insira credenciais válidas. <li>	4. Verifique se o sistema redireciona o usuário para a área restrita após o login.	|	O sistema deve permitir o acesso apenas a usuários autenticados, redirecionando-os para a área restrita após o login bem-sucedido. |
|CT02	|RF-02|	Aplicação deve possuir portalibilidade assíncrona entre os usúarios cadastrados |	<li>1. Faça login em duas contas de usuário diferentes em duas sessões diferentes.<li>2. Realize ações em uma sessão (por exemplo, adicionar um produto ao carrinho ou fazer uma reserva).<li> 3. Verifique se as ações realizadas em uma sessão são refletidas automaticamente na outra sessão | As ações realizadas por um usuário em uma sessão devem ser atualizadas automaticamente para os outros usuários sem a necessidade de recarregar a página.|			
|CT03|	RF-03|	Aplicação deve permitir gerenciamento de produtos e adição de novos |	<li>1. Faça login<li>	2. Acesse a área de gerenciamento de produtos.<li>3. Tente adicionar um novo produto preenchendo todos os campos obrigatórios.<li>4. Verifique se o produto é adicionado com sucesso e exibido na lista de produtos.| O usuario deve ser capaz de adicionar novos produtos com sucesso e vê-los listados na área de gerenciamento de produtos.|		
|CT04|	RF-04A|	Usúarios devem apenas adquirir produtos caso estejam logados|	<li>1. Tente adquirir um produto sem estar logado.<li>2. Verifique se o sistema impede a aquisição e redireciona o usuário para a página de login.	| Os usuários devem ser impedidos de adquirir produtos sem fazer login e redirecionados para a página de login.|	
|CT05|	RF-05|	Usúarios devem ser capazes de realizar reservas de produtos antecipadamente|	<li>1. Faça login como usuário.	<li>2. Navegue até a página de produtos.		<li>3. Selecione um produto e faça uma reserva antecipada.<li>4. Verifique se a reserva é registrada com sucesso.	|Os usuários devem ser capazes de fazer reservas antecipadas de produtos e verificá-las no sistema.	|	
|CT06|	RF-06	|Usúarios devem ser capazes de buscar e filtrar seus produtos desejados|	<li>1. Faça login como usuário.	<li>2. Navegue até a página de produtos.		<li>3. Utilize a funcionalidade de busca e filtro para encontrar produtos com base em critérios específicos.<li>4. Verifique se os produtos correspondentes são exibidos corretamente.|Os usuários devem ser capazes de buscar e filtrar produtos com sucesso de acordo com os critérios especificados.	|		
|CT07|	RF-07|	Usúarios devem ser capazes de realizar aluguel temporário de produtos|	<li>1. Faça login como usuário.	<li>2. Navegue até a página de produtos.<li>3. Selecione um produto e inicie o processo de aluguel temporário.<li>4. Complete o processo de pagamento.<li>5. Verifique se o produto está disponível para aluguel temporário após a conclusão do processo.	| Os usuários devem ser capazes de alugar temporariamente produtos, e os produtos devem ficar disponíveis para aluguel após o processo de pagamento.	
					





<h2> Caso de teste 01 - Diferentes Senhas <h2>
  <p>Caso as Senhas sejam colocadas de formas desiguais o sistema não aceita e exibe uma mensagem de erro " As senhas Informadas não conferem"  </p>
  

![My project-1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/131614250/d5af12ab-1bdf-4a82-a7b6-09affdaff37c)
  
  <h2> Caso de teste 02 - Criação de Novo Usuário <h2>
  <p> Quando preenchido corretamente o sistema contabiliza e salva seus dados para eventuais logins no site  </p>
  
![My project-1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/131614250/25e11b39-5c77-41c5-899f-c776d9b44fae)

![SUCESSOLOGIN](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/131614250/09dbb389-ea43-4932-aeca-bcbbb15ef0b5)
    
 <h2> Caso de teste 03 - Adicionando Nova Noticia  <h2>
  <p> O Usuário poderá adicionar novas noticias na pagina principal, onde as mesmas seram salvas no servidor e não se perderão  </p>

 ![My project-1 (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/131614250/7d49cce1-b23e-41ea-af82-0884b0a60709)
   
  <h2> Caso de teste 04 - Editando as Noticias  <h2>
  <p> O Usuário poderá editar noticias que já estão adicionadas no site, mudando datas, erros gramaticos, objetivo central entre outros </p>

 ![My project-1 (2)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/131614250/c498fc5b-b15c-445a-8d1b-c0807deeb76d)
 
 <h2> Caso de teste 05 - Gestão de Pessoas  <h2>
 <p> Está opção fornecerá a opção de  adicionar pessoas, excluir da lista pessoas e alterar dados como email , telefone , cidade , login , nome , setor, e estas informações não serão perdidas quando sair do site </p>

 ![My project-1 (3)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/131614250/35b7fd98-229f-4fba-b864-b293f2aca4d2)
   
<h2> Caso de teste 06 - Gestão de Pessoas (Busca)  <h2>
<p> A opção de pesquisar , puxa informações de usuarios que já estão integrados na lista e também te fornece a opção de detalhar ainda mais sua pesquisa com a escolha da cidade, categoria ou login </p>

![806630c5-3618-4dbb-a7a5-02c0c5be4f50](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/131614250/768c9282-ce62-464b-8cf3-f6570b9c8245)
  
<h2> Caso de teste 07 - Função de Alterar Logo <h2>
<p> A opção de permite que o usuário mude de acordo com o seu gosto a logo , presente nas abas de configurações </p>


![My project-1 (4)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t18-time2-proj-intranet/assets/131614250/2d811a3c-e6a6-42b8-8041-82630753e25e)

  

 



