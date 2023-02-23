package Exercise.Introduction_to_Java;

import java.util.Scanner;

public class DisplayHello {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String hi = Validatetion.checkInputString();
        System.out.println("Your name is: "+hi);
    }
}
