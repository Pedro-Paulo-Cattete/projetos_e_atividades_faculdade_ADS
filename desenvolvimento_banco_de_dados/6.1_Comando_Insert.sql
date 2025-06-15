-- Exibe a estrutura da tabela, listando colunas, tipos de dados e restrições
-- Mostra a estrutura da tabela 'aluno'
describe aluno;

-- Insere um novo registro na tabela com os valores especificados
-- Insere um aluno com id 1, nome 'Jose da Silva', data padrão e cod_turma 10
insert into aluno values (1, 'Jose da Silva', default,10);
-- Insere um aluno com id 2, nome 'Joao Antonio', data '10-oct-22' e cod_turma 11
insert into aluno values (2, 'Joao Antonio', '10-oct-22',11);

-- Seleciona todos os registros e colunas da tabela
-- Exibe todos os alunos cadastrados na tabela 'aluno'
select * from aluno;