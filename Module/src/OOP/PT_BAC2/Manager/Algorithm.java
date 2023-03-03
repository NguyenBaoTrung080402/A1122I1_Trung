package Exercise.OOP.PT_BAC2.Manager;

import Exercise.OOP.PT_BAC2.entity.QuadraticEquation;
import Exercise.OOP.Validatetion;

public class Algorithm {
    int a , b, c;
    public void Nhap(){
        System.out.print("Nhập giá trị của a: ");
        a = Validatetion.checkInputInt();
        System.out.print("Nhập giá trị của b: ");
        b = Validatetion.checkInputInt();
        System.out.print("Nhập giá trị của c: ");
        c = Validatetion.checkInputInt();
        QuadraticEquation Q = new QuadraticEquation(a, b, c);
        System.out.println(Q.toString());
    }

    public String Solve(){
        if(a == 0){
            double value = -c/b;
            System.out.println("PT có 1 nghiệm phân biệt: " + value);
        }else if (a != 0){
            double delta = Math.pow(b, 2) - 4 * a * c;
            if(delta < 0){
                System.out.println("Phương trình vô nghiệm");
            }else if (delta == 0){
                double x1 = -b/2*a;
                System.out.println("Phương trình có nghiệm kép x1 = x2: "+x1);
            }else{
                double x1, x2;
                x1 = -b + Math.sqrt(delta)/ (2*a);
                x2 = -b - Math.sqrt(delta)/ (2*a);
                System.out.println("Phương trình có 2 nghiệm x1 = "+x1 + "và x2 = "+x2);
            }
        }
        return  "";
    }
}
