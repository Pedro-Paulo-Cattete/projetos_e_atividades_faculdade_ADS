-- Atualiza dados de um ou mais registros existentes na tabela
-- Altera o valor do cod_turma para 13 onde o id do aluno é 1
update aluno
set cod_turma=13
where id=1;

-- Seleciona todos os registros e colunas da tabela
-- Exibe os dados atualizados de todos os alunos
select * from aluno;