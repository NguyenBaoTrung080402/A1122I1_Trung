package Exercise.Loop;

import java.util.Scanner;

public class Prime_100 {
    public static boolean isPrimeNumber(int n){
        if(n<2){
            return false;
        }
        int squareRoot = (int) Math.sqrt(n);
        for (int i = 2; i < squareRoot; i++) {
            if(n %i ==0){
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhập n: ");
        int n = Validatetion.checkInputInt();
        System.out.printf("Tất cả các số nguyên tố nhỏ hơn %d là: \n", n);
        if(n >= 2 ){
            System.out.println(2);
        }
        for (int i = 3; i < n; i+= 2) {
            if(isPrimeNumber(i)){
                System.out.print(" "+i);
            }
        }
    }


}
