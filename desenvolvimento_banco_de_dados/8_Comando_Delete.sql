-- Remove registros da tabela com base em uma condição
-- Remove o aluno cujo id é igual a 2 da tabela 'aluno'
delete from aluno
where id=2;

-- Seleciona todos os registros e colunas da tabela
-- Exibe os alunos restantes após a exclusão
select * from aluno;