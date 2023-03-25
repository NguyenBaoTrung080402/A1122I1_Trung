package Exercise.DSA.dsaQueue;

import java.util.NoSuchElementException;

public class Test {
    public static void main(String[] args) {
        myQueue queue = new myQueue();

        // Thêm các phần tử vào hàng đợi
        queue.enQueue("Alice");
        queue.enQueue("Bob");
        queue.enQueue("Charlie");

        // Lấy phần tử đầu tiên ra khỏi hàng đợi và in ra giá trị của nó
        System.out.println("Phần tử đầu tiên là: " + queue.deQueue());

        // Thêm một phần tử mới vào hàng đợi
        queue.enQueue("David");

        // In ra số lượng phần tử trong hàng đợi
        System.out.println("Số lượng phần tử trong hàng đợi: " + queue.size());

        // Lấy tất cả các phần tử ra khỏi hàng đợi và in ra giá trị của chúng
        while (!queue.isEmpty()) {
            System.out.println(queue.deQueue());
        }

        // Khi hàng đợi rỗng, gọi phương thức dequeue sẽ ném ra ngoại lệ NoSuchElementException
        try {
            System.out.println(queue.deQueue());
        } catch (NoSuchElementException e) {
            System.out.println(e.getMessage());
        }
    }
}

