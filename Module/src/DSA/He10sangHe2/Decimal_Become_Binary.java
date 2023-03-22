package Exercise.DSA.He10sangHe2;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;
import java.util.Stack;

public class Decimal_Become_Binary {
    Queue queue = new LinkedList();
    final static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        System.out.println("Nhập giá trị cần biến đổi: ");
        int decimal = sc.nextInt();
        Stack<Integer> stack = new Stack<>();

        while (decimal > 0){
           stack.push(decimal%2);
           decimal/= 2;

        }
        while (!stack.isEmpty()){
            System.out.print(stack.pop()+ " ");
        }
    }
}
