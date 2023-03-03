package Exercise.OOP.StopWatch.main;

import Exercise.OOP.StopWatch.entity.StopWatch;

import java.util.Random;

public class main {
    public static void main(String[] args) {
        int[] arr = new int[100000];


        Random rand = new Random();
        for (int i = 0; i < arr.length; i++) {
            arr[i] = rand.nextInt();
        }

        StopWatch stopwatch = new StopWatch();
        selectionSort(arr);
        stopwatch.stop();


        System.out.println("Time elapsed: " + stopwatch.getElapsedTime() + " milliseconds");
    }

    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
}

