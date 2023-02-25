package Exercise.Array_and_Method;

import java.util.Scanner;

public class Add_Element_To_Array {

    private static final Scanner sc = new Scanner(System.in);

    public static void EnterArray(int a[]) {
        System.out.println("Enter " + a.length + " elements: ");
        for (int i = 0; i < a.length; i++) {
            System.out.printf("a[%d] = ", i);
            a[i] = Validatetion.checkInputInt();
        }
    }

    public static void displayArray(int a[]) {
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println("");
    }

    public static void addElement(int a[], int index, int values) {
        if(index < 0 || index >= a.length){
            System.err.println("Invalid index");
            return;
        }

        for (int i = a.length - 1; i > index; i--) {
            a[i] = a[i - 1];
        }
        a[index] = values;
    }

    public static void main(String[] args) {
        int[] a;
        int n;

        System.out.println("---//-----//----//----//----");
        System.out.print("Enter size of arrays: ");
        n = Validatetion.checkInputInt();
        a = new int[n];
        EnterArray(a);
        displayArray(a);


        System.out.println("---//-----//----//----//----");
        System.out.print("Enter the values to be inserted: ");
        int values = Validatetion.checkInputInt();
        System.out.print("Enter the index to insert: ");
        int index = Validatetion.checkInputInt();

        addElement(a, index, values);
        displayArray(a);
    }
}
