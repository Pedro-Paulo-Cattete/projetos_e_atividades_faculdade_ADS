-- Cria a tabela 'aluno' com os campos necessários
create table aluno (
    id number primary key,             -- Identificador único do aluno
    nome varchar2(100) not null,       -- Nome do aluno
    data_matricula date default sysdate, -- Data de matrícula com valor padrão como a data atual
    cod_turma number                   -- Código da turma do aluno
);