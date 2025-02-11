class SmallestInfiniteSet {
    PriorityQueue<Integer> heap;
    int count;
    public SmallestInfiniteSet() {
        heap = new PriorityQueue<>();
        count = 1;
    }
    
    public int popSmallest() {
        if(!heap.isEmpty())
            return heap.poll();
        return count++;
    }
    
    public void addBack(int num) {
        if(count > num && !heap.contains(num))
            heap.add(num);
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet obj = new SmallestInfiniteSet();
 * int param_1 = obj.popSmallest();
 * obj.addBack(num);
 */