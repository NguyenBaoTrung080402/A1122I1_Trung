package Exercise.OOP.StopWatch.entity;

public class StopWatch {

    private long startTime;
    private long stopTime;


    public StopWatch() {
        startTime = System.currentTimeMillis();
        stopTime = startTime;
    }
    public StopWatch(long startTime, long stopTime) {
        this.startTime = startTime;
        this.stopTime = stopTime;
    }

    public long getStartTime() {
        return startTime;
    }

    public void setStartTime(long startTime) {
        this.startTime = startTime;
    }

    public long getStopTime() {
        return stopTime;
    }

    public void setStopTime(long stopTime) {
        this.stopTime = stopTime;
    }
    public void start(){
        startTime = System.currentTimeMillis();

    }
    public void stop(){
        stopTime = System.currentTimeMillis();
    }
    public long getElapsedTime() {
        return (stopTime - startTime);
    }
}
