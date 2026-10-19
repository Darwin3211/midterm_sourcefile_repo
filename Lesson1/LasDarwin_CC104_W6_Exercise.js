'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

class Stack {
    constructor() {
        this.ticket = [];
    }

    push(element) {
        return this.ticket.push(element);
    }

    pop() {
        return `Undo Action ${this.ticket.pop()}`;
    }

    peek() {
        return `Top Action: ${this.ticket[this.ticket.length - 1]}`;
    }

    isEmpty() {
        return this.ticket.length === 0;
    }
    size() {
        return `Remaining Actions: ${this.ticket.length} `;
    }

    toString() {
        return `Remaining Actions: ${this.ticket.toString()}`;
    }
}

console.log('\nPART A: UNDO HISTORY');

const action = new Stack();
action.push("Opened Ticket #101");
action.push("Assigned Ticket #101");
action.push("Closed Ticket #101");
console.log(action.peek());
console.log(action.pop());
console.log(action.toString());
console.log(`Stack Size: ${action.size()}`);

class Queue {
    constructor() {
        this.order = [];
    }

    enqueue(element) {
        return this.order.push(element);
    }

    dequeue() {
        return `Processed: ${this.order.shift()}`;
    }

    front() {
        return `Next Request: ${this.order[0]}`;
    }

    isEmpty() {
        return this.order.length === 0;
    }

    size() {
        return `Queue Size: ${this.order.length}`;
    }

    toString() {
        return `Remaining Requests: ${this.order.toString()} `;
    }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();
waitingRequests.enqueue("Ticket #201 - Password Reset");
waitingRequests.enqueue("Ticket #202 - No Internet");
waitingRequests.enqueue("Ticket #203 - Printer Problem");
waitingRequests.enqueue("Ticket #204 - Software Installation");

console.log(waitingRequests.front());
console.log(waitingRequests.dequeue());
console.log(waitingRequests.dequeue());
console.log(waitingRequests.toString());
console.log(waitingRequests.size());



class PriorityQueue {
    constructor() {
        this.requests = [];
    }

    enqueue(ticket, request, priority) {
        let newItem = { ticket, request, priority }
        let added = false;

        for (let i = 0; i < this.requests.length; i++) {
            if (newItem.priority < this.requests[i].priority) {
                this.requests.splice(i, 0, newItem);
                added = true;
                break;
            }


        }
        if (!added) {
            this.requests.push(newItem);
        }
    }

    dequeue() {
        return this.requests.shift()
    }

    size() {
        return this.requests.length;
    }

    print() {

        let output = "";
        for (let i = 0; i < this.requests.length; i++) {
            let item = this.requests[i];
            output += `Ticket #${item.ticket} - ${item.request}, Priority ${item.priority}\n`;
        }
        return output;
    }

}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();
urgentRequests.enqueue("Ticket #301", "Install Browser", 3);
urgentRequests.enqueue("Ticket #302", "Server Offline", 1);
urgentRequests.enqueue("Ticket #303", "Faculty PC Failure", 2);
urgentRequests.enqueue("Ticket #304", "Internet Laboratory Down", 1);
console.log("Initial Priority Order:");
console.log(urgentRequests.print());

const processed = urgentRequests.dequeue();
console.log("Processed Priority Request:");
console.log(`Ticket #${processed.ticket} - ${processed.request}, Priority ${processed.priority}\n`);

console.log("Remaining Priority Requests:");
console.log(urgentRequests.print());

console.log("Sorry sir sinubukan ko po talaga pero i can't do PART D. I'm currently trying my best po to understand and practice to understand it po.");