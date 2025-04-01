class Counters {

    constructor(counterID, counterNumEnd) {
        this.counterID = counterID;
        this.counterNumEnd = counterNumEnd;
        this.counterLoad();
    }

    counterLoad() {
        this.upto = 0;
        this.counts = setInterval(() => {
            this.count = document.getElementById(this.counterID);
            this.count.innerHTML = ++this.upto;
            if (this.upto === this.counterNumEnd) {
                clearInterval(this.counts);
            }
        });
    }
}