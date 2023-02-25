package Exercise.Array_and_Method;

import java.util.Scanner;

public class FInd_Max_in_Array {
    private static final Scanner sc = new Scanner(System.in);

    public static void EnterArray(int []arr){
        System.out.println("Enter "+arr.length+" element");
        for (int i = 0; i < arr.length; i++) {
            System.out.printf("arr[%d]: ",i);
            arr[i] = Validatetion.checkInputInt();
        }
    }
    public static void displayElement(int[] arr){
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
    public static void findMax(int arr[]){
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if(max < arr[i]){
                max = arr[i];
            }
        }
        System.out.println("Max values is: " + max);
    }

    public static void main(String[] args) {
        int[] arr;

        System.out.println("--//--//--//--//--//--//--//");
        System.out.print("Enter size of array: ");
        int n = Validatetion.checkInputInt();
        arr = new int[n];
        EnterArray(arr);
        displayElement(arr);
        findMax(arr);

    }
}
