package Exercise.Loop;

import Exercise.Introduction_to_Java.Validatetion;

import java.util.Scanner;

public class Show_geometric_types {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice = 0;
        do {
            System.out.println("--------------Menu--------------");
            System.out.println("1. Print the rectangle");
            System.out.println("2. Print the square triangle (The corner is square at 4 different angles: top-left, top-right, botton-left, botton-right)");
            System.out.println("3. Print isosceles triangle");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            choice = Validatetion.checkInputIntLimmit(1, 4);
            switch (choice) {
                case 1:

                    System.out.println("Enter width of rectangle");
                    int width = Validatetion.checkInputInt();
                    System.out.println("Enter length of rectangle");
                    int length = Validatetion.checkInputInt();
                    for (int i = 0; i < width; i++) {
                        for (int j = 0; j < length; j++) {
                            System.out.print("* ");
                        }
                        System.out.println("*");
                    }
                    break;


                case 2:
                    System.out.print("Enter h of triangle: ");
                    int h = Validatetion.checkInputInt();
                    for (int i = 1; i <= h; i++) {
                        for (int j = 1; j <= i; j++) {

                            System.out.print("* ");
                        }
                        System.out.println();
                    }
                    System.out.println("-------------------------");
                    for (int i = h; i >= 1; i--) {
                        for (int j = 1; j <= i; j++) {
                            System.out.print("* ");
                        }
                        System.out.println();
                    }
                    break;
                case 3:
                    System.out.print("Nhập chiều cao của tam giác: ");
                    int n = Exercise.Loop.Validatetion.checkInputInt();

                    for (int i = 1; i <= n; i++) {

                        for (int j = 1; j <= n - i; j++) {
                            System.out.print(" ");
                        }

                        for (int j = 1; j <= 2 * i - 1; j++) {
                            System.out.print("*");
                        }
                        System.out.println();
                    }
                    break;
                case 4:
                    System.out.print("Exit program !!");
                    break;
            }
        }while(choice < 4);
    }
}
