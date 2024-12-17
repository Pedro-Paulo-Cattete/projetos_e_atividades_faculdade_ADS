//nome do programa
//salvar como MeuPrimeiroExercicioJava.java

//nome da classe
class MeuPrimeiroExercicioJava
{
    //módulo principal com a entrada pela linha de comando
    public static void main (String entrada[])
    {
        //declação de variáveis
        int idade = 36;
        char genero = 'M';
        double peso = 99.5;
        String nome = "Pedro Paulo";
        String curso = "Análise e Desenvolvimento de Sistemas";

        System.out.println("Eu sou o " + nome + " tenho " + idade + " anos, gênero " + genero + " e tenho " + peso + " kg de peso e curso " + curso);
        
        System.exit(0);
    }
}