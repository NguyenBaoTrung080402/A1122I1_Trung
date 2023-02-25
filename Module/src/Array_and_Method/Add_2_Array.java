package Exercise.Array_and_Method;

import java.util.Arrays;
import java.util.Scanner;

public class Add_2_Array {
    private static final Scanner sc = new Scanner(System.in);

    public static int[] mergeArrays(int[] a, int[] b) {
        int[] result = new int[a.length + b.length];
        int index = 0;
        for (int i = 0; i < a.length; i++) {
            result[index] = a[i];
            index++;
        }
        for (int i = 0; i < b.length; i++) {
            result[index] = b[i];
            index++;
        }
        return result;
    }
    public static void main(String[] args) {
        int[] a = {1, 2, 3};
        int[] b = {4, 5, 6};
        int[] result = mergeArrays(a, b);
        System.out.println(Arrays.toString(result));

    }
}