package Exercise.Array_and_Method;

import java.util.Scanner;

public class Find_min_of_Array {
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
    public static void findMin(int arr[]){
        int min = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if(min > arr[i]){
                min = arr[i];
            }
        }
        System.out.println("Mix values is: " + min);
    }

    public static void main(String[] args) {
        int[] arr;

        System.out.println("--//--//--//--//--//--//--//");
        System.out.print("Enter size of array: ");
        int n = Validatetion.checkInputInt();
        arr = new int[n];
        EnterArray(arr);
        displayElement(arr);
        findMin(arr);

    }
}
