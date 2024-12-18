//salvar como ProgramaDivEPot.java
import javax.swing.*;

class ProgramaDivEPot
{
    public static void main (String entrada[])
    {
        //declaração de variáveis
        int n1, n2, div;
        double pot;
        String msg = "";
        //entrada de dados
        n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro"));
        n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite outro número inteiro"));
        //processamento
        div = n1 / n2;
        pot = Math.pow(n1,n2);

        //saída de resultados
        msg = msg + "quociente da divisão de " + n1 + " por " + n2 + "=" + div + "\n";
        msg = msg + "potência de " + n1 + " elevado a " + n2 + "=" + pot + "\n";
        JOptionPane.showMessageDialog(null, msg);

        System.exit(0);
    }
}