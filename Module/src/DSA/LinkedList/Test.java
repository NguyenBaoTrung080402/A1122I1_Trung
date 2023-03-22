package Exercise.DSA.LinkedList;

public class Test {
    public static void main(String[] args) {
        // Khởi tạo danh sách liên kết mới và thêm một số phần tử vào danh sách
        MyLinkedList<String> list = new MyLinkedList<>("A");
        list.addLast("B");
        list.addLast("C");
        list.addLast("D");
        list.addLast("E");

        // In ra danh sách ban đầu

        System.out.println("Danh sach ban dau:");
        list.printList();


        // Thêm một phần tử ở vị trí đầu tiên và in ra danh sách sau khi thêm
        list.addFirst("Z");
        System.out.println("\nDanh sach sau khi them mot phan tu o vi tri dau tien:");
        list.printList();


        // Xoá phần tử ở vị trí thứ 3 và in ra danh sách sau khi xoá
        list.remove(2);
        System.out.println("\nDanh sach sau khi xoa mot phan tu o vi tri thu 3:");
        list.printList();
//        for (int i = 0; i < list.size(); i++) {
//            System.out.print(list.get(i) + " ");
//        }

        // Kiểm tra sự tồn tại của phần tử "C" trong danh sách và in ra kết quả
        System.out.println("\nCo ton tai phan tu C trong danh sach khong? " + list.contains("C"));

        // Lấy phần tử đầu tiên và cuối cùng của danh sách và in ra kết quả
        System.out.println("Phan tu dau tien cua danh sach: " + list.getFirst());
        System.out.println("Phan tu cuoi cung cua danh sach: " + list.getLast());

        // Xoá toàn bộ nội dung của danh sách và in ra kích thước của danh sách sau khi xoá
        list.clean();
        System.out.println("Kich thuoc danh sach sau khi xoa toan bo noi dung: " + list.size());
    }

}
