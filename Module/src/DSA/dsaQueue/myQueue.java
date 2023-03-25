package Exercise.DSA.dsaQueue;

import java.util.NoSuchElementException;

public class myQueue {
    private Node front;
    private Node rear;
    private int size;

    public myQueue() {
        front = null;
        rear = null;
        size = 0;
    }
    private class Node{
        private Object data;
        private Node next;

        public Node(Object data) {
            this.data = data;
            this.next = null;
        }
    }
    public void enQueue(Object iteam){
        Node newNode = new Node(iteam);

        if (isEmpty()){
            front = newNode;
            rear = newNode;
            rear.next =front;
        }else{
            rear.next = newNode;
            rear = newNode;
            rear.next =front;
        }
        size++;
    }
    public Object deQueue(){
        if(isEmpty()){
            throw new NoSuchElementException("Queue is not empty");
        }
        Object removeItem = front.data;
        size--;
        if(isEmpty()){
            front = null;
            rear = null;
        }else{
            front = front.next;
            rear.next = front;
        }
        return  removeItem;
    }
    public Object peek(){
        if(isEmpty()){
            throw new NoSuchElementException("Queue is not empty");
        }
        return front.data;
    }
    public boolean isEmpty(){
        return size == 0;
    }
    public int size(){
        return size;
    }
}
