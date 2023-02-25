package Exercise.Array_and_Method;

import java.util.Scanner;

public class Delete_Element {

    public static void EnterArray(int[] a, int n) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter value of array: ");
        for (int i = 0; i < n; i++) {
            System.out.printf("a[%d] = ", i);
            a[i] = Validatetion.checkInputInt();
        }
    }

    public static void display(int[] a, int n) {
        for (int i = 0; i < n; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
    }

    public static int delete(int[] a, int index, int n) {

        int flag = searchElement(a, index);
        if (flag == -1) {
            System.err.println("Element " + index + " not found!!");
            return n;
        }else {
            for (int i = flag; i < n-1; i++) {
                a[i] = a[i + 1];
            }
            return n - 1;
        }
    }

    public static int searchElement(int[] a, int index) {
        for (int i = 0; i < a.length; i++) {
            if (i == index) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] a;
        int n;

        System.out.println("---//-----//----//----//----");

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n: ");
        n = Validatetion.checkInputInt();
        a = new int[n];
        EnterArray(a, n);
        display(a, n);

        System.out.println("---//-----//----//----//----");
        System.out.print("Enter index need to remove: ");
        int index = Validatetion.checkInputInt();
        n = delete(a, index, n);
        display(a, n);
    }
}
