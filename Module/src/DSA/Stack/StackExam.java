package Exercise.DSA.Stack;

import java.util.Stack;

public class StackExam {

    public static void EnterArray(int[] a) {
        System.out.println("Enter " + a.length + " elements: ");
        for (int i = 0; i < a.length; i++) {
            System.out.printf("a[%d] = ", i);
            a[i] = Validatetion.checkInputInt();
        }
    }

    public static void displayArray(int[] a) {
        for (int i : a) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        int[] a;
        int n;
        System.out.println("---//-----//----//----//----");
        System.out.print("Enter size of arrays: ");
        n = Validatetion.checkInputInt();
        a = new int[n];
        EnterArray(a);
        System.out.println("Mảng ban đầu....");
        displayArray(a);

        for (int i : a) {
            stack.push(i);
        }
        int[] arrStack = new int[a.length];

        System.out.println("---//-----//----//----//----");
        System.out.println("In ra dãy số nguyên đảo ngược ....");
        for (int i = 0; i < a.length; i++) {
            arrStack[i] = stack.pop();
        }
        displayArray(arrStack);
    }
}
